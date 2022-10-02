import React from 'react';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

/**
 * 시작 페이지의 Layout을 담당하는 컴포넌트
 */
export default function HomeLayout({ children }: Props) {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white">
      <Header />
      <div>{children}</div>
    </div>
  );
}
