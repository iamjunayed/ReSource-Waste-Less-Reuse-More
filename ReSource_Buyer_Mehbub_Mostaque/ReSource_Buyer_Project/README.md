# ReSource Buyer Project — Fixed Material Details Links

This is the refreshed HTML + CSS buyer-side project. It does not use JavaScript.

## Important fix in this version

Both the top-level `index.html` (the page opened by Live Server) and `pages/buyer/browse-materials.html` now link each material card to its own details page. Previously, the homepage `index.html` still sent every card to the generic `material-details-request.html`, which displayed the Wooden Pallets example. That was why different cards kept opening the same details.

The six material cards now open:

- Used Plastic Bottles → `pages/buyer/details-plastic-bottles.html`
- Wooden Pallets → `pages/buyer/details-wooden-pallets.html`
- Textile Offcuts → `pages/buyer/details-textile-offcuts.html`
- Cardboard Boxes → `pages/buyer/details-cardboard-boxes.html`
- Mixed Surplus Supplies → `pages/buyer/details-surplus-supplies.html`
- Reusable Plastic Crates → `pages/buyer/details-plastic-crates.html`

Compare links also lead to each material's own matching/quotation page.

## Run it

1. Extract this ZIP into a **new folder** named `ReSource_Buyer_Project` (do not merge it into an older extracted copy).
2. Open that exact new folder in VS Code.
3. Right-click its top-level `index.html` and choose **Open with Live Server**.
4. Click **Search Materials**, then click View Details on different cards to verify each unique details page.

If an old browser tab is still open, close it and launch the new project's `index.html` again. This avoids testing an old extracted copy.

## Project scope

- HTML and CSS only; no JavaScript.
- Sample listing data and static front-end interactions.
- Real authentication, live search/filtering, persistent requests, quotations, and orders require a backend/database or JavaScript later.

## Buyer display name
The demo buyer display name is set to **Mehbub Mostaque** across the header and profile UI. The avatar initials are **MM**, and the sample email shown in profile fields is `mehbub@example.com`.
