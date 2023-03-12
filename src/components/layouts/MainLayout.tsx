import Head from "next/head";
import { type ReactElement, useState } from "react";

import Footer from "@/components/organisms/Footer";
import { motion } from "framer-motion";
import NavLink from "../molecule/NavLink";

import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Rive from "@rive-app/react-canvas";

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

      <motion.div
        className="fixed z-20 h-screen w-screen bg-gradient-to-b from-blue-400 to-blue-700"
        role="button"
        onClick={() => setNavMenuOpen(false)}
        animate={navMenuOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 0.5,
            pointerEvents: "all",
          },
          closed: {
            opacity: 0,
            pointerEvents: "none",
          },
        }}
      />

      <div className="flex items-center justify-between bg-gradient-to-br from-blue-600 to-blue-400 px-1 shadow-lg">
        <Link
          href="/"
          className="ml-2 h-12 w-12 items-center justify-center rounded-full bg-slate-800"
        >
          <Rive
            src="/rive-animations/react.riv"
            aria-label="Rive logo by Dante from Rive community - https://creativecommons.org/licenses/by/4.0/"
          />
        </Link>
        <div>
          <button
            className="p-3 text-white transition-all hover:scale-105 md:hidden"
            onClick={() => setNavMenuOpen((prevValue) => !prevValue)}
          >
            <AiOutlineMenu className="h-8 w-8" />
          </button>

          <ul className="hidden gap-3 p-2 md:flex">
            <NavLink href="/communities" isOpen={true} delay={0}>
              Comunidades
            </NavLink>

            <NavLink href="/jobs" isOpen={true} delay={0.3}>
              Trabajos
            </NavLink>

            <NavLink href="/events" isOpen={true} delay={0.6}>
              Eventos
            </NavLink>
          </ul>

          <motion.nav
            animate={navMenuOpen ? "open" : "closed"}
            className="fixed top-0 right-0 z-30 h-screen bg-blue-900 py-2 px-4 shadow-lg md:hidden"
            variants={{
              open: {
                opacity: 1,
                x: 0,
              },
              closed: {
                opacity: 0,
                x: "100%",
              },
            }}
          >
            <ul className="flex flex-col gap-3">
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

      <Footer />
    </div>
  );
};

export default MainLayout;
