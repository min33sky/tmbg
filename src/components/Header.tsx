import useOpenAlertDialog from '@/hooks/useOpenAlertDialog';

export default function Header() {
  const openDialog = useOpenAlertDialog();

  return (
    <header className="mx-auto flex w-full max-w-4xl items-center justify-between py-2 px-2">
      <div onClick={() => openDialog('not-ready')}>Logo</div>

      <div className="flex items-center gap-x-2">
        <div>Menu1</div>
        <div>Menu2</div>
        <div>Menu3</div>
      </div>
    </header>
  );
}
