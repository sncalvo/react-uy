import { type NextPage } from "next";
import Head from "next/head";

import AnimatedLink from "@/components/molecule/AnimatedLlink";
import Presentation from "@/components/organisms/Presentation";
import Footer from "@/components/organisms/Footer";

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
      <main className="relative grid min-h-screen grid-cols-2 flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-700">
        <Presentation />
      </main>

      <nav className="fixed bottom-0 right-0">
        <ul className="flex gap-4 pb-10 pr-10">
          <AnimatedLink href="/about" label="Comunidades" delay={0.5} />
          <AnimatedLink href="/jobs" label="Trabajos" delay={0.7} />
          <AnimatedLink href="/events" label="Eventos" delay={0.9} />
        </ul>
      </nav>
    </>
  );
};

export default Home;
