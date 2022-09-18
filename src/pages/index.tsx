import PostCard from '@/components/post/PostCard';
import { QueryKey } from '@/lib/constants';
import getQueryClient from '@/lib/queryClient';
import PostService from '@/services/postService';
import { dehydrate, useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data } = useQuery([QueryKey.RECENT_POSTS], () =>
    PostService.getRecentPosts(5),
  );

  return (
    <div className="mx-auto my-2 grid w-full max-w-2xl grid-cols-1 gap-2 px-2  md:grid-cols-2 md:px-0">
      {data?.posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery([QueryKey.RECENT_POSTS], () =>
    PostService.getRecentPosts(5),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
