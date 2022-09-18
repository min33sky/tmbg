import PostCard from '@/components/post/PostCard';
import Button from '@/components/system/Button';
import { QueryKey } from '@/lib/constants';
import getQueryClient from '@/lib/queryClient';
import PostService from '@/services/postService';
import {
  dehydrate,
  useInfiniteQuery,
  useQueries,
  useQuery,
} from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { useCallback, useEffect, useState } from 'react';

/**
 * TODO: 모든 포스트를 페이지네이션으로 보여줄 수 있도록 구현
 */
export default function Posts() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery(
    [QueryKey.RECENT_POSTS_PAGINATION],
    ({ pageParam = null }) =>
      PostService.getCursorBasedPagination(pageParam, 3),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.postsConnection.pageInfo.hasNextPage) return null;
        return lastPage.postsConnection.pageInfo.endCursor;
      },
    },
  );

  // console.log('paginationData', data);

  const fetchNext = useCallback(() => {
    if (!hasNextPage) return;
    fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const posts = data?.pages.flatMap((page) => page.postsConnection.edges);
  console.log('posts', posts);

  return (
    <div className="mx-auto my-2 grid w-full max-w-2xl grid-cols-1 gap-2 px-2  md:grid-cols-2 md:px-0">
      {posts?.map((post) => (
        <PostCard key={post.cursor} post={post.node} />
      ))}
      <Button disabled={!hasNextPage} onClick={fetchNext}>
        더보기
      </Button>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(
    [QueryKey.RECENT_POSTS_PAGINATION],
    () => PostService.getCursorBasedPagination(null, 3),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
