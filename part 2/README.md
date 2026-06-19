# Palufor Skin Clinic Website

## Project Overview

This project is a static website for Palufor Skin Clinic, a small beauty and wellness clinic based in Johannesburg. The website gives visitors information about the clinic, its skincare treatments, prices, contact details and business hours. Visitors can also search through services and complete an enquiry or contact form.

The website was built with HTML, CSS and JavaScript. I kept the code simple so that it is easy to read, maintain and inspect.

## Part 3: Enhancing Functionality and SEO

For Part 3, I improved the website instead of starting the project again. I kept the original Palufor Skin Clinic content and added more interactive features, form validation, responsive styling and search engine optimisation.

## Features Added

- Consistent navigation and footer links on all five pages.
- A dynamic service list created from JavaScript data.
- Search, category filters and price or name sorting on the Services page.
- An accordion containing extra treatment information.
- A pop-up explaining how the enquiry process works.
- An image gallery with a lightbox preview.
- A Leaflet map using OpenStreetMap tiles.
- JavaScript validation for the enquiry and contact forms.
- Clear success messages after valid form submissions.
- Simple transitions and scroll animations.
- Responsive layouts for desktop, tablet and mobile screens.
- Reduced-motion support for visitors who prefer fewer animations.

## Part 2 Feedback Improvements

The exact lecturer feedback from Part 2 was not included in the project folder. I therefore focused on realistic areas that needed improvement:

- **Navigation consistency:** I used the same navigation order, active-page style and footer links throughout the website.
- **Page structure:** Each page now has one main heading followed by correctly ordered subheadings.
- **Accessibility:** I added skip links, visible keyboard focus, form labels, live status messages and keyboard controls for the modal and lightbox.
- **Form layout:** I changed the forms into responsive grids and placed error messages next to the correct fields.
- **Image descriptions:** Every meaningful image has descriptive alternative text.
- **Mobile responsiveness:** The card layouts, forms, navigation and gallery adjust for tablets and smaller phones.
- **Content clarity:** I improved headings, treatment descriptions and calls to action so that visitors know what to do next.
- **CSS and JavaScript:** I completed the previously limited stylesheet and added the JavaScript needed for Part 3 functionality.

## Interactive Services

The Services page loads the treatment cards from an array in `js/script.js`. Each service contains a name, category, description, starting price and estimated duration. The page updates the cards when a visitor searches, selects a category or changes the sorting option.

I also added an accordion, an enquiry guidance modal and a gallery lightbox. The modal and lightbox can be closed with their close buttons, by selecting the background or by pressing the Escape key.

## Interactive Map

The Contact page uses Leaflet and OpenStreetMap to display a map of the clinic area. A marker identifies the provisional Palufor Skin Clinic location in Rosebank, Johannesburg. The map is responsive and can be used with keyboard focus.

## Form Validation

### Enquiry form

The enquiry form asks for:

- Full name
- Email address
- Phone number
- Enquiry type
- Preferred service
- Preferred date
- Budget range
- Message

HTML validation attributes and JavaScript are used together. Invalid fields show a clear message. A successful submission does not reload the page and displays an estimated next step.

This is only a front-end prototype. The form uses `action="#"`, and no personal information is sent to a database or server.

### Contact form

The contact form includes full name, email, phone number, message type, subject and a full message. After validation, JavaScript creates a `mailto:` link containing the visitor's message. The visitor must open the link and send the email using their own email application.

## SEO Improvements

I added the following SEO improvements:

- A different title and meta description for every page.
- Meta keywords related to skincare treatments and beauty services.
- One clear `h1` heading on each page.
- Logical `h2` and `h3` heading structure.
- Internal links between services, enquiries and contact information.
- Descriptive alternative text for images.
- Relevant content about facial treatments, aesthetic skincare, skin consultations, beauty and wellness and professional skincare.
- A `robots.txt` file and XML sitemap.
- Deferred JavaScript and lazy loading for images below the first screen.
- Image dimensions to reduce layout movement while pages load.

The sitemap currently uses the expected GitHub Pages address. It must be updated if the project is deployed with a different address or custom domain.

