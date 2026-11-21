# ReSource Supplier Workspace

A standalone Supplier interface built with HTML and CSS. It does not include Buyer pages, Buyer integration, signup, login, or authentication.

## Start here
- `index.html` — opens the Supplier Dashboard.
- `supplier-dashboard.html` — Supplier Dashboard.

## Supplier pages
- `supplier-my-listings.html` — create, review and manage material listing details and status.
- `supplier-buyer-requests.html` — view buyer requirements and prepare quotations.
- `supplier-my-quotations.html` — quotation history, statuses and details.
- `supplier-active-orders.html` — order overview, milestones, dispatch notes and issue reporting.
- `supplier-messages.html` — buyer conversation interface.
- `supplier-profile-settings.html` — company information, verification, reviews and notices.

All sidebar links open separate local HTML pages. The same ReSource logo, supplier header, sidebar and material photos are reused throughout. The package contains no JavaScript.

## Important implementation note
This is a static frontend interface. The displayed records are embedded page content. Forms and action buttons provide the interface only; saving listings, applying live filters, submitting quotations, sending messages, updating order records, and uploading verification documents require a backend/database. No information is sent to a server by this package.

## Run
1. Extract the ZIP.
2. Open the `ReSource_Supplier_Navigation_Fixed` folder in VS Code.
3. Open `index.html` with Live Server.
