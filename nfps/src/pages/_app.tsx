import React, { Suspense } from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";

/* Component */
import Layout from "layout/Layout";
import { Spinner } from "components/loading/Spinner";

/* Style */
import "~/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider attribute="class">
      <Suspense fallback={<Spinner />}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </QueryClientProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
