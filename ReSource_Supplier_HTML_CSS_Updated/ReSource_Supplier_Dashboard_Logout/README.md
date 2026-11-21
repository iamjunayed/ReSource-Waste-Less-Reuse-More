# ReSource Supplier Workspace — HTML & CSS Stage

This is the standalone Supplier module. It does not include or connect to the Buyer module and does not contain Supplier signup or login pages.

## Open the project

1. Extract the folder.
2. Open `ReSource_Supplier_Dashboard_Logout` in VS Code.
3. Run `index.html` with Live Server.

## Included pages

- `index.html` / `supplier-dashboard.html` — Supplier Dashboard
- `supplier-my-listings.html` — listing cards, listing filters, create/edit forms and status controls
- `supplier-buyer-requests.html` — request cards, filters and quotation form layouts
- `supplier-my-quotations.html` — quotation history, details, edit and withdrawal layouts
- `supplier-active-orders.html` — order overview, milestone timelines, status and issue-report forms
- `supplier-completed-record.html` — completed exchange record
- `supplier-messages.html` — conversation list and chat layouts
- `supplier-profile-settings.html` — business profile, verification, reviews, notices and notification preferences

## Assets

All page styling is in `assets/css/`. ReSource logo and material photos are stored locally in `assets/images/`.

## Current implementation scope

This version intentionally uses **HTML and CSS only**. Navigation, anchor tabs, expandable status disclosures (`details/summary`) and responsive layouts are available. Form layouts and action controls are prepared visually; changes are not persisted and search/filter, quotation submission, message sending, order updates, profile saves and status changes will be wired in the JavaScript phase, then connected to a backend/database if required.

No JavaScript files or script references are included in this version.
