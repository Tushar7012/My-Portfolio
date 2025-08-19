import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RotatingCube = () => {
  return (
    <mesh rotation={[45, 45, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const TestThreeFiber = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [5, 5, 5] }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Cube */}
        <RotatingCube />

        {/* Orbit Controls (drag to rotate view) */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default TestThreeFiber;
