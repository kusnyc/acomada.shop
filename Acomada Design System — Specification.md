# Acomada Design System — Specification & Session Record

**Project:** Acomada Design System
**Brand:** Acomada Non-Profit — DAM Asset Management Ltd., BVI
**Date of record:** 18 August 2026
**Namespace (for consuming code):** `window.AcomadaDesignSystem_da3603`

---

## 1. Brief as received

The only input to this project was a two-line company description:

> **Company description:** Acomada Non-Profit
> DAM Asset Management Ltd., BVI

**No other source material was supplied** — no codebase, no Figma file, no slide deck, no screenshots, no logo files, no font binaries, no photography.

### What that means for everything below

Every colour, typeface, spacing value, component and screen in this system was **authored from that description plus the conventions of institutional grantmaking foundations.** It is a coherent, internally consistent starting point — it is **not** a record of an existing brand.

Flagged consequences:

| Area | Status |
|---|---|
| Logo | **None created.** The brand name is set in plain Newsreader wherever a mark would go. Nothing here is an approved mark. |
| Fonts | **Substituted** — Newsreader / Public Sans / JetBrains Mono (Google Fonts) |
| Icons | **Substituted** — Lucide 0.474.0 via unpkg CDN |
| Photography / illustration | **None supplied** — all image slots are labelled dashed placeholders |
| Products | **Inferred** — public site and grantee portal, not recreated from a real product |

---

## 2. Interpretation of the brand

- **Acomada Non-Profit** is treated as a grantmaking foundation working across the Eastern Caribbean, registered in the British Virgin Islands.
- **DAM Asset Management Ltd. (BVI)** is treated as the administrator of the endowment under mandate.
- Reference object for the visual language: **a well-printed annual report, not an app.**

### Products modelled

1. **acomada.org — public site.** Explains what the foundation funds; publishes criteria, deadlines, accounts and governance; takes stage-one grant enquiries; accepts gifts. Audience: prospective grantees, peer funders, regulators, donors.
2. **Grantee portal.** Logged-in surface showing a grantee's grants, payment schedule and reporting obligations, with report filing. Audience: small-organisation staff doing admin between other jobs.

---

## 3. Content fundamentals

**The voice is a trustee writing to a colleague: calm, exact, slightly formal.** Money and obligations are stated plainly; nothing is sold.

- **Person.** "We" for the foundation. "You" / "your organisation" for the reader. Never "I". Never "our team".
- **Casing.** Sentence case everywhere — headings, buttons, table headers. Single exception: the eyebrow / field-group label style, uppercase with 0.11em tracking. Never Title Case Like This.
- **Length.** Headlines under 10 words. Lede under 35 words. Body paragraphs 2–4 sentences, capped at 66 characters per line.
- **Punctuation.** No exclamation marks, ever. Serial commas. Em dashes sparingly. British-leaning spelling ("organisation", "programme"), consistent with BVI registration.
- **Numbers.** Money always with currency and scale: `$48.2m`, `$420,000`, `$25k–$150k`. Dates `31 Mar 2026` in tables, `31 March 2026` in prose. Percentages to one decimal.
- **Emoji: never.** Not in product, not in email, not in status.
- **Buttons** are verb-first and short: "Apply for a grant", "Submit enquiry", "Download filings", "Save changes". Not "Get started", not "Learn more".
- **Status copy** describes state, not feeling: "Action needed", "In review", "Scheduled", "Closed". Confirmation reads as a receipt.
- **Refusals stated up front:** "We do not fund individuals or capital appeals."
- **Vocabulary.** grant, grantee, enquiry, application, disbursement, endowment, trustees, programme officer, mandate, filings. Avoid impact-speak ("moving the needle", "changemakers"), startup verbs ("unlock", "supercharge"), vague generosity language ("giving back").

**Good:** *"Acomada makes long-term, unrestricted grants to organisations working on marine stewardship, education access and community health. We fund fewer partners, for longer."*

