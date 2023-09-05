import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  right?: boolean;
  left?: boolean;
  background?: 'default' | 'alt' | 'none';
  children: React.ReactNode;
};

const SectionWrapper = ({
  children,
  right = false,
  left = false,
  background = 'default',
}: Props) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          ref.classList.add('opacity-100');
          childRef.current?.classList.add('!translate-x-0');
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  const handleRect = useCallback((node: HTMLDivElement) => {
    setRef(node);
  }, []);

  return (
    <section
      className={clsx(
        'text-center opacity-0 transition-all delay-100 duration-[1000ms]',
        {
          'bg-gray-900': background === 'default',
          'bg-sky-900': background === 'alt',
        },
      )}
      ref={handleRect}
    >
      <div
        className={clsx(
          'container mx-auto flex flex-col items-center justify-center py-5 transition-all duration-500',
          {
            'translate-x-full': right,
            '-translate-x-full': left,
          },
        )}
        ref={childRef}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
