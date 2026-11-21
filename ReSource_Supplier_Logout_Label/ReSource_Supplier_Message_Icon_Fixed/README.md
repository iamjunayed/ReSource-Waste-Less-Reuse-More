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
- `supplier-completed-record.html` — details and timeline for the completed Reusable Storage Drums exchange.
- `supplier-messages.html` — buyer conversation interface.
- `supplier-profile-settings.html` — company information, verification, reviews and notices.

All sidebar links open separate local HTML pages. The same ReSource logo, supplier header, sidebar and material photos are reused throughout. The My Listings page uses a small JavaScript file only for the Manage Status dialog and browser-local status persistence. The rest of the project remains HTML and CSS.

## Important implementation note
This is a static frontend interface. The displayed records are embedded page content. Manage Status updates the selected listing card and summary counts, and remembers the change in the same browser using localStorage. Other forms and action buttons provide the interface only; saving full listing details, applying live filters, submitting quotations, sending messages, updating order records, and uploading verification documents require a backend/database. No information is sent to a server by this package.

## Run
1. Extract the ZIP.
2. Open the `ReSource_Supplier_Navigation_Fixed` folder in VS Code.
3. Open `index.html` with Live Server.


Icon update: the top-right control is now a notification bell linking to the dashboard notices. The sidebar Messages item uses a speech-bubble icon and opens the Messages page. These icons are visually distinct.
