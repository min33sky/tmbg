import useOpenAlertDialog from '@/hooks/useOpenAlertDialog';
import Link from 'next/link';
import TmbgLogo from './vectors/Logo';

export default function Header() {
  const openDialog = useOpenAlertDialog();

  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between bg-slate-700 py-5 px-2 text-white">
      <Link href={'/'}>
        <a aria-label="logo to go home">
          <TmbgLogo className="text-slate-200" />
        </a>
      </Link>

      <div className="flex items-center gap-x-2 text-slate-200">
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
        <div onClick={() => openDialog('not-ready')}>Menu1</div>
        <div onClick={() => openDialog('not-ready')}>Menu2</div>
      </div>
    </header>
  );
}
