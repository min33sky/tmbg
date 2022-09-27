import useOpenAlertDialog from '@/hooks/useOpenAlertDialog';
import Link from 'next/link';
import Logo from './vectors/Logo';

export default function Header() {
  const openDialog = useOpenAlertDialog();

  return (
    <header className="h-20 w-full bg-slate-700 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between bg-slate-700 py-5 px-3 text-white">
        <Link href={'/'}>
          <a aria-label="logo to go home">
            <Logo className="text-white" />
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
