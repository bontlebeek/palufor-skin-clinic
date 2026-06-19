# Palufor Skin Clinic Website

A responsive marketing and enquiry website for Palufor Skin Clinic, a Johannesburg skincare and beauty and wellness clinic.

## Student Information

- **Student:** Bontle Kole
- **Student number:** ST10537098
- **Module:** WEDE5020 – Web Development (Introduction)
- **Assessment:** Three-part Portfolio of Evidence (PoE)
- **Group:** Individual submission; no group details are recorded in the repository

## Project Overview

For this project, I built a five-page static website for Palufor Skin Clinic, a small clinic based in Johannesburg. The website introduces the clinic, explains the treatments and gives visitors ways to make an enquiry or contact the clinic. It is mainly aimed at people looking for facial treatments, skincare advice, grooming or massage therapy.

I worked on the project in three parts:

1. **Part 1 – Foundation:** five linked HTML pages and the main clinic content.
2. **Part 2 – Visual design:** external CSS, responsive layouts and visual interaction states.
3. **Part 3 – Functionality and SEO:** JavaScript interactions, dynamic services, forms, mapping, accessibility and search engine optimisation.

The final website uses HTML5, CSS3 and normal JavaScript. I used one embedded Google Map on the Contact page. I did not use a JavaScript framework or a build tool because the website does not need them.

This README records what I completed from Part 1 up to Part 3.

## Website Goals and Objectives

I could not find a separate Website Project Proposal or an approved KPI table in the repository. Based on the actual pages and features, the main goals of the website are to:

- Introduce Palufor Skin Clinic and explain its Johannesburg-based storyline.
- Present skincare, grooming and wellness services clearly.
- Help visitors find suitable treatments using search, filtering and sorting.
- Encourage treatment enquiries and skin consultation requests.
- Provide business hours, contact information and a map location.
- Make the website usable on desktop, tablet and mobile screens.
- Improve discoverability through on-page and technical SEO.

There are no original number-based KPI targets in the files. If analytics is added later, I would measure completed enquiries, contact-email clicks and visits to the Services and Enquiry pages. These are only ideas for future measurement and were not recorded as Part 1 targets.

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
- One responsive Google Maps embed showing the provisional clinic area.
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

I kept the main files and the matching files in `part 2/` the same. I left `.git/` and macOS system files out of the diagram because they are not part of the website itself.

## Technical Requirements and Technology Stack

| Area | Implementation |
|---|---|
| Structure | HTML5 semantic elements and accessible attributes |
| Styling | CSS3 custom properties, Grid, Flexbox, media queries and transitions |
| Behaviour | Vanilla JavaScript and DOM APIs |
| Map | Responsive Google Maps iframe embed |
| Images | Three local, lightweight SVG illustrations |
| Version control | Git repository with descriptive commits |
| Build process | None; the project runs as static files |
| Hosting preparation | GitHub Pages, Netlify or Vercel |
| Current deployment | Vercel |
| Live URL | https://palufor-skin-clinic.vercel.app/ |

The `robots.txt` and `sitemap.xml` files use the verified Vercel address, `https://palufor-skin-clinic.vercel.app/`.

## Timeline and Milestones

The original proposal timeline and official PoE due dates are not saved in the repository. I used the Git history for the dates below because those are the dates I could confirm.

| Phase | Recorded date | Actual milestone |
|---|---:|---|
| Part 1 | 21 April 2026 | Initial five-page HTML, CSS and JavaScript file structure committed |
| Part 2 | 29 May 2026 | CSS work, README documentation and responsive screenshot evidence added |
| Part 3 | 19 June 2026 | SEO, dynamic services, modal, accordion, lightbox, map, validation and deployment preparation completed |

These are Git commit dates, so they may not be the same as the official submission dates.

## Part-by-Part Details

### Part 1 – Building the Foundation

#### Organisation and storyline

I chose Palufor Skin Clinic as the storyline. It is presented as a small Johannesburg beauty and wellness clinic that has operated since 2014. I focused on skincare, facial treatments, grooming and relaxation services. This worked well for a five-page website because visitors need to learn about the clinic, compare services and know how to contact it.

#### Research and content approach

There is no separate proposal, interview document or research file in the repository. I wrote the clinic story and service information as project content. The address, phone numbers, email address, prices and treatment times still need to be confirmed before the site is used by a real business.

#### HTML and navigation decisions

In the first version, I created the Home, About, Services, Enquiry and Contact pages. I used relative links so that the website could work from a normal folder or a static host. I also kept the CSS and JavaScript in their own folders. In the final HTML, each page has one main heading, shared navigation and properly labelled forms.

### Part 2 – Designing the Visuals

#### Feedback response

I could not find the lecturer's original Part 1 feedback in the repository. The older Part 2 notes mention improvements to the README, stylesheet and responsive testing. I listed the changes I could confirm in the [Changelog](#changelog), but I did not present them as direct lecturer comments.

#### CSS approach

For the final design, I used blush, rose, plum and cream colours because they fit the calm skincare theme. The headings use Georgia and the body text uses Arial or Helvetica. I used CSS variables so that the colours and shadows could be changed in one place.

I used Grid for the cards, forms and larger page layouts. I used Flexbox for the navigation, buttons and rows that need to wrap. Buttons and links have hover effects, and `:focus-visible` shows a clear outline for keyboard users.

#### Responsive design

The final stylesheet has breakpoints at `760px` and `480px`. At tablet size, the main two-column layouts change to one column and the navigation stacks. On smaller phones, the cards, gallery and form grids also become one column. I used `clamp()`, `rem`, percentages and `min()` so that the sizes are not fixed only for desktop. Images also resize with the page and most images below the first section use lazy loading.

### Part 3 – Enhancing Functionality and SEO

