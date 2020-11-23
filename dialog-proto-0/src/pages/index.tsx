import React from "react";
import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Home: React.FC = ({}) => {
  const style = css`
    color: red;
  `;

  const StyledP = styled.p`
    color: red;
    font-size: 1rem;
  `;

  return (
    <div>
      <Head>
        <title>Hello</title>
      </Head>
      <h1 css={style}>Hello Next</h1>
      <ul>
        <li>
          <StyledP>hoge</StyledP>
        </li>
        <li>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href="/title-and-introduction">
            <a>Title and Introduction</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
