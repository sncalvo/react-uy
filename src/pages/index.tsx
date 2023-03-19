import type { NextPage } from 'next';
import PresentationSection from '@/components/organisms/Landing/PresentationSection';
import FirstSection from '@/components/organisms/Landing/FirstSection';
import EventsSection from '@/components/organisms/Landing/EventsSection';
import OrganizersSection from '@/components/organisms/Landing/OrganizersSection';
import PresenterSection from '@/components/organisms/Landing/PresenterSection';

const Home: NextPage = () => {
  return (
    <>
      <PresentationSection />

      <FirstSection />

      <EventsSection />

      <PresenterSection />

      <OrganizersSection />
    </>
  );
};

export default Home;
