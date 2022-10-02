import Head from 'next/head';
import React from 'react';
import Header from '../Header';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function MainLayout({ title = 'Tmbg', children }: Props) {
  return (
    <div className="flex h-screen flex-col overflow-y-scroll bg-purple-50">
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <>{children}</>
    </div>
  );
}
