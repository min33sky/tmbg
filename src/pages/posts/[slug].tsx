import PostViewer from '@/components/post/PostViewer';
import { QueryKey } from '@/lib/constants';
import getQueryClient from '@/lib/queryClient';
import PostService from '@/services/postService';
import { dehydrate, useQuery } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function PostDetail() {
  const router = useRouter();
  const slug = Array.isArray(router.query.slug)
    ? router.query.slug[0]
    : router.query.slug || '';

  const { data } = useQuery(
    [QueryKey.POST_BY_SLUG, slug],
    () => PostService.getPostBySlug(slug),
    {
      enabled: !!slug,
    },
  );

  if (router.isFallback) {
    return (
      <div className="flex h-screen flex-col bg-slate-800 text-slate-200 ">
        Rendering.....................
      </div>
    );
  }

  if (!data) return <p>데이터가 없어요................ ㅠㅠㅠㅠ</p>;

  return <PostViewer post={data.post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const slugs = await PostService.getAllSlugs();

  // const paths = slugs?.edges.map((edge) => ({
  //   params: {
  //     slug: edge.node.slug,
  //   },
  // }));

  // return {
  //   paths,
  //   fallback: false,
  // };

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params
    ? Array.isArray(params.slug)
      ? params.slug[0]
      : params.slug
    : '';

  if (!slug)
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };

  const isExists = await PostService.isExistsSlug(slug);

  if (!isExists) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery([QueryKey.POST_BY_SLUG, slug], () =>
    PostService.getPostBySlug(slug),
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
