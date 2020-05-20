import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/works";

const {
  StyledWrapper,
  StyledContainerArea,
  StyledLeftSideArea,
  StyledDiaLogArea,
  StyledDiaLog,
  StyledRightSideArea,
  StyledHomeButtonArea,
  StyledHomeButton,
  StyledMainPictArea,
  StyledSendCommentArea,
} = styles;

const Home: React.FC = ({}) => {
  return (
    <StyledWrapper>
      <Head>
        <title>works-template</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <StyledContainerArea>
        <StyledLeftSideArea>
          <StyledDiaLogArea>
            <StyledDiaLog src="./images/title/logo2.png" />
          </StyledDiaLogArea>
        </StyledLeftSideArea>
        <StyledRightSideArea>
          <StyledHomeButtonArea>
            <Link href="/title-and-introduction">
              <StyledHomeButton>HOME</StyledHomeButton>
            </Link>
          </StyledHomeButtonArea>
          <StyledMainPictArea>a</StyledMainPictArea>
          <StyledSendCommentArea>
            <div
              style={{ height: "80px", width: "80px", backgroundColor: "red" }}
            ></div>
          </StyledSendCommentArea>
        </StyledRightSideArea>
      </StyledContainerArea>
    </StyledWrapper>
  );
};

export default Home;
