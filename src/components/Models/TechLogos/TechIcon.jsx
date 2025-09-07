import { Environment, useGLTF, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Html, useProgress } from "@react-three/drei";

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress.toFixed(0)} % loaded</Html>;
  }

  useEffect(() => {
    if (model.name === "Three Js")
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
  }, [scene]);

  return (
    <Canvas>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={<Loader />}>
        <Float
          speed={5.5}
          rotationIntensity={2}
          floatIntensity={0.9}
          rotation={model.rotation}
        >
          <group scale={model.scale}>
            <primitive object={scene.scene} />
          </group>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default TechIcon;
