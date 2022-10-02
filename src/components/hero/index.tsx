import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      '환영합니다... 🚀',
      '여기는 개발 관련 이것 저것 기록하는 곳이에요.',
      '주로 Javascript를 다루지만 약간의 Python도 다룰 예정입니다.',
      'by Typemean',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center  justify-center overflow-hidden text-center">
      <div className="flex items-center">
        <h1 className="select-none text-lg">{text}</h1>
        <Cursor cursorColor="#F7AB0A" />
      </div>
    </div>
  );
}
