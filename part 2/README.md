# Palufor Skin Clinic Website

A responsive marketing and enquiry website for Palufor Skin Clinic, a Johannesburg skincare and beauty and wellness clinic.

## Student Information

- **Student:** Bontle Beek
- **Student number:** ST10537098
- **Module:** WEDE5020 – Web Development (Introduction)
- **Assessment:** Three-part Portfolio of Evidence (PoE)
- **Group:** Individual submission; no group details are recorded in the repository

## Project Overview

Palufor Skin Clinic is a five-page static website for a small Johannesburg clinic. It introduces the clinic, explains its professional skincare and wellness services, helps visitors compare treatments and provides enquiry and contact options. The intended audience includes people looking for facial treatments, aesthetic skincare, grooming, massage therapy or a skin consultation.

The project was completed in three phases:

1. **Part 1 – Foundation:** five linked HTML pages and the main clinic content.
2. **Part 2 – Visual design:** external CSS, responsive layouts and visual interaction states.
3. **Part 3 – Functionality and SEO:** JavaScript interactions, dynamic services, forms, mapping, accessibility and search engine optimisation.

The final site uses HTML5, CSS3 and vanilla JavaScript. Leaflet 1.9.4 and OpenStreetMap are used on the Contact page. No JavaScript framework, package manager, build tool or back-end service is required.

This README is the continuous record of the project across all three parts.

## Website Goals and Objectives

No separate Website Project Proposal or approved KPI table is stored in the repository. The following goals are supported directly by the final page content and features:

- Introduce Palufor Skin Clinic and explain its Johannesburg-based storyline.
- Present skincare, grooming and wellness services clearly.
- Help visitors find suitable treatments using search, filtering and sorting.
- Encourage treatment enquiries and skin consultation requests.
- Provide business hours, contact information and a map location.
- Make the website usable on desktop, tablet and mobile screens.
- Improve discoverability through on-page and technical SEO.

No original numeric KPI targets can be verified from the project files. If the site is connected to analytics later, useful measurements would include service-card interactions, enquiry-form completions, contact-email link selections and visits to the Services and Enquiry pages. These are future measurement suggestions, not recorded Part 1 targets.

## Key Features and Functionality

### Part 1 features

- Five linked pages: `index.html`, `about.html`, `services.html`, `enquiry.html` and `contact.html`.
- Shared navigation between Home, About, Services, Enquiry and Contact.
- Clinic background, mission, values, treatments, contact details and operating hours.
- Separate forms for treatment enquiries and general contact messages.
- Semantic page sections using `header`, `nav`, `main`, `section`, `article`, `aside` and `footer`.

### Part 2 features

- External stylesheet at `css/style.css`, linked from all pages.
- CSS custom properties for the ink, plum, rose, blush, cream and border colours.
- CSS Grid for the hero, service cards, forms, gallery and footer.
- Flexbox for navigation, buttons and selected content rows.
- Fluid typography and spacing using `clamp()`, `rem`, percentages and viewport units.
- Responsive breakpoints at `760px` and `480px` in the final stylesheet.
- Hover transitions for links, buttons, cards and gallery images.
- Visible `:focus-visible` keyboard focus styles.
- A reduced-motion media query for users who disable animation.

### Part 3 features

- Six service records stored in the `services` JavaScript array.
- Live service search, category filtering and sorting by name or price.
- Dynamic service cards built with DOM methods in `createServiceCard()`.
- Treatment information accordion.
- Enquiry guidance modal with focus control and Escape-key support.
- Three-image gallery with a keyboard-friendly lightbox.
- Leaflet map with OpenStreetMap tiles and a clinic marker.
- Client-side validation for both forms with field-level error messages.
- Simulated enquiry submission without a page reload.
- Encoded `mailto:` link generation for the contact form.
- Intersection Observer scroll reveals and dynamic copyright years.
- Unique page titles, descriptions and keywords.
- `robots.txt`, `sitemap.xml`, internal links and descriptive image alternatives.
- Deployment instructions for GitHub Pages and Netlify.

## Sitemap

```text
Home (index.html)
├── About (about.html)
├── Services (services.html)
│   └── Enquiry (enquiry.html)
├── Enquiry (enquiry.html)
└── Contact (contact.html)
```

