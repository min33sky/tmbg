export const HYGRAPH_URL = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT ?? '';

export const QueryKey = {
  POSTS: 'posts',
  POST: 'post',
  RECENT_POSTS: 'recentPosts',
  RECENT_POSTS_PAGINATION: 'recentPostsPagination',
  ADJACENT_POSTS: 'adjacentPosts',
  POSTS_BY_CATEGORY: 'postsByCategory',
  POSTS_BY_AUTHOR: 'postsByAuthor',
  POSTS_BY_TAG: 'postsByTag',
  POST_BY_SLUG: 'postsBySlug',
  CATEGORIES: 'categories',
  AUTHORS: 'authors',
  TAGS: 'tags',
  POSTS_BY_SEARCH: 'postsBySearch',
} as const;
