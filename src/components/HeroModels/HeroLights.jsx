const HeroLights = () => {
  return (
    <>
      <ambientLight intensity={0.8} color="#ffffff" />
      <directionalLight
        position={[-30, 10, 20]}
        intensity={1}
        color="#4cc9f0"
        castShadow
        penumbra={0.5}
      />
      <directionalLight
        color="violet"
        intensity={2}
        position={[10, 10, -20]}
        castShadow
        penumbra={0.5}
      />
    </>
  );
};

export default HeroLights;
