export const saveTab = (categoryId: number, categoryName: string) => {
  localStorage.setItem(
    "tab",
    JSON.stringify({ id: categoryId, name: categoryName })
  );
};

export const getSavedTab = () => {
  if (typeof window === "undefined") {
    return { id: 0, name: "All articles" };
  }

  try {
    const savedTab = localStorage.getItem("tab");
    if (!savedTab) {
      return { id: 0, name: "All articles" };
    }

    const parsedTab = JSON.parse(savedTab);
    const parsedId = Number(parsedTab?.id) || 0;
    const localCategoryIds = [0, 5, 6, 7, 8, 25];

    if (
      process.env.NODE_ENV === "development" &&
      !localCategoryIds.includes(parsedId)
    ) {
      localStorage.removeItem("tab");
      return { id: 0, name: "All articles" };
    }

    return {
      id: parsedId,
      name: parsedTab?.name || "All articles",
    };
  } catch {
    localStorage.removeItem("tab");
    return { id: 0, name: "All articles" };
  }
};
