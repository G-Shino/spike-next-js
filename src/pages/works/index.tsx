import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useSprings, animated } from "react-spring";
import { clamp } from "../../lib/utils";
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
} = WorksStyles;
const AnimatedConsoleImgDiv = animated(StyledConsoleImgDiv);
const AnimatedMainImgDiv = animated(StyledMainImgDiv);

const LIST_IMG_OBJ = [
  // { img: "./images/works/Yam.jpg", cont: "先生の言葉", title: "" },
  {
    img: "./images/works/Uena.jpg",
    author: "Uena",
    title: "ゆらゆら",
    link: "/works/uena",
  },
  {
    img: "./images/works/Takuro.jpg",
    author: "Takuro",
    title: "Rami S",
    link: "/works/takuro",
  },
  {
    img: "./images/works/Shinogu.jpg",
    author: "Shinogu",
    title: "流点",
    link: "/works/shinogu",
  },
  {
    img: "./images/works/Oto.jpg",
    author: "Oto",
    title: "道具の暇",
    link: "/works/oto",
  },
  {
    img: "./images/works/Oga.jpg",
    author: "Oga",
    title: "Scalable hand",
    link: "/works/oga",
  },
  {
    img: "./images/works/Kana.jpg",
    author: "Kana",
    title: "OTT: OTTOTTO",
    link: "/works/kana",
  },
  {
    img: "./images/works/Heejun.jpg",
    author: "Heejun",
    title: "チタンの家具",
    link: "/works/heejun",
  },
  {
    img: "./images/works/Hazuki.jpg",
    author: "Hazuki",
    title: "長いタイトル",
    link: "/works/hazuki",
  },
  {
    img: "./images/works/Fu-min.jpg",
    author: "Fumin",
    title: "Chin & Shoulder Rest",
    link: "/works/fumin",
  },
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
        : 0.2;
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

  //クリックで画面遷移
  const handleClick = (idx: number) => {
    const curIdx = order.indexOf(idx);
    console.log(idx);
    console.log(curIdx);
    if (curIdx !== DISP_IDX_CENT) {
      return;
    }
    const url = LIST_IMG_OBJ[order[DISP_IDX_CENT]].link as string;
    Router.push(url);
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
                        onClick={() => handleClick(idx)}
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
            <StyledTitleArea>
              {LIST_IMG_OBJ[order[DISP_IDX_CENT]].title}
            </StyledTitleArea>
            <StyledMainImgArea>
              {mainImgSprings.map((mainImgSpring, idx) => (
                <AnimatedMainImgDiv key={idx} style={{ ...mainImgSpring }}>
                  <StyledMainImg
                    src={LIST_IMG_OBJ[idx].img}
                    onClick={() => handleClick(idx)}
                  />
                </AnimatedMainImgDiv>
              ))}
            </StyledMainImgArea>
            <StyledAuthorArea>
              <StyledAuthor>
                制作:{LIST_IMG_OBJ[order[DISP_IDX_CENT]].author}
              </StyledAuthor>
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

export default Works;
