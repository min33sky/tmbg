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
    const response = await client.request<Post>(query, { slug });
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

export interface Post {
  post: PostClass;
}

export interface PostClass {
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
