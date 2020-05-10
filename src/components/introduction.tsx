import Trigger from "./trigger";
import React, { useState, useContext } from "react";
import { useSpring, animated, interpolate } from "react-spring";
import styled from "@emotion/styled";
import { easeCubic } from "d3-ease";
import Link from "next/link";

const Introduction = () => {
  return (
    <Page2S id="Page2">
      <Greetings />
      <YamSketch />
      <Button />
    </Page2S>
  );
};
const Greetings = () => {
  return (
    <GreetingsS>
      <GreetingsJapanese />
      <GreetingsEnglish />
    </GreetingsS>
  );
};
const GreetingsJapanese = () => {
  const toggle = useContext(Trigger);
  const { x, o } = useSpring({
    config: { duration: 1600, easing: easeCubic },
    x: toggle ? 0 : 200,
    o: toggle ? 1 : 0,
  });
  return (
    <GreetingsJapaneseS>
      <animated.div
        style={{
          transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`),
          opacity: interpolate([o], (o) => `${o}`),
        }}
      >
        <GreetingsJapaneseTitleS>開催にあたり</GreetingsJapaneseTitleS>
        <p>
          言葉を交えると新しい発見があります。
          話すことによってイメージの輪郭が急にはっきりすることもあります。
          アイデアは、人との関わりの中で少しずつ、時には劇的に進展します。
          山中研究室においても、会話や議論はプロジェクト進行の中核になります。
          常に、より広い視野、客観的な意見、新たなビジョンを求めて繰り返される会話。
          重要なのは話者の多様性です。
          今回の展示では、来場いただいた皆さんと、研究メンバーが会話することを目指しました。
          展示されたプロトタイプには、私たちのビジョンや価値観が込められています。
          気になることがあったら、そこにいるメンバーに遠慮なく問いかけてください。
          そして、あなたが思ったこと、感じたこと、考えたことを聞かせてください。
          限られた時間ではありますが、一緒に未来をドライブできれば幸いです。
        </p>
      </animated.div>
    </GreetingsJapaneseS>
  );
};
const GreetingsEnglish = () => {
  const toggle = useContext(Trigger);
  const { x, o } = useSpring({
    config: { duration: 1600, easing: easeCubic },
    x: toggle ? 0 : 300,
    o: toggle ? 1 : 0,
  });
  return (
    <GreetingsEnglishS>
      <animated.div
        style={{
          transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`),
          opacity: interpolate([o], (o) => `${o}`),
        }}
      >
        <GreetingsEnglishTitleS>-Introduction-</GreetingsEnglishTitleS>
        <p>
          Discovery often occurs during a “dialogue”. It also helps us to
          clarify the vague image of our concepts. Those ideas evolve steadily,
          sometimes dramatically with our engagement with others. Likewise,
          conversation and discussion are also critical for running our
          projects. A broader viewpoint, objective opinion and iteration of
          dialogue, pursuing new vision are always required. What is most
          important is the diversity of ideas. Our goal in this exhibition is to
          open a dialogue between you and us. The displayed prototypes are made
          upon our visions and values. If you have any questions or insights you
          would like to share with us, please feel free to ask. We would be very
          glad to hear your thoughts and opinions. Enjoy the short journey with
          our vision to the future.
        </p>
      </animated.div>
    </GreetingsEnglishS>
  );
};
const YamSketch = () => {
  const toggle = useContext(Trigger);
  const { x, o } = useSpring({
    config: { duration: 1600, easing: easeCubic },
    x: toggle ? 0 : 100,
    o: toggle ? 1 : 0,
  });
  return (
    <SketchYamS>
      <animated.div
        style={{
          transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`),
          opacity: interpolate([o], (o) => `${o}`),
        }}
      >
        <SketchYamImageS src="./images/introduction/Yam_greetings.png" />
      </animated.div>
    </SketchYamS>
  );
};
const Button = () => {
  const [toggle, setToggle] = useState(false);
  const { x } = useSpring({
    config: { tension: 500 },
    x: toggle ? 1.05 : 1,
  });
  return (
    <ButtonGalleryS>
      <animated.div
        style={{
          transform: interpolate([x], (x) => `scale(${x})`),
        }}
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
        onMouseDownCapture={() => setToggle(false)}
        onMouseUpCapture={() => setToggle(true)}
      >
        <Link href="/works">
          <ButtonGalleryBoxS>Go To Gallery</ButtonGalleryBoxS>
        </Link>
      </animated.div>
    </ButtonGalleryS>
  );
};

//style-----------------------------------------
const Page2S = styled.div`
  display: grid;
  grid-template-areas:
    "greetings "
    " yam_logo "
    " button";
  grid-template-rows: 40vh 40vh 20vh;
  justify-content: center;
  font-size: 100%;
  position: relative;
`;
const GreetingsS = styled.div`
  grid-template-areas: "japanese . english";
  grid-template-columns: 1fr 3vw 1fr;
  grid-area: greetings;
  display: grid;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
`;
const GreetingsJapaneseS = styled.div`
  grid-area: japanese;
  justify-content: center;
  font-size: 60%;
  font-weight: bold;
  line-height: 200%;
  letter-spacing: 1px;
`;
const GreetingsEnglishS = styled.div`
  grid-area: english;
  justify-content: center;
  font-size: 60%;
  font-weight: bold;
  line-height: 200%;
  letter-spacing: 0.5px;
`;
const GreetingsJapaneseTitleS = styled.div`
  text-align: right;
  font-size: 150%;
  margin-bottom: 2%;
  font-weight: bold;
`;
const GreetingsEnglishTitleS = styled.div`
  font-size: 150%;
  margin-bottom: 2%;
  font-weight: bold;
`;
const SketchYamS = styled.div`
  grid-area: yam_logo;
  justify-self: center;
  width: 30vw;
`;
const SketchYamImageS = styled.img`
  width: 30vw;
  height: 15vw;
`;
const ButtonGalleryS = styled.div`
  grid-area: button;
  justify-self: center;
  width: 20vw;
  height: 5vh;
`;
const ButtonGalleryBoxS = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-color: #777777;
  color: white;
  width: 20vw;
  height: 5vh;
  text-align: center;
  line-height: 5vh;
  font-size: 100%;
`;
export default Introduction;
