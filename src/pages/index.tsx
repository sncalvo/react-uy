import type { NextPage } from 'next';
import PresentationSection from '@/components/organisms/Landing/PresentationSection';
import EventsSection from '@/components/organisms/Landing/EventsSection';
import OrganizersSection from '@/components/organisms/Landing/OrganizersSection';
import PresenterSection from '@/components/organisms/Landing/PresenterSection';

import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React UY</title>
        <meta name="description" content="Bienvenido a la comunidad de react UY" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <PresentationSection />

      <EventsSection />

      <PresenterSection />

      <OrganizersSection />
    </>
  );
};

export default Home;
