
export const getCanonicalUrl = (url: string) => {
  // In development, use your production URL
  if (process.env.NODE_ENV === "development") {
    return "https://dododesign.africa" + new URL(url).pathname;
  }
  return url.split("?")[0].split("#")[0];
};