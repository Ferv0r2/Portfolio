import { RecoilRoot } from "recoil";
import Layout from "layout/Layout";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
