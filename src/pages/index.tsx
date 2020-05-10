import React from "react";
import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Home: React.FC = ({}) => {
  const style = css`
    color: hotpink;
  `;

  const StyledP = styled.p`
    color: red;
    font-size: 30px;
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
          <Link href="/react-spring">
            <a>react-spring</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
