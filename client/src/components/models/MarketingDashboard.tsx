import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

// Create a simple 3D representation of a marketing dashboard
export default function MarketingDashboard(props: any) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Animation effects
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.1;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <group ref={groupRef} {...props} dispose={null}>
        {/* Base of the dashboard/laptop */}
        <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[2, 0.1, 1.5]} />
          <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.2} />
        </mesh>
        
        {/* Screen */}
        <mesh position={[0, 0.2, -0.2]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 1, 0.05]} />
          <meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Screen content - chart bars */}
        <group position={[0, 0.2, -0.17]}>
          {/* Bar chart elements */}
          <mesh position={[-0.7, -0.2, 0]} castShadow>
            <boxGeometry args={[0.15, 0.3, 0.02]} />
            <meshStandardMaterial color="#13b5c5" />
          </mesh>
          <mesh position={[-0.5, -0.2, 0]} castShadow>
            <boxGeometry args={[0.15, 0.5, 0.02]} />
            <meshStandardMaterial color="#0dc6ae" />
          </mesh>
          <mesh position={[-0.3, -0.2, 0]} castShadow>
            <boxGeometry args={[0.15, 0.35, 0.02]} />
            <meshStandardMaterial color="#0a5c8f" />
          </mesh>
          <mesh position={[-0.1, -0.2, 0]} castShadow>
            <boxGeometry args={[0.15, 0.6, 0.02]} />
            <meshStandardMaterial color="#13b5c5" />
          </mesh>
          
          {/* Line graph */}
          <group position={[0.5, 0, 0]}>
            <mesh position={[0, 0, 0.01]} castShadow>
              <boxGeometry args={[0.7, 0.01, 0.01]} />
              <meshStandardMaterial color="#ffffff" />
            </mesh>
            <mesh position={[0, 0.3, 0.01]} castShadow>
              <boxGeometry args={[0.7, 0.01, 0.01]} />
              <meshStandardMaterial color="#ffffff" opacity={0.3} transparent />
            </mesh>
            <mesh position={[0, -0.3, 0.01]} castShadow>
              <boxGeometry args={[0.7, 0.01, 0.01]} />
              <meshStandardMaterial color="#ffffff" opacity={0.3} transparent />
            </mesh>
            
            {/* Line */}
            <mesh position={[0, 0, 0.02]} castShadow>
              <boxGeometry args={[0.65, 0.02, 0.01]} />
              <meshStandardMaterial color="#0dc6ae" />
            </mesh>
          </group>
        </group>
        
        {/* Keyboard */}
        <mesh position={[0, -0.3, 0.3]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.05, 0.8]} />
          <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.4} />
        </mesh>
        
        {/* Small details - keyboard keys (simplified) */}
        <group position={[0, -0.25, 0.3]}>
          <mesh position={[-0.6, 0, 0]} castShadow>
            <boxGeometry args={[0.5, 0.01, 0.5]} />
            <meshStandardMaterial color="#0f172a" />
          </mesh>
          <mesh position={[0.3, 0, 0]} castShadow>
            <boxGeometry args={[0.8, 0.01, 0.5]} />
            <meshStandardMaterial color="#0f172a" />
          </mesh>
        </group>
      </group>
    </Float>
  );
}