Every page contains the full main navigation, so visitors can move directly between all five pages.

## File and Folder Structure

```text
palufor-skin-clinic/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── README.md
├── robots.txt
├── sitemap.xml
├── css/
│   ├── style.css
│   └── css stylong                 # legacy empty file
├── js/
│   └── script.js
├── images/
│   ├── clinic-care.svg
│   ├── consultation.svg
│   └── wellness-space.svg
└── part 2/                         # synchronised submission copy
    ├── index.html
    ├── about.html
    ├── services.html
    ├── enquiry.html
    ├── contact.html
    ├── README.md
    ├── robots.txt
    ├── sitemap.xml
    ├── css/style.css
    ├── js/script.js
    ├── images/*.svg
    └── screenshots/               # Part 2 responsive evidence
```

The main implementation files and their matching files in `part 2/` are synchronised. `.git/` and macOS metadata are not shown in the tree because they are not website source files.

## Technical Requirements and Technology Stack

| Area | Implementation |
|---|---|
| Structure | HTML5 semantic elements and accessible attributes |
| Styling | CSS3 custom properties, Grid, Flexbox, media queries and transitions |
| Behaviour | Vanilla JavaScript and DOM APIs |
| Map | Leaflet 1.9.4 with OpenStreetMap tiles |
| Images | Three local, lightweight SVG illustrations |
| Version control | Git repository with descriptive commits |
| Build process | None; the project runs as static files |
| Hosting preparation | GitHub Pages or Netlify |
| Current deployment | Not deployed from this repository |
| Live URL | No verified live URL is recorded |

The `robots.txt` and `sitemap.xml` files currently use the expected GitHub Pages address, `https://bontlebeek.github.io/palufor-skin-clinic/`. That address must be checked and updated after deployment if the published URL differs.

## Timeline and Milestones

The original proposal timeline and official PoE due dates are not present in the repository. The dates below come from the Git history and show the actual recorded development milestones.

| Phase | Recorded date | Actual milestone |
|---|---:|---|
| Part 1 | 21 April 2026 | Initial five-page HTML, CSS and JavaScript file structure committed |
| Part 2 | 29 May 2026 | CSS work, README documentation and responsive screenshot evidence added |
| Part 3 | 19 June 2026 | SEO, dynamic services, modal, accordion, lightbox, map, validation and deployment preparation completed |

These are commit dates rather than confirmed institutional submission dates.

## Part-by-Part Details

### Part 1 – Building the Foundation

#### Organisation and storyline

The chosen storyline is Palufor Skin Clinic, a small Johannesburg beauty and wellness clinic established in the site content as operating since 2014. The website focuses on professional but accessible skincare, facial treatments, grooming and relaxation services. A service business suits the five-page structure because visitors need to understand the clinic, compare services and contact the team.

#### Research and content approach

No separate proposal, interview notes or research document is included in the repository. The clinic story and service information are written as project content. Operational details such as the street address, telephone numbers, email address, prices and treatment durations are clearly recorded as items that must be confirmed before production use.

#### HTML and navigation decisions

The first version established Home, About, Services, Enquiry and Contact pages. Relative links were used so the project could run from a local folder or static host. The final HTML uses semantic landmarks, one main heading per page, labelled forms and shared navigation. CSS and JavaScript were separated into `css/` and `js/` from the start.

### Part 2 – Designing the Visuals

#### Feedback response

The repository does not contain the lecturer's original Part 1 feedback. The Part 2 documentation records general improvements to repository documentation, stylesheet use and responsive testing. The specific changes are listed in the [Changelog](#changelog) without presenting unverified feedback as a direct lecturer quotation.

#### CSS approach

The final visual design uses a blush, rose, plum and cream palette to support the calm skincare theme. Georgia is used for headings, with Arial and Helvetica fallbacks for body content; no external font request is made. CSS custom properties keep colour and shadow values consistent.

Grid is used for multi-column cards, forms and main layouts. Flexbox is used where content needs to align in one row and wrap when space is limited. Buttons and navigation links use hover transitions, while `:focus-visible` provides a clear blue outline for keyboard users.

#### Responsive design

