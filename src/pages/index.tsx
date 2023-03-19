import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import PresentationSection from '@/components/organisms/Landing/PresentationSection';
import FirstSection from '@/components/organisms/Landing/FirstSection';
import EventsSection from '@/components/organisms/Landing/EventsSection';
import OrganizersSection from '@/components/organisms/Landing/OrganizersSection';
import PresenterSection from '@/components/organisms/Landing/PresenterSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React UY</title>
        <meta name="description" content="Bienvenido a la comunidad de react UY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="overflow-x-hidden">
        <PresentationSection />

        <FirstSection />

        <EventsSection />

        <PresenterSection />

        <OrganizersSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;
