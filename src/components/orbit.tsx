import React, { useRef } from "react";
import { ReactThreeFiber, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

// インターフェイスIntrinsicElementsにorbitControls の定義を追加
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>;
    }
  }
}

type ControlProps = {
  isControl: boolean;
};

export const Controls: React.FC<ControlProps> = (props) => {
  const controlsRef = useRef<OrbitControls>();
  const { camera, gl } = useThree();

  useFrame(() => {
    controlsRef.current?.update();
  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enabled={props.isControl}
      enableZoom={true}
      zoomSpeed={1.0}
      enableRotate={true}
      rotateSpeed={1.0}
      enablePan={true}
      panSpeed={2.0}
      minDistance={0}
      maxDistance={Infinity}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
    />
  );
};
