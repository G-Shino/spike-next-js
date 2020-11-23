import Title from "./../components/title";
import Introduction from "./../components/introduction";
import Trigger from "./../components/trigger";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Scroll from "react-scroll";

const TitleAndIntroduction = () => {
  const [toggle, setToggle] = useState(false); //Toggleがtrueならintroduction,falseならtitle画面を表示する。要素が2つしかないからbooleanで制御可能。3つ以上になるとtoggleをintに変える必要あり。
  //スクロール量をとる
  React.useEffect(() => {
    const handleWheelBase = (event: WheelEvent) => {
      //ホイールイベント時に発火
      event.preventDefault(); //普通のスクロールを抑制する。これにより、スクロールはこのコードの記述のみで制御される。
    };
    document
      .getElementById("title-and-introduction-wrapper")
      ?.addEventListener("wheel", handleWheelBase, false);
  }, []);
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.deltaY > 0 ? setToggle(true) : setToggle(false); //下にスクロールしたらtrue,上にスクロールしたらfalse
  };
  useEffect(() => {
    setToggle(false);
    setTimeout(() => {
      setToggle(true);
    }, 5000); //ページロード5秒後に下にスクロールされる。
  }, []);
  //この書き方でuseEffectをcomponentDidMountのように使える。つまり、ロード時以外発火しない。最後の[]がポイント。
  useEffect(() => {
    //toggleの変化によるアクションを指定
    toggle
      ? Scroll.scroller.scrollTo("Page2", {
          duration: 1600,
          delay: 0,
          smooth: "easeInOutQuart",
        })
      : Scroll.scroller.scrollTo("Title", {
          duration: 1600,
          delay: 0,
          smooth: "easeInOutQuart",
        });
  }, [toggle]);
  return (
    <Trigger.Provider value={toggle}>
      <MainDiv id="title-and-introduction-wrapper" onWheel={handleWheel}>
        <Title />
        <Introduction />
      </MainDiv>
    </Trigger.Provider>
  );
};
const MainDiv = styled.div`
  background-color: #f2f2f2;
  color: #363636;
  overflow: hidden;
  width: 100%;
  height: 200%;
  margin: 0px;
  padding: 0;
  position: relative;
`;

export default TitleAndIntroduction;
