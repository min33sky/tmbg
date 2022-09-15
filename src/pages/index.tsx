import { getPosts } from '@/services/postService';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export default function Home() {
  const { data } = useQuery(['all-posts'], getPosts);

  console.log('data: ', data);

  // useEffect(() => {
  //   const posts = async () => {
  //     const res = await getPosts();
  //     console.log('res', res);
  //   };
  //   posts();
  // }, []);

  return (
    <div className="text-3xl font-bold underline">
      {data?.edges.map((post: any) => (
        <div key={post.cursor}>{post.cursor}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['all-posts'], getPosts, { staleTime: 1000 });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
