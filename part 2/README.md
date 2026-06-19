# Palufor Skin Clinic Website

## Project Overview

Palufor Skin Clinic is a responsive static website for a Johannesburg beauty and wellness clinic. It introduces the clinic, presents professional skincare and facial treatments, lets visitors search and compare services, and provides front-end enquiry and contact processes.

The site uses plain HTML5, CSS3 and JavaScript so it can be inspected easily and hosted without a server-side application.

## Part 3 Summary: Enhancing Functionality and SEO

Part 3 extends the existing five-page site without replacing its original clinic storyline. The work adds dynamic service discovery, accessible interactive components, map integration, form validation, technical SEO, stronger page content and a complete responsive visual system.

## Features Implemented

- Responsive global navigation with a visible current-page state and skip links.
- JavaScript service catalogue with name, category, description, price and duration.
- Live service search, category filtering, name/price sorting and result counts.
- Expandable treatment guide using accessible accordion controls.
- Booking guidance modal with focus handling and Escape-key support.
- Three-image gallery with a keyboard-accessible lightbox.
- Leaflet map using OpenStreetMap tiles and a clinic marker.
- CSS transitions, scroll reveals and `prefers-reduced-motion` support.
- Dynamic copyright year and personalised form response content.
- Local SVG illustrations to prevent broken image requests and keep page weight low.

## Part 2 Feedback Improvements

The exact Part 2 lecturer feedback was not stored in the repository, so the following practical improvements address common quality and assessment concerns:

- **Navigation consistency:** Standardised the header, navigation order, active-page indicator and footer links on every page.
- **Clearer page structure:** Gave each page one descriptive `h1`, followed by logical `h2` and `h3` content sections.
- **Accessibility:** Added a skip link, visible focus styles, semantic labels, live status messages, keyboard-friendly dialogs and reduced-motion support.
- **Improved form layout:** Replaced paragraph-based fields with responsive, labelled form grids and field-level validation messages.
- **Better image alternatives:** Added descriptive `alt` text to meaningful images and accessible names to gallery controls.
- **Mobile responsiveness:** Added fluid type, flexible grids and focused breakpoints for tablets and small phones.
- **Content clarity:** Rewrote headings and calls to action around skincare goals, treatment guidance and clear next steps.
- **Working presentation layer:** Rebuilt the previously empty `css/style.css` and added the JavaScript behaviour required by Part 3.

## SEO Improvements

Every HTML page now has a unique title, meta description and keyword set. Content includes natural references to skin clinic services, skincare treatments, facial treatments, aesthetic skincare, skin consultations, beauty and wellness and professional skincare. Internal links connect related services, enquiry and contact tasks.

Technical SEO additions include:

- `robots.txt` with crawler instructions and a sitemap location.
- `sitemap.xml` covering all five public pages.
- Semantic HTML landmarks and consistent heading order.
- Lightweight local SVG artwork, deferred JavaScript and lazy-loaded below-the-fold images.
- Responsive dimensions on images to reduce layout shift.
- `rel="noopener"` on the OpenStreetMap attribution link opened in a new tab.

The sitemap currently targets the repository's `part 2` subfolder using URL-safe `%20` encoding. It should be updated if this folder is deployed as the site root, or if the final deployment uses a custom domain or Netlify URL.

## Form Validation and Responses

### Service enquiry form

The enquiry form collects full name, email, phone number, enquiry type, preferred service, preferred date, optional budget and a message. HTML attributes provide the validation rules, while JavaScript provides readable field-level messages. The preferred date cannot be earlier than the current date. A valid submission is handled without a reload and displays estimated next-step guidance.

This is a front-end prototype: `action="#"` is intentional, and no personal information is transmitted or stored.

### General contact form

The contact form collects full name, email, optional phone number, message type, subject and full message. After validation, JavaScript safely encodes the content into a `mailto:` link for `info@paluforskinclinic.co.za`. The visitor must choose the generated link and send the message from their own email application.

## Placeholder Details

