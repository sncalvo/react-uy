import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  isOpen: boolean;
  delay: number;
};

const NavLink = ({ href, children, isOpen, delay }: Props) => (
  <Link href={href}>
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
      className="rounded-lg bg-blue-500 p-4 text-lg text-white shadow-lg outline-2"
    >
      {children}
    </motion.li>
  </Link>
);

export default NavLink;
