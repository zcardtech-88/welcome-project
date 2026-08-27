# Z Personal — Growth Landing Page

Standalone Z Card Personal acquisition experience.

## Route

`/z-personal-landing/`

## Included

- Premium light-first Z Card identity
- Optional persistent dark mode
- Live card builder with instant preview
- Card theme picker
- Local draft/publish persistence
- Share via Web Share API or clipboard
- Dynamic QR generation endpoint
- Responsive mobile-first layout
- Semantic HTML and accessible form controls
- Isolated `window.ZCardAPI` service boundary for future backend integration

## Production integration points

The current demo intentionally does not fake authentication or account claiming. Replace `window.ZCardAPI.createCard` with the real API implementation and connect the planned `card_id`, `phone_number`, `status`, `created_at`, and `updated_at` fields.

App Store and Google Play buttons are placeholders until official store URLs exist.

## Existing templates

The Automotive template remains separate from this folder.
