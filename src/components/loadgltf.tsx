import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; //threejsでおなじみのアレ
import { useLoader } from "react-three-fiber"; //threejsをReactで使うためのモジュール
const LoadedObject = () => {
  const gltf = useLoader(GLTFLoader, "./chair.glb");
  return <primitive object={gltf.scene} position={[0, 0, 0]} dispose={null} />;
};
export { LoadedObject }; //publicフォルダーからchair.glbをロード。importでコンパイル時にあらかじめglbファイルを取り込みたかったけど、それだとなぜか上手くいかなかった。webpackに何らかの方法でgltfloaderを加えておけば解決するかも
