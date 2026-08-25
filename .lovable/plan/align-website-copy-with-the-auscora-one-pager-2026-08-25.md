# Align website copy with the AUSCORA one-pager

The one-pager sharpens the positioning: AUSCORA is an AI-powered platform that detects pulmonary disease **acoustically**, giving physicians clinical decision support without radiation or waiting for imaging. Current site copy still talks about auscultation *training* for students. Update the messaging across the site.

## Homepage (`src/pages/Index.tsx`)

- Badge: "Digital Auscultation Technology" -> "Acoustic AI for Pulmonary Health"
- Headline: "Listen to the Future" as tagline plus H1 "AI-Powered Detection of Pulmonary Disease, Through Sound"
- Subheadline: AUSCORA analyses lung sounds and delivers clinical decision support — no radiation, no waiting for imaging.
- New three-card section after the hero:
  - **The Problem** — COPD, pneumonia and other pulmonary diseases affect hundreds of millions; diagnosis still depends on imaging that is slow, expensive, radiative, and often unavailable at first contact.
  - **Our Approach** — Acoustic AI that learns the sound signature of disease and returns a decision-support signal in the time it takes to auscultate.
  - **The Opportunity** — AI-powered disease diagnosis is already ~USD 4B and growing 20%+ annually.
- New "Where We Are" strip: early-stage with a working prototype · clinical partnership with Hospital Da Luz · validating with physicians.
- Keep the "Partner With Us" CTA and the existing "Supported By" partner logos unchanged.

## About page (`src/pages/About.tsx`)

- Hero subtitle: acoustic AI for pulmonary disease detection.
- "Our Story" text rewritten around the pulmonary-disease problem, the acoustic AI approach, and the Hospital Da Luz clinical partnership.
- Mission/Vision cards updated: mission = make pulmonary diagnosis fast, radiation-free and available at first contact; vision = acoustic intelligence as a standard part of respiratory care.
- Core values: adjust "Precision Engineering" to "Clinically Validated AI" and keep Quality & Safety and Clinical Partnership, with copy referencing the hospital collaboration.

## Careers page (`src/pages/Careers.tsx`)

- Add a note that AUSCORA is open to a **PhD student / research role** alongside the existing engineering opportunity, keeping the same email application flow.

## Head metadata (`index.html`)

- Title and description updated to the acoustic pulmonary-detection positioning, with matching og/twitter tags.

## Not included

- No product gallery, device images, certifications or regulatory claims (pre-product stage).
- No images from the PDF are copied into the site; text only.
- "Hospital Da Luz" is mentioned as a clinical partner in copy only — tell me if you'd like their logo added to the Supported By row.
