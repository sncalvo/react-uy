import { type NextPage } from "next";
import Head from "next/head";

import AnimatedLink from "@/components/molecule/AnimatedLlink";
import Presentation from "@/components/organisms/Presentation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React UY</title>
        <meta
          name="description"
          content="Bienvenido a la comunidad de react UY"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative grid min-h-screen grid-cols-1 flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-700 md:grid-cols-2">
        <Presentation />
      </main>

      <nav className="fixed bottom-0 right-0">
        <ul className="flex flex-col items-end gap-2 pb-3 pr-3 md:flex-row md:gap-4 md:pb-10 md:pr-10">
          <AnimatedLink href="/about" label="Comunidades" delay={0.5} />
          <AnimatedLink href="/jobs" label="Trabajos" delay={0.7} />
          <AnimatedLink href="/events" label="Eventos" delay={0.9} />
        </ul>
      </nav>
    </>
  );
};

export default Home;
