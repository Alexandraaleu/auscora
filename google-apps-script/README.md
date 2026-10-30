# Waiting list / partner form → Google Sheets

The form on the Contact page (`/contact`) sends each submission to a Google
Sheet through a small Google Apps Script web app. Setup takes ~5 minutes and
only has to be done once.

## 1. Create the Sheet

1. Create a new Google Sheet (use the shared AUSCORA Google account, e.g.
   auscoradk@gmail.com, so the data doesn't live in someone's personal Drive).
2. Name it something like **AUSCORA website leads**. You don't need to add
   headers — the script creates a `Leads` tab with headers on the first
   submission.

## 2. Add the script

1. In the Sheet: **Extensions → Apps Script**.
2. Delete what's in `Code.gs` and paste in the contents of
   [`Code.gs`](./Code.gs) from this folder.
3. Optional: set `NOTIFY_EMAIL` to an address that should get an email for
   every new submission.
4. Click **Save**.

## 3. Deploy as a web app

1. **Deploy → New deployment**.
2. Click the gear icon → **Web app**.
3. **Execute as:** Me. **Who has access:** Anyone.
4. Click **Deploy** and approve the permissions prompt. Google will warn that
   the app isn't verified — click *Advanced → Go to (project name)*. This is
   your own script, so this is expected.
5. Copy the **Web app URL** (ends in `/exec`). Open it in a browser — you
   should see `{"ok":true,"message":"AUSCORA leads endpoint is running"}`.

## 4. Connect the website

Paste the URL into `src/lib/submitLead.ts`:

```ts
export const LEADS_ENDPOINT = "https://script.google.com/macros/s/XXXX/exec";
```

Commit (or ask Lovable to make that change) and test the form once in each
mode (“Join the waiting list” and “Partner with us”).

## Updating the script later

If you edit `Code.gs`, go to **Deploy → Manage deployments → ✏️ Edit →
Version: New version → Deploy**. This keeps the same URL. Creating a *new*
deployment instead would give you a new URL that has to be pasted into the
site again.

## Privacy (GDPR)

- The form requires a consent checkbox, and the script refuses submissions
  without it.
- Only share the Sheet with people who need it.
- If someone asks to be removed, delete their row.
