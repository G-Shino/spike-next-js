import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useSprings, animated } from "react-spring";

interface FileInputProps {}

// 上限と下限内にする
const clamp = (x: number, min: number, max: number) => {
  if (x < min) return min;
  else if (x > max) return max;
  else return x;
};

// 実際の要素数
const ELEM_NUM = 10;
const ELEM_LIST_DUMMY = Array(ELEM_NUM).fill(0);
// 表示するインデックス先頭と最後
const DISP_IDX_START = 1;
const DISP_IDX_END = 5;
const DISP_IDX_CENT = 3;

//対象要素の高さ
const BOX_HEIGHT = 100 * 1.2;

//どのくらいのスクロール量で動かすか
const BORDER_SCROLL = 2;

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
//各作品のコンテンツを表すオブジェクト。今後コンテンツが増えたらここに足していこう。

export const Works: React.FC<FileInputProps> = ({}) => {
  const [mouseClickIndex, setMouseClickIndex] = React.useState(0); //マウスがLIST_ING_OBJの何番目の要素をクリックしたかの指標
  const [flagClick, setFlagClick] = React.useState(false); //クリックアクションのトリガー
  const [flagResize, setFlagResize] = React.useState(false); //画面リサイズアクションのトリガー
  const [order, setOrder] = React.useState(
    //LIST_ING_OBJの現在の配列順番
    ELEM_LIST_DUMMY.map((_, index) => index)
  );
  const [scrollInc, setScrollInc] = React.useState(0); //回転するメニューのスクロール量
  const [coverCont, setCoverCont] = React.useState(""); //LIST_ING_OBJの現在表示するcontを格納する変数

  // const spring = useSpring({
  //   opacity: flagClick ? 1 : 0,
  //   zIndex: flagClick ? 5 : -1,
  //   delay: flagClick ? 1000 : 0,
  //   immediate: (n) => n === "zIndex",
  // });

  //react-springのuseSpringのスタイルを作る関数
  //回転メニューの描画を担当する
  const makeStyleConsole = (idx: number) => {
    const curIdx = order.indexOf(idx);
    const y =
      (clamp(curIdx, DISP_IDX_START, DISP_IDX_END) - DISP_IDX_START) *
      BOX_HEIGHT;
    const difIdxFromCent = Math.abs(
      clamp(curIdx, DISP_IDX_START, DISP_IDX_END) - DISP_IDX_CENT
    );
    const z = difIdxFromCent * -300;
    const flagDisp = curIdx < DISP_IDX_START || DISP_IDX_END < curIdx;
    const opacity = flagDisp ? 0 : 1;
    const zIndex = flagDisp
      ? 0
      : curIdx === DISP_IDX_END || curIdx === DISP_IDX_START
      ? 1
      : 2;

    return {
      y,
      z,
      // boxShadow: `0px 0px ${(DISP_IDX_CENT - difIdxFromCent) * 3}px gray`,
      // boxShadow: `0px 0px 6px gray`,
      opacity,
      zIndex: mouseClickIndex === idx && flagClick ? 3 : zIndex,
      immediate: (n: string) => n === "zIndex",
    };
  };
  //react-springのuseSpringのスタイルを作る関数
  //作品画像パーツ(画面右)の描画を担当する
  const makeStyleMain = (idx: number) => {
    const curIdx = order.indexOf(idx);
    const opacity = curIdx === DISP_IDX_CENT ? 1 : 0;
    const zIndex = curIdx === DISP_IDX_CENT ? 1 : 0;

    return {
      y: "-50%",
      opacity,
      zIndex: mouseClickIndex === idx && flagClick ? 3 : zIndex,
      immediate: (n: string) => n === "zIndex",
    };
  };

  //springsの作成と初期スタイルの設定
  const springsConsole = useSprings(
    ELEM_NUM,
    ELEM_LIST_DUMMY.map((_, idx) => {
      return makeStyleConsole(idx);
    })
  );

  const springsMain = useSprings(
    ELEM_NUM,
    ELEM_LIST_DUMMY.map((_, idx) => {
      return makeStyleMain(idx);
    })
  );
  React.useEffect(() => {
    //画面リサイズイベント
    setFlagResize(true);
    const listner = () => {
      setFlagResize((state) => !state);
    };
    window.addEventListener("resize", listner);
    return () => window.removeEventListener("resize", listner);
  }, [flagResize]);

  //クリック時のアクション
  const handleBoxClick = (idx: number) => {
    const curIdx = order.indexOf(idx);
    if (curIdx !== DISP_IDX_CENT) {
      return;
    } else {
      if (!flagClick) {
        setMouseClickIndex(idx);
      }
      setFlagClick(true);
      setCoverCont(LIST_IMG_OBJ[idx].cont);
    }
  };
  const handleBackButton = () => {
    setFlagClick(false);
  };

  //スクロール量をとる
  React.useEffect(() => {
    const handleWheelBase = (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY < -100) {
        setScrollInc((state: number) => {
          return state + 3;
        });
      } else if (event.deltaY < 0) {
        setScrollInc((state: number) => {
          return state + 1;
        });
      } else if (event.deltaY > 100) {
        setScrollInc((state: number) => {
          return state - 3;
        });
      } else if (event.deltaY > 0) {
        setScrollInc((state: number) => {
          return state - 1;
        });
      }
    };
    document
      .getElementById("works-wrapper")
      ?.addEventListener("wheel", handleWheelBase, false);
  }, []);

  const handleWheel = () => {
    if (scrollInc >= BORDER_SCROLL) {
      handleLower();
      setScrollInc(0);
    } else if (scrollInc <= -BORDER_SCROLL) {
      handleUpper();
      setScrollInc(0);
    }
  };
  //配列の先頭を最後尾にする
  const handleUpper = () => {
    if (flagClick) {
      return;
    } else {
      const curList = Array.from(order);
      const firstIdx = curList.shift() as number;
      curList.push(firstIdx);
      setOrder(curList);
    }
  };

  //配列の最後尾を先頭にする
  const handleLower = () => {
    if (flagClick) {
      return;
    } else {
      const curList = Array.from(order);
      const lastIdx = curList.pop() as number;
      curList.unshift(lastIdx);
      setOrder(curList);
    }
  };

  return (
    <WrapperDiv id="works-wrapper" onWheel={handleWheel}>
      <AreaLog>
        <StyledSmallImgDiv>
          <StyledImg src="./images/title/logo2.png" />
        </StyledSmallImgDiv>
        <p>きく、はなす、すすむ</p>
      </AreaLog>
      <AreaADiv>
        {flagClick ? (
          <BaseMainContentDiv>
            <p>{coverCont}</p>
            <StyledButton onClick={handleBackButton}>
              &lt;&lt; Back
            </StyledButton>
          </BaseMainContentDiv>
        ) : (
          //@ts-ignore
          <AnimatedListDiv>
            <AnimatedBoxListsDiv
              style={{
                height: `${
                  BOX_HEIGHT * (DISP_IDX_END - DISP_IDX_START + 1) * 0.9
                }px`,
              }}
            >
              {springsConsole.map((spring, idx) => (
                <AnimatedConsoleBoxDiv
                  key={idx}
                  style={{ ...spring }}
                  onClick={() => {
                    handleBoxClick(idx);
                  }}
                >
                  <StyledImg src={LIST_IMG_OBJ[idx].img} />
                </AnimatedConsoleBoxDiv>
              ))}
            </AnimatedBoxListsDiv>
          </AnimatedListDiv>
        )}
      </AreaADiv>
      <AreaBDiv>
        <StyledFrameImgDiv>
          <StyledImg src="./images/works/upper.png" />
        </StyledFrameImgDiv>
        {springsMain.map((spring, idx) => (
          <AnimatedMainBoxDiv
            key={idx}
            style={{ ...spring }}
            onClick={() => {
              handleBoxClick(idx);
            }}
          >
            <StyledImg src={LIST_IMG_OBJ[idx].img} />
          </AnimatedMainBoxDiv>
        ))}
        <StyledFrameImgDiv>
          <StyledImg src="./images/works/bottom.png" />
        </StyledFrameImgDiv>
      </AreaBDiv>
      <AreaCDiv>
        <Link href="/title-and-introduction">
          <StyledHomeButton>Home</StyledHomeButton>
        </Link>
        <Link href="/heejunscene">
          <StyledHomeButton>three</StyledHomeButton>
        </Link>
        <Link href="/comment">
          <StyledHomeButton>comments</StyledHomeButton>
        </Link>
      </AreaCDiv>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  width: 95%;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr minmax(500px, 1fr);
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "areaLogo areaC"
    "areaA areaB";
`;

const AreaCDiv = styled.div`
  grid-area: areaC;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

//arealogo
const AreaLog = styled.div`
  grid-area: areaLogo;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledSmallImgDiv = styled.div`
  width: 50px;
  height: 50px;
`;

//areaB
const AreaBDiv = styled.div`
  grid-area: areaB;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const StyledFrameImgDiv = styled.div`
  width: 90%;
  height: auto;
`;

const BaseMainBoxDiv = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  max-width: 400px;
  height: 400px;
  overflow: hidden;
  will-change: transform;
`;
const AnimatedMainBoxDiv = animated(BaseMainBoxDiv);

//areaA
const AreaADiv = styled.div`
  grid-area: areaA;
  display: flex;
  align-items: center;
`;

const BaseListDiv = styled.div`
  align-self: flex-end;
  width: 100%;
  height: auto;
`;
const AnimatedListDiv = animated(BaseListDiv);

const BaseMainContentDiv = styled.div`
  grid-area: areaA;
  width: 100%;
  height: 600px;
  margin-bottom: 20px;
`;

// const StyledButtonDiv = styled.div`
//   width: 100%;
//   height: 100%;
// `;
// const AnimatedStyledButtonDiv = animated(StyledButtonDiv);

const BaseBoxListsDiv = styled.div`
  position: relative;
  width: 100%;
  perspective: 1200px;
  perspective-origin: center left;
`;
const AnimatedBoxListsDiv = animated(BaseBoxListsDiv);

const BaseConsoleBoxDiv = styled.div`
  position: absolute;
  width: 100%;
  max-width: 450px;
  height: 80px;
  overflow: hidden;
  will-change: transform;
`;
const AnimatedConsoleBoxDiv = animated(BaseConsoleBoxDiv);

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

//AreaC
const StyledHomeButton = styled.button`
  width: 100px;
  height: auto;
`;
export default Works;
