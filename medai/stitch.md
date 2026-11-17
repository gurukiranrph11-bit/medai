# Stitch Prompt: AI-Powered Medical Image Analysis & Clinical Decision Support System

> Paste "Section 1" first to set the design system, then generate each screen using the prompts in Section 3. Use Desktop as the primary device, then ask Stitch to generate Tablet and Mobile variants.

---

## 1. MASTER PROMPT (paste first)

Design a premium, production-ready **healthcare SaaS web application** called **"MediScan AI"**, a clinical decision-support platform for doctors, radiologists, and authorized healthcare staff. It analyzes approved medical images (X-ray, CT, MRI) and clinical CSV datasets to flag potential signs of disease and prioritize patients for professional review.

**Core principle:** AI is assistive only. It never gives confirmed diagnoses. Every AI result needs mandatory doctor review and approval. All AI output in this prototype is labeled **"DEMO / SIMULATED"**.

**Style:** modern healthcare dashboard, clean and minimal, calm and trustworthy, rounded cards (16px radius) with subtle soft shadows, generous whitespace, consistent 8px spacing grid, clear data visualization, accessible contrast (WCAG AA), readable labels.

**Layout:** persistent left sidebar (collapsible, icon + label) and a top bar with global search, notification bell with badge, and user avatar dropdown. Responsive for desktop, tablet, and mobile (sidebar becomes a bottom nav or hamburger drawer on mobile).

### Color palette
| Role | Hex |
|---|---|
| Primary (Medical Navy) | #15324B |
| Secondary (Teal) | #16A6A1 |
| Background | #F5F8FA |
| Cards | #FFFFFF |
| Critical | #DC4444 |
| High | #F39A38 |
| Moderate | #E8BD45 |
| Low | #36A477 |

### Typography
- Headings: **Inter** or **Plus Jakarta Sans**, semibold
- Body: **Inter**, regular, 14-16px
- Data/IDs: tabular numerals, monospace for Patient IDs (e.g., PT-20481)

### Components
- Priority chips (Critical/High/Moderate/Low) with color + icon + text (never color alone)
- Status badges: Uploaded, Processing, Awaiting Review, Completed, Needs Further Assessment
- Stat cards with icon, number, trend arrow
- Data tables with search, filter dropdowns, sortable headers, pagination
- Primary buttons navy, secondary buttons teal outline, destructive red
- Persistent footer/banner: "AI-assisted output. Not a diagnosis. Requires qualified healthcare professional review."
- A small amber "DEMO / SIMULATED" tag on every AI-generated result

### Demo data to use everywhere
Patients PT-20481 to PT-20520, ages 24-82, mixed modalities (Chest X-ray, Brain MRI, Abdominal CT), doctors such as Dr. A. Mehta, Dr. S. Rao, Dr. P. Iyer, radiologist Dr. K. Nair. Realistic dates in November 2026.

---

## 2. NAVIGATION (sidebar items, in order)
1. Dashboard
2. Upload Scan
3. AI Analysis
4. Clinical Datasets
5. Patients
6. Risk Prioritization
7. Reports
8. Notifications
9. Settings / Profile
10. Admin (visible only to administrators)

---

## 3. SCREEN PROMPTS

### Screen 1: Login / Registration
Split layout. Left: navy panel with subtle medical pattern, logo, tagline "Assistive intelligence for faster, safer clinical review", three small trust badges (Encrypted, Audit-logged, Role-based access). Right: white card with tabs **Sign In / Register**.
- Sign In: email, password (show/hide), "Forgot password?" link, Sign In button.
- Register: full name, work email, role dropdown (Doctor, Radiologist, Administrator, Researcher), license/ID number, password with strength meter, consent checkbox.
- Forgot-password state: email field and "Send reset link" confirmation message.
- Footer: clinical disclaimer.

### Screen 2: Main Dashboard
Top: "Good morning, Dr. Mehta" welcome, global search, bell, avatar.
Stats row (4 cards): **Total Cases 1,248**, **Pending Reviews 37**, **High-Priority Cases 12**, **Completed Analyses 1,086**, each with a small trend indicator.
Main grid:
- Patient case distribution chart (bar or donut by modality: X-ray, CT, MRI)
- Risk-level distribution chart (donut with the four priority colors)
- Analysis trends line chart (last 30 days), with 7D / 30D / 90D toggle
- Recent medical cases table (Patient ID, scan type, date, status, priority chip, assigned doctor, "View" button)
- High-priority cases panel (list of Critical/High cases with reason and "Review now")
- Recent AI analysis activity timeline
Chart legends should be interactive filters.

### Screen 3: Upload Medical Image
Two-column layout.
Left: large drag-and-drop zone ("Drag DICOM, PNG, JPG here or Browse files"), upload progress bar, file list with validation status (valid / unsupported format / too large) and remove buttons.
Right: form with Patient ID, Age, Sex, Modality selector (X-ray / CT / MRI as segmented control), Body region, Scan date, Referring doctor, Clinical notes.
Below: image preview thumbnail with zoom, error state example ("Unsupported file type: .gif"), and buttons **Upload & Analyze** and **Save as Draft**.

### Screen 4: AI Image Analysis (hero screen)
**Split-screen** medical viewer.
Left panel (dark viewer area): uploaded chest X-ray, toolbar with zoom in/out, pan, brightness/contrast, **Heatmap overlay toggle**, bounding-box toggle, previous/next image navigation, thumbnail strip.
Right panel (scrollable cards): patient metadata, **AI-Assisted Findings** (list of possible findings with "Possible" language, never "Diagnosis"), abnormality indicators with confidence bars plus an explicit **uncertainty range**, risk priority chip with reason, analysis summary, processing progress stepper (Queued, Preprocessing, Inference, Explainability, Done), model version tag (e.g., "Demo Model v0.3 - SIMULATED").
Doctor review section: notes textarea and buttons **Run Analysis**, **View Findings**, **Generate Report**, **Approve Review**, **Request Further Assessment**.
Top banner: "SIMULATED AI RESULT - requires clinician review."

