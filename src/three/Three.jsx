import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import styled from "styled-components";

export default function Three() {
  return (
    <ThreeWrapper>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </ThreeWrapper>
  );
}

const ThreeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
