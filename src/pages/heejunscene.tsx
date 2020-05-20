import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber"; //threejsをReactで使うためのモジュール
import styled from "@emotion/styled";
//import { Controls } from "../components/orbit"; //orbitControlsのReact-three-fiber実装,これのコピペ＝＞https://qiita.com/Quarter-lab/items/151f06bddea1fc9cf4d7
import Link from "next/link";
//import { LoadedObject } from "../components/loadgltf";
import { Color } from "../constants/Color";
import dynamic from "next/dynamic";
const Controls = dynamic(() => import("../components/orbit"), {
  ssr: false,
});

const LoadedObject = dynamic(() => import("../components/loadgltf"), {
  ssr: false,
});
//threeのメインモジュール以外(OrbitControlsなど)を扱う場合は必ずdynamicを用いること
const ChairScene = () => {
  return (
    <ThreePageStyle>
      <CanvasStyle>
        <Canvas camera={{ position: [0.5, 0.3, 0.5] }}>
          <ambientLight intensity={0.5} />
          <spotLight intensity={3} position={[0, 10, 0]} />
          <Suspense fallback={null}>{<LoadedObject />}</Suspense>
          <Controls isControl={true} />
        </Canvas>
      </CanvasStyle>
      <Link href="/works">
        <StyledButton>works</StyledButton>
      </Link>
    </ThreePageStyle>
  );
  //Suspenseは必須、3dデータのロードを管理してくれるらしい。上手くいじるとローディング画面も作れる。
  //Canvasで囲まれてるエレメントがthreejsを表示する窓になっている。
};

const ThreePageStyle = styled.div`
  display: grid;
  justify-content:center;
  align-content:center;
`;

const StyledButton = styled.button``;
const CanvasStyle = styled.div`
  width: 800px;
  height: 800px;
  background-color: ${Color.BASE_COLOR};
`;
export default ChairScene;
