import type { AppType } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { api } from '@/utils/api';

import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';

import ApplicationLayout from '@/components/layouts/ApplicationLayout';
import { LazyMotion, domAnimation } from "framer-motion"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider session={session}>
        <LazyMotion features={domAnimation}>
          <ApplicationLayout>
            <Component {...pageProps} />
          </ApplicationLayout>
        </LazyMotion>
      </SessionProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