#### Part 2 feedback response

I also could not find an exact Part 2 feedback file. I worked on issues that I could see in the project, such as inconsistent headings, missing images, limited CSS, an almost empty JavaScript file, basic forms and missing SEO files. The individual changes are in the [Part 3 changelog](#part-3-includes-part-2-feedback-improvements).

#### JavaScript functionality

`js/script.js` contains the shared interaction code:

- `initServiceBrowser()` filters and sorts the service data and updates the result count.
- `createServiceCard()` creates service articles safely with DOM methods.
- `initAccordions()` opens and closes treatment information panels.
- `initModal()` and `initLightbox()` control dialogs, focus and keyboard closing.
- `initEnquiryForm()` validates and simulates the service enquiry response.
- `initContactForm()` validates and builds an encoded clinic email link.
- `initScrollReveals()` uses Intersection Observer and respects reduced-motion settings.

The project no longer needs an external JavaScript library for the map because Google Maps is embedded with an iframe. I wrote the gallery lightbox, accordion, modal, service browser and form handling with normal JavaScript in the shared script file.

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
- A preconnect hint for the Google Maps host.
- Lazy loading for the Google Maps iframe.

#### Form functionality

`enquiry.html` collects a visitor's name, email, phone number, enquiry type, preferred service, preferred date, budget range and message. HTML attributes provide required, length, type and phone-pattern rules. JavaScript displays field-level messages and a simulated availability response without reloading. Its `action="#"` confirms that it is a front-end prototype; no data is transmitted or stored.

`contact.html` collects a name, email, optional phone number, message type, subject and full message. After validation, JavaScript safely encodes the information into a `mailto:` link for `bookings@paluforskinclinic.co.za`. The visitor must select the link and send the message from their own email application.

#### Deployment status

The project is deployed as a static website on Vercel, with `index.html` as the starting page. The live site is available at https://palufor-skin-clinic.vercel.app/. I checked all five public pages, the stylesheet, JavaScript, SEO files and image assets after deployment, and they returned successful responses. The deployed Contact page also contains the new Google Maps embed.

## Running the Website Locally

The site can be opened directly from `index.html`. A local server gives behaviour closer to a deployed website:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser. An internet connection is required for the Google Map on `contact.html`.

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

### Current Vercel deployment

The GitHub repository is connected to Vercel and changes pushed to `main` are deployed automatically. The current public website is:

https://palufor-skin-clinic.vercel.app/

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
- **19 June 2026:** Added an interactive map to the Contact page with a provisional Rosebank location.
- **19 June 2026:** Replaced the Leaflet map with one responsive Google Maps embed and removed the unused Leaflet code.
- **19 June 2026:** Improved `enquiry.html` with all required fields, HTML constraints, JavaScript validation and a simulated response.
- **19 June 2026:** Improved `contact.html` with field validation and a safely encoded `mailto:` link.
- **19 June 2026:** Added unique metadata, internal links, improved headings, alternative text, `robots.txt` and `sitemap.xml`.
- **19 June 2026:** Added deferred scripts, lazy loading, explicit image dimensions, reduced-motion support and secure external-link handling.
- **19 June 2026:** Added GitHub Pages and Netlify preparation instructions.
- **19 June 2026:** Deployed the static website to Vercel and verified all five pages and required assets.
- **19 June 2026:** Updated `robots.txt` and `sitemap.xml` to use the live Vercel URL.
- **19 June 2026:** Synchronised the root implementation with the `part 2/` submission copy.
- **19 June 2026:** Rewrote the README as a continuous Part 1–3 project record with factual limitations clearly stated.
- **19 June 2026:** Standardised the website contact details with a Johannesburg `+27 11` telephone number, `.co.za` booking email and full Rosebank postal address.

## References

CSS-Tricks (2025) 'A complete guide to CSS media queries'. Available at: https://css-tricks.com/a-complete-guide-to-css-media-queries/ (Accessed: 19 June 2026).

Google (2026) *SEO starter guide*. Google Search Central. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 19 June 2026).

Google (2026) *Embed a map: Maps Embed API*. Google for Developers. Available at: https://developers.google.com/maps/documentation/embed/embedding-map (Accessed: 19 June 2026).

Leaflet (2024) *Leaflet 1.9.4 documentation*. Available at: https://leafletjs.com/reference.html (Accessed: 19 June 2026). Used for the earlier Part 3 map version recorded in the changelog.

MDN Web Docs (2025a) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 19 June 2026).

MDN Web Docs (2025b) *Document Object Model (DOM)*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 19 June 2026).

MDN Web Docs (2025c) *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 19 June 2026).

MDN Web Docs (2025d) *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia (Accessed: 19 June 2026).

OpenAI (2026) *Codex* [large language model]. Available at: https://openai.com/codex/ (Accessed: 19 June 2026).

OpenStreetMap contributors (2026a) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 19 June 2026). Used for the earlier Part 3 map version recorded in the changelog.

OpenStreetMap contributors (2026b) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 19 June 2026).

W3C Web Accessibility Initiative (2025) *Web Content Accessibility Guidelines (WCAG) overview*. Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ (Accessed: 19 June 2026).

The three SVG illustrations in `images/` were created locally for this project. The final website does not load external photographs, icon libraries or web fonts.

### AI use disclosure

I used generative assistance during Part 3 to help review code, keep duplicate files in sync, check the project structure and improve the documentation (OpenAI, 2026). I still reviewed the files and made sure the README matches what is in the project. An AI Disclosure Annexe with the prompts and screen captures must be submitted separately with the PoE, as required by The IIE.

## Credits and Acknowledgements

I did not find any peer or instructor acknowledgements in the repository. I will add them here before submission if any other assistance needs to be declared.
