import Image from "next/image";
import { api } from "@/utils/api";

import type { Event, Participant, Tag } from "@prisma/client";

import SectionWrapper from '@/components/molecules/SectionWrapper';

import Link from "next/link";

import dayjs from 'dayjs'

const EventCard = ({ name, image, description, link, date, participants, tags }: Event & { participants: Participant[], tags: Tag[] }) => (
  <article className="flex flex-col h-full aos-init aos-animate" data-aos="fade-up">
    <header>
      <Link className="block mb-6" href={link}>
        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
          <div
            className="absolute inset-0 w-[352px] h-[198px] object-cover transform hover:scale-105 transition duration-700 ease-out"
          >
            {image ?
              <Image
                className="object-cover"
                src={image}
                width={352} height={198} alt={name + " image"}
              /> : <div style={{ width: 352, height: 198, backgroundColor: 'red' }} />
            }
          </div>
        </figure>
      </Link>
      <div className="mb-3">
        <ul className="flex flex-wrap text-xs font-medium -m-1">
          {tags?.map((tag) => (
            <li className="m-1" key={tag.id}>
              <Link href={tag.link} className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="h4 mb-2">
        <Link className="hover:text-gray-100 transition duration-150 ease-in-out" href={link}>
          {name}
        </Link>
      </h3>
    </header>
    <p className="text-lg text-gray-400 grow">
      {description}
    </p>
    <footer className="flex items-center mt-4">
      <div className="flex mr-8">
        {participants.map((participant) => (
          <Link href={participant.defaultLink} key={participant.id} className="-mr-5 hover:z-10 hover:scale-105 transition-all">
            {participant.image ? <Image
              src={participant.image}
              alt={participant.name + " profile pic"}
              className="rounded-full shrink-0"
              height={40}
              width={40}
            /> :
              <div style={{ width: 40, height: 40, backgroundColor: 'red' }} className="shrink-0 rounded-full" />
            }
          </Link>
        ))}
      </div>
      <div className="font-medium">
        <span className="text-gray-500">{dayjs(date).format("MMM D YYYY")}</span>
      </div>
    </footer>
  </article>
);

const EventsSection = () => {
  const { data: eventPages } = api.events.getAll.useInfiniteQuery({ limit: 3 });

  return (
    <SectionWrapper right background="none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="mb-4 text-4xl font-bold text-gray-100">Nuestros eventos</h2>

        <p className="mb-8 px-12 text-gray-400 md:px-32 xl:px-72">
          Si estás interesado en aprender más sobre ReactJS y conectarte con otros desarrolladores
          apasionados por esta tecnología, ¡estás en el lugar correcto! Te invitamos a participar en
          nuestros eventos, donde tendrás la oportunidad de conocer a otros miembros de la comunidad,
          compartir tus conocimientos y aprender de otros expertos.
        </p>

        <div className="max-w-sm mx-auto md:max-w-none">
          <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            {eventPages?.pages.map((events) => events.map((event) => (
              <EventCard key={event.id} {...event} />
            )))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EventsSection;
