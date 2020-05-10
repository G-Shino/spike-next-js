import React from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps, Container } from "next/app";
import { css, Global } from "@emotion/core";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const globalCss = css`
    body {
      background-color: lightgreen;
    }
  `;
  return (
    <Container>
      <Global styles={globalCss} />
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;
