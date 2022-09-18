import useOpenAlertDialog from '@/hooks/useOpenAlertDialog';
import Link from 'next/link';

export default function Header() {
  const openDialog = useOpenAlertDialog();

  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between py-2 px-2">
      <Link href={'/'}>
        <a className="cursor-pointer">TMBG</a>
      </Link>

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
