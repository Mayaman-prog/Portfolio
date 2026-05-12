import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function SkillIcon({ color, shape = 'Octahedron', size = 0.6 }) {
  const meshRef = useRef();
  const timeRef = useRef(0);

  const geometry = useMemo(() => {
    const name = shape.charAt(0).toUpperCase() + shape.slice(1) + 'Geometry';
    return new THREE[name](size);
  }, [shape, size]);

  useFrame((_state, delta) => {
    timeRef.current += delta;
    if (meshRef.current) {
      meshRef.current.rotation.x = timeRef.current * 0.5;
      meshRef.current.rotation.y = timeRef.current * 0.3;
      meshRef.current.position.y += Math.sin(timeRef.current * 2) * 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}