### Screen 5: Clinical Dataset Analysis
Upload area for CSV. After upload show:
- Dataset overview cards (rows, columns, file size, upload date)
- Data quality score ring
- Missing-value analysis (bar chart per column plus heatmap strip)
- Relevant clinical parameters table (BP, glucose, cholesterol, BMI, age) with min/max/mean/median/std
- Distribution mini-charts
- Potential risk indicators panel (flagged rows or cohorts with plain-language reason)
- Buttons: Clean Data, Export Summary, Send Flagged to Prioritization.

### Screen 6: Patient Management
Full-width table with search bar, filter chips (Modality, Status, Priority, Assigned doctor, Date range), sort controls, bulk actions, pagination.
Columns: Patient ID, Age, Clinical info, Scan type, Upload date, Analysis status, Priority chip, Assigned professional, Actions.
Add a "+ New Case" button and an empty state illustration.

### Screen 7: Case Details
Header with Patient ID, priority chip, status badge, assigned doctor.
Tabs: **Overview, Images, AI Findings, Clinical Data, Reports, Audit Trail**.
Overview shows demographics, history, scan thumbnail gallery, AI summary (SIMULATED), review timeline, and action buttons: Reassign, Change Priority (requires reason), Open in Viewer, Generate Report.

### Screen 8: Risk Prioritization
Kanban-style board with four columns: **Critical, High, Moderate, Low**, each with colored header and count. Case cards show Patient ID, modality, risk indicators, reason for prioritization, and recommended review urgency (e.g., "Review within 1 hour").
Side panel: **Configurable thresholds** (sliders and toggles for rules), with a note "Prioritization supports review order only. It does not determine treatment." Include a "Pending clinical validation" badge, filters, and drag-between-columns with override-reason modal.

### Screen 9: Medical Reports
Left: report list with status (Draft, Pending Review, Approved). Right: structured report preview containing patient and scan information, AI-assisted observations, scan image with highlighted regions, potential abnormalities, risk and uncertainty indicators, recommendations for further professional assessment, and **Doctor Review & Approval** block (signature, timestamp, status).
Toolbar: **Export PDF**, **Print**, **Share**, **Request Edits**. Watermark "DEMO / SIMULATED".

### Screen 10: Notifications
Tabs: All, New Cases, High-Priority, Completed Analysis, Pending Reviews. List items with icon, message, time, unread dot, and quick action ("Open case"). Controls: Mark all as read, filter, notification preferences link.

### Screen 11: User Profile & Settings
Sections: Profile (photo, name, role, license ID, department), Security (change password, 2FA toggle, active sessions), Notification preferences, Display (language, theme), Data privacy (consent, retention preferences). Save and Cancel buttons with a success toast.

### Screen 12: Admin Dashboard
Stats: active users, scans processed, system uptime, storage used.
Tabs/sections:
- **User Management** (table, role dropdown, activate/deactivate, invite user)
- **Access Permissions** (role-permission matrix with toggles)
- **Audit Logs** (timestamped table: user, action, resource, IP, filter/export)
- **Dataset Management** (datasets, versions, retention)
- **Model Version Tracking** (version, status, validation state, deployed date, rollback)
- **System Activity Monitoring** (live charts: API latency, queue, errors)
- **Data Retention** (configurable policy settings)

---

## 4. INTERACTION & STATES
- Every sidebar item, button, tab, filter, chart legend, and table row must have a hover, active, and focus state and lead to a meaningful screen or action.
- Include loading skeletons, empty states, error states, success toasts, and confirmation modals (Approve Review, Change Priority, Delete).
- Mandatory review flow: **Uploaded, AI Processed, Awaiting Doctor Review, Approved / Further Assessment Requested**. Reports cannot be marked final without doctor approval.
- Keyboard accessible, visible focus rings, ARIA-friendly labels, minimum 4.5:1 contrast.

## 5. SAFETY & COMPLIANCE COPY (include in UI)
- Persistent banner: "AI-assisted decision support. Not a medical diagnosis. All findings must be reviewed by a qualified healthcare professional."
- Tag every AI result "DEMO / SIMULATED".
- Footer note: "Prototype uses synthetic data. No real patient data."
- Privacy indicators: Encrypted in transit and at rest, Audit logging enabled.

## 6. RESPONSIVE RULES
- **Desktop (1440px):** full sidebar, multi-column grids.
- **Tablet (768px):** collapsed icon sidebar, 2-column cards, viewer stacks above findings.
- **Mobile (390px):** bottom nav, single column, tables become stacked cards, viewer full-width with findings in a bottom sheet.

## 7. FINAL OUTPUT EXPECTATION
A polished, consistent, fully responsive set of 12 screens that looks like a real production healthcare SaaS product, suitable for a hackathon or startup demo, with a cohesive navy and teal identity and clear priority color-coding.

---

## 8. (Optional) Tech stack note for the build phase after Stitch export
- Frontend: Next.js + Tailwind CSS, reusable components
- Backend: FastAPI (Python) REST API, role-based auth (JWT)
- Database: PostgreSQL
- AI: clearly labeled simulated inference service (swap for a validated model later)
- Deploy: Vercel (frontend) + Render/Railway (backend), submit GitHub repo and deployed URL before the clock ends
