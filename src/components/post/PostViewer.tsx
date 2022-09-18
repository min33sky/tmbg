import { useDateDistance } from '@/hooks/useDateDistance';
import { Post } from '@/services/postService';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Divider from '../system/Divider';
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
    <article className="mx-auto my-2 flex max-w-3xl flex-col gap-y-1 rounded-lg bg-slate-100 py-4 px-6 shadow-lg">
      <header className="flex items-center justify-between">
        <p>by {author.name}</p>
        <div>{dateDistance}</div>
      </header>

      <figure className="relative h-[50vh] w-full">
        <Image
          src={featuredImage.url}
          alt="featured Image"
          objectFit="cover"
          layout="fill"
          priority={true}
        />
      </figure>

      <h1 className="py-4 text-2xl font-bold">{title}</h1>

      <Divider />

      <RenderRichText raw={content.raw} />

      <Divider />

      <AdjacentPost id={id} category={categories[0].name} />

      {/** @todo: 댓글 */}
    </article>
  );
}
