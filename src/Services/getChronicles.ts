// getChronicles.ts
import chroniclesCache from "@/Data/chroniclesCache.json";

// export const BASEURL = "https://dododesign.africa/chronicles";
export const BASEURL = "https://admin.dododesign.africa";

export const fallbackCategories = [
  { id: 0, name: "All articles", slug: "all" },
  { id: 8, name: "Team stories", slug: "team-stories" },
  { id: 6, name: "Research tips", slug: "research-tips" },
  { id: 7, name: "Tools", slug: "tools" },
  { id: 5, name: "Case studies", slug: "case-study" },
  { id: 25, name: "Resources", slug: "resources" },
];

const localChronicleImages = [
  "/Images/Chronicles/chr-landScape.png",
  "/Images/Chronicles/chr-1.png",
  "/Images/Chronicles/chr-2.png",
  "/Images/Chronicles/chr-3.png",
];

const fallbackAuthor = {
  avatar_url: {
    url: "/favicon.png",
    url2x: "/favicon.png",
  },
  description:
    "DODO Team shares notes from the studio on research, strategy, fieldwork, and human-centered design practice across African markets.",
  display_name: "DODO Team",
  first_name: "DODO",
  is_guest: 0,
  job_title: "Design Team",
  last_name: "Team",
  slug: "dodo-team",
  term_id: 1,
  user_id: 1,
  user_url: "https://dododesign.africa",
};

