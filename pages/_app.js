import React from "react";
import { Layout } from "../components";

import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
