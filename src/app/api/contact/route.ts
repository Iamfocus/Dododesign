import { NextResponse } from "next/server";
import {
  containsTooManyLinks,
  getClientIp,
  isRateLimited,
  isSubmissionTooFast,
  submitContactToMailchimp,
} from "../_lib/mailchimp";

const CONTACT_IP_LIMIT = 5;
const CONTACT_EMAIL_LIMIT = 3;
const CONTACT_WINDOW_MS = 60 * 60 * 1000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const title = String(body.title || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const organization = String(body.organization || "").trim();
    const country = String(body.country || "").trim();
    const message = String(body.message || "").trim();
    const jobLevel = String(body.jobLevel || "").trim();
    const consent = Boolean(body.consent);
    const honey = String(body.companyWebsite || "").trim();
    const startedAt = Number(body.startedAt || 0);
    const clientIp = getClientIp(request);

    if (honey) {
      return NextResponse.json({ ok: true });
    }

    if (isSubmissionTooFast(startedAt)) {
      return NextResponse.json(
        { ok: false, error: "Submission rejected." },
        { status: 400 }
      );
    }

    if (
      !firstName ||
      !lastName ||
      !title ||
      !email ||
      !organization ||
      !jobLevel ||
      !consent
    ) {
      return NextResponse.json(
        { ok: false, error: "Please complete the required fields." },
        { status: 400 }
      );
    }

    if (containsTooManyLinks(`${title} ${organization} ${message}`)) {
      return NextResponse.json(
        { ok: false, error: "Submission rejected." },
        { status: 400 }
      );
    }

    if (isRateLimited("contact-ip", clientIp, CONTACT_IP_LIMIT, CONTACT_WINDOW_MS)) {
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    if (
      isRateLimited("contact-email", email, CONTACT_EMAIL_LIMIT, CONTACT_WINDOW_MS)
    ) {
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    await submitContactToMailchimp({
      firstName,
      lastName,
      title,
      email,
      organization,
      country,
      message,
      jobLevel,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to send message right now." },
      { status: 500 }
    );
  }
}
