# ODOGWU Profile Card

A premium, highly accessible, and responsive Profile Card component built with modern frontend patterns and semantic HTML.

## 🚀 Features

- **Semantic HTML**: Built using appropriate tags (`<article>`, `<header>`, `<nav>`, `<section>`, `<figure>`) for maximum accessibility and SEO.
- **Dynamic Time**: Displays the current epoch time in milliseconds, updating every 1,000ms.
- **Avatar Management**: Update the profile picture via a URL or by uploading a local image.
- **Responsive Design**: Fluid layout that adapts seamlessly from mobile to desktop using CSS Grid and Flexbox.
- **Accessibility (A11y)**:
  - WCAG AA compliant color contrast.
  - Full keyboard navigation support with visible `:focus-visible` states.
  - `aria-live` regions for dynamic updates.
  - Meaningful, personalized `alt` text and ARIA labels.
- **Premium Aesthetics**: Modern dark theme with glassmorphism, smooth transitions, and high-quality typography.

## 🛠 Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Vanilla CSS with Grid, Flexbox, and Glassmorphism.
- **JavaScript**: Vanilla JS for dynamic updates and state management.
- **Fonts**: Google Fonts (Inter & Outfit).

## 💻 Running Locally

### Option 1: Direct File Access
1. Clone or download this repository.
2. Navigate to the project directory: `ODOGWU-Profile-Card`.
3. Open `index.html` directly in your preferred web browser.

### Option 2: Using a Local Server (Recommended)
For the best experience (especially for certain file protocol restrictions), run a local server:

**Using Python:**
```bash
python -m http.server 8080
```

**Using Node.js (npx):**
```bash
npx serve
```

Once started, navigate to `http://localhost:8080` (or the port specified by your tool).

## 🧪 Testing

### Automated Acceptance Tests
This project includes a `tests.js` file that validates all acceptance criteria. To run:

1. Open `index.html` in your browser.
2. Open DevTools (F12) → Console tab.
3. Copy and paste the contents of `tests.js` into the console, or add the following script tag before `</body>`:
   ```html
   <script src="tests.js"></script>
   ```
4. The test results will be printed in the console with ✅/❌ status for each check.

### What the tests verify
- All 8 required `data-testid` attributes exist.
- Semantic HTML tags are used correctly (`<article>`, `<figure>`, `<nav>`, `<section>`, headings).
- Epoch time in milliseconds is accurate (within a 2-second delta).
- Avatar `<img>` has a descriptive `alt` attribute.
- Social links open in a new tab with `rel="noopener noreferrer"`.
- Hobbies and Dislikes are distinct `<ul>` lists.
- Interactive elements are keyboard-focusable.
- `aria-live` is present on the dynamic time element.

### data-testid Reference

| Element | data-testid |
|---|---|
| Root Card | `test-profile-card` |
| User Name | `test-user-name` |
| Bio | `test-user-bio` |
| Current Time | `test-user-time` |
| Avatar Image | `test-user-avatar` |
| Social Links Container | `test-user-social-links` |
| Hobbies List | `test-user-hobbies` |
| Dislikes List | `test-user-dislikes` |

## 🌐 Live Demo

> **TODO**: Add live URL after deploying to GitHub Pages / Netlify / Vercel.

## 📁 Project Structure

```
ODOGWU-Profile-Card/
├── index.html      # Semantic HTML structure
├── style.css       # Premium responsive styles
├── script.js       # Dynamic time & avatar logic
├── tests.js        # Automated acceptance tests
├── avatar.png      # Default profile avatar
└── README.md       # Documentation
```

---

Built by **Antigravity** for the **Frontend-Tasks** collection.
