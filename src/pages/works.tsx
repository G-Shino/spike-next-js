import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useSprings, animated } from "react-spring";
import { clamp } from "../lib/utils";
import WorksStyles from "../styles/works";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

const {
  StyledWrapper,
  StyledContainerArea,
  StyledLeftSideArea,
  StyledDiaLogArea,
  StyledDiaLog,
  StyledConsoleArea,
  StyledConsoleDiv,
  StyledUpperButton,
  StyledConsoleImgsDiv,
  StyledConsoleImgDiv,
  StyledConsoleImg,
  StyledLowerButton,
  StyledRightSideArea,
  StyledHomeButtonArea,
  StyledHomeButton,
  StyledMainPictArea,
  StyledSendCommentArea,
} = WorksStyles;
const AnimatedConsoleImgDiv = animated(StyledConsoleImgDiv);

const LIST_IMG_OBJ = [
  { img: "./images/works/Yam.jpg", cont: "先生の言葉" },
  { img: "./images/works/Uena.jpg", cont: "Uena" },
  { img: "./images/works/Takuro.jpg", cont: "Takuro" },
  { img: "./images/works/Shinogu.jpg", cont: "Shinogu" },
  { img: "./images/works/Oto.jpg", cont: "Oto" },
  { img: "./images/works/Oga.jpg", cont: "Oga" },
  { img: "./images/works/Kana.jpg", cont: "Kana" },
  { img: "./images/works/Heejun.jpg", cont: "Heejun" },
  { img: "./images/works/Hazuki.jpg", cont: "Hazuki" },
  { img: "./images/works/Fu-min.jpg", cont: "Fumin" },
];

// 実際の要素数
const ELEM_NUM = LIST_IMG_OBJ.length;
const ELEM_LIST_DUMMY = Array(ELEM_NUM).fill(0);
// 表示するインデックス先頭と最後
const DISP_IDX_START = 1;
const DISP_IDX_END = 5;
const DISP_IDX_CENT = 3;

const Works: React.FC = ({}) => {
  const [order, setOrder] = useState(ELEM_LIST_DUMMY.map((_, index) => index));
  // const order = ELEM_LIST_DUMMY.map((_, index) => index);

  const makeConsoleImgStyle = (idx: number) => {
    const curIdx = order.indexOf(idx);
    const difIdxFromCent =
      clamp(curIdx, DISP_IDX_START, DISP_IDX_END) - DISP_IDX_CENT;

    //y z移動　倍率は適宜調整
    const y = difIdxFromCent * 120;
    const z = Math.abs(difIdxFromCent) * -300;
    //表示範囲外なら0 真ん中だけ１ それ以外は薄くする
    const opacity =
      curIdx < DISP_IDX_START || DISP_IDX_END < curIdx
        ? 0
        : curIdx === DISP_IDX_CENT
        ? 1
        : 0.4;
    //表示範囲外なら0 表示内先頭と最後は1 それ以外は2
    const zIndex =
      curIdx < DISP_IDX_START || DISP_IDX_END < curIdx
        ? 0
        : curIdx === DISP_IDX_END || curIdx === DISP_IDX_START
        ? 1
        : 2;

    return {
      y,
      z,
      opacity,
      zIndex,
      immediate: (n: string) => n === "zIndex",
    };
  };

  const consoleImgSprings = useSprings(
    ELEM_NUM,
    ELEM_LIST_DUMMY.map((_, idx) => {
      return makeConsoleImgStyle(idx);
    })
  );

  const makeMainImgStyle = (idx: number) => {
    const curIdx = order.indexOf(idx);
    const opacity = curIdx === DISP_IDX_CENT ? 1 : 0;
    const zIndex = curIdx === DISP_IDX_CENT ? 1 : 0;

    return {
      opacity,
      zIndex,
      immediate: (n: string) => n === "zIndex",
    };
  };

  const mainImgSprings = useSprings(
    ELEM_NUM,
    ELEM_LIST_DUMMY.map((_, idx) => {
      return makeMainImgStyle(idx);
    })
  );

  //配列の先頭を最後尾にする;
  const handleUpper = () => {
    const curList = Array.from(order);
    const firstIdx = curList.shift() as number;
    curList.push(firstIdx);
    setOrder(curList);
  };

  //配列の最後尾を先頭にする
  const handleLower = () => {
    const curList = Array.from(order);
    const lastIdx = curList.pop() as number;
    curList.unshift(lastIdx);
    setOrder(curList);
  };

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
              <StyledDiaLog src="./images/title/logo2.png" />
            </Link>
          </StyledDiaLogArea>
          <StyledConsoleArea>
            <StyledConsoleDiv>
              <StyledUpperButton onClick={handleUpper}>
                <StyledUpperTriangle />
              </StyledUpperButton>
              <StyledConsoleImgsDiv>
                {
                  //@ts-ignore
                  consoleImgSprings.map((consoleImgSpring, idx) => (
                    <AnimatedConsoleImgDiv
                      key={idx}
                      style={{ ...consoleImgSpring }}
                    >
                      <StyledConsoleImg
                        src={LIST_IMG_OBJ[idx].img}
                      ></StyledConsoleImg>
                    </AnimatedConsoleImgDiv>
                  ))
                }
              </StyledConsoleImgsDiv>
              <StyledLowerButton onClick={handleLower}>
                <StyledLowerTriangle />
              </StyledLowerButton>
            </StyledConsoleDiv>
          </StyledConsoleArea>
        </StyledLeftSideArea>
        <StyledRightSideArea>
          <StyledHomeButtonArea>
            <Link href="/title-and-introduction">
              <StyledHomeButton>HOME</StyledHomeButton>
            </Link>
          </StyledHomeButtonArea>
          <StyledMainPictArea>
            <StyledUpperFrameArea>{}</StyledUpperFrameArea>
            <StyledMainImgArea>
              {mainImgSprings.map((mainImgSpring, idx) => (
                <AnimatedMainImgDiv key={idx} style={{ ...mainImgSpring }}>
                  <StyledMainImg src={LIST_IMG_OBJ[idx].img} />
                </AnimatedMainImgDiv>
              ))}
            </StyledMainImgArea>
            <StyledLowerFrameArea></StyledLowerFrameArea>
          </StyledMainPictArea>
          <StyledSendCommentArea>
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </StyledSendCommentArea>
        </StyledRightSideArea>
      </StyledContainerArea>
    </StyledWrapper>
  );
};

const StyledUpperTriangle = styled.div`
  border-right: 100px solid transparent;
  border-bottom: 40px solid black;
  border-left: 100px solid transparent;
`;

const StyledLowerTriangle = styled.div`
  border-right: 100px solid transparent;
  border-top: 40px solid black;
  border-left: 100px solid transparent;
`;

const StyledUpperFrameArea = styled.div`
  grid-area: UpperFrameArea;
  width: 100%;
  height: 100%;
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
const AnimatedMainImgDiv = animated(StyledMainImgDiv);
const StyledMainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: center;
`;

const StyledLowerFrameArea = styled.div`
  grid-area: LowerFrameArea;
  width: 100%;
  height: 100%;
`;

export default Works;
