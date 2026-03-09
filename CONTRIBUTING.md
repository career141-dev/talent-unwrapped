# Contributing to Talent Unwrapped

Hey! Welcome to the team. This guide will walk you through everything you need
to know to start contributing — from cloning the repo to getting your first PR merged.

---

## 🚀 First Time Setup

**1. Clone the repository**
```bash
git clone https://github.com/career141/talent-unwrapped.git
cd talent-unwrapped
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
# App will be running at http://localhost:5173
```

That's it — you're up and running!

---

## 🌿 Branching Rules

We **never** push directly to `main` or `dev`. Always work on your own branch.

```bash
# Step 1: Make sure your local dev branch is up to date
git checkout dev
git pull origin dev

# Step 2: Create your feature branch
git checkout -b feature/what-you-are-building
# Example: git checkout -b feature/sri-lanka-landing-section
```

> **Branch naming tips:**
> - `feature/` for new functionality
> - `fix/` for bug fixes
> - `refactor/` for code cleanup (no UI changes)

---

## 📁 Where to Put Your Code

| What are you building? | Where does it go? |
| :--- | :--- |
| A new page (new URL/route) | `src/pages/NewPage.tsx` + add route in `App.tsx` |
| A section specific to one feature | `src/features/landing/` or `podcasts/` or `schedule/` |
| A component used on many pages | `src/components/layout/` or `common/` |
| A shared form element | `src/components/forms/` |
| New static data (speakers, episodes) | `src/data/` |

> **Golden rule:** If you're not sure where it goes, ask yourself — "Is this tied to one specific feature, or is it reused everywhere?" That answer tells you.

---

## ✅ Before You Submit a PR

Run these checks locally so the CI doesn't fail:

```bash
# Check for TypeScript errors
npm run type-check

# Check for lint issues
npm run lint

# Make sure the production build works
npm run build
```

If all three pass — you're good to go!

---

## 📬 Submitting a Pull Request

1. Push your branch to GitHub:
   ```bash
   git push origin feature/your-branch-name
   ```

2. Open a Pull Request **into `dev`** (not `main`).

3. Fill in the PR description with:
   - **What** you built or changed
   - **Why** you made this change
   - **Screenshots** if there's any UI involved (very helpful for reviewers!)

4. Wait for a review. A team member will look at it and may leave comments.
   Don't worry — feedback is normal and friendly here!

---

## 🚫 What NOT to Do

- ❌ Don't push directly to `main` or `dev`
- ❌ Don't change styles or layouts unless that's your assigned task
- ❌ Don't put page-specific logic inside `src/components/common/`
- ❌ Don't use `../../../../../../` import paths — use the `@/` alias instead

---

## 💬 Got Questions?

Reach out to the team on Slack or add a comment to the relevant GitHub issue.
We're happy to help!

---

*Made with ❤️ by Career141*
