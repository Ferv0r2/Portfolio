import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";
import Layout from "layout/Layout";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
