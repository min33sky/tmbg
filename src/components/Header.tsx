import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center max-w-4xl mx-auto w-full py-2 px-2">
      <div>Logo</div>

      <div className="flex items-center gap-x-2">
        <div>Menu1</div>
        <div>Menu2</div>
        <div>Menu3</div>
      </div>
    </header>
  );
}
