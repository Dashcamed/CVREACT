import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Laptop } from "./Laptop";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={700}
        maxDistance={900}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <HeroLights />
      <group
        scale={isMobile ? 0.9 : 1}
        position={[0, -40, 0]}
        rotation={[Math.PI / 21, -Math.PI / 6, 0]}
      >
        <Laptop />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
