import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "@emotion/styled";

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
        </StyledRightSideArea>
      </StyledContainerArea>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  /* grid-template-columns: minmax(95px, 5%) 1fr minmax(95px, 5%);
  grid-template-rows: minmax(40px, 4%) 1fr minmax(40px, 4%); */
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: 4% 1fr 4%;
  grid-template-areas:
    ". . ."
    ". ContainerArea ."
    ". . .";
`;

const StyledContainerArea = styled.div`
  grid-area: ContainerArea;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "LeftSideArea RightSideArea";
  /* background-color: rgba(100, 100, 0, 0.5); */
`;

const StyledLeftSideArea = styled.div`
  grid-area: LeftSideArea;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "DiaLogArea"
    "ConsoleArea";
  /* background-color: rgb(100, 50, 0); */
`;

const StyledDiaLogArea = styled.div`
  grid-area: DiaLogArea;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledDiaLog = styled.img`
  width: 100px;
  height: 100px;
`;

const StyledRightSideArea = styled.div`
  grid-area: RightSideArea;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
    "HomeButtonArea"
    "MainPictArea"
    "SendCommentArea";
  /* background-color: rgb(50, 100, 0); */
`;

const StyledHomeButtonArea = styled.div`
  grid-area: HomeButtonArea;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const StyledHomeButton = styled.a`
  font-size: 2.5rem;
`;

const StyledMainPictArea = styled.div`
  grid-area: MainPictArea;
  width: 40vw;
  height: calc(40vw * 1.05);
  min-width: 450px;
  min-height: calc(450px * 1.05);
  margin-right: 100px;
  background-color: red;
`;

export default Home;
