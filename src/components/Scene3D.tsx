import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, TorusKnot } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.x += d * 0.2;
      ref.current.rotation.y += d * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <TorusKnot ref={ref} args={[1, 0.32, 180, 32]}>
        <MeshDistortMaterial color="#c084fc" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
      </TorusKnot>
    </Float>
  );
}

function Blob({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <Icosahedron args={[0.5, 1]} position={position}>
        <MeshDistortMaterial color={color} distort={0.6} speed={3} />
      </Icosahedron>
    </Float>
  );
}

export function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#c084fc" />
      <pointLight position={[-5, -3, 2]} intensity={1} color="#22d3ee" />
      <Suspense fallback={null}>
        <Knot />
        <Blob position={[-2.5, 1.2, -1]} color="#22d3ee" />
        <Blob position={[2.6, -1, -1]} color="#f0abfc" />
      </Suspense>
    </Canvas>
  );
}
