# ReSource Buyer Module (HTML + CSS Only)

This project includes Buyer Signup/Login, Dashboard, and the complete Buyer workflow described in the ReSource group requirements.

## Files
- `buyer-signup.html` — buyer registration design
- `buyer-login.html` — buyer login design
- `buyer-dashboard.html` — buyer dashboard
- `pages/buyer/browse-materials.html` — home/material browse, category cards and filter UI
- `pages/buyer/material-details-request.html` — material details, supplier review and wanted request form
- `pages/buyer/my-requests.html` — request list, edit and close-request UI
- `pages/buyer/matching-quotations.html` — matched material cards, match factors and quotation comparison
- `pages/buyer/my-orders.html` — order statuses and timestamped exchange timelines
- `pages/buyer/messages.html` — supplier clarification and issue-report UI
- `pages/buyer/profile-settings.html` — profile, password, notification preferences, reviews and report form

## Run in VS Code
1. Extract this folder.
2. Open the folder in VS Code.
3. Use Live Server on `buyer-signup.html` or `buyer-dashboard.html`.
4. Use links in the sidebar to navigate through buyer pages.

## Important limitation
Per the requested scope, no JavaScript is used. These are responsive, linked frontend pages with sample data and native HTML controls. Filters, form submissions, data edits, quotation acceptance, order confirmation, messaging and reports do not persist or perform backend actions. Add a backend/database later to make them real.

## Images
Generated material imagery is stored locally in `assets/images/materials/`, so the page photos do not need to be fetched from remote URLs.
