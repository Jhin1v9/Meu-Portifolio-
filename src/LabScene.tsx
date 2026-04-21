import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { Mesh, Points } from 'three';
import { AdditiveBlending, BufferAttribute, Color } from 'three';

function Core() {
  const coreRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);
  const secondRingRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.34;
      coreRef.current.rotation.x = Math.sin(time * 0.42) * 0.22;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.2;
      ringRef.current.rotation.y = time * 0.28;
    }
    if (secondRingRef.current) {
      secondRingRef.current.rotation.x = time * -0.24;
      secondRingRef.current.rotation.z = time * 0.16;
    }
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshStandardMaterial color="#d8ff7a" emissive="#526600" emissiveIntensity={0.42} roughness={0.35} metalness={0.35} />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.78, 0.014, 16, 160]} />
        <meshBasicMaterial color="#ff6f61" transparent opacity={0.72} />
      </mesh>
      <mesh ref={secondRingRef} rotation={[0.75, 0.15, 0]}>
        <torusGeometry args={[2.24, 0.01, 16, 180]} />
        <meshBasicMaterial color="#f5f1df" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function SignalField() {
  const pointsRef = useRef<Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = 620;
    const pos = new Float32Array(count * 3);
    const color = new Float32Array(count * 3);
    const palette = ['#d8ff7a', '#ff6f61', '#f5f1df', '#88a65e'].map((item) => new Color(item));

    for (let i = 0; i < count; i += 1) {
      const radius = 2.8 + Math.random() * 5.2;
      const angle = Math.random() * Math.PI * 2;
      const drift = (Math.random() - 0.5) * 3.1;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = drift;
      pos[i * 3 + 2] = Math.sin(angle) * radius - 1.5;

      const picked = palette[i % palette.length];
      color[i * 3] = picked.r;
      color[i * 3 + 1] = picked.g;
      color[i * 3 + 2] = picked.b;
    }

    return { positions: pos, colors: color };
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.035;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.12) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors transparent opacity={0.72} blending={AdditiveBlending} depthWrite={false} />
    </points>
  );
}

function Rails() {
  return (
    <group position={[0, -1.8, -0.2]}>
      {[-2.2, -1.1, 0, 1.1, 2.2].map((x) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[4.4, 0.012, 0.012]} />
          <meshBasicMaterial color="#d8ff7a" transparent opacity={0.24} />
        </mesh>
      ))}
      {[-1.4, 0, 1.4].map((z) => (
        <mesh key={z} position={[0, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[5.2, 0.012, 0.012]} />
          <meshBasicMaterial color="#ff6f61" transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

export default function LabScene() {
  return (
    <div className="lab-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.35, 6.2], fov: 50 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#0b0c09']} />
        <ambientLight intensity={0.42} />
        <pointLight position={[4, 4, 4]} intensity={3.2} color="#d8ff7a" />
        <pointLight position={[-3, -2, 3]} intensity={2.4} color="#ff6f61" />
        <SignalField />
        <Rails />
        <Core />
      </Canvas>
    </div>
  );
}
