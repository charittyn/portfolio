# Portfolio Rebuild Changelog

## Architecture and deployment
- Removed the duplicated `_public_html` website copy.
- Removed Hostinger placeholder files and stale template assets from the production package.
- Replaced the dependency-heavy template with a single lightweight HTML/CSS/JS implementation.
- Removed jQuery, Bootstrap, Isotope, Swiper, Leaflet, AOS, Font Awesome, Google Fonts and LinkedIn badge dependencies.
- Kept the existing `CNAME` for `www.charittyn.com`.
- Added a custom `404.html` page.

## Brand and positioning
- Preserved the existing pink/purple/orange visual direction while removing generic template styling.
- Rebuilt the hero around business growth, not the old “Planet Earth” template copy.
- Added a clean `CN` monogram treatment in the interface.
- Retained Charity’s real portrait and removed generic stock/furniture project imagery.
- Compressed the 11 MB about portrait to roughly 140 KB without identity-altering edits.

## Information architecture
- New navigation: About, Expertise, Case Studies, Feedback, Insights, Contact.
- Repurposed arbitrary percentage skill bars into capability-based expertise cards.
- Repurposed partner/logo filler into a tools and channels list.
- Repurposed the old modal blog into individual, indexable insight pages.
- Removed the unrelated Lorem Ipsum design project and unrelated template blog posts.
- Removed the Melbourne map and replaced it with direct Lagos/contact information.

## Portfolio and case studies
- Rebuilt the portfolio filter with valid `social`, `seo`, `paid` and `web` categories.
- Removed hover-only project identification; project names and context are always visible.
- Reframed project cards around objective, work, result and project metadata.
- Preserved the Cyril Gupta social growth figures already present in the source.
- Preserved the Itfits SEO project without inventing quantitative metrics.
- Preserved the Heritage Fashion Hub traffic/sales figures but omitted the contradictory `20% ROAS` statement.
- Rewrote the African XR description to remove speculative “potentially” delivered features.
- Removed the Hope for Paws case study from the main selection rather than increasing dependence on an unverified third-party brand claim.

## Testimonials
- Reduced the section to three more specifically attributed testimonials already present in the source.
- Normalized pronouns and wording while preserving the original meaning.
- Removed stock testimonial photography and replaced it with accessible initials avatars.

## Contact and functionality
- Rebuilt the Web3Forms form handler to bind to the actual form.
- Added in-page loading, success and error states.
- Added a direct email fallback if Web3Forms fails.
- Added `tel:` and `mailto:` links.
- Connected hero/footer social links to the real URLs already present in the source.
- Removed the dead Download CV action because no CV file was supplied.
- Added a real privacy notice.

## Accessibility
- Changed document language to English.
- Added a semantic `<main>` landmark and skip links.
- Added visible keyboard focus states.
- Added accessible mobile navigation controls.
- Removed hover-dependent mobile interactions.
- Added `prefers-reduced-motion` handling.
- Improved brand/body text contrast.
- Added useful image dimensions and meaningful alt text.

## Performance
- Reduced the production package from roughly 40 MB to well under 1 MB.
- Reduced the largest portrait asset from about 11 MB to about 140 KB.
- Removed dozens of unused image, font, CSS and JavaScript assets.
- Removed external font and JavaScript dependencies.
- Lazy-loaded the below-the-fold about portrait.

## SEO
- Added a descriptive title and meta description.
- Added canonical URLs.
- Added Open Graph and Twitter Card metadata.
- Added a generated social preview image.
- Added Person structured data with public social-profile links.
- Added `robots.txt` and `sitemap.xml`.
- Created dedicated URLs for three marketing insight articles.

## QA performed
- JavaScript syntax check passed.
- HTML files checked for duplicate IDs.
- Local image references checked for missing files.
- Local links and fragment targets checked.
- Placeholder `href="#"` links eliminated.
- Template-remnant scan performed for old project/template strings.


## Brand identity correction
- Restored the canonical logo from the supplied portfolio as `images/charity-logo.png`.
- Replaced the temporary CN text mark with the real Charity Nkonyedi logo.
- Restored the original brand palette: primary `#d60e81`, purple `#6d117f`, amber `#FFA630`.

- Reduced real logo sizing in navigation/footer and added explicit image dimensions plus CSS cache-busting to prevent the browser from rendering the logo at its 266×205 intrinsic size.

## Brand sizing refinement
- Reduced the primary header logo from 96px to 80px wide.
- Reduced the footer logo from 132px to 108px wide.
- Reduced mobile logo sizing to 72px in the header and 96px in the footer.
## v4 — Mobile UX + form feedback refinement
- Repositioned mobile hero floating cards so they frame the portrait instead of covering the face/eyes.
- Rebuilt mobile navigation as a full-viewport-height off-canvas drawer with smooth side-slide animation.
- Increased mobile menu spacing, hierarchy, CTA prominence, and added backdrop/close/Escape behavior.
- Locks page scroll while the mobile menu is open.
- Added a prominent success state after successful contact-form submission, with a send-another-message action.
- Made Web3Forms response handling more tolerant while preserving failure feedback.


## v5 mobile hero refinement
- Restored the lower audience-growth card to its original mobile position.
- Restored the original compact hero spacing on mobile.
- Moved only the upper “Strategy + execution” card slightly higher to keep it clear of the subject’s eyes.


## v6
- Replaced the Instagram profile link with Threads (`https://www.threads.com/@charity_nkonyedi`) across the site social navigation and structured data.
- Updated the privacy notice social-platform reference from Instagram to Threads.

## v7 — Desktop navigation cleanup
- Removed numeric prefixes from desktop navigation only.
- Retained numbered navigation hierarchy in the mobile off-canvas menu.

## v8 — Mobile drawer control refinement
- Removed the duplicate visible close control on mobile.
- The header hamburger now morphs into a clear X while the drawer is open.
- The same button remains fixed in the same top-right control area, eliminating overlap.
- Added CSS/JS cache-busting query versions for reliable live deployment updates.
