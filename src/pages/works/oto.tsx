import React from "react";
import Head from "next/head";
import Link from "next/link";
import WorksStyles from "../../styles/works";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const {
  StyledWrapper,
  StyledContainerArea,
  StyledLeftSideArea,
  StyledDiaLogArea,
  StyledDiaLog,
  StyledConsoleArea,
  StyledRightSideArea,
  StyledHomeButtonArea,
  StyledHomeButton,
  StyledMainPictArea,
  StyledTitleArea,
  StyledMainImgArea,
  StyledMainImgDiv,
  StyledMainImg,
  StyledAuthorArea,
  StyledAuthor,
  StyledSendCommentArea,
} = WorksStyles;

const Oto: React.FC = ({}) => {
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
            <Link href="/title-and-introduction">
              <StyledDiaLog src="./../images/title/logo2.png" />
            </Link>
          </StyledDiaLogArea>
          <StyledConsoleArea></StyledConsoleArea>
        </StyledLeftSideArea>
        <StyledRightSideArea>
          <StyledHomeButtonArea>
            <Link href="/title-and-introduction">
              <StyledHomeButton>HOME</StyledHomeButton>
            </Link>
          </StyledHomeButtonArea>
          <StyledMainPictArea>
            <StyledTitleArea>道具の暇</StyledTitleArea>
            <StyledMainImgArea>
              <StyledMainImgDiv>
                <StyledMainImg src={"./../images/works/Oto.jpg"} />
              </StyledMainImgDiv>
              ))}
            </StyledMainImgArea>
            <StyledAuthorArea>
              <StyledAuthor>制作:</StyledAuthor>
            </StyledAuthorArea>
          </StyledMainPictArea>
          <StyledSendCommentArea>
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </StyledSendCommentArea>
        </StyledRightSideArea>
      </StyledContainerArea>
    </StyledWrapper>
  );
};

export default Oto;
