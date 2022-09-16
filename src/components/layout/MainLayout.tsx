import React from 'react';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-indigo-100">
      <Header />
      <div>{children}</div>
    </div>
  );
}
