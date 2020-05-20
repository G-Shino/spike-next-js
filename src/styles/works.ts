import styled from "@emotion/styled";

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
`;

const StyledLeftSideArea = styled.div`
  grid-area: LeftSideArea;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "DiaLogArea"
    "ConsoleArea";
`;

const StyledDiaLogArea = styled.div`
  grid-area: DiaLogArea;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
  }
`;

const StyledDiaLog = styled.img`
  width: 90px;
  height: 90px;
`;

const StyledConsoleArea = styled.div`
  grid-area: ConsoleArea;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const StyledConsoleDiv = styled.div`
  width: 90%;
  height: 480px;
  display: grid;
  grid-template-rows: 40px 400px 40px;
  grid-template-areas:
    "UpperButtonArea"
    "ConsoleImgArea"
    "LowerButtonArea";
`;

const StyledUpperButton = styled.button`
  grid-area: UpperButtonArea;
  width: 200px;
  height: auto;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const StyledUpperTriangle = styled.div`
  border-right: 100px solid transparent;
  border-bottom: 40px solid black;
  border-left: 100px solid transparent;
`;

const StyledConsoleImgsDiv = styled.div`
  grid-area: ConsoleImgArea;
  width: 100%;
  height: 100%;
  perspective: 1200px;
  perspective-origin: left center;
  display: flex;
  align-items: center;
`;

const StyledConsoleImgDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  overflow: hidden;
  will-change: transform, opacity, z-index;
`;

const StyledConsoleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledLowerButton = styled.button`
  grid-area: LowerButtonArea;
  width: 200px;
  height: auto;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

const StyledLowerTriangle = styled.div`
  border-right: 100px solid transparent;
  border-top: 40px solid black;
  border-left: 100px solid transparent;
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
  line-height: 2.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledMainPictArea = styled.div`
  grid-area: MainPictArea;
  width: 40vw;
  height: calc(40vw * 1.05);
  min-width: 400px;
  min-height: calc(400px * 1.05);
  /* width: 560px;
  height: 560px; */
  margin-right: 20px;
  background-image: url("./images/title/frame.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "TitleArea"
    "MainImgArea"
    "AuthorArea";
`;

const StyledTitleArea = styled.h1`
  grid-area: TitleArea;
  width: auto;
  height: 100%;
  line-height: max(4rem, 4vw);
  font-size: max(3.2rem, 3.2vw);
  font-weight: normal;
  vertical-align: top;
  padding-left: max(5rem, 5vw);
`;
const StyledMainImgArea = styled.div`
  grid-area: MainImgArea;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMainImgDiv = styled.div`
  position: absolute;
  width: 28vw;
  height: 28vw;
  min-width: 280px;
  min-height: 280px;
  /* width: 380px;
  height: 380px; */
  border: 1px solid;
`;

const StyledMainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: center;
`;

const StyledAuthorArea = styled.div`
  grid-area: AuthorArea;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyledAuthor = styled.p`
  width: auto;
  height: 70%;
  line-height: max(2rem, 2vw);
  font-size: max(2rem, 2vw);
  vertical-align: top;
  text-align: right;
  padding-right: max(5rem, 5vw);
`;

const StyledSendCommentArea = styled.div`
  grid-area: SendCommentArea;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default {
  StyledWrapper,
  StyledContainerArea,
  StyledLeftSideArea,
  StyledDiaLogArea,
  StyledDiaLog,
  StyledConsoleArea,
  StyledConsoleDiv,
  StyledUpperButton,
  StyledUpperTriangle,
  StyledConsoleImgsDiv,
  StyledConsoleImgDiv,
  StyledConsoleImg,
  StyledLowerButton,
  StyledLowerTriangle,
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
};
