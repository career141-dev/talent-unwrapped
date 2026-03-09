# Developer Guide: Project Folder Reorganization

Welcome to the Talent Unwrapped codebase! We have recently transitioned from a deeply nested, "messy" folder structure to a clean, **Feature-Based Architecture**. This guide explains the new structure and why we made these changes.

## 🏗️ The "Refining Plan" (New Architecture)

The project is now organized around **functions** and **features** rather than just pages. This makes it easier to find code and reuse components.

### 1. `src/pages/` (The Routing Entry Points)
- **What it is**: Every file in this folder represents a single route in the app.
- **The Rule**: These files are "containers". They import sections from `features/` and components from `layout/`.
- **Cleanliness**: There are **no subfolders** here. If you need to add a page, add `NewPage.tsx` directly to this folder.

### 2. `src/features/` (The Business Logic)
- **What it is**: This is where the "meat" of the app lives. Components are grouped by what they **do**.
- **Folders**:
  - `landing/`: Hero, Talent Intro, Reels, etc.
  - `podcasts/`: Audio cards, Episode details, Key questions.
  - `schedule/`: Booking forms and schedule-specific UI.
- **The Rule**: If a component is specific to one "feature" of the app, it belongs here.

### 3. `src/components/` (Shared UI)
- **`layout/`**: Global elements that appear on almost every page (Header, Footer, Navigation).
- **`forms/`**: Shared form elements like dropdowns and unified input fields.
- **`common/`**: Atomic, pure elements (Icons, SEO tags, Loading indicators). No business logic here.

## 🚀 Why This is Better

| Issue | Solution |
| :--- | :--- |
| **Messy Nesting** | We removed nested `screens/` and `sections/` folders inside pages. |
| **Complex Imports** | Flattened structure means fewer `../../../../` in your imports. |
| **Naming Consistency** | Pages are always `[Name]Page.tsx`. Features are `[Feature]Section.tsx`. |
| **Discovery** | New developers can see the entire app's scope just by looking at the `features/` folder. |

## 🛡️ Safety & Workflow
- **Rollback**: If you ever need to see the old structure, Check the `src_backup_perfect` directory.
- **Merging**: Features should be developed in their respective `features/` subfolders and then "assembled" in a `Page.tsx`.

---
*This structure ensures that as the Talent Unwrapped project grows (adding new cities or features), the codebase remains scalable and easy to manage.*