**Wrong:** *"We're on a mission to empower changemakers across the Caribbean! 🌊"*

---

## 4. Visual foundations

### 4.1 Colour

Warm neutrals only — the page is warm paper, never white, never a cool grey. Cards are true white and read as pasted-on paper.

| Role | Token | Value | Use |
|---|---|---|---|
| Page | `--warm-50` | `#FBF8F3` | Page background |
| Card | `--white` | `#FFFFFF` | Panels, tables, dialogs |
| Sunken | `--warm-100` | `#F4EFE6` | Wells, table headers |
| Hairline | `--warm-200` | `#E8E1D4` | Dividers, card edges |
| Control border | `--warm-300` | `#D6CDBB` | Inputs, outline buttons |
| Body text | `--warm-800` | `#2E2B26` | Paragraphs |
| **Primary (evergreen)** | `--green-600` | `#14463C` | Primary buttons, headings, app chrome, inverse bands |
| Primary hover / press | `--green-700` / `--green-800` | `#0E332C` / `#09211C` | State ramps |
| **Accent (clay)** | `--clay-500` | `#B5642F` | Giving actions, programme marks, eyebrows |
| **Marker (brass)** | `--brass-500` | `#A6862F` | Active tab rule, focus ring, figures, seals |
| Status — success | `--moss-500` | `#2E6B4F` | Paid, approved, accepted |
| Status — warning | `--brass-500` | `#A6862F` | Awaiting action |
| Status — danger | `--red-500` | `#9B3A2E` | Declined, failed |
| Status — info | `--blue-500` | `#2C5A6B` | Scheduled, informational |

Rules: **status colour is meaning-bearing only**, one badge per row. Clay is never used for status. Brass is never used for icons. **Maximum two background colours per view** (paper plus one evergreen inverse band). **No gradients anywhere. No purple. No colour blends.**

Full ramps (`50`–`900` warm, `50`–`800` green, plus clay, brass, slate-blue, red, moss) live in `tokens/colors.css`; components reference only the semantic aliases in `tokens/semantic.css`.

### 4.2 Typography

| Role | Family | Spec |
|---|---|---|
| Display | Newsreader 300 | 60px / 1.06 / −0.02em — headlines, pull-quotes |
| Title | Newsreader 400 | 38px / 1.2 |
| Heading | Newsreader 400 | 24px / 1.2 |
| Lede | Public Sans 400 | 17px / 1.62, measure 52ch |
| Body | Public Sans 400 | 15px / 1.62, measure 66ch |
| Label | Public Sans 500 | 13px / 1.45 |
| Eyebrow | Public Sans 600 | 12px uppercase, 0.11em tracking, clay |
| Caption | Public Sans 400 | 12px / 1.45 |
| Figures | JetBrains Mono 400 | tabular — **all** money, dates and references |

Scale: 12 · 13 · 15 · 17 · 20 · 24 · 30 · 38 · 48 · 60 · 76px. Headings use `text-wrap: balance`; body uses `text-wrap: pretty`. Mono tabular figures are what make tables and figure bands read as accounts.

**Substitution:** Newsreader ≈ an editorial transitional serif; Public Sans ≈ a civic neutral sans; JetBrains Mono ≈ a plain accounting mono. Chosen for voice, not licensed. Supplying real font files converts `tokens/fonts.css` to local `@font-face` rules.

### 4.3 Layout

- Fixed max-width containers: **640 / 840 / 1080 / 1240px**, centred, 40px page gutter. Content does not stretch to ultrawide.
- Vertical rhythm on a **4px grid**. Sections 96px (`--section-y`), 64px on secondary pages.
- **Fixed elements:** sticky site header (translucent paper + blur); portal sidebar 248px and topbar 68px fixed with scrolling content; toasts fixed bottom-right at 24px inset. Nothing else floats.
- Grids: 3-up programme cards, 4-up figure bands, 2-up editorial splits (1.15fr / 1fr). Form sidebars sticky at 96px from top.
- Control heights: **30 / 38 / 46px**.

