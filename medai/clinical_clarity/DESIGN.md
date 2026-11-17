---
name: Clinical Clarity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#73777e'
  outline-variant: '#c3c7ce'
  surface-tint: '#46617c'
  primary: '#001d33'
  on-primary: '#ffffff'
  primary-container: '#15324b'
  on-primary-container: '#7f9ab8'
  inverse-primary: '#aec9e9'
  secondary: '#006a66'
  on-secondary: '#ffffff'
  secondary-container: '#7bf3ed'
  on-secondary-container: '#006f6b'
  tertiary: '#001e29'
  on-tertiary: '#ffffff'
  tertiary-container: '#053444'
  on-tertiary-container: '#769db0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#aec9e9'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#2e4963'
  secondary-fixed: '#7ef5ef'
  secondary-fixed-dim: '#60d9d3'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504d'
  tertiary-fixed: '#c1e8fd'
  tertiary-fixed-dim: '#a5cce0'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#244b5c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  canvas-bg: '#F5F8FA'
  surface-card: '#FFFFFF'
  priority-critical: '#DC4444'
  priority-high: '#F39A38'
  priority-moderate: '#E8BD45'
  priority-low: '#36A477'
  priority-critical-soft: '#FEE2E2'
  priority-high-soft: '#FFEDD5'
  priority-moderate-soft: '#FEF9C3'
  priority-low-soft: '#DCFCE7'
  viewer-dark: '#0B131B'
  viewer-surface: '#121E2A'
  border-subtle: '#E2E8F0'
  border-focus: '#16A6A1'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
  body-bold:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.375rem
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.125rem
    letterSpacing: -0.01em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
  badge-label:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style
The design system embodies calm authority, clinical precision, and unambiguous decision clarity. Designed specifically for radiologists, oncologists, and attending physicians operating in high-stakes clinical settings, the interface must minimize cognitive friction, eliminate ambiguity, and instill unwavering trust. 

Drawing from modern clinical minimalism and refined ergonomic SaaS movements, the aesthetic balances sterile computational rigor with soft, human-centered usability. AI findings are presented as non-intrusive diagnostic accelerators rather than final authorities: speculative layers remain subordinate to original radiographic ground truth. Surfaces are crisp, daylight-balanced, and restrained, eschewing decorative visual noise in favor of data density, spatial pacing, and absolute legibility.

## Colors
The color architecture strictly reinforces diagnostic hierarchy and clinical safety protocols.

- **Primary (`#15324B`):** Medical Navy commands foundational visual hierarchy—used for primary navigation chrome, dominant interactive CTAs, high-level headers, and structured layout anchors.
- **Secondary (`#16A6A1`):** Deep Clinical Teal functions as the interactive spark, active highlight indicator, and progress pathway. It denotes successful data synchronization, primary toggles, and focus rings.
- **Surface & Canvas:** The background utilizes `#F5F8FA` to prevent ocular strain under clinical lighting conditions, paired with elevated pure white (`#FFFFFF`) cards.
- **Diagnostic Viewer Theme:** Radiologic viewing stages must override the light mode canvas with specialized dark tokens (`viewer-dark` `#0B131B` and `viewer-surface` `#121E2A`) to ensure standard diagnostic DICOM viewing luminance parameters.
- **Priority & Triage Tokens:** Priority colors (`Critical`, `High`, `Moderate`, `Low`) must never appear in isolation without accompanying textual labels and unambiguous iconography. Soft tint counterparts are dedicated strictly to badge backplates, preserving high-contrast text legibility.

## Typography
Typography is strictly optimized for speed of comprehension, diagnostic precision, and fatigue reduction during long review shifts:

- **Headlines (Plus Jakarta Sans):** Geometric yet humanist letterforms provide modern architectural authority to page headers, drawer titles, and clinical card sections.
- **Body & Data Content (Inter):** Leveraged for all narrative clinical summaries, doctor notes, and form controls. The tall x-height and clear distinction between glyphs guarantee legibility across varied clinical display monitors.
- **Identifiers & Numeric Precision (JetBrains Mono):** Reserved for Patient IDs (`PT-20481`), DICOM accession numbers, anatomical coordinates, confidence percentages, and audit logs. The monospaced metric ensures fixed column widths across tables and prevents visual misalignment when comparing longitudinal vital signs or lab values.

## Layout & Spacing
The layout adheres to an 8-point rhythmic grid designed to manage heavy clinical data workloads cleanly across responsive breakpoints.

### Structural Grid & Shell
- **Desktop (1440px+):** Fixed 260px left sidebar navigation, top application bar (64px height), with a fluid 12-column content grid using 24px (`1.5rem`) gutters and 32px (`2rem`) screen margins.
- **Tablet (768px - 1024px):** Sidebar collapses into an 72px icon rail. Grid switches to 8 columns with 16px (`1rem`) gutters. Split diagnostic viewers transition into vertically stacked panes.
- **Mobile (390px - 767px):** Navigation transitions into a fixed bottom action bar. Tables convert into stacked actionable cards. Gutters and outer margins scale down to 16px (`1rem`).

