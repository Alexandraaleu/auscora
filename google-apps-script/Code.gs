/**
 * AUSCORA website leads -> Google Sheet
 *
 * Paste this into Extensions > Apps Script of the Google Sheet that should
 * collect submissions, then deploy as a Web app (see README.md).
 */

const SHEET_NAME = "Leads";
const HEADERS = ["Timestamp", "Type", "Email", "Comment", "Consent", "Page"];

// Optional: get an email for every new submission. Leave "" to disable.
const NOTIFY_EMAIL = "";

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    // Honeypot: bots fill hidden fields. Pretend success, store nothing.
    if (data.website) return json({ ok: true });

    const email = String(data.email || "").trim().slice(0, 255);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: "Invalid email" });
    }
    if (data.consent !== true) {
      return json({ ok: false, error: "Consent is required" });
    }

    const type = data.type === "partner" ? "partner" : "waitlist";
    const comment = String(data.comment || "").trim().slice(0, 1000);
    const page = String(data.page || "").slice(0, 100);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = getSheet();
      // Prefix with ' so values starting with = + - @ are never run as formulas.
      sheet.appendRow([new Date(), type, safe(email), safe(comment), "yes", safe(page)]);
    } finally {
      lock.releaseLock();
    }

    if (NOTIFY_EMAIL) {
      const subject = "New AUSCORA " + (type === "partner" ? "partnership request" : "waitlist signup");
      const body = "Email: " + email + "\nType: " + type + "\n\n" + (comment || "(no comment)");
      MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
    }

    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: "Server error" });
  }
}

// Visiting the /exec URL in a browser shows this — handy to check the deployment.
function doGet() {
  return json({ ok: true, message: "AUSCORA leads endpoint is running" });
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}

function safe(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
