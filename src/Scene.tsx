// src/Scene.tsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    // Define your nodes here if you know the structure
  };
  materials: {
    // Define your materials here if you know the structure
  };
};

const Model: React.FC = () => {
  const { scene } = useGLTF('/models/room.glb');
  return <primitive object={scene} />;
};

const Scene: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
