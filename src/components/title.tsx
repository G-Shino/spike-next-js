import React, { useContext } from "react";
import { useSpring, animated, interpolate } from "react-spring";
import Trigger from "./trigger";
import styled from "@emotion/styled";
import { easeCubic } from "d3-ease";

const Title = () => {
  return (
    <TitleS id="Title">
      <TitleLogo />
      <TitleDescription />
    </TitleS>
  );
};
const TitleLogo = () => {
  return <TitleLogoS src="./images/title/logo2.png" />;
};

const TitleDescription = () => {
  const toggle = useContext(Trigger);
  const { x } = useSpring({
    config: { duration: 1600, easing: easeCubic },
    x: toggle ? -400 : 0,
  });
  return (
    <TitleDescriptionS>
      <animated.div
        className="title_description"
        style={{
          transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`),
        }}
      >
        <TitleDateS>2020.**.**... - **.**...</TitleDateS>
        <TitleWhoweareJapaneseS>
          東京大学　山中俊治研究室
        </TitleWhoweareJapaneseS>
        <TitleWhoweareEnglishS>
          UTokyo Prototyping & Design Laboratory
        </TitleWhoweareEnglishS>
      </animated.div>
    </TitleDescriptionS>
  );
};

//styles----------------------------------------
const TitleS = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-areas:
    ". ."
    "logo description"
    ". .";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 50vh 1fr;
`;

const TitleLogoS = styled.img`
  align-self: center;
  justify-self: center;
  grid-area: logo;
  height: 50vh;
`;

const TitleDescriptionS = styled.div`
  grid-area: description;
  display: inline-block;
  text-align: right;
  justify-self: center;
  align-self: flex-end;
`;

const TitleDateS = styled.div`
  display: block;
  font-weight: bold;
  font-size: 200%;
  margin-bottom: 3%;
`;

const TitleWhoweareJapaneseS = styled.div`
  display: block;
  font-weight: bold;
  margin-bottom: 1%;
`;

const TitleWhoweareEnglishS = styled.div`
  display: block;
`;

export default Title;
