import { type NextPage } from "next";
import Head from "next/head";

import AnimatedLink from "@/components/molecule/AnimatedLlink";
import Presentation from "@/components/organisms/Presentation";
import { api } from "@/utils/api";
import CommunityCard from "@/components/molecule/CommunityCard";
import EventCard from "@/components/molecule/EventCard";

const Home: NextPage = () => {
  const { data: communities, isLoading: isCommunitiesLoading } =
    api.communities.getAll.useQuery();
  const { data: events, isLoading: isEventsLoading } =
    api.events.getAll.useQuery();

  console.log(communities);

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
      <main>
        <Presentation />

        <section className="flex min-h-screen flex-col justify-center divide-y bg-blue-400 p-4">
          <div>
            <a
              className="group flex w-full flex-col items-start justify-start p-5"
              href="#communities"
              id="communities"
            >
              <h2 className="text-start text-3xl font-bold text-white sm:text-5xl">
                Comunidades
                <span className="block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
              </h2>
              <p className="text-start text-2xl text-white">
                Sé parte de las comunidades de React en Uruguay
              </p>
            </a>

            <div className="flex w-full items-center justify-start gap-4 overflow-x-auto p-4">
              {isCommunitiesLoading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <CommunityCard key={index} />
                  ))
                : communities?.map((community) => (
                    <CommunityCard key={community.id} community={community} />
                  ))}
            </div>
          </div>

          <div>
            <a
              className="group flex w-full flex-col items-end justify-end p-5"
              href="#events"
              id="events"
            >
              <h2 className="text-end text-3xl font-bold text-white sm:text-5xl">
                Eventos
                <span className="block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full" />
              </h2>
              <p className="text-end text-2xl text-white">
                Y participa de los eventos
              </p>
            </a>

            <div className="flex w-full items-center justify-end gap-4 overflow-x-auto p-4">
              {isEventsLoading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <EventCard key={index} />
                  ))
                : events?.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
            </div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 right-0">
        <ul className="flex flex-col items-end gap-2 pb-3 pr-3 md:flex-row md:gap-4 md:pb-10 md:pr-10">
          <AnimatedLink href="/communities" label="Comunidades" delay={0.5} />
          <AnimatedLink href="/jobs" label="Trabajos" delay={0.7} />
          <AnimatedLink href="/events" label="Eventos" delay={0.9} />
        </ul>
      </nav>
    </>
  );
};

export default Home;
