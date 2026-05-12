import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export default function OrbitingParticles() {
  const particlesRef = useRef();
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    let seed = 12345;
    const seededRandom = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let i = 0; i < count; i++) {
      const radius = 3 + seededRandom() * 2;
      const theta = seededRandom() * Math.PI * 2;
      const phi = seededRandom() * Math.PI;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.005;
    }
  });

  return (
    <points ref={particlesRef} positions={positions}>
      <pointsMaterial
        color="#ff00ff"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
