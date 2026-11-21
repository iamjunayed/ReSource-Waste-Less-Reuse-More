(function () {
  "use strict";

  const STORAGE_KEY = "resourceSupplierListingStatuses_v1";
  const statusClass = {
    "Draft": "draft",
    "Pending Review": "review",
    "Active": "active",
    "Paused": "paused",
    "Reserved": "reserved",
    "Unavailable": "unavailable",
    "Completed": "completed"
  };
  const displayStatus = { "Pending Review": "Pending" };
  const baseCounts = {
    "Active": 8,
    "Pending Review": 2,
    "Paused": 1,
    "Completed": 1,
    "Draft": 0,
    "Reserved": 0,
    "Unavailable": 0
  };

  const cards = Array.from(document.querySelectorAll(".sup-listing-card[data-listing-key]"));
  const dialog = document.getElementById("listing-status-dialog");
  const form = document.getElementById("listing-status-form");
  const select = document.getElementById("listing-status-select");
  const title = document.getElementById("listing-status-title");
  const description = document.getElementById("listing-status-description");
  const feedback = document.getElementById("listing-status-feedback");
  let activeCard = null;

  if (!dialog || !form || !select || !cards.length) return;

  function readSavedStatuses() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return saved && typeof saved === "object" ? saved : {};
    } catch (error) {
      return {};
    }
  }

  function writeSavedStatuses(statuses) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(statuses));
      return true;
    } catch (error) {
      feedback.textContent = "This browser could not save the status. It will only update until you leave this page.";
      return false;
    }
  }

  const savedStatuses = readSavedStatuses();

  function cardStatus(card) {
    const key = card.dataset.listingKey;
    const saved = savedStatuses[key];
    return statusClass[saved] ? saved : (card.dataset.defaultStatus || "Active");
  }

  function renderCardStatus(card, status) {
    const badge = card.querySelector(".sup-status");
    if (!badge) return;
    badge.className = "sup-status " + (statusClass[status] || "active");
    badge.textContent = displayStatus[status] || status;
    card.dataset.currentStatus = status;
  }

  function updateCounts() {
    const counts = Object.assign({}, baseCounts);
    cards.forEach(function (card) {
      const original = card.dataset.defaultStatus || "Active";
      const current = cardStatus(card);
      if (original !== current) {
        counts[original] = Math.max(0, (counts[original] || 0) - 1);
        counts[current] = (counts[current] || 0) + 1;
      }
    });

    document.querySelectorAll(".sup-summary-box").forEach(function (box) {
      const label = (box.querySelector("span")?.textContent || "").trim().toLowerCase();
      const value = box.querySelector("strong");
      if (!value) return;
      if (label.includes("active")) value.textContent = counts.Active;
      else if (label.includes("pending")) value.textContent = counts["Pending Review"];
      else if (label.includes("paused")) value.textContent = counts.Paused;
      else if (label.includes("completed")) value.textContent = counts.Completed;
    });

    document.querySelectorAll(".sup-toolbar .sup-pill").forEach(function (pill) {
      const label = pill.textContent.trim().toLowerCase();
      if (label.startsWith("active")) pill.textContent = "Active (" + counts.Active + ")";
      else if (label.startsWith("pending")) pill.textContent = "Pending (" + counts["Pending Review"] + ")";
      else if (label.startsWith("paused")) pill.textContent = "Paused (" + counts.Paused + ")";
      else if (label.startsWith("completed")) pill.textContent = "Completed (" + counts.Completed + ")";
    });
  }

  cards.forEach(function (card) {
    renderCardStatus(card, cardStatus(card));
  });
  updateCounts();

  document.querySelectorAll("[data-manage-status]").forEach(function (button) {
    button.addEventListener("click", function () {
      const key = button.dataset.manageStatus;
      activeCard = cards.find(function (card) { return card.dataset.listingKey === key; });
      if (!activeCard) return;
      const name = activeCard.querySelector("h3")?.textContent.trim() || "this listing";
      title.textContent = "Manage listing status";
      description.textContent = "Update the availability of " + name + ". Your change is saved in this browser.";
      select.value = cardStatus(activeCard);
      feedback.textContent = "";
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "open");
    });
  });

  function closeDialog() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    activeCard = null;
  }

  dialog.querySelectorAll("[data-status-close]").forEach(function (button) {
    button.addEventListener("click", closeDialog);
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeDialog();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!activeCard) return;
    const nextStatus = select.value;
    if (!statusClass[nextStatus] || nextStatus === "Completed") return;
    const statuses = readSavedStatuses();
    statuses[activeCard.dataset.listingKey] = nextStatus;
    const saved = writeSavedStatuses(statuses);
    savedStatuses[activeCard.dataset.listingKey] = nextStatus;
    renderCardStatus(activeCard, nextStatus);
    updateCounts();
    feedback.textContent = saved ? "Listing status updated successfully." : "Status updated for this view only.";
    window.setTimeout(closeDialog, 650);
  });
})();
