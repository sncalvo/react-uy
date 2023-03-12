import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@/utils/api";

import "@/styles/globals.css";

import type { NextPageWithLayout } from "@/types/layout";
import type { NextPage } from "next";
import type { ReactElement } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const LayoutComponent = Component as NextPageWithLayout;
  const getLayout = LayoutComponent.getLayout || ((page: NextPage) => page);

  return (
    <SessionProvider session={session}>
      {
        getLayout(
          (<LayoutComponent {...pageProps} />) as unknown as ReactElement<
            object,
            string
          > &
            NextPage<object, object>
        ) as JSX.Element
      }
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
