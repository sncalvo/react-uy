import { motion } from "framer-motion";
import Link from "next/link";

import clsx from "clsx";
import { useState } from "react";

type Props = {
  href: string;
  label: string;
  delay?: number;
};

const AnimatedLink = ({ href, label, delay }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <Link href={href}>
      <motion.li
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          delay: hover ? 0 : delay,
        }}
        className={clsx(
          "rounded-lg bg-blue-500 p-4 text-lg text-white shadow-lg outline-2",
          "outline-blue-600"
        )}
        whileHover={{ scale: 1.2, transition: { delay: 0.2 } }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        {label}
      </motion.li>
    </Link>
  );
};

export default AnimatedLink;
