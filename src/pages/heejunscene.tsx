import React, { Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber"; //threejsをReactで使うためのモジュール
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; //threejsでおなじみのアレ
import styled from "@emotion/styled";
import { Controls } from "./orbit"; //orbitControlsのReact-three-fiber実装,これのコピペ＝＞https://qiita.com/Quarter-lab/items/151f06bddea1fc9cf4d7
import Link from "next/link";

const ChairScene = () => {
  const LoadedObject = () => {
    const gltf = useLoader(GLTFLoader, "./chair.glb");
    return (
      <primitive object={gltf.scene} position={[0, 0, 0]} dispose={null} />
    );
  };
  //publicフォルダーからchair.glbをロード。importでコンパイル時にあらかじめglbファイルを取り込みたかったけど、それだとなぜか上手くいかなかった。webpackに何らかの方法でgltfloaderを加えておけば解決するかも

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
}
`;
const StyledButton = styled.button``;
const CanvasStyle = styled.div`
  width: 800px;
  height: 800px;
  background-color: #363636;
`;
export default ChairScene;
