import type { AppType } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { api } from '@/utils/api';

import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';

import ApplicationLayout from '@/components/layouts/ApplicationLayout';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider session={session}>
        <ApplicationLayout>
          <Component {...pageProps} />
        </ApplicationLayout>
      </SessionProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
