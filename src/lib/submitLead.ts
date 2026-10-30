/**
 * Sends "Partner with us" / "Join the waiting list" submissions to a
 * Google Sheet via a Google Apps Script web app.
 *
 * Setup: see google-apps-script/README.md. Paste the deployed web app URL
 * (ends in /exec) into LEADS_ENDPOINT below.
 */
export const LEADS_ENDPOINT = "PASTE_YOUR_APPS_SCRIPT_EXEC_URL_HERE";

export type LeadType = "partner" | "waitlist";

export interface Lead {
  type: LeadType;
  email: string;
  comment: string;
  consent: boolean;
  /** Honeypot field — real users never fill this in. */
  website?: string;
}

export async function submitLead(lead: Lead): Promise<void> {
  if (!LEADS_ENDPOINT.startsWith("https://script.google.com/")) {
    throw new Error("Form endpoint is not configured yet.");
  }

  // text/plain avoids a CORS preflight, which Apps Script can't answer.
  const res = await fetch(LEADS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      ...lead,
      page: typeof window !== "undefined" ? window.location.pathname : "",
    }),
  });

  if (!res.ok) throw new Error(`Request failed (${res.status})`);

  const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (!data?.ok) throw new Error(data?.error || "Submission failed");
}
