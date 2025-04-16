import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, useTexture } from "@react-three/drei";
import { Group, Mesh, MeshStandardMaterial, Color, PointLight } from "three";
import { useIsVisible } from "../hooks/use-is-visible";

export default function Brain3D() {
  const brainGroup = useRef<Group>(null);
  const { viewport } = useThree();
  
  // Create a simple brain model since we don't have a pre-existing one
  useFrame(({ clock }) => {
    if (brainGroup.current) {
      brainGroup.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      // Gentle floating motion
      brainGroup.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={brainGroup} position={[0, 0, 0]}>
      {/* Brain hemispheres represented by abstract shapes */}
      <mesh position={[-0.3, 0, 0]} castShadow>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial 
          color="#0989ff" 
          roughness={0.3}
          metalness={0.7}
          emissive="#0989ff"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      <mesh position={[0.3, 0, 0]} castShadow>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial 
          color="#0989ff" 
          roughness={0.3}
          metalness={0.7}
          emissive="#0989ff"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Neural connections */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial 
            color="#39c4ff" 
            emissive="#39c4ff"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
      
      {/* Point light inside the brain for glow effect */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#0989ff" distance={5} />
    </group>
  );
}
