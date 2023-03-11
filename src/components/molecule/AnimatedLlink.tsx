import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  delay?: number;
};

const AnimatedLink = ({ href, label, delay }: Props) => (
  <motion.li
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0, 0.71, 0.2, 1.01],
    }}
  >
    <Link
      href={href}
      className="rounded-lg bg-blue-500 p-4 text-lg text-white outline-2 outline-blue-600"
    >
      {label}
    </Link>
  </motion.li>
);

export default AnimatedLink;