- `125 Wellness Avenue, Rosebank` and its Rosebank map coordinates are realistic placeholders. Replace the written address and `clinicCoordinates` in `js/script.js` when the exact clinic location is confirmed.
- The phone numbers and `info@paluforskinclinic.co.za` should be confirmed before production use.
- The local SVG gallery artwork is an accessible, lightweight placeholder for approved clinic photography.
- Service prices and durations are guide values and should be confirmed by the clinic.

## Project Structure

```text
palufor-skin-clinic/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── css/style.css
├── js/script.js
└── images/*.svg
```

The original Part 2 evidence images are preserved in `screenshots/`.

## Running Locally

No build step is required. Open `index.html` directly, or run a simple local server from the project directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. An internet connection is needed for Leaflet and OpenStreetMap tiles on the contact page.

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages** in the repository.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`, then save.
5. Confirm the published URL and update `sitemap.xml` and `robots.txt` if it differs from the current URL.

### Netlify

1. In Netlify, choose **Add new site → Import an existing project**.
2. Connect the GitHub repository.
3. Leave the build command empty and set the publish directory to `.`.
4. Deploy, then update the sitemap and robots URL to the Netlify or custom domain.

## Detailed Changelog

### Part 3 — 2026-06-19

- Updated `index.html` with unique metadata, a focused home-page `h1`, semantic hero content, internal links and accessible local artwork.
- Updated `about.html` with unique metadata, clearer clinic story, mission, vision, values and responsive content structure.
- Rebuilt `services.html` with an accordion, service controls, dynamic result region, enquiry guidance modal and gallery lightbox markup.
- Rebuilt `enquiry.html` with all requested fields, HTML5 constraints, field errors, service query support and simulated submission feedback.
- Rebuilt `contact.html` with validated contact fields, a mailto workflow, business information and a responsive Leaflet map region.
- Rebuilt `css/style.css` with a responsive design system, layouts, forms, cards, dialogs, gallery, map styling, transitions and accessible focus/reduced-motion states.
- Implemented `js/script.js` for DOM-rendered services, search, filter, sort, accordions, modal, lightbox, map, both form workflows and dynamic UI updates.
- Added `images/clinic-care.svg`, `images/wellness-space.svg` and `images/consultation.svg` as local lightweight gallery and page assets.
- Added `robots.txt` and `sitemap.xml` for technical SEO and deployment readiness.
- Replaced missing image references and removed the risk of broken hero/gallery images.
- Expanded this README with feedback improvements, implementation details, placeholders, deployment steps, references and reflection.

### Part 2 — 2026-05-29

- Added the initial five-page HTML structure and external CSS link.
- Established the clinic content, services, forms and shared navigation.
- Documented responsive testing intentions and the project colour direction.

## Reflection

For Part 3, I focused on turning the original informational website into a useful visitor experience while keeping the code understandable. I improved consistency across every page, made treatment information easier to search and compare, and added clear feedback to both forms. I also paid closer attention to keyboard access, reduced motion, mobile layouts and page structure instead of treating accessibility and SEO as separate finishing tasks.

The map, lightbox, modal and dynamic service list helped me practise DOM manipulation in practical contexts. I kept submission behaviour transparent because this remains a static prototype: the enquiry form simulates a response, while the contact form lets the visitor review and send a compiled email through their own application.

## References

- Leaflet. (2026). *Leaflet: an open-source JavaScript library for interactive maps*. https://leafletjs.com/
- OpenStreetMap contributors. (2026). *OpenStreetMap*. https://www.openstreetmap.org/ and https://www.openstreetmap.org/copyright
- MDN Web Docs. (2026). *Client-side form validation*. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
- MDN Web Docs. (2026). *Document Object Model (DOM)*. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- MDN Web Docs. (2026). *Responsive images*. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia
- W3C Web Accessibility Initiative. (2026). *Web Content Accessibility Guidelines (WCAG) Overview*. https://www.w3.org/WAI/standards-guidelines/wcag/
- Google Search Central. (2026). *SEO Starter Guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide

All artwork in `images/` was created locally for this project and has no external image licensing dependency.

## Author

**ST10537098 — Bontle Beek**

GitHub: [bontlebeek](https://github.com/bontlebeek)
