import PostCard from '@/components/post/PostCard';
import Button from '@/components/system/Button';
import useInfinityScroll from '@/hooks/useInfinityScroll';
import { QueryKey } from '@/lib/constants';
import getQueryClient from '@/lib/queryClient';
import PostService from '@/services/postService';
import { dehydrate, useInfiniteQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { useCallback, useRef } from 'react';

export default function PostsPage() {
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery(
    [QueryKey.RECENT_POSTS_PAGINATION],
    ({ pageParam = null }) =>
      PostService.getCursorBasedPagination(pageParam, 4),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.postsConnection.pageInfo.hasNextPage) return null;
        return lastPage.postsConnection.pageInfo.endCursor;
      },
    },
  );

  const fetchNext = useCallback(() => {
    if (!hasNextPage) return;
    fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const posts = data?.pages.flatMap((page) => page.postsConnection.edges);

  useInfinityScroll(loadMoreRef, fetchNext);

  return (
    <>
      <div className="mx-auto my-2 grid w-full max-w-2xl grid-cols-1 gap-2 px-2  md:grid-cols-2 md:px-0">
        {posts?.map((post) => (
          <PostCard key={post.cursor} post={post.node} />
        ))}
      </div>
      <div
        aria-label="Load More"
        className="h-8 w-full bg-red-500 text-white"
        ref={loadMoreRef}
      >
        {isFetching ? (
          <p>Loading...........</p>
        ) : (
          <p>Last Page..............</p>
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(
    [QueryKey.RECENT_POSTS_PAGINATION],
    () => PostService.getCursorBasedPagination(null, 4),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
