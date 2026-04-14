# Current Website Content Review

Date: March 18, 2026
Scope: Public website pages under src/app/(landing)

## Executive Summary

- Total reviewed routes: 16
- Complete and usable: 12
- Mostly complete with placeholders: 2
- Incomplete or broken: 2

## Current Page-by-Page Content

| Route | Current Status | What is currently on the page |
|---|---|---|
| / | Complete | Hero section, Why Us, Services overview, Technology stack, Testimonials, CTA |
| /about-us | Complete | Company intro, mission/value sections, team profiles, company stats |
| /service | Complete | Service listing cards with links to service detail pages |
| /service/website-development | Complete | Service hero, web development overview, key features |
| /service/mobile-development | Complete | Service hero, mobile development overview, key features |
| /service/ecommerce | Complete | Service hero, e-commerce/CMS overview, key features |
| /service/seoptimize | Complete | Service hero, SEO overview, key features |
| /service/package | Complete | Service hero, custom package overview, key features |
| /project | Complete | Portfolio/projects carousel with highlighted projects |
| /project/greenagri | Complete | Full case-study style page with project details and visuals |
| /project/shopsite | Incomplete | Placeholder only (shows simple page text) |
| /contact-us | Mostly complete | Contact form, office cards, map embed, intro copy |
| /career | Complete | Hiring page content, benefits, FAQ, apply modal |
| /privacy | Complete (generic) | Basic privacy policy sections and standard legal copy |
| /services-details | Incomplete/Broken | Hardcoded service value; not dynamic; only one markdown service path is rendered |
| /tmcd | Mostly complete | Terms and Conditions page with several sections |

## Detailed Content Notes

### Home (/)
- Uses modern block sections and conversion-oriented structure.
- Hero currently uses Hero2 component, with additional mission/round sections.

### About Us (/about-us)
- Strong storytelling structure with team and credibility metrics.
- Includes founder profiles and trust-building stats.

### Services (/service + service subpages)
- Main services page is complete and links to all service pages.
- Individual service pages follow a consistent template and appear production-ready.

### Projects (/project)
- Portfolio overview is good and includes multiple project cards.
- Greenagri detail page is implemented well.
- Shopsite detail page is not implemented.

### Contact Us (/contact-us)
- Main UX and form are implemented.
- One key placeholder remains in contact info: phone number is shown as +91 XXX XXX XXXX.

### Privacy (/privacy)
- Content is present and readable.
- Copy is mostly generic legal template language and can be made more brand-specific.

### Terms and Conditions (/tmcd)
- Basic legal structure is present.
- Placeholder text remains, including insert jurisdiction and insert URL style values.

### Services Details (/services-details)
- Currently not functioning as a true dynamic details page.
- Service name is hardcoded and route params are not in use.
- Only one service markdown block is effectively rendered.

## Critical Gaps To Fix First

1. Implement or remove /project/shopsite placeholder page.
2. Fix /services-details so service details are dynamic and route-driven, or remove the route.
3. Replace contact placeholder phone number with the real value.
4. Replace legal placeholders in TMCD (jurisdiction, URL references).

## Suggested Next Content Pass

1. Complete missing project detail page content for Shopsite.
2. Decide whether services-details is needed, then either:
   - convert to dynamic route and full content model, or
   - remove and rely on existing individual service pages.
3. Finalize legal pages with exact business details and jurisdiction.
4. Add measurable proof content where possible:
   - project outcomes,
   - client testimonials with attribution,
   - concrete timelines and deliverables for services.

## Source Files Reviewed

- src/app/(landing)/page.tsx
- src/app/(landing)/about-us/page.tsx
- src/app/(landing)/service/page.tsx
- src/app/(landing)/service/website-development/page.tsx
- src/app/(landing)/service/mobile-development/page.tsx
- src/app/(landing)/service/ecommerce/page.tsx
- src/app/(landing)/service/seoptimize/page.tsx
- src/app/(landing)/service/package/page.tsx
- src/app/(landing)/project/page.tsx
- src/app/(landing)/project/greenagri/page.tsx
- src/app/(landing)/project/shopsite/page.tsx
- src/app/(landing)/contact-us/page.tsx
- src/app/(landing)/career/page.tsx
- src/app/(landing)/privacy/page.tsx
- src/app/(landing)/services-details/page.tsx
- src/app/(landing)/tmcd/page.tsx
