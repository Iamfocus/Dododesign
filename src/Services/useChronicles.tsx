"use client";
import { useEffect, useMemo, useState } from "react";
import { getBlogList } from "./getChronicles";
import { debounce } from "./helpers";
import { IPost } from "@/components/Tabs/ChroniclesTabs";
import { usePathname } from "next/navigation";
import { getSavedTab } from "./saveLocalStorage";

export function useChronicles() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<number[]>([]);

  const [singlePost, setSinglePost] = useState<IPost | null>(null);
  const [singlePostLoading, setSinglePostLoading] = useState(true);
  const [singlePostError, setSinglePostError] = useState(null);
  const pathName = usePathname();

  const fetchPosts = async (newPage = 1, search = "", cats: number[] = []) => {
    setLoading(true);
    const catId = getSavedTab().id;
    cats = pathName.includes("/chronicles")
      ? Number(catId) === 0
        ? []
        : [catId]
      : [];

    try {
      const { posts: newPosts, totalPages } = await getBlogList({
        search,
        categories: cats,
        page: newPage,
        per_page: 7, // Load 6 posts at a time
      });

      setHasMore(newPage < totalPages);

      if (newPage === 1) {
        setPosts(newPosts);
      } else {
        setPosts((prev) => [...prev, ...newPosts]);
      }
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSinglePost = async (postId: string) => {
    try {
      setSinglePostLoading(true);
      const { singlePost } = await getBlogList({
        id: postId,
      });

      if (singlePost) {
        setSinglePost(singlePost);
      } else {
        throw new Error("Post not found");
      }
    } catch (err: any) {
      setSinglePostError(err.message);
    } finally {
      setSinglePostLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchPosts();
  }, []);

  const debouncedFetchPosts = useMemo(
    () =>
      debounce((search: string, cats: number[]) => {
        fetchPosts(1, search, cats);
      }, 1000), // 500ms delay
    []
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1);
    debouncedFetchPosts(term, categories);
  };

  // Function to filter by category
  const filterByCategory = (categoryIds: number[]) => {
    setCategories(categoryIds);
    setPage(1);
    fetchPosts(1, '', categoryIds);
  };
  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage, searchTerm, categories);
  };

  return {
    posts,
    loading,
    error,
    handleSearch,
    filterByCategory,
    loadMore,
    hasMore,
    fetchSinglePost,
    singlePost,
    singlePostLoading,
    singlePostError,
  };
}
