import useOpenAlertDialog from '@/hooks/useOpenAlertDialog';
import Link from 'next/link';
import Logo from './vectors/Logo';

export default function Header() {
  const openDialog = useOpenAlertDialog();

  return (
    <header className="sticky top-0 z-20 h-16 w-full bg-zinc-800 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between bg-zinc-800 py-3 px-3 text-white">
        <Link href={'/'}>
          <a aria-label="logo to go home" className="">
            <Logo className="pt-1 text-white transition hover:translate-y-1 hover:text-zinc-200" />
          </a>
        </Link>

        <div className="flex items-center gap-x-2 text-slate-200">
          <Link href={'/posts'}>
            <a>Posts</a>
          </Link>
          <div onClick={() => openDialog('not-ready')}>Menu1</div>
          <div onClick={() => openDialog('not-ready')}>Menu2</div>
        </div>
      </div>
    </header>
  );
}
