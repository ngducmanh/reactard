import "../src/theme/tailwind/index.css";
import "../src/theme/app/index.css";
import AppContext from "../src/app/shared/context/AppContext";
import { useState } from "react";
import Head from "next/head";
import RootApp from "../src/app/root";

function Reactard({ Component, pageProps }) {
  const [_title, _setTitle] = useState("");

  const appContext = {
    title: { title: _title, setTitle: _setTitle },
  };

  return (
    <AppContext.Provider value={appContext}>
      <Head>
        <title>{_title || "Reactard"} | Reactard</title>
        <meta
          name="description"
          content="Reactard - JavaScript and React tips make you not retarded."
        />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=vietnamese" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="67Sj0HSzpjiQuj8OIiseN_E7etso0HrsOx67lymgwKA"
        />
        <meta httpEquiv="content-language" content="vi" />
      </Head>
      <RootApp>
        <Component {...pageProps} />
      </RootApp>
    </AppContext.Provider>
  );
}

export default Reactard;
