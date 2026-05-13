import { NextResponse } from "next/server";
import {
  getClientIp,
  isRateLimited,
  isSubmissionTooFast,
  submitNewsletterToMailchimp,
} from "../_lib/mailchimp";

const SUBSCRIBE_IP_LIMIT = 5;
const SUBSCRIBE_EMAIL_LIMIT = 3;
const SUBSCRIBE_WINDOW_MS = 60 * 60 * 1000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const honey = String(body.website || "").trim();
    const startedAt = Number(body.startedAt || 0);
    const clientIp = getClientIp(request);

    if (honey) {
      return NextResponse.json({ ok: true });
    }

    if (isSubmissionTooFast(startedAt)) {
      return NextResponse.json(
        { ok: false, error: "Subscription rejected." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { ok: false, error: "Email is required." },
        { status: 400 }
      );
    }

    if (isRateLimited("subscribe-ip", clientIp, SUBSCRIBE_IP_LIMIT, SUBSCRIBE_WINDOW_MS)) {
      return NextResponse.json(
        { ok: false, error: "Too many subscriptions. Please try again later." },
        { status: 429 }
      );
    }

    if (
      isRateLimited("subscribe-email", email, SUBSCRIBE_EMAIL_LIMIT, SUBSCRIBE_WINDOW_MS)
    ) {
      return NextResponse.json(
        { ok: false, error: "Too many subscriptions. Please try again later." },
        { status: 429 }
      );
    }

    await submitNewsletterToMailchimp(email);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to subscribe right now." },
      { status: 500 }
    );
  }
}
