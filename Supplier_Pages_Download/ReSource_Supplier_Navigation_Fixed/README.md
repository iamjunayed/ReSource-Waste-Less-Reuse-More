# ReSource Supplier Dashboard — navigation fixed

This is a **standalone Supplier-only module**. It has no Buyer module integration, no signup page, no login page and no authentication workflow.

## Start here
- `index.html` — opens the Supplier Dashboard directly.
- `supplier-dashboard.html` — Supplier Dashboard.

## Sidebar pages
- `supplier-my-listings.html` — listing management and a demo create-listing form.
- `supplier-buyer-requests.html` — sample buyer demand and quotation forms (not connected to any Buyer project).
- `supplier-my-quotations.html` — quotation history and statuses.
- `supplier-active-orders.html` — order overview, status timeline and issue-report demo.
- `supplier-messages.html` — sample conversation screen.
- `supplier-profile-settings.html` — company profile, verification, reviews and notices.

All sidebar links are ordinary HTML links to separate files. The sidebar active state changes on each page. All pages reuse the same ReSource logo and local material photos. The package uses HTML and CSS only; no JavaScript is included.

Forms and actions are static demonstration UI. Saving listings, submitting live quotations, sending messages and changing order records require a backend/database and client-side functionality.

## Run
1. Extract the ZIP.
2. Open this folder in VS Code.
3. Open `index.html` with Live Server.
