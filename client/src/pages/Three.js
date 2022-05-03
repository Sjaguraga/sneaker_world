import React from "react";

function Three() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export default Three;