The final stylesheet uses breakpoints at `760px` and `480px`. At tablet width, major two-column layouts become single columns and the navigation stacks. At small-phone width, cards, the gallery and form grids become single columns. Fluid sizes use `clamp()`, `rem`, percentages and `min()` rather than fixed desktop widths. Images have width and height attributes, use `max-width: 100%`, and below-the-fold images use native lazy loading.

### Part 3 – Enhancing Functionality and SEO

#### Part 2 feedback response

No exact Part 2 lecturer feedback file was found. The work therefore addressed observable issues in the existing project: inconsistent page structure, limited CSS, missing images, inactive JavaScript, basic form layouts and no technical SEO files. See the [Part 3 changelog](#part-3-includes-part-2-feedback-improvements) for the individual changes.

#### JavaScript functionality

`js/script.js` contains the shared interaction code:

- `initServiceBrowser()` filters and sorts the service data and updates the result count.
- `createServiceCard()` creates service articles safely with DOM methods.
- `initAccordions()` opens and closes treatment information panels.
- `initModal()` and `initLightbox()` control dialogs, focus and keyboard closing.
- `initMap()` creates the Leaflet map, OpenStreetMap tile layer and Rosebank marker.
- `initEnquiryForm()` validates and simulates the service enquiry response.
- `initContactForm()` validates and builds an encoded clinic email link.
- `initScrollReveals()` uses Intersection Observer and respects reduced-motion settings.

Leaflet is the only external JavaScript library. The gallery lightbox, accordion, modal, service browser and form handling use original vanilla JavaScript in the shared script file.

#### SEO work

On-page SEO includes:

- A unique `<title>`, meta description and meta keywords on every page.
- One clear `h1` per page with logical `h2` and `h3` headings.
- Descriptive alternative text on all meaningful images.
- Internal links between relevant service, enquiry and contact pages.
- Content related to professional skincare, facial treatments, aesthetic skincare, skin consultations and beauty and wellness.
- Active-page navigation using `aria-current="page"`.

Technical and performance work includes:

- `robots.txt` and `sitemap.xml`.
- Deferred JavaScript.
- Lazy loading for images below the first screen.
- Explicit image dimensions to reduce layout shifts.
- Lightweight local SVG assets instead of missing raster images.
- Preconnect hints for the Leaflet CDN and OpenStreetMap tile server.
- Subresource integrity and `crossorigin` attributes on Leaflet CDN files.
- `rel="noopener"` on the OpenStreetMap link that opens in a new tab.

#### Form functionality

`enquiry.html` collects a visitor's name, email, phone number, enquiry type, preferred service, preferred date, budget range and message. HTML attributes provide required, length, type and phone-pattern rules. JavaScript displays field-level messages and a simulated availability response without reloading. Its `action="#"` confirms that it is a front-end prototype; no data is transmitted or stored.

`contact.html` collects a name, email, optional phone number, message type, subject and full message. After validation, JavaScript safely encodes the information into a `mailto:` link for `info@paluforskinclinic.co.za`. The visitor must select the link and send the message from their own email application.

#### Deployment status

The project is ready for static deployment and `index.html` is the entry point. Instructions are provided below for GitHub Pages and Netlify. The repository does not contain evidence of a completed deployment, so there is no verified live URL and no claim that hosted pages have been tested. Local structural checks confirm that page links, assets, metadata, JavaScript syntax and image alternatives are present.

## Running the Website Locally

The site can be opened directly from `index.html`. A local server gives behaviour closer to a deployed website:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser. An internet connection is required for Leaflet and the OpenStreetMap tiles on `contact.html`.

## Deployment Instructions

### GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages** in the repository.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder.
5. Save and wait for GitHub to provide the published URL.
6. Test all five pages and update `robots.txt` and `sitemap.xml` if the URL differs.

### Netlify

1. Select **Add new site → Import an existing project** in Netlify.
2. Connect the GitHub repository.
3. Leave the build command empty.
4. Set the publish directory to `.`.
5. Deploy and test every page.
6. Update the sitemap and robots URL to the Netlify or custom domain.

## Changelog

### Part 1

- **21 April 2026:** Created the initial HTML structure for Home, About, Services, Enquiry and Contact.
- **21 April 2026:** Added a shared relative-link navigation system across the five pages.
- **21 April 2026:** Separated the starting stylesheet and script into `css/style.css` and `js/script.js`.
- **21 April 2026:** Added the clinic story, services, enquiry content and contact information.

### Part 2 (includes Part 1 feedback improvements)

- **29 May 2026:** Added and documented the external stylesheet approach for all five pages.
- **29 May 2026:** Added repository documentation describing the project, setup and development changes.
- **29 May 2026:** Added tablet and mobile screenshot evidence from responsive testing.
- **29 May 2026:** Improved the planned design with a clinic-appropriate pink and plum visual direction.
- **29 May 2026:** Documented Grid, Flexbox, relative units, media queries and interaction states used for the responsive design.
- **29 May 2026:** Addressed the available Part 1 documentation concerns by recording project setup and a changelog. No verbatim lecturer feedback was stored.

### Part 3 (includes Part 2 feedback improvements)

- **19 June 2026:** Fixed inconsistent navigation and page headings by applying the same header, footer and one-`h1` structure to every page.
- **19 June 2026:** Fixed missing image paths by adding three local SVG illustrations with descriptive alternatives.
- **19 June 2026:** Rebuilt `css/style.css` with the final responsive Grid and Flexbox layouts, form styles, focus states and `760px`/`480px` breakpoints.
- **19 June 2026:** Added six JavaScript-driven service records with live search, category filtering and name/price sorting.
- **19 June 2026:** Added a treatment accordion and enquiry guidance modal with keyboard controls.
- **19 June 2026:** Implemented the gallery lightbox in vanilla JavaScript using the three local SVG images.
- **19 June 2026:** Added Leaflet 1.9.4 and OpenStreetMap tiles to the Contact page with a provisional Rosebank marker.
- **19 June 2026:** Improved `enquiry.html` with all required fields, HTML constraints, JavaScript validation and a simulated response.
- **19 June 2026:** Improved `contact.html` with field validation and a safely encoded `mailto:` link.
- **19 June 2026:** Added unique metadata, internal links, improved headings, alternative text, `robots.txt` and `sitemap.xml`.
- **19 June 2026:** Added deferred scripts, lazy loading, explicit image dimensions, reduced-motion support and secure external-link handling.
- **19 June 2026:** Added GitHub Pages and Netlify preparation instructions; no deployment was completed.
- **19 June 2026:** Synchronised the root implementation with the `part 2/` submission copy.
- **19 June 2026:** Rewrote the README as a continuous Part 1–3 project record with factual limitations clearly stated.

## References

CSS-Tricks (2025) 'A complete guide to CSS media queries'. Available at: https://css-tricks.com/a-complete-guide-to-css-media-queries/ (Accessed: 19 June 2026).

Google (2026) *SEO starter guide*. Google Search Central. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 19 June 2026).

