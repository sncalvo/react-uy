import { m } from 'framer-motion';
import { signIn, useSession } from 'next-auth/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineSun } from 'react-icons/hi';
import Button from '../atoms/Button';
import NavLink from '../atoms/NavLink';

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setDark: (dark: boolean | ((dark: boolean) => boolean)) => void;
};

const Navigation = ({ isOpen, onOpen, onClose, setDark }: Props) => {
  const session = useSession();
  return (
    <>
      <nav>
        <button
          className="p-3 text-gray-700 transition-all hover:scale-105 dark:text-white lg:hidden"
          onClick={onOpen}
        >
          <span className="sr-only">Menu</span>
          <AiOutlineMenu className="h-8 w-8" />
        </button>

        <ul className="hidden flex-row items-center justify-center gap-5 lg:flex">
          <li>
            <NavLink href="/#">Inicio</NavLink>
          </li>
          <li className="group relative">
            <NavLink href="/communities">Comunidades</NavLink>

            <div className="absolute top-full hidden rounded bg-gray-200 p-5 opacity-0 shadow-xl transition-all duration-300 group-hover:block group-hover:opacity-100 dark:bg-slate-800">
              <ul className="flex flex-col gap-3">
                <li>
                  <NavLink href="/events">Eventos</NavLink>
                </li>
                <li>
                  <NavLink href="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink href="/resources">Recursos</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink href="/jobs">Trabajos</NavLink>
          </li>
          <li>
            <NavLink href="/contacts">Contacto</NavLink>
          </li>
        </ul>
      </nav>

      <m.nav
        animate={isOpen ? 'open' : 'closed'}
        className="fixed top-0 right-0 left-0 z-30 flex h-screen flex-col justify-between bg-gray-200 py-2 px-4 shadow-lg dark:bg-blue-900 lg:hidden"
        variants={{
          open: {
            opacity: 1,
            x: 0,
          },
          closed: {
            opacity: 0,
            x: '100%',
          },
        }}
      >
        <div className="flex items-center justify-end">
          {!session?.data?.user && (
            <Button variant="primary" onClick={() => void signIn()}>
              Ingresar
            </Button>
          )}

          <Button variant="none" onClick={() => setDark((prevValue) => !prevValue)}>
            <span className="sr-only">Light\Dark Mode</span>
            <HiOutlineSun className="h-6 w-6" />
          </Button>

          <button
            className="p-3 text-gray-700 transition-all hover:scale-105 dark:text-white lg:hidden"
            onClick={onClose}
          >
            <span className="sr-only">Close Menu</span>
            <AiOutlineClose className="h-8 w-8" />
          </button>
        </div>
        <ul className="flex flex-grow flex-col items-center justify-center gap-4">
          <li>
            <NavLink href="/#">Inicio</NavLink>
          </li>

          <li>
            <NavLink href="/communities">Comunidades</NavLink>
          </li>

          <li>
            <NavLink href="/jobs">Trabajos</NavLink>
          </li>

          <li>
            <NavLink href="/events">Eventos</NavLink>
          </li>

          <li>
            <NavLink href="/contacts">Contacto</NavLink>
          </li>
        </ul>
      </m.nav>
    </>
  );
};

export default Navigation;
