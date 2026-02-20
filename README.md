# Kristina Stasi — Personal Website

A React + Vite static site rebuilt from the original kristinastasi.com.

## Pages
- **Home** — Hero landing with her name and tagline
- **About** — Bio, performance groups, and résumé link
- **Sound Healing** — Overview of her sound healing practice
- **Shows** — Her three performing groups (Newport, DMXX, 29th Street Revue)
- **Connect** — Social links + contact form

---

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
# Output goes to /dist
```

---

## Deploying to Render (Static Site)

1. Push this folder to a GitHub repo
2. Go to [render.com](https://render.com) and click **New → Static Site**
3. Connect your GitHub repo
4. Set these settings:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click **Create Static Site**

Render will automatically deploy on every push to your main branch.

---

## Connecting the Contact Form

The contact form is a placeholder. To make it functional:

**Option A — Formspree (easiest)**
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a form and get your form ID (looks like `xabcdefg`)
3. In `App.jsx`, replace the `handleSubmit` function with:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (res.ok) setSubmitted(true);
};
```

**Option B — Netlify Forms**
If you move hosting to Netlify, add `data-netlify="true"` to the form tag and it works automatically.

---

## Customization Notes

- **Fonts:** Playfair Display (headings) + Raleway (body) loaded from Google Fonts
- **Colors:** Deep purple/indigo palette — edit the CSS color values in `App.jsx` to change
- **Logo image:** Currently uses initials "KS" — replace with `<img>` tag pointing to the SVG logo once you have the file
- **Show dates:** Update the shows in the `ShowsPage` component with current dates/venues
