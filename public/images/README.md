# Image Assets

Generated and curated visuals for geneboyle.com editorial pages (Discovery Loop–inspired).

## Folder Structure

```
images/
├── hero/           # Alternate hero backgrounds
├── marketing/      # Services, buyers, sellers, market, contact, etc.
├── neighborhoods/  # Area + 55+ community heroes
├── sections/       # Homepage / interstitial media bands
├── agent/          # Consultation atmosphere
├── properties/     # Featured property-style visuals
├── testimonials/   # (legacy path; reviews use /Image/person*)
└── logos/          # Brand assets (if added)
```

## Source of truth in code

`lib/guides/media.ts` maps every area slug and marketing key to `src` + `alt`.

Components:
- `EditorialVisualHero` — full-bleed page hero
- `EditorialMediaBand` — interstitial full-bleed section image

## Specs

| Folder | Size | Format | Target |
|--------|------|--------|--------|
| hero / neighborhoods / marketing / sections | 1920×1080 | JPEG | ~100–250KB |

## Notes

- Prefer `next/image` with descriptive alt text (location/service).
- Do not invent MLS listing photos here — live inventory stays on RealScout.
