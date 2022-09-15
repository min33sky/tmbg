import React from 'react';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col bg-indigo-100">
      <Header />
      <div>{children}</div>
    </div>
  );
}
