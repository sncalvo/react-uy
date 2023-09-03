import Navigation from '@/components/molecules/Navigation';
import Button from '../atoms/Button';

import { HiOutlineSun } from 'react-icons/hi';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LazyReactLogo from '../molecules/LazyReactLogo';

const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const Header = () => {
  const [dark, setDark] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const session = useSession();

  const setStyle = (dark: boolean) => {
    const html = document.querySelector('html');

    if (dark) {
      html?.classList.add('dark');
      return;
    }

    html?.classList.remove('dark');
  };

  useEffect(() => {
    setStyle(dark);

    localStorage.setItem('darkModeSet', dark ? 'true' : 'false');
  }, [dark]);

  useEffect(() => {
    const darkModeSet = localStorage.getItem('darkModeSet');

    if (darkModeSet === 'true') {
      setDark(true);
      return;
    }

    if (darkModeSet === 'false') {
      setDark(false);
      return;
    }

    setDark(isBrowserDefaultDark());
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 flex flex-row justify-between p-4">
        <Link className="flex max-w-[300px] items-center" href="/">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-gray-800">
            <LazyReactLogo />
          </div>

          <h1 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">ReactUY</h1>
        </Link>

        <div className="flex flex-grow flex-row items-center justify-end lg:justify-center">
          <Navigation
            isOpen={navMenuOpen}
            onOpen={() => setNavMenuOpen(true)}
            setDark={setDark}
            onClose={() => setNavMenuOpen(false)}
          />
        </div>

        <div className="hidden flex-row items-center gap-3 self-end lg:flex">
          {!session?.data?.user && (
            <Button variant="primary" onClick={() => void signIn()}>
              Ingresar
            </Button>
          )}

          <Button variant="none" onClick={() => setDark((prevValue) => !prevValue)}>
            <span className="sr-only">Menu</span>
            <HiOutlineSun className="h-6 w-6" />
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