## Security and Accessibility

- External links that open in a new tab use `rel="noopener"`.
- Form values placed into the page are escaped or added using safe DOM methods.
- Inputs have matching labels and visible error messages.
- The modal and lightbox return keyboard focus to the button that opened them.
- A reduced-motion media query disables unnecessary animation when requested by the user's device.

## Placeholder Information

The following information must be confirmed before the site is used as a production website:

- `125 Wellness Avenue, Rosebank` and the map coordinates are placeholders.
- The clinic phone numbers and `info@paluforskinclinic.co.za` must be confirmed.
- Prices and treatment durations are guide values.
- The SVG gallery images are lightweight placeholders for approved clinic photographs.

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
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── clinic-care.svg
    ├── consultation.svg
    └── wellness-space.svg
```

## Running the Website Locally

The website does not need a build process. It can be opened by selecting `index.html`, although a local server is recommended:

```bash
python3 -m http.server 8000
```

The website can then be viewed at `http://localhost:8000`. An internet connection is needed to load Leaflet and the OpenStreetMap tiles.

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. Open the repository's **Settings** page.
3. Select **Pages**.
4. Choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save the settings and wait for the published link.

### Netlify

1. Select **Add new site** in Netlify.
2. Import the GitHub repository.
3. Leave the build command empty.
4. Set the publish directory to `.`.
5. Deploy the site.

The sitemap and `robots.txt` URL must be changed if the final deployment address is different.

## Changelog

### Part 3 — 19 June 2026

- Updated all five HTML pages with unique SEO information and improved heading structures.
- Added consistent headers, navigation, footers and internal links.
- Rebuilt the main CSS file with responsive layouts, form styling and accessibility states.
- Added the JavaScript service list, search, filtering and sorting.
- Added the treatment accordion and enquiry guidance modal.
- Added a gallery and keyboard-friendly lightbox.
- Added the Leaflet and OpenStreetMap contact map.
- Improved the enquiry form with all required fields, validation and a simulated response.
- Improved the contact form with validation and a generated email link.
- Added three local SVG images with alternative text.
- Added `robots.txt` and `sitemap.xml`.
- Added deployment instructions, placeholder notes and references to this README.
- Kept the main project and the `part 2` copy synchronised.

### Part 2 — 29 May 2026

- Created the original five-page website structure.
- Added the first version of the navigation, clinic content, services and forms.
- Linked the pages to an external stylesheet.
- Tested the layout at desktop, tablet and mobile sizes.

## Reflection

In this part of the project, I learned how JavaScript can make a static website more useful. The service cards are created from data instead of being repeated in the HTML, which made the search, filter and sorting features easier to manage. I also learned how to use DOM manipulation to update results and form messages without reloading the page.

Accessibility was an important improvement for me. I added keyboard controls, focus styles, useful labels and reduced-motion support. I also improved the heading structure and page descriptions so that the website is clearer for visitors and search engines.

The forms are still prototypes because there is no back-end server. I made this clear to the visitor and used a simulated enquiry response and a contact email link instead of pretending that information had been submitted online.

## References

- Leaflet. (2026). *Leaflet: An open-source JavaScript library for interactive maps*. https://leafletjs.com/
- OpenStreetMap contributors. (2026). *OpenStreetMap*. https://www.openstreetmap.org/
- OpenStreetMap contributors. (2026). *Copyright and licence*. https://www.openstreetmap.org/copyright
- MDN Web Docs. (2026). *Client-side form validation*. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
- MDN Web Docs. (2026). *Document Object Model (DOM)*. https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- MDN Web Docs. (2026). *Responsive images*. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia
- W3C Web Accessibility Initiative. (2026). *WCAG overview*. https://www.w3.org/WAI/standards-guidelines/wcag/
- Google Search Central. (2026). *SEO starter guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide

The SVG images in the `images` folder were created locally for this project and do not require an external image licence.

## Author

**ST10537098 — Bontle Beek**

GitHub: [bontlebeek](https://github.com/bontlebeek)
