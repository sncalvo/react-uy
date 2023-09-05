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
        'group/link text-2xl transition-all hover:scale-105 text-gray-300 lg:text-xl',
      )}
    >
      {children}
      <span className="block h-0.5 max-w-0 transition-all duration-300 group-hover/link:max-w-full bg-white" />
    </Link>
  );
};

export default NavLink;
