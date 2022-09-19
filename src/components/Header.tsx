import useOpenAlertDialog from '@/hooks/useOpenAlertDialog';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const openDialog = useOpenAlertDialog();
  const router = useRouter();

  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between bg-slate-700 py-5 px-2 text-white">
      <Image
        aria-label="link to home page"
        src={'/logo.svg'}
        alt="Logo"
        width={100}
        height={40}
        className="cursor-pointer"
        onClick={() => router.push('/')}
      />

      <div className="flex items-center gap-x-2 text-tahiti-600">
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
        <div onClick={() => openDialog('not-ready')}>Menu1</div>
        <div onClick={() => openDialog('not-ready')}>Menu2</div>
      </div>
    </header>
  );
}
