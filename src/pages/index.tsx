import type { NextPage } from "next";
import Head from "next/head";

import { Partytown } from "@builder.io/partytown/react";

import AnimatedLink from "@/components/molecule/AnimatedLlink";
import Presentation from "@/components/organisms/Presentation";
import CommunityCard from "@/components/molecule/CommunityCard";
import EventCard from "@/components/molecule/EventCard";
import Footer from "@/components/organisms/Footer";

import { api } from "@/utils/api";
import Script from "next/script";
import { env } from "@/env.mjs";

const Home: NextPage = () => {
  const { data: communities, isLoading: isCommunitiesLoading } =
    api.communities.getAll.useQuery();
  const { data: events, isLoading: isEventsLoading } =
    api.events.getAll.useQuery();

  return (
    <>
      <Head>
        <title>React UY</title>
        <meta
          name="description"
          content="Bienvenido a la comunidad de react UY"
        />
        <link rel="icon" href="/favicon.ico" />
        <Partytown forward={["dataLayer.push"]} />

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){dataLayer.push(arguments);};
          gtag('js', new Date());

          gtag('config', '${env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
          }}
        />
        <script
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `
            partytown = {
              lib: "/_next/static/~partytown/",
              forward: ["gtag"]
            };
          `,
          }}
        />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
        strategy="worker"
      />
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
                    <CommunityCard
                      key={community.id}
                      community={community}
                      onClick={() =>
                        window.open(community.link, community.name)
                      }
                    />
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

      <Footer />

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
