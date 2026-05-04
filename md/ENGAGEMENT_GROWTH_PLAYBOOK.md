# AKDK Engagement and Growth Playbook

Date: 28 April 2026
Owner: Growth + Product + Design + Engineering
Scope: Public website routes under src/app/(landing)

## 1) Main Goal
Increase qualified leads, visitor engagement, and conversion rate by improving:
- Messaging clarity
- Trust depth
- Offer structure
- Conversion flow friction
- Analytics-driven iteration

## 2) North-Star Metrics
Track these weekly:
- Visitor to lead conversion rate
- Contact form start rate
- Contact form submit rate
- Booked call rate
- Case study click-through rate
- Time on page for Home, Services, Projects

## 3) Page-by-Page Implementation (Copy + Specs)

### 3.1 Home (/)
Primary job: Quickly communicate value, proof, and next step.

Sections to add or refine:
1. Hero (above the fold)
- Headline copy:
  Build Conversion-Ready Websites and Apps That Grow Revenue
- Subheadline copy:
  AKDK Digital designs and ships fast, scalable digital products for startups and growth-stage businesses.
- Primary CTA:
  Book a Free Strategy Call
- Secondary CTA:
  See Our Case Studies
- Proof strip:
  Trusted by founders. 50+ launches. Fast delivery.

2. Problem -> Outcome block
- Title:
  If your website looks good but does not convert, it is costing you growth.
- 3 bullets:
  Slow pages reduce trust and lead quality.
  Unclear messaging increases bounce rate.
  Weak UX lowers conversion on mobile.
- Outcome line:
  We fix all three with design, performance engineering, and conversion-first architecture.

3. Why AKDK (Differentiators)
- Card 1 title: Conversion-first design
- Card 2 title: Performance-first engineering
- Card 3 title: Business-first delivery
- CTA under cards:
  Talk to Our Team

4. Featured Case Studies (3)
- Each card must include:
  Client challenge, stack used, measurable result, timeline
- Card CTA text:
  Read Full Case Study

5. Process strip
- Steps: Discover -> Plan -> Design -> Build -> Optimize -> Support
- CTA:
  See How We Work

6. Final CTA band
- Title:
  Want a website that actually drives leads?
- Body:
  Get a free strategy call with a clear roadmap and realistic delivery timeline.
- CTA:
  Book Discovery Call

Specifications:
- Keep one primary CTA color style across all home sections.
- Add social proof near top and near bottom (not only one section).
- Add response promise near CTA: We respond within 24 hours.

---

### 3.2 About Us (/about-us)
Primary job: Build trust through people, story, and credibility.

Sections:
1. Story and mission
- Heading:
  We Build Digital Products With Clarity, Speed, and Accountability
- Body:
  We are a product-focused team helping businesses turn ideas into high-performing digital experiences.

2. Team credibility cards
- Must include:
  Role, specialization, years of experience, notable outcomes

3. Values in action
- Each value must include a concrete example, not abstract text.

4. Milestones timeline
- Include key dates, launches, client growth, capability expansion.

5. CTA
- Primary CTA:
  Start Your Project With AKDK
- Secondary CTA:
  Meet Our Work

Specifications:
- Add one team video or behind-the-scenes clip.
- Include real photos over stock assets.

---

### 3.3 Services Hub (/service)
Primary job: Help users pick the right service quickly.

Sections:
1. Service selector intro
- Heading:
  Choose the right build path for your business stage
- Subheading:
  From websites to mobile apps and SEO, we design for growth and execution speed.

2. Service cards (with qualification hints)
- Website Development: Best for fast trust-building and lead generation
- Mobile Development: Best for product workflows and repeat usage
- E-commerce and CMS: Best for catalog, orders, and self-managed content
- SEO Optimization: Best for sustained inbound acquisition
- Custom Package: Best for mixed or enterprise requirements

3. Compare section
- Columns:
  Timeline, investment range, typical outcomes, best fit

4. CTA
- Primary:
  Get a Service Recommendation
- Secondary:
  Request a Custom Quote

Specifications:
- Add starting price ranges (transparent, non-binding).
- Add expected delivery timelines on every card.

---

### 3.4 Service Detail Pages
Routes:
- /service/website-development
- /service/mobile-development
- /service/ecommerce
- /service/seoptimize
- /service/package

Template to apply on all pages:
1. Hero with service-specific outcome
2. Who this is for
3. Problems solved
4. Deliverables (clear list)
5. Process and timeline
6. Tech stack and quality standards
7. Case snippet (mini proof)
8. FAQ
9. Sticky CTA

Service CTA copy:
- Website Development:
  Build My Conversion Website
- Mobile Development:
  Plan My Mobile App
- E-commerce:
  Launch My Online Store
- SEO:
  Grow My Organic Traffic
- Custom Package:
  Get a Tailored Proposal

Specifications:
- Keep CTA visible in hero and near FAQ end.
- Add expected timeline range and post-launch support details.

---

### 3.5 Projects (/project)
Primary job: Convert portfolio viewing into project inquiry.

Sections:
1. Results-first intro
- Heading:
  Real products shipped with measurable business outcomes

2. Filtered project grid
- Filter by industry and build type.
- Show result chip on each card (example: +38 percent conversion).