const fallbackPosts = [
  {
    id: "1",
    date: "2025-05-27T00:00:00",
    link: "/chronicles/1",
    image: "/Images/Chronicles/chr-landScape.png",
    category: "team stories",
    readTime: "5 mins",
    title: {
      rendered: "Building the Market (and the Capacity) for Impactful Design in Africa",
    },
    wps_subtitle:
      "A look at how DODO approaches design practice, fieldwork, and impact across African markets.",
    description:
      "A look at how DODO approaches design practice, fieldwork, and impact across African markets.",
    excerpt: {
      rendered:
        "<p>A look at how DODO approaches design practice, fieldwork, and impact across African markets.</p>",
    },
    content: {
      rendered:
        "<p>DODO uses research, strategy, and design to help teams understand people's needs and build practical solutions around them. Our work usually starts with listening: spending time with people in context, noticing what they do, and paying attention to the constraints shaping their choices.</p><p>Across markets, the most useful design work comes from translating field evidence into decisions teams can act on. That can mean reframing a product direction, prototyping a new service, or helping stakeholders see a familiar problem through the eyes of the people affected by it.</p><h2>Design Capacity Matters</h2><p>Building the market for impactful design also means building the capacity to practice it well. Researchers, designers, product teams, and organizational leaders all need shared language, practical tools, and the confidence to make decisions from evidence rather than assumptions.</p><p>For us, the work is not only about launching outputs. It is about helping teams build better habits for learning, testing, and responding to real human needs.</p>",
    },
    authors: [fallbackAuthor],
    yoast_head_json: {
      twitter_misc: { "Est. reading time": "5 mins" },
    },
    _embedded: {
      "wp:term": [[fallbackCategories[1]]],
      "wp:featuredmedia": [
        {
          source_url: "/Images/Chronicles/chr-landScape.png",
          alt_text: "DODO Chronicle image",
          featuredMedia: { alt_text: "DODO Chronicle image" },
        },
      ],
    },
  },
  {
    id: "2",
    date: "2025-05-27T00:00:00",
    link: "/chronicles/2",
    image: "/Images/Chronicles/chr-1.png",
    category: "research tips",
    readTime: "5 mins",
    title: {
      rendered: "Building the Market (and the Capacity) for Impactful Design in Africa",
    },
    wps_subtitle:
      "How design teams can strengthen the conditions for useful, evidence-led work.",
    description:
      "How design teams can strengthen the conditions for useful, evidence-led work.",
    excerpt: {
      rendered:
        "<p>How design teams can strengthen the conditions for useful, evidence-led work.</p>",
    },
    content: {
      rendered:
        "<p>Impactful design depends on strong research habits, practical tools, and a clear understanding of the communities being served. A good fieldwork process creates room for surprise while still giving the team enough structure to compare patterns across participants.</p><p>Before entering the field, teams should align on the research questions, recruitment criteria, discussion guides, consent process, and documentation approach. These basics make the difference between scattered notes and insight that can travel across a project team.</p><h2>From Notes to Decisions</h2><p>After fieldwork, the real work is synthesis. Teams need to cluster observations, name tensions, identify repeated behaviors, and connect what they heard to decisions about product, service, policy, or strategy.</p><p>The goal is not to produce research for its own sake. The goal is to make better choices because the team now understands the people and systems involved more clearly.</p>",
    },
    authors: [fallbackAuthor],
    yoast_head_json: {
      twitter_misc: { "Est. reading time": "5 mins" },
    },
    _embedded: {
      "wp:term": [[fallbackCategories[2]]],
      "wp:featuredmedia": [
        {
          source_url: "/Images/Chronicles/chr-1.png",
          alt_text: "DODO Chronicle image",
          featuredMedia: { alt_text: "DODO Chronicle image" },
        },
      ],
    },
  },
  {
    id: "3",
    date: "2025-05-27T00:00:00",
    link: "/chronicles/3",
    image: "/Images/Chronicles/chr-2.png",
    category: "team stories",
    readTime: "5 mins",
    title: { rendered: "Highlight from 2024" },
    wps_subtitle:
      "For us at DODO, the word that comes to mind when we think of 2024 is adventurous.",
    description:
      "For us at DODO, the word that comes to mind when we think of 2024 is adventurous.",
    excerpt: {
      rendered:
        "<p>For us at DODO, the word that comes to mind when we think of 2024 is adventurous.</p>",
    },
    content: {
      rendered:
        "<p>2024 brought new fieldwork, collaborations, and lessons from teams building for real needs across the continent. It stretched our thinking about what it means to design with communities rather than simply for them.</p><p>Some projects asked us to go deeper into health behavior and decision-making. Others focused on financial inclusion, education, and the everyday systems people rely on to get things done.</p><h2>What Stayed With Us</h2><p>The most memorable moments were often small: a participant explaining a workaround, a stakeholder seeing a pattern for the first time, or a prototype test revealing that a simple change could make a service easier to trust.</p><p>Those moments remind us why human-centered design remains valuable. It slows teams down just enough to notice what matters before they build.</p>",
    },
    authors: [fallbackAuthor],
    yoast_head_json: {
      twitter_misc: { "Est. reading time": "5 mins" },
    },
    _embedded: {
      "wp:term": [[fallbackCategories[1]]],
      "wp:featuredmedia": [
        {
          source_url: "/Images/Chronicles/chr-2.png",
          alt_text: "DODO Chronicle image",
          featuredMedia: { alt_text: "DODO Chronicle image" },
        },
      ],
    },
  },
  {
    id: "4",
    date: "2025-05-27T00:00:00",
    link: "/chronicles/4",
    image: "/Images/Chronicles/chr-3.png",
    category: "research tips",
    readTime: "5 mins",
    title: { rendered: "Before Field vs. After Field" },
    wps_subtitle:
      "Exploring the phases of user research fieldwork, from preparation to insight.",
    description:
      "Exploring the phases of user research fieldwork, from preparation to insight.",
    excerpt: {
      rendered:
        "<p>Exploring the phases of user research fieldwork, from preparation to insight.</p>",
    },
    content: {
      rendered:
        "<p>Fieldwork starts long before the first interview and continues through synthesis, sense-making, and decision support. Before fieldwork, the team is usually focused on planning: defining the learning agenda, recruiting participants, preparing tools, and aligning on what success looks like.</p><p>During fieldwork, the posture changes. The team has to stay present, observe carefully, ask better follow-up questions, and document what people actually say and do.</p><h2>After the Field</h2><p>After fieldwork, the work becomes analytical. Notes, recordings, photos, and observations are organized into themes. The team looks for contradictions, patterns, strong quotes, decision points, and opportunities for testing.</p><p>The best research process does not end at a report. It ends when teams can make clearer decisions because the field has changed what they understand.</p>",
    },
    authors: [fallbackAuthor],
    yoast_head_json: {
      twitter_misc: { "Est. reading time": "5 mins" },
    },
    _embedded: {
      "wp:term": [[fallbackCategories[2]]],
      "wp:featuredmedia": [
        {
          source_url: "/Images/Chronicles/chr-3.png",
          alt_text: "DODO Chronicle image",
          featuredMedia: { alt_text: "DODO Chronicle image" },
        },
      ],
    },
  },
];

