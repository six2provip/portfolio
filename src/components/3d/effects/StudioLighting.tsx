'use client';

interface StudioLightingProps {
  shadows?: boolean;
}

export function StudioLighting({ shadows = true }: StudioLightingProps) {
  return (
    <>
      {/* Soft overall ambient studio fill */}
      <ambientLight color="#0d111a" intensity={1.2} />

      {/* Main architectural key light from top-front */}
      <directionalLight
        position={[6, 12, 8]}
        intensity={1.8}
        color="#f8fafc"
        castShadow={shadows}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={35}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadow-bias={-0.0005}
      />

      {/* Cool blue fill light from the left */}
      <directionalLight
        position={[-10, 8, -4]}
        intensity={0.6}
        color="#38bdf8"
      />

      {/* Workspace overhead task spotlight */}
      <spotLight
        position={[0, 4.5, 0.5]}
        target-position={[0, 1.2, 0]}
        intensity={3.5}
        distance={8}
        angle={Math.PI / 4.5}
        penumbra={0.7}
        color="#ffffff"
        castShadow={shadows}
      />

      {/* Lab technical glowing point light */}
      <pointLight
        position={[-9, 3, -3]}
        intensity={2.8}
        distance={10}
        color="#818cf8"
      />

      {/* Gaming battlestation mood light (controlled rose/crimson) */}
      <pointLight
        position={[9, 2.8, -3]}
        intensity={2.2}
        distance={8}
        color="#f43f5e"
      />

      {/* About terminal soft gallery spot */}
      <spotLight
        position={[0, 4.5, -7]}
        target-position={[0, 1.5, -8]}
        intensity={2.0}
        distance={7}
        angle={Math.PI / 4}
        penumbra={0.6}
        color="#e2e8f0"
      />

      {/* Entry runway accent light */}
      <pointLight
        position={[0, 3, 10]}
        intensity={1.5}
        distance={7}
        color="#38bdf8"
      />
    </>
  );
}
