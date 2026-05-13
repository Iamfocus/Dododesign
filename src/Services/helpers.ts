export function formatShortDate(isoDateString: string): string {
  const date = new Date(isoDateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const day = date.getDate(); // Get day of month (1-31)
  const monthIndex = date.getMonth(); // Get month index (0-11)

  // Array of month abbreviations
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${day} ${months[monthIndex]}`;
}


// utils/debounce.ts
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  wait: number
): ((...args: Parameters<F>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export function slugify(text:string) {
  return (
    text
      .toString()
      .replace(/&[^;]+;/g, "")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
  );
}

type FeaturedMedia = {
  source_url?: string;
  media_details?: {
    sizes?: {
      medium_large?: { source_url?: string };
      large?: { source_url?: string };
      medium?: { source_url?: string };
      thumbnail?: { source_url?: string };
    };
  };
};

export function getChronicleImageSource(
  featuredMedia?: FeaturedMedia,
  fallbackImage?: string
) {
  return (
    featuredMedia?.media_details?.sizes?.medium_large?.source_url ||
    featuredMedia?.media_details?.sizes?.large?.source_url ||
    featuredMedia?.media_details?.sizes?.medium?.source_url ||
    featuredMedia?.source_url ||
    fallbackImage ||
    "/Images/Chronicles/chr-1.png"
  );
}

export function isRemoteImageSource(src: string) {
  return src.startsWith("http://") || src.startsWith("https://");
}
