import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { AppProps } from "next/app";
import { Router } from "next/dist/client/router";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "@src/const/theme";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Nprogress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
  console.log("on start");
  Nprogress.start();
});
Router.events.on("routeChangeComplete", () => {
  console.log("on complete");
  Nprogress.done();
});
Router.events.on("routeChangeError", () => {
  console.log("on err");
  Nprogress.done();
});

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  // console.log("app");

  // console.log("CSS Base Line", JSON.stringify(CssBaseline, null, 4));

  // id = jss-server-sideとしてheadにセットされたstyleを削除
  // クライアントで生成されるクラスと被るので、、
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