3. Case study detail format (mandatory)
- Client problem
- Constraints
- Solution approach
- Stack
- Delivery timeline
- Business results
- Client testimonial

4. CTA
- Primary:
  Discuss a Similar Project
- Secondary:
  Get Cost Estimate

Specifications:
- Implement the missing shopsite case study as full detail page.
- Add before and after comparison visuals where possible.

---

### 3.6 Contact Us (/contact-us)
Primary job: Maximize form completion and qualified lead quality.

Sections:
1. High-intent headline
- Heading:
  Tell us your goals and we will send a practical project roadmap
- Subheading:
  Share a few details. We will respond within 24 hours.

2. Multi-step form
- Step 1: Basic details (name, email, company)
- Step 2: Project type, timeline, budget range
- Step 3: Goals and additional notes

3. Trust side panel
- Includes:
  Typical response time, active project load, support model, contact alternatives

4. Optional conversion boosters
- Free website audit checkbox
- NDA request checkbox

5. CTA text
- Send My Project Details

Specifications:
- Keep first step under 5 fields.
- Add inline validation and clear success state.
- Replace any placeholder phone numbers with real values.

---

### 3.7 Career (/career)
Primary job: Attract quality candidates aligned with company values.

Sections:
1. Why work here
2. Hiring principles
3. Open roles with clear outcomes
4. Application process timeline
5. Team culture proof (photos, short clips)

CTA copy:
- Apply Now
- Talk to the Team

Specifications:
- Add expected review timeline after application submit.

---

### 3.8 Privacy (/privacy) and TMCD (/tmcd)
Primary job: Trust and compliance clarity.

Actions:
- Replace generic placeholders with business-specific legal details.
- Add support contact for privacy and legal requests.
- Add last-updated date and change summary section.

CTA copy:
- Contact Privacy Team
- Contact Legal Team

---

### 3.9 Services Details (/services-details)
Primary job: Prevent user confusion and improve navigation logic.

Decision:
- Either convert into real dynamic service detail route, or
- Deprecate this page and redirect to /service

Recommendation:
- If no unique value, redirect to /service and keep one source of truth.

## 4) Site-Wide Conversion Specifications

1. Unified CTA system
- Primary CTA label pattern: action + value
- Example: Book Free Strategy Call
- Use one visual style for primary CTA across all pages.

2. Trust components on all key pages
- Client logos
- 1 testimonial
- Response-time promise
- Delivery timeline snippet

3. Microcopy standards
- Avoid generic words like innovative and world-class without proof.
- Use measurable and concrete phrases.

4. Mobile conversion
- Sticky bottom CTA on mobile for Home, Services, Project pages.
- Tap targets minimum 44px.

## 5) Analytics Event Specification

Track these events consistently:
- hero_cta_click
- services_card_click
- case_study_click
- project_filter_change
- contact_form_start
- contact_form_step_complete
- contact_form_submit
- schedule_call_click
- faq_expand
- pricing_plan_select

Event properties:
- page
- section
- cta_text
- service_type
- project_category
- device_type
- traffic_source

## 6) Content Engine for Engagement

Monthly publishing plan:
- 2 case-study deep dives
- 2 SEO articles (high intent)
- 1 founder insight post
- 1 product or process post

High-intent article topics:
- Website Cost Breakdown for Startups in 2026
- How to Choose Between Website vs Mobile App First
- SEO vs Paid Ads for Early-Stage Brands
- Common Conversion Mistakes on Agency Websites

## 7) Productivity System (Execution Rhythm)

Weekly sprint rhythm:
- Monday: Metric review and issue prioritization
- Tuesday: Copy and design updates
- Wednesday: Frontend implementation
- Thursday: QA + analytics validation
- Friday: Publish + performance review

Team ownership suggestion:
- Growth owner: Messaging, funnel, experiments
- Designer: Section hierarchy, trust visuals, CTA clarity
- Engineer: Performance, tracking events, implementation
- Founder/reviewer: Final approval for offer and positioning

## 8) 90-Day Rollout Plan

### Days 1-30 (Foundation)
- Finalize homepage messaging and CTA hierarchy
- Add trust strips and case-study outcomes
- Upgrade contact form to multi-step
- Implement baseline event tracking

### Days 31-60 (Conversion Lift)
- Add service comparison section
- Complete all service detail page templates
- Publish 2 case studies and 2 SEO posts
- Launch first 2 A/B tests (hero headline, CTA copy)

### Days 61-90 (Scale)
- Improve project pages with results-first structure
- Standardize legal pages and trust details
- Optimize based on analytics drop-off points
- Launch next 3 A/B tests (form flow, proof placement, CTA format)

## 9) Immediate Action Checklist (This Week)

- [ ] Finalize home hero headline, subheadline, and proof strip copy
- [ ] Add response-time promise near main CTAs
- [ ] Implement full /project/shopsite case study page
- [ ] Replace contact placeholders with real business details
- [ ] Decide keep/remove /services-details and implement redirect if removed
- [ ] Add event tracking for hero_cta_click and contact_form_submit
- [ ] Add one testimonial block on /service and /project
- [ ] Publish one high-intent article draft

---

This playbook should be treated as the active source for content and conversion optimization across the public website.
