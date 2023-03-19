import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        'group/link text-2xl text-gray-700 transition-all hover:scale-105 dark:text-gray-300 lg:text-xl',
      )}
    >
      {children}
      <span className="block h-0.5 max-w-0 bg-gray-900 transition-all duration-300 group-hover/link:max-w-full dark:bg-white" />
    </Link>
  );
};

export default NavLink;
