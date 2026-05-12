import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ContactOrb() {
  const meshRef = useRef();
  const timeRef = useRef(0);

  useFrame((_state, delta) => {
    timeRef.current += delta;
    if (meshRef.current) {
      meshRef.current.rotation.x = timeRef.current * 0.2;
      meshRef.current.rotation.y = timeRef.current * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#00f5ff"
        wireframe
        emissive="#00f5ff"
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}
