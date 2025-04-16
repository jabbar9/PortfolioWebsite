import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import { Group, MeshStandardMaterial } from "three";

interface Logo3DProps {
  text?: string;
  textColor?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  size?: number;
  height?: number;
}

export default function Logo3D({
  text = "F&A",
  textColor = "#0989ff",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = 1,
  height = 0.2,
}: Logo3DProps) {
  const groupRef = useRef<Group>(null);
  
  // Create materials with proper typing
  const material = new MeshStandardMaterial({
    color: textColor,
    metalness: 0.5,
    roughness: 0.2,
  });
  
  // Animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef} position={position} rotation={rotation as any}>
      <Center scale={size}>
        <Text3D
          font="/fonts/inter.json"
          size={1}
          height={height}
          curveSegments={4}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={4}
          material={material}
        >
          {text}
        </Text3D>
      </Center>
    </group>
  );
}
