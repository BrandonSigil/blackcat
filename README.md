# Black Cat Barber - Website

The official website for **Black Cat Barber**, a family-owned barbershop in Gig Harbor, WA.

Live at [blackcatbarber.com](https://blackcatbarber.com)

## What This Site Is Built With

- **Astro** — A modern static site generator. The site is pre-built into plain HTML/CSS/JS files, which makes it extremely fast and cheap to host.
- **Tailwind CSS + DaisyUI** — Handles all the styling. Tailwind is a utility-based CSS framework and DaisyUI adds pre-built components on top of it.
- **Umami** — Privacy-friendly analytics (no cookies, GDPR compliant). Tracks page views and visitor stats.

## Third-Party Services

- **Gumroad** — Handles merch purchases. Product links in the Shop section point to Gumroad checkout pages.
- **Printful** — Print-on-demand fulfillment. When someone buys a shirt through Gumroad, Printful prints and ships it.
- **Google Maps** — Embedded map on the Contact section showing the shop location.
- **Google Fonts** — Loads the Zalando Sans font family used across the site.

## Project Structure

```text
src/
├── components/    UI sections (Header, Hero, Team, Services, Shop, Contact, Footer, etc.)
├── data/          JSON files for team members and shop products
├── images/        Site images (backgrounds, team photos, Felix logo)
├── layouts/       Base HTML layout (head tags, SEO, analytics)
├── pages/         Site pages (just index.astro — it's a single-page site)
└── styles/        Global CSS
public/            Static files served as-is (favicon, OG image)
```

## How to Run Locally

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher), then:

```sh
# Install dependencies
npm install

# Start the dev server (opens at http://localhost:4321)
npm run dev
```

## How to Build for Production

```sh
# Build the site (outputs to ./dist/)
npm run build

# Preview the production build locally
npm run preview
```

The `dist/` folder contains the final site files that get deployed to your hosting provider.

## Updating Content

- **Team members** — Edit `src/data/team.json` and add/replace photos in `src/images/team/`
- **Shop products** — Edit `src/data/shirts.json` (or similar) and update Gumroad links
- **General text/layout** — Edit the `.astro` files in `src/components/`