### 4.4 Surfaces, borders, radii

- **Radii are shallow:** 2px (badges, checkbox), 3px (tooltip), **5px all controls**, **8px cards / tables / dialogs**, 14px reserved, pill only for tags, switches, radios, avatars. Nothing is a bubble.
- **1px hairlines do the dividing work** (`#E8E1D4`) — card edges, table rows, section separators. Controls take a darker `#D6CDBB`. A **2px brass rule** marks the active or current item.
- **Cards** = white surface + 1px hairline + 8px radius + `--shadow-1`. Interactive hover: `--shadow-2` plus a 1px lift. Never a coloured left border; never a card without a border.

### 4.5 Shadows

Warm, low-opacity, light from directly above — never coloured, never large diffuse glows.

| Token | Use |
|---|---|
| `--shadow-hairline` | Flat outline substitute |
| `--shadow-1` | Resting card |
| `--shadow-2` | Card hover, toast |
| `--shadow-3` | Dialog only |
| `--shadow-inset-field` | 1px inner shadow — inputs read as wells cut into paper |

### 4.6 Transparency & blur

Exactly two uses: the sticky site header (paper at 92% + `saturate(115%) blur(10px)`) and the dialog scrim (evergreen at 42% + the same blur). Text is never placed on a blurred background. **No glassmorphism.**

### 4.7 Motion

- **140ms** control colour/border, **200ms** panels, toggles, toasts, **320ms** dialogs and veils.
- **One curve:** `cubic-bezier(.2,.6,.2,1)`.
- Fades and short position offsets only. **No bounce, no spring, no scale-in, no parallax, no scroll-triggered reveals.**
- `prefers-reduced-motion` zeroes every duration.

### 4.8 Interaction states

| State | Treatment |
|---|---|
| Hover | Darken one ramp step (`green-600 → green-700`); quiet surfaces gain `--surface-hover`. Opacity is never a hover signal. |
| Press | Darken a second step **and** `scale(0.995)` |
| Focus | 2px brass outline, 2px offset — visible on keyboard focus everywhere, including inside dialogs |
| Disabled | 45% opacity, `not-allowed`, no hover response |
| Selected | Evergreen border + `--green-50` fill (Tag), or 2px brass underline (Tabs). Never a solid fill. |

### 4.9 Imagery

Documentary and warm: available light, mid-morning, natural greens and sea blues, faces of people at work. No studio gloss, no heavy filters, no black-and-white; light grain acceptable. Full-bleed only inside inverse bands; elsewhere images sit in 8px-radius frames on the grid. **None supplied — every slot is a labelled placeholder.**

### 4.10 Protection & contrast

Text over imagery uses a solid evergreen panel or a bottom-up evergreen gradient veil — **never** a capsule pill or a blur behind text. Minimum body contrast 4.5:1. `--text-inverse-muted` (72% paper on evergreen) is the lightest permitted body treatment.

---

## 5. Iconography

- **Substituted set: Lucide 0.474.0** from `https://unpkg.com/lucide-static@0.474.0/icons/<name>.svg`. No brand glyph set, icon font or sprite was supplied — **flagged substitution.** Chosen for its even 1.5px stroke and squared terminals, which sit correctly beside a transitional serif.
- **Always use the `Icon` component.** It masks the remote SVG so the glyph inherits `currentColor` — this is why icons tint with their parent and why swapping the whole set later means editing one constant.
- **Sizes:** 14px in small controls, 16px default, 18–22px for programme/feature marks. Never above 24px. No spot icons or icon illustrations.
- **Colour:** icons take adjacent text colour. Clay permitted for programme marks; brass never.
- **House vocabulary:** `landmark`, `file-text`, `download`, `arrow-right`, `arrow-up-right`, `calendar`, `map-pin`, `users`, `sprout`, `scale`, `mail`, `search`, `chevron-down`, `x`, `check`, `external-link`, `info`, `alert-triangle`, `alert-circle`, `heart`, `more-horizontal`.
- **No emoji. No unicode glyphs as icons** (no →, ✓, ★ in copy). No PNG icons. No hand-drawn one-off SVGs — if a glyph is missing, ask rather than draw.
- Icon-only controls are always `IconButton` with a required `label`, plus a Tooltip where meaning isn't obvious from context.