const stripRemoteImages = (html = "") =>
  html
    .replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi, "")
    .replace(/<img\b[^>]*>/gi, "")
    .trim();

const normalizePostForLocalDev = (post: any, index: number) => {
  const localImage = localChronicleImages[index % localChronicleImages.length];

  return {
    ...post,
    id: String(post.id),
    image: localImage,
    readTime:
      post.yoast_head_json?.twitter_misc?.["Est. reading time"] || "5 mins",
    category:
      post._embedded?.["wp:term"]
        ?.flatMap((terms: any[]) =>
          terms?.filter((term) => term?.taxonomy === "category")
        )?.[0]?.name || "Chronicles",
    description:
      post.excerpt?.rendered?.replace(/<[^>]*>/g, "") ||
      post.wps_subtitle ||
      "",
    content: {
      ...post.content,
      rendered: stripRemoteImages(post.content?.rendered),
    },
    authors:
      post.authors?.length
        ? post.authors.map((author: any) => ({
            ...fallbackAuthor,
            ...author,
            avatar_url: fallbackAuthor.avatar_url,
          }))
        : [fallbackAuthor],
    _embedded: {
      ...post._embedded,
      "wp:featuredmedia": [
        {
          source_url: localImage,
          alt_text:
            post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
            post.title?.rendered ||
            "DODO Chronicle image",
          featuredMedia: {
            alt_text:
              post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
              post.title?.rendered ||
              "DODO Chronicle image",
          },
        },
      ],
    },
  };
};

const localPosts =
  Array.isArray(chroniclesCache) && chroniclesCache.length
    ? chroniclesCache.map(normalizePostForLocalDev)
    : fallbackPosts;

const getFallbackPosts = (params: {
  id?: string;
  search?: string;
  categories?: number[];
  page?: number;
  per_page?: number;
}) => {
  let posts = localPosts;

  if (params.search) {
    const search = params.search.toLowerCase();
    posts = posts.filter((post) =>
      post.title.rendered.toLowerCase().includes(search)
    );
  }

  if (params.categories?.length) {
    posts = posts.filter((post) =>
      post._embedded["wp:term"][0].some((term: { id: number }) =>
        params.categories?.includes(term.id)
      )
    );
  }

  const perPage = params.per_page || posts.length;
  const page = params.page || 1;
  const start = (page - 1) * perPage;

  return {
    singlePost: params.id
      ? localPosts.find((post) => post.id === params.id) || localPosts[0]
      : null,
    posts: params.id ? [] : posts.slice(start, start + perPage),
    totalPages: Math.max(1, Math.ceil(posts.length / perPage)),
  };
};

export const getBlogList = async (params: {
  id?: string;
  search?: string;
  categories?: number[];
  page?: number;
  per_page?: number;
}) => {
  try {
    let url = `${BASEURL}/wp-json/wp/v2/posts${
      params.id ? `/${params.id}?_embed` : "?_embed"
    }`;
    const queryParams = new URLSearchParams();

    // if (params.id) queryParams.append("include", params.id);
    if (params.search) {
        queryParams.append("search", params.search.toLowerCase());
        // quick fix to search posts only by the title
        queryParams.append("search_columns[]", "post_title");
    }
    if (params.categories?.length)
      queryParams.append("categories", params.categories.join(","));
    if (params.page) queryParams.append("page", params.page.toString());
    if (params.per_page)
      queryParams.append("per_page", params.per_page.toString());

    // Properly combine parameters
    url += queryParams.toString() ? `&${queryParams.toString()}` : "";
    const response = await fetch(url, {
      next: { revalidate: 120 },
    });
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const totalPages = response.headers.get("X-WP-TotalPages");
    const data = await response.json();
    return {
      singlePost: params.id ? data : null,
      posts: data,
      totalPages: totalPages ? parseInt(totalPages) : 1,
    };
  } catch (error) {
    return getFallbackPosts(params);
  }
};