Leaflet (2024) *Leaflet 1.9.4 documentation*. Available at: https://leafletjs.com/reference.html (Accessed: 19 June 2026).

MDN Web Docs (2025a) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 19 June 2026).

MDN Web Docs (2025b) *Document Object Model (DOM)*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 19 June 2026).

MDN Web Docs (2025c) *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 19 June 2026).

MDN Web Docs (2025d) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia (Accessed: 19 June 2026).

OpenAI (2026) *Codex* [large language model]. Available at: https://openai.com/codex/ (Accessed: 19 June 2026).

OpenStreetMap contributors (2026a) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 19 June 2026).

OpenStreetMap contributors (2026b) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 19 June 2026).

W3C Web Accessibility Initiative (2025) *Web Content Accessibility Guidelines (WCAG) overview*. Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ (Accessed: 19 June 2026).

The three SVG illustrations in `images/` were created locally for this project. The final website does not load external photographs, icon libraries or web fonts.

### AI use disclosure

Generative assistance was used during Part 3 to review and improve code, synchronise files, test project structure and revise documentation (OpenAI, 2026). An AI Disclosure Annexe with the required prompts and screen captures must accompany the PoE submission according to The IIE assessment requirements. The annexe is a separate submission document and is not included in this repository.

## Credits and Acknowledgements

No peer, instructor or external contributor acknowledgement is recorded in the repository. Any assistance received outside the Git history should be added here before submission.
