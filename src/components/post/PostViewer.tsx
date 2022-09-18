import { useDateDistance } from '@/hooks/useDateDistance';
import { Post } from '@/services/postService';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import AdjacentPost from './AdjacentPost';

const RenderRichText = dynamic(() => import('../post/RenderRichText'), {
  ssr: false,
});

interface Props {
  post: Post;
}

export default function PostViewer({ post }: Props) {
  const {
    title,
    author,
    featuredImage,
    content,
    createdAt,
    id,
    categories,
    slug,
  } = post;
  const dateDistance = useDateDistance(createdAt);

  return (
    <article className="mx-auto my-2 flex max-w-3xl flex-col rounded-lg bg-slate-100 py-4 px-6 shadow-lg">
      <header>
        <div>{dateDistance}</div>
        <p>by {author.name}</p>
      </header>
      <figure className="relative h-[50vh] w-full">
        <Image
          src={featuredImage.url}
          alt="featured Image"
          objectFit="contain"
          layout="fill"
          priority={true}
        />
      </figure>

      <h1>{title}</h1>

      <RenderRichText raw={content.raw} />

      {/** @todo: 이전 포스트, 다음 포스트 */}
      <AdjacentPost id={id} category={categories[0].name} />
      {/** @todo: 댓글 */}
    </article>
  );
}
