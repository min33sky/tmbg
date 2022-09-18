import { QueryKey } from '@/lib/constants';
import PostService from '@/services/postService';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface Props {
  id: string;
  category: string;
  tags?: string[]; //? not used yet
}

/**
 * 혀재 포스트의 이전 포스트, 다음 포스트를 보여주는 컴포넌트
 * @property {string} id - 포스트의 고유 ID
 * @property {string} category - 포스트의 카테고리
 * @property {string[]} tags - 포스트의 태그 목록
 */
export default function AdjacentPost({ id, category, tags }: Props) {
  const { data } = useQuery([QueryKey.ADJACENT_POSTS, id], () =>
    PostService.getAdjacentPostsByCategory(id, category),
  );

  const prevPost = data?.adjacentPosts.prev[0];
  const nextPost = data?.adjacentPosts.next[0];

  return (
    <article className="my-3 grid grid-cols-1 gap-1 md:grid-cols-2">
      <div className="bg-indigo-100 px-2 py-2 text-sm transition hover:bg-indigo-200">
        {prevPost ? (
          <Link href={`/posts/${prevPost.slug}`}>
            <a className="flex items-center gap-1">
              <ArrowLeftIcon className="h-4 w-4" />
              {prevPost.title}
            </a>
          </Link>
        ) : (
          <p>이전 포스트가 없습니다.</p>
        )}
      </div>
      <div className="bg-indigo-100 px-2 py-2 text-sm transition hover:bg-indigo-200">
        {nextPost ? (
          <Link href={`/posts/${nextPost.slug}`}>
            <a className="flex items-center justify-end gap-1 ">
              {nextPost.title}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </Link>
        ) : (
          <p>다음 포스트가 없습니다.</p>
        )}
      </div>
    </article>
  );
}
