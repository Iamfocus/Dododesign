const MAILCHIMP_BASE_URL =
  process.env.MAILCHIMP_BASE_URL ||
  "https://africa.us13.list-manage.com";

const MAILCHIMP_USER_ID =
  process.env.MAILCHIMP_USER_ID || "266db59d1f337de08dc3d4b63";

const MAILCHIMP_LIST_ID =
  process.env.MAILCHIMP_LIST_ID || "23ec87346f";

const MAILCHIMP_FOOTER_FORM_ID =
  process.env.MAILCHIMP_FOOTER_FORM_ID || "00127de9f0";

const MAILCHIMP_CONTACT_GROUP_ID =
  process.env.MAILCHIMP_CONTACT_GROUP_ID || "701133";

const MAILCHIMP_CONTACT_GROUP_VALUE =
  process.env.MAILCHIMP_CONTACT_GROUP_VALUE || "1";

type SubmissionBucket = {
  count: number;
  resetAt: number;
};

const submissionBuckets = new Map<string, SubmissionBucket>();

function getBucketKey(scope: string, value: string) {
  return `${scope}:${value.trim().toLowerCase()}`;
}

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

export function isRateLimited(
  scope: string,
  value: string,
  limit: number,
  windowMs: number
) {
  const key = getBucketKey(scope, value);
  const now = Date.now();
  const bucket = submissionBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    submissionBuckets.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });
    return false;
  }

  if (bucket.count >= limit) {
    return true;
  }

  bucket.count += 1;
  return false;
}

export function isSubmissionTooFast(startedAt: number, minimumMs = 3000) {
  if (!Number.isFinite(startedAt) || startedAt <= 0) {
    return true;
  }

  const elapsedMs = Date.now() - startedAt;
  const maxAgeMs = 24 * 60 * 60 * 1000;

  return elapsedMs < minimumMs || elapsedMs > maxAgeMs;
}

export function containsTooManyLinks(value: string, maxLinks = 2) {
  const links = value.match(/https?:\/\//gi) || [];
  return links.length > maxLinks;
}

export async function submitContactToMailchimp(payload: {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  organization: string;
  country: string;
  message: string;
  jobLevel: string;
}) {
  const formData = new URLSearchParams();
  formData.append("FNAME", payload.firstName);
  formData.append("LNAME", payload.lastName);
  formData.append("TITLE", payload.title);
  formData.append("EMAIL", payload.email);
  formData.append("ORGANIZATION", payload.organization);
  formData.append("COUNTRY", payload.country);
  formData.append("MESSAGE", payload.message);
  formData.append("JOB_LEVEL", payload.jobLevel);
  formData.append("u", MAILCHIMP_USER_ID);
  formData.append("id", MAILCHIMP_LIST_ID);
  formData.append(
    `b_${MAILCHIMP_USER_ID}_${MAILCHIMP_LIST_ID}`,
    ""
  );
  formData.append(
    `group[${MAILCHIMP_CONTACT_GROUP_ID}][${MAILCHIMP_CONTACT_GROUP_VALUE}]`,
    MAILCHIMP_CONTACT_GROUP_VALUE
  );

  const response = await fetch(
    `${MAILCHIMP_BASE_URL}/subscribe/post`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      redirect: "manual",
    }
  );

  if (response.status < 200 || response.status >= 400) {
    throw new Error(`Mailchimp contact submission failed: ${response.status}`);
  }
}

export async function submitNewsletterToMailchimp(email: string) {
  const formData = new URLSearchParams();
  formData.append("EMAIL", email);
  formData.append("u", MAILCHIMP_USER_ID);
  formData.append("id", MAILCHIMP_LIST_ID);
  formData.append("f_id", MAILCHIMP_FOOTER_FORM_ID);
  formData.append(
    `b_${MAILCHIMP_USER_ID}_${MAILCHIMP_LIST_ID}`,
    ""
  );

  const response = await fetch(
    `${MAILCHIMP_BASE_URL}/subscribe/post`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      redirect: "manual",
    }
  );

  if (response.status < 200 || response.status >= 400) {
    throw new Error(`Mailchimp newsletter submission failed: ${response.status}`);
  }
}
