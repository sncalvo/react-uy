// import { api } from "@/utils/api";
// import { Event } from "@prisma/client";

import SectionWrapper from '@/components/molecules/SectionWrapper';

const EventsSection = () => {
  // const { data: events, isLoading: isEventLoading } = api.events.getAll.useQuery();

  return (
    <SectionWrapper right background="alt">
      <h2 className="mb-4 text-6xl font-bold text-gray-800 dark:text-gray-100">Nuestros eventos</h2>

      <p className="mb-8 px-12 text-gray-600 dark:text-gray-400 md:px-32 xl:px-72">
        Si estás interesado en aprender más sobre ReactJS y conectarte con otros desarrolladores
        apasionados por esta tecnología, ¡estás en el lugar correcto! Te invitamos a participar en
        nuestros eventos, donde tendrás la oportunidad de conocer a otros miembros de la comunidad,
        compartir tus conocimientos y aprender de otros expertos.
      </p>

      <div className="flex flex-col gap-4 md:flex-row"></div>
    </SectionWrapper>
  );
};

export default EventsSection;
