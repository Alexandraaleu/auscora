# Add Three New Partner Logos to "Supported By" Section

## Goal
Add the three newly uploaded logos next to the existing five partner logos in the homepage's "Supported By" section:

1. **BioInnovation Institute** (image-7.png)
2. **Christian Nielsens Fond** (image-8.png)
3. **Otto Mønsted Fond** (image-9.png)

## Changes

### 1. Upload logos as CDN assets
Use `lovable-assets create` from `/mnt/user-uploads/` to create asset pointers in `src/assets/partners/`:
- `bioinnovation.png.asset.json`
- `christian-nielsens-fond.png.asset.json`
- `otto-monsted-fond.png.asset.json`

No binary files are copied into the repo — only `.asset.json` pointers.

### 2. Update `src/pages/Index.tsx`
- Add three imports for the new asset pointers.
- Extend the `partners` array with the three new entries (name + logo), keeping the existing five (DTU Skylab, Mikrolegat, SDU RIO, TechBBQ, Web Summit).
- The existing flex-wrap layout, grayscale-to-color hover, and sizing apply automatically to the new logos.

## Result
The homepage "Supported By" section shows 8 partner logos in a responsive wrapped row, styled identically.
