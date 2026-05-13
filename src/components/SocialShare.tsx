import { BsArrowRight } from "react-icons/bs";

export const shareToLinkedIn = (articleUrl: string) => {
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    articleUrl
  )}`;
  window.open(linkedInUrl, "_blank", "noopener,noreferrer");
};

export const shareToTwitter = (
  articleTitle: string,
  articleUrl: string,
  articleExcerpt?: string
) => {
  // Function to remove HTML tags
  const cleanExcerpt = (text?: string) => {
    if (!text) return "";
    return text
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/&hellip;/, "...") // Replace ellipsis entity
      .replace(/\s+/g, " ") // Collapse multiple spaces
      .trim();
  };

  const cleanText = `${articleTitle}: ${
    articleExcerpt ? cleanExcerpt(articleExcerpt) : ""
  }`;
  const maxLength = 280 - articleUrl.length - 5; // Allow space for URL and ellipsis

  const tweetText =
    cleanText.length > maxLength
      ? `${cleanText.substring(0, maxLength)}...`
      : cleanText;

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    articleUrl
  )}&text=${encodeURIComponent(tweetText)}`;

  window.open(twitterUrl, "_blank", "noopener,noreferrer");
};

const SocialShareButtons = ({
  articleUrl,
  articleExcerpt,
  articleTitle,
}: {
  articleUrl: string;
  articleExcerpt?: string;
  articleTitle: string;
}) => {
  return (
    <div className="socials w-full flex items-center gap-10 box-border">
      <button
        onClick={() => shareToLinkedIn(articleUrl)}
        className="linkedin w-1/2 py-3 px-6 text-[12px] leading-[100%] flex items-center justify-between border-2 border-dodo-black hover:bg-white cursor-pointer transition-colors"
      >
        <p>LinkedIn</p>
        <BsArrowRight />
      </button>
      <button
        onClick={() => shareToTwitter(articleTitle, articleUrl, articleExcerpt)}
        className="twitter w-1/2 py-3 px-6 text-[12px] leading-[100%] flex items-center justify-between border-2 border-dodo-black hover:bg-white cursor-pointer transition-colors"
      >
        <p>Twitter</p>
        <BsArrowRight />
      </button>
    </div>
  );
};

// Usage example:
{
  /* <SocialShareButtons
  articleUrl="https://example.com/article"
  articleExcerpt="This is an interesting article about..."
  articleTitle="My Awesome Article"
/> */
}

export default SocialShareButtons;
