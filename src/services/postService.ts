import { HYGRAPH_URL } from '@/lib/constants';
import { gql, GraphQLClient, request } from 'graphql-request';

const client = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    // Authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
  },
});

const PostService = {
  /**
   * Get all posts
   */
  async getAllPosts() {
    const query = gql`
      query AllPostsQuery {
        postsConnection(orderBy: createdAt_DESC) {
          edges {
            cursor
            node {
              createdAt
              excerpt
              id
              slug
              title
              featuredImage {
                url
              }
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              categories {
                name
                slug
              }
              content {
                html
                json
                markdown
                raw
                text
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
            pageSize
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `;

    const result = await client.request(query);
    return result.postsConnection;
  },

  /**
   * 최근 포스트 가져오기
   * @param limit 가져올 포스트 수
   */
  async getRecentPosts(limit: number) {
    const query = gql`
      query GetRecentPosts($first: Int!) {
        posts(orderBy: createdAt_DESC, first: $first) {
          id
          title
          slug
          excerpt
          featuredImage {
            url
          }
          author {
            name
          }
          createdAt
        }
      }
    `;

    const response = await client.request<RecentPosts>(query, {
      first: limit,
    });
    return response;
  },

  /**
   * Get post by slug
   * @param slug slug
   */
  async getPostBySlug(slug: string) {
    const query = gql`
      query GetPostDetailQuery($slug: String!) {
        post(where: { slug: $slug }) {
          id
          createdAt
          excerpt
          slug
          title
          featuredImage {
            url
          }
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          categories {
            name
            slug
          }
          content {
            raw
          }
        }
      }
    `;
    const response = await client.request<PostResult>(query, { slug });
    return response;
  },

  /**
   * Get All Slugs
   */
  async getAllSlugs() {
    const query = gql`
      query getSlugs {
        postsConnection(orderBy: createdAt_DESC) {
          edges {
            cursor
            node {
              slug
            }
          }
        }
      }
    `;

    const response = await client.request<AllSlugs>(query);
    return response.postsConnection;
  },

  /**
   * get Adjacent Posts (prevPost, nextPost)
   * @param id
   * @param category
   */
  async getAdjacentPostsByCategory(id: string, category: string) {
    const query = gql`
      query getAdjacentPostsByCategory($id: String!, $category: String!) {
        adjacentPosts: category(where: { name: $category }) {
          prev: posts(first: 1, after: $id) {
            id
            slug
            title
          }
          next: posts(last: 1, before: $id) {
            id
            slug
            title
          }
        }
      }
    `;

    const response = await client.request<AdjacentPostsByCategory>(query, {
      id,
      category,
    });
    return response;
  },

  // TODO: 아직 미구현

  async getSimilarPosts() {
    const query = gql`
      query GetSimilarPostsQuery($slug: String!, $categories: [String!]) {
        posts(
          where: {
            slug_not: $slug
            AND: { categories_some: { slug_in: $categories } }
          }
          first: 3
          orderBy: createdAt_DESC
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
  },

  async getPostsWithPagination() {
    const query = gql`
      query PaginationPostsQuery($first: Int!, $skip: Int!) {
        postsConnection(orderBy: createdAt_DESC, first: $first, skip: $skip) {
          edges {
            node {
              id
              title
              slug
              createdAt
              excerpt
              featuredImage {
                url
              }
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              categories {
                name
                slug
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
            pageSize
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `;
  },

  async getFeaturedPosts() {
    const query = gql`
      query GetFeaturedPost {
        posts(where: { featuredPost: true }) {
          title
          slug
          createdAt
          featuredImage {
            url
          }
          author {
            name
            photo {
              url
            }
          }
        }
      }
    `;
  },

  async getTagtemp() {
    const query = gql`
      query GetTagWithPostsQuery {
        tags {
          name
          posts {
            slug
          }
        }
      }
    `;
  },

  async getCursorBasedPagination() {
    const query = gql`
      query CursorBasedPaginationQuery($cursor: String!, $first: Int!) {
        postsConnection(
          after: $cursor
          first: $first
          orderBy: createdAt_DESC
        ) {
          edges {
            cursor
            node {
              slug
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
            pageSize
          }
        }
      }
    `;
  },

  async getKeyword() {
    const query = gql`
      query SearchKeywordQuery($keyword: String!) {
        postsConnection(where: { title_contains: $keyword }) {
          edges {
            cursor
            node {
              id
              title
              slug
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
            pageSize
          }
        }
      }
    `;
  },
};

export default PostService;

export interface RecentPosts {
  posts: RecentPost[];
}

export interface RecentPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  author: Author;
  createdAt: Date;
}

export interface AllSlugs {
  postsConnection: {
    edges: {
      cursor: string;
      node: {
        slug: string;
      };
    }[];
  };
}

export interface PostResult {
  post: Post;
}

export interface Post {
  id: string;
  createdAt: Date;
  excerpt: string;
  slug: string;
  title: string;
  featuredImage: FeaturedImage;
  author: Author;
  categories: Category[];
  content: Content;
}

export interface Author {
  bio: string;
  id: string;
  name: string;
  photo: FeaturedImage;
}

export interface FeaturedImage {
  url: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Content {
  raw: Raw;
}

export interface Raw {
  children: RawChild[];
}

export interface RawChild {
  type: Type;
  children: ChildChild[];
}

export interface ChildChild {
  text: string;
}

export enum Type {
  CodeBlock = 'code-block',
  HeadingTwo = 'heading-two',
  Paragraph = 'paragraph',
}

// Generated by https://quicktype.io

export interface AdjacentPostsByCategory {
  adjacentPosts: AdjacentPosts;
}

export interface AdjacentPosts {
  prev: AdjacentPost[];
  next: AdjacentPost[];
}

type AdjacentPost = Pick<Post, 'id' | 'slug' | 'title'>;
