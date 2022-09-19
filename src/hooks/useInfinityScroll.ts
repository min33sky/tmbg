import { RefObject, useEffect } from 'react';

export default function useInfinityScroll(
  targetRef: RefObject<any>,
  fetchNext: () => void,
) {
  useEffect(() => {
    if (!targetRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchNext();
          }
        });
      },
      {
        root: null, //? null일 경우 viewport를 기준으로 한다.
        rootMargin: '100px',
        threshold: 0.5, //? 0 ~ 1 사이의 값으로, 1일 경우 target이 완전히 보일 때 콜백이 실행된다.
      },
    );

    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [fetchNext, targetRef]);
}
