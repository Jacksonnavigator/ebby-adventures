# Ebby Adventures & Safaris — Full React Website

A complete multi-page React website modelled on safari.com's layout, populated with Ebby Adventures & Safaris content.

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Destinations (listing) | `/destinations` |
| Destination detail | `/destinations/:slug` (serengeti, ngorongoro, tarangire, lake-manyara, zanzibar, selous) |
| Experiences (listing) | `/experiences` |
| Experience detail | `/experiences/:slug` (wildlife-safari, kilimanjaro, zanzibar-beach, cultural-tours, family-safari, honeymoon) |
| Itineraries (listing) | `/itineraries` |
| Itinerary detail | `/itineraries/:slug` (6 full itineraries) |
| Kilimanjaro | `/kilimanjaro` |
| About | `/about` |
| Contact | `/contact` |

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Deploy

**Netlify (easiest):**
1. Run `npm run build`
2. Drag the `dist/` folder to netlify.com/drop

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**cPanel / shared hosting:**
1. Run `npm run build`
2. Upload contents of `dist/` to `public_html/`
3. Add `.htaccess` for SPA routing:
```
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Company Info (editable in src/data/siteData.js)
- Phone: +255 627 619 124
- Email: info@ebbyadventuresandsafaris.co.tz
- WhatsApp: https://wa.me/255627619124
- Location: Arusha, Tanzania

## Enquiry Form

The planning form works without a backend. It validates the visitor's contact details, then opens a pre-filled email to Ebby Adventures & Safaris and also offers a pre-filled WhatsApp message as a fallback.

## Included Deployment Files

- `public/_redirects` keeps React routes working on Netlify-style hosting.
- `public/.htaccess` keeps React routes working on Apache / cPanel hosting.
- `public/robots.txt` allows search engines to crawl the public site.
