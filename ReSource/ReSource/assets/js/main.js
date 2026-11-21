javascript


document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile Navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            const isExpanded = navMenu.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isExpanded);
        });

        // Close mobile menu after clicking a navigation link
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 2. Material Search
    const searchForm = document.querySelector("#material-search-form");
    const searchInput = document.querySelector("#material-search");
    const locationSelect = document.querySelector("#location-filter");

    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const searchTerm = searchInput
                ? searchInput.value.trim().toLowerCase()
                : "";

            const selectedLocation = locationSelect
                ? locationSelect.value.trim().toLowerCase()
                : "";

            const searchParams = new URLSearchParams();

            if (searchTerm) {
                searchParams.set("search", searchTerm);
            }

            if (selectedLocation) {
                searchParams.set("location", selectedLocation);
            }

            // Open the material browsing page with search filters.
            window.location.href =
                "pages/buyer/browse-materials.html?" +
                searchParams.toString();
        });
    }

    // 3. Category Filtering
    const categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const category =
                card.dataset.category ||
                card.querySelector("h3")?.textContent.trim() ||
                card.textContent.trim();

            const searchParams = new URLSearchParams();
            searchParams.set("category", category);

            window.location.href =
                "pages/buyer/browse-materials.html?" +
                searchParams.toString();
        });
    });

    // 4. Browse Materials Buttons
    document.querySelectorAll(".browse-materials-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            window.location.href =
                "pages/buyer/browse-materials.html";
        });
    });

    // 5. Sign Up Buttons
    document.querySelectorAll(".signup-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            window.location.href = "buyer-signup.html";
        });
    });

    // 6. Supplier Registration Buttons
    document.querySelectorAll(".supplier-signup-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            window.location.href = "supplier-signup.html";
        });
    });

    // 7. Login Buttons
    document.querySelectorAll(".login-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            window.location.href = "login.html";
        });
    });

    // 8. Smooth Scrolling for Section Links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // 9. Update Current Year in Footer
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 10. Back to Top Button
    const backToTopButton = document.querySelector("#back-to-top");

    if (backToTopButton) {
        window.addEventListener("scroll", function () {
            backToTopButton.classList.toggle(
                "visible",
                window.scrollY > 300
            );
        });

        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    console.log("ReSource Homepage JavaScript loaded successfully!");
});
