import { HYGRAPH_URL } from '@/lib/constants';
import { gql, GraphQLClient, request } from 'graphql-request';

const client = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    // Authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
  },
});

export const getPosts = async () => {
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
};