### Rhythm & Alignment
Spacing tokens govern layout breathing room strictly:
- Use `space-xs` (4px) and `space-sm` (8px) for tightly coupled visual units: icon-to-label gaps, chip padding, and field validation messages.
- Use `space-md` (16px) for interior card padding, segmented control gutters, and input stacks.
- Use `space-lg` (24px) for card-to-card gaps and component module separations.
- Use `space-xl` (32px) and `space-2xl` (48px) for distinct operational section blocks.

## Elevation & Depth
Elevation is rendered through clean planar differentiation, razor-thin borders, and delicate ambient shadows rather than heavy artificial drops, guaranteeing that grayscale radiologic scans remain the optical focal point.

- **Level 0 (Flat / Canvas):** Applied to the base canvas (`#F5F8FA`). No shadow, no outline.
- **Level 1 (Card & Module Resting):** Applied to default clinical cards, table containers, and form blocks. Utilizes background `#FFFFFF`, a 1px border of `#E2E8F0`, and an ultra-soft tinted shadow: `box-shadow: 0 1px 3px 0 rgba(21, 50, 75, 0.04), 0 1px 2px -1px rgba(21, 50, 75, 0.03)`.
- **Level 2 (Hover & Interactive Containers):** Applied to hovering case cards, active triage drag items, and interactive viewer controls. Shadow: `box-shadow: 0 4px 12px -2px rgba(21, 50, 75, 0.08), 0 2px 6px -2px rgba(21, 50, 75, 0.04)`.
- **Level 3 (Overlays, Modals, & Flyouts):** Applied to dropdowns, filter menus, override dialogs, and diagnostic zoom viewports. Shadow: `box-shadow: 0 20px 25px -5px rgba(21, 50, 75, 0.12), 0 8px 10px -6px rgba(21, 50, 75, 0.06)`, framed with a 1px `#CBD5E1` boundary.

## Shapes
A roundedness tier of 2 provides a balanced, reassuring, and ergonomic visual frame suitable for contemporary clinical software:

- **Core Containers & Cards:** Configured with a default border-radius of `1rem` (16px). This rounds sharp clinical tables, metric overview cards, and diagnostic stages into friendly, approachable data units.
- **Buttons, Form Controls & Badges:** Use a standardized `0.5rem` (8px) radius, providing crisp tactile affordance for click targets and touch triggers without feeling toy-like.
- **Pills & Indicator Badges:** Full pill radius (`9999px`) is applied strictly to status pills, priority indicators, and simulated tags to immediately communicate categorical meta-information.

## Components

### 1. Priority Chips
- **Design:** Full pill (`9999px`) consisting of an alert icon, bold text label, and color-coded tone.
- **Accessibility Rule:** Color alone must never convey urgency.
- **Tokens:**
  - *Critical:* Background `#FEE2E2`, border `1px solid #DC4444`, text `#B91C1C`, icon `AlertOctagon`.
  - *High:* Background `#FFEDD5`, border `1px solid #F39A38`, text `#C2410C`, icon `AlertTriangle`.
  - *Moderate:* Background `#FEF9C3`, border `1px solid #E8BD45`, text `#A16207`, icon `AlertCircle`.
  - *Low:* Background `#DCFCE7`, border `1px solid #36A477`, text `#15803D`, icon `CheckCircle2`.

### 2. Status Badges
- Compact rectangular pills (`rounded: 6px`, padding `2px 8px`, `badge-label`).
- States:
  - *Uploaded:* Neutral slate fill (`#F1F5F9`), text `#475569`.
  - *Processing:* Light teal tint (`#E6FFFA`), text `#0D9488`, with an animated spinner dot.
  - *Awaiting Review:* Soft amber tint (`#FEF3C7`), text `#D97706`.
  - *Completed:* Muted emerald tint (`#ECFDF5`), text `#059669`.
  - *Needs Further Assessment:* Muted rose tint (`#FFE4E6`), text `#E11D48`.

### 3. Medical Viewer Container
- Fixed 16:9 or full-height split viewport housing dark theme `#0B131B`.
- Integrated floating HUD glass toolbar with frosted backdrop blur (`rgba(18, 30, 42, 0.85)`).
- Tools: Pan, Zoom, Window/Level adjustments, Heatmap intensity slider, Bounding box toggle.
- Non-destructive canvas: AI diagnostic overlays sit on isolated canvas layers, toggled via secondary teal switches.

### 4. Persistent Clinical Disclaimer & Simulation Tags
- **Global Header Banner:** Sticky amber safety bar across all clinical analysis screens: *"AI-assisted decision support. Not a medical diagnosis. All findings must be reviewed and signed by a licensed clinician."*
- **Simulated Tag:** Mandatory amber micro-badge (`#FEF3C7` background, `#92400E` text, `label-code-sm`) bearing `"DEMO / SIMULATED"` pinned to every algorithmic inference metric and heat-map view.

### 5. Buttons & Form Fields
- **Primary Button:** `#15324B` Medical Navy with pure white text, 8px corner radius, transitioning to `#1F4A6F` on hover.
- **Secondary Button:** Outlined `#16A6A1` Teal (1.5px border), transparent background, `#16A6A1` text, shifting to 10% teal opacity on hover.
- **Destructive Button:** High-contrast `#DC4444` solid or ghost outline depending on visual hierarchy tier.
- **Form Controls:** Clean 40px height, `#FFFFFF` fill, `#CBD5E1` border, focusing to a solid 2px outline of `#16A6A1`. Patient identifiers rendered via `label-code`.