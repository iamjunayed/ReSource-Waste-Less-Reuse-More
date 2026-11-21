# ReSource Buyer Module — Improved UI (HTML + CSS only)

This project contains the Buyer authentication screens, dashboard, and linked Buyer workflow pages from the ReSource role requirements. The project deliberately contains no JavaScript.

## Run in VS Code
1. Extract the ZIP archive.
2. Open the `ReSource_Buyer_Improved` folder in VS Code.
3. Install/enable the Live Server extension if needed.
4. Right-click `index.html` and choose **Open with Live Server**.
5. `index.html` opens directly to the ReSource Home & Material Browse page. Use the navigation/sidebar to move through the Buyer workflow. Buyer Sign Up, Buyer Login, and Dashboard are available as separate pages.

## Improvements in this version
- Set `index.html` to open directly to the actual Home & Material Browse page instead of a page-picker/launcher screen.
- Added `assets/css/design-system.css` after each page stylesheet to unify typography, logo sizing, color tokens, focus states, card shadows, button hover behavior, and responsive logo sizing.
- Kept the same `assets/images/logo/resource-logo.svg` as the single shared logo asset on all pages.
- Updated public header navigation to point to real Buyer pages rather than empty in-page anchors.
- Linked the buyer profile/account chip to Profile Settings and standardized the notifications icon.
- Added keyboard-accessible “Skip to main content” links and `aria-current="page"` on active navigation items.
- Added reduced-motion support, consistent focus indicators, and help text targets for the terms/forgot-password placeholder links.
- Preserved local material image assets, CSS-only layout, and the current project structure.
- Changed signup/login and password-change forms to POST so passwords are not placed in query strings.

## Pages
- `buyer-signup.html`
- `buyer-login.html`
- `buyer-dashboard.html`
- `pages/buyer/browse-materials.html`
- `pages/buyer/material-details-request.html`
- `pages/buyer/my-requests.html`
- `pages/buyer/matching-quotations.html`
- `pages/buyer/my-orders.html`
- `pages/buyer/messages.html`
- `pages/buyer/profile-settings.html`

## Important limitations
This is a static frontend prototype. Search and filter controls, profile updates, wanted requests, quotation acceptance, order confirmation, messaging, reviews, and reports are visual/native HTML controls only and do not save or transmit data. Real login/signup, persistent changes, quote validity checks, and supplier/admin integration require secure backend authentication and a database. Authentication forms use POST rather than GET so passwords are not placed in query strings; don't treat the static forms as a working authentication system.

Sidebar behaviour: On desktop, the header stays at the top and the left navigation remains fixed while its menu can scroll independently; Logout stays anchored at the bottom. On mobile, navigation becomes a horizontal scroll row and Logout remains visible in a fixed bottom bar. This is implemented with HTML/CSS only.

### Material photos
The six local material photos are stored in `assets/images/materials/`: plastic bottles, wooden pallets, textile offcuts, cardboard boxes, selected plastics, and surplus supplies. The shared CSS uses `object-fit: contain` for material imagery so the full generated photo is visible without excessive cropping.
