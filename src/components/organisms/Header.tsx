import Navigation from '@/components/molecules/Navigation';
import Button from '../atoms/Button';

import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import LazyReactLogo from '../molecules/LazyReactLogo';

const Header = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const session = useSession();


  return (
    <>
      <header className="absolute top-0 left-0 right-0 flex flex-row justify-between p-4">
        <Link className="flex max-w-[300px] items-center" href="/">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-800">
            <LazyReactLogo />
          </div>

          <h1 className="ml-2 text-2xl font-bold text-white">ReactUY</h1>
        </Link>

        <div className="flex flex-grow flex-row items-center justify-end lg:justify-center">
          <Navigation
            isOpen={navMenuOpen}
            onOpen={() => setNavMenuOpen(true)}
            onClose={() => setNavMenuOpen(false)}
          />
        </div>

        <div className="hidden flex-row items-center gap-3 self-end lg:flex">
          {!session?.data?.user && (
            <Button variant="primary" onClick={() => void signIn()}>
              Ingresar
            </Button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
