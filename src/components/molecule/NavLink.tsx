import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  isOpen: boolean;
  delay: number;
};

const NavLink = ({ href, children, isOpen, delay }: Props) => (
  <Link href={href} className="group">
    <motion.li
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: {
          opacity: 1,
          transition: {
            delay,
          },
        },
        closed: {
          opacity: delay === 0 ? 1 : 0,
        },
      }}
      className="rounded-lg p-4 text-lg text-white shadow-lg outline-2"
    >
      {children}
      <span className="block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full"></span>
    </motion.li>
  </Link>
);

export default NavLink;
