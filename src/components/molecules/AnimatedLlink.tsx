import { motion } from 'framer-motion';
import Link from 'next/link';

import clsx from 'clsx';
import { useState } from 'react';

type Props = {
  href: string;
  label: string;
  delay?: number;
};

const AnimatedLink = ({ href, label, delay }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        delay: hover ? 0 : delay,
      }}
      className={clsx(
        'rounded-lg px-4 text-lg text-white outline-2 md:bg-blue-500 md:py-2 md:shadow-lg',
        'outline-blue-600',
      )}
      whileHover={{ scale: 1.2, transition: { delay: 0.2 } }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Link href={href} className="group">
        {label}
        <span className="block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
      </Link>
    </motion.li>
  );
};

export default AnimatedLink;
