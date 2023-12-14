import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/bamboo/scene.gltf");
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.843}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Cube028_Panda_0.geometry}
            material={materials.Panda}
            position={[0, -7.522, -5.351]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[38.088, 38.088, 60.038]}
          />
          <mesh
            geometry={nodes.Cube029_Panda_0.geometry}
            material={materials.Panda}
            position={[-23.061, 130.641, -5.351]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[11.729, 8.697, 13.183]}
          />
          <mesh
            geometry={nodes.Cube030_Panda_0.geometry}
            material={materials.Panda}
            position={[-40.842, 77.047, -1.344]}
            rotation={[-Math.PI / 2, 0, 0.662]}
            scale={[28.183, 16.139, 16.139]}
          />
          <mesh
            geometry={nodes.Cube031_Panda_0.geometry}
            material={materials.Panda}
            position={[22.532, 7.42, 9.214]}
            rotation={[-Math.PI / 2, 0, 0.341]}
            scale={[15.003, 18.759, 9.651]}
          />
          <mesh
            geometry={nodes.Cube033_Panda_0.geometry}
            material={materials.Panda}
            position={[0, 8.515, -48.553]}
            rotation={[-1.038, 0, 0]}
            scale={[10.966, 11.179, 8.268]}
          />
          <mesh
            geometry={nodes.Plane005_Panda_0.geometry}
            material={materials.Panda}
            position={[-11.687, 125.054, 25.754]}
            rotation={[0, 0, 0.254]}
            scale={4.892}
          />
          <mesh
            geometry={nodes.Cube034_Panda_0.geometry}
            material={materials.Panda}
            position={[0, 115.906, 25.82]}
            rotation={[-0.739, 0, 0]}
            scale={[10.975, 13.308, 13.308]}
          />
          <mesh
            geometry={nodes.Cube035_Panda_0.geometry}
            material={materials.Panda}
            position={[0, 115.348, 25.208]}
            rotation={[-0.739, 0, 0]}
            scale={[9.529, 11.758, 13.308]}
          />
          <mesh
            geometry={nodes.Plane006_Panda_0.geometry}
            material={materials.Panda}
            position={[0, 120.015, 36.698]}
            scale={[5.404, 3.978, 7.241]}
          />
          <mesh
            geometry={nodes.BezierCircle028_Sheld_0.geometry}
            material={materials.Sheld}
            position={[9.677, 83.068, 42.433]}
            rotation={[-1.623, -0.514, 0]}
            scale={8.452}
          />
          <mesh
            geometry={nodes.Cylinder019_Sheld_0.geometry}
            material={materials.Sheld}
            position={[0, 59.092, 23.977]}
            rotation={[-1.623, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube036_o_0.geometry}
            material={materials.material}
            position={[0.003, 82.796, 6.139]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.BezierCircle029_o_0.geometry}
            material={materials.material}
            position={[9.677, 83.068, 42.433]}
            rotation={[-1.623, -0.514, 0]}
            scale={8.452}
          />
          <mesh
            geometry={nodes.Cylinder020_o_0.geometry}
            material={materials.material}
            position={[0, 59.092, 23.977]}
            rotation={[-1.623, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/bamboo/scene.gltf");