---

## 6. What was built

### 6.1 File map

| Path | Contents |
|---|---|
| `styles.css` | Global entry point — `@import` list only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `semantic.css`, `base.css` (193 tokens) |
| `guidelines/` | 22 foundation specimen cards — groups Colors (6), Type (6), Spacing (3), Brand (7) |
| `components/core/` | Button, IconButton, Icon, Card, Badge, Tag |
| `components/forms/` | Input, Select, Checkbox, Radio, Switch |
| `components/feedback/` | Dialog, Toast, Tooltip |
| `components/navigation/` | Tabs |
| `ui_kits/website/` | acomada.org recreation — `index.html`, `Chrome.jsx`, `HomeScreen.jsx`, `ProgrammesScreen.jsx`, `GovernanceScreen.jsx`, `README.md` |
| `ui_kits/portal/` | Grantee portal recreation — `index.html`, `PortalShell.jsx`, `OverviewScreen.jsx`, `GrantScreen.jsx`, `README.md` |
| `thumbnail.html` | Homepage tile |
| `readme.md` | Full design guide |
| `SKILL.md` | Agent-skill entry point (`acomada-design`) |

### 6.2 Components (15)

Button · IconButton · Icon · Card · Badge · Tag · Input · Select · Checkbox · Radio · Switch · Dialog · Toast · Tooltip · Tabs

Each ships `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (what & when, usage example, variants). Components reference styling only through CSS custom properties.

**Intentional additions:** `Icon` (wrapper over the substituted Lucide set, so the glyph set can be swapped in one place) and the kit-local `StatTile` / `DataTable` helpers in `ui_kits/portal/` (screen furniture, deliberately not promoted to primitives).

### 6.3 UI kits

**acomada.org** — sticky header with brass active underline; hero with display serif and 3:4 image placeholder; evergreen inverse figures band (endowment, granted to date, active grants, median grant length); 3-up programme cards; editorial pull-quote split; notices list; four-column evergreen footer. Interactive: nav switches screens, the stage-one enquiry form fires a success Toast.

**Grantee portal** — split evergreen/paper login; sidebar app shell; four stat tiles; grant table with mono figures and one badge per row; activity feed; programme-officer card; grant record with Tabs across Overview / Payments / Reports / Settings; report submission via Dialog → Toast. Interactive click-through including sign-out back to login.

### 6.4 Verification

Both kits render and click through cleanly against the compiled bundle: nav, enquiry form → Toast, governance tabs, portal login / grant / payments / Dialog / sign-out. No console errors; all `var(--*)` tokens resolve; all three fonts load; Lucide masks resolve on all 12 sampled icons. One card viewport was under-declared and was corrected to `700x500`.

---

## 7. Open questions for the brand owner

1. **Send the real assets:** logo files, licensed font binaries, photography, and any existing site URL, repository, or Figma link.
2. **Is Acomada actually a grantmaking foundation**, and is DAM Asset Management its endowment administrator — or is the relationship something else (sponsor, parent, service provider)?
3. **Which surfaces really exist** — public site, grantee portal, donor reporting, board/investor deck?
4. **Is the restrained institutional direction right**, or should this feel warmer and more human (people-first, photographic, softer)?
5. Should the two UI kits be converted into pickable **templates** for consuming projects?

Until (1) and (2) are answered, treat this document as a proposal.
