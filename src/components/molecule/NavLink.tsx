import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  isOpen: boolean;
  delay: number;
};

const NavLink = ({ href, children, isOpen, delay }: Props) => (
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
    className="rounded-lg text-lg text-white md:py-4"
  >
    <Link href={href} className="group">
      {children}
      <span className="block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
    </Link>
  </motion.li>
);

export default NavLink;
