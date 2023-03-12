import Head from "next/head";
import { type ReactElement, useState } from "react";

import Footer from "@/components/organisms/Footer";
import { motion } from "framer-motion";
import NavLink from "../molecule/NavLink";

import { ImMenu, ImCross } from "react-icons/im";
import { SiReact } from "react-icons/si";
import Link from "next/link";

const MainLayout = (page: ReactElement) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-gray-100">
      <Head>
        <title>React UY</title>
        <meta
          name="description"
          content="Bienvenido a la comunidad de react UY"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <div className="flex items-center justify-between bg-blue-300 p-1">
        <Link
          href="/"
          className="items-center justify-center rounded-full bg-slate-800 p-1"
        >
          <SiReact className="h-8 w-8" color="#61DBFB" />
        </Link>
        <div className="relative">
          <button
            className="p-3 text-blue-500"
            onClick={() => setNavMenuOpen((prevValue) => !prevValue)}
          >
            {navMenuOpen ? (
              <ImCross className="h-8 w-8" />
            ) : (
              <ImMenu className="h-8 w-8" />
            )}
          </button>

          <motion.nav
            animate={navMenuOpen ? "open" : "closed"}
            variants={{
              open: {
                opacity: 1,
                x: 0,
                height: "auto",
              },
              closed: {
                opacity: 0,
                x: 100,
                height: 0,
              },
            }}
          >
            <ul className="absolute right-0 flex flex-col gap-3 rounded-lg bg-blue-900 p-2 shadow-lg">
              <NavLink href="/communities" isOpen={navMenuOpen} delay={0}>
                Comunidades
              </NavLink>

              <NavLink href="/jobs" isOpen={navMenuOpen} delay={0.3}>
                Trabajos
              </NavLink>

              <NavLink href="/events" isOpen={navMenuOpen} delay={0.6}>
                Eventos
              </NavLink>
            </ul>
          </motion.nav>
        </div>
      </div>

      <main className="grow">{page}</main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
