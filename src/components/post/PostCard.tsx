import { useDateDistance } from '@/hooks/useDateDistance';
import { RecentPost } from '@/services/postService';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  post: RecentPost;
}

export default function PostCard({ post }: Props) {
  const { author, createdAt, excerpt, featuredImage, slug, title } = post;
  const dateDistance = useDateDistance(createdAt);

  return (
    <article className="flex flex-col gap-y-1 rounded-md bg-slate-100 py-4 px-2 shadow-lg">
      <Link href={`/post/${slug}`}>
        <a>
          <figure className="relative h-[40vh]">
            <Image
              src={post.featuredImage.url}
              layout="fill"
              objectFit="cover"
              alt="featured Image"
            />
          </figure>
          <h1 className="text-lg font-bold ">{title}</h1>
          <p>{excerpt}</p>
        </a>
      </Link>
      <footer className="flex items-center justify-end gap-x-2">
        <p className="flex items-center gap-x-1">
          <span className="text-sm text-gray-500">by</span>
          {author.name}
        </p>
        <p>{dateDistance}</p>
      </footer>
    </article>
  );
}
