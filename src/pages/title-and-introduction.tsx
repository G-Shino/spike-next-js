import Title from "./../components/title";
import Introduction from "./../components/introduction";
import Trigger from "./../components/trigger";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Scroll from "react-scroll";

const TitleAndIntroduction = () => {
  const [toggle, setToggle] = useState(false);
  //スクロール量をとる
  React.useEffect(() => {
    const handleWheelBase = (event: WheelEvent) => {
      event.preventDefault();
    };
    document
      .getElementById("title-and-introduction-wrapper")
      ?.addEventListener("wheel", handleWheelBase, false);
  }, []);
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.deltaY > 0 ? setToggle(true) : setToggle(false);
  };
  let componentDidMount = 0;
  useEffect(() => {
    setToggle(false);
    setTimeout(() => {
      setToggle(true);
    }, 5000);
  }, [componentDidMount]);
  //この書き方でuseEffectをcomponentDidMountのように使える。つまり、ロード時以外発火しない。
  useEffect(() => {
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
  width: 100vw;
  height: 200vh;
  margin: 0px;
  padding: 0;
`;

export default TitleAndIntroduction;
