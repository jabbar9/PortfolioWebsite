import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import { Group, Mesh, Vector3 } from "three";
import { useSpring, animated } from "@react-spring/three";

// Create a visualization of marketing metrics in 3D
export default function Marketing3D() {
  const group = useRef<Group>(null);
  const chartRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Animation values
  const { scale } = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { tension: 300, friction: 40 }
  });
  
  useFrame(({ clock }) => {
    if (group.current) {
      // Gentle floating and rotation animation
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      group.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.05;
    }
    
    if (chartRef.current) {
      chartRef.current.rotation.y += 0.003;
    }
  });

  // Data for the 3D bar chart
  const barData = [
    { label: "SEO", value: 0.8, color: "#0989ff" },
    { label: "SEM", value: 0.6, color: "#04d9ff" },
    { label: "SMM", value: 0.9, color: "#ff3571" },
    { label: "Content", value: 0.7, color: "#ffca83" },
    { label: "Email", value: 0.5, color: "#01c38d" }
  ];
  
  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <animated.group ref={chartRef} scale={scale} position={[0, 0, 0]}>
        {/* Dashboard frame */}
        <mesh position={[0, 0, -0.2]} receiveShadow>
          <boxGeometry args={[4, 2.2, 0.1]} />
          <meshStandardMaterial color="#1a2130" metalness={0.5} roughness={0.5} />
        </mesh>
        
        {/* 3D Bar Chart */}
        {barData.map((bar, index) => {
          const posX = (index - 2) * 0.7;
          return (
            <group key={index} position={[posX, -0.4, 0]}>
              {/* Bar */}
              <mesh castShadow position={[0, bar.value * 0.5, 0]}>
                <boxGeometry args={[0.3, bar.value, 0.3]} />
                <meshStandardMaterial
                  color={bar.color}
                  metalness={0.7}
                  roughness={0.2}
                  emissive={bar.color}
                  emissiveIntensity={0.3}
                />
              </mesh>
              
              {/* Label */}
              <Text
                position={[0, -0.25, 0.2]}
                fontSize={0.15}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {bar.label}
              </Text>
              
              {/* Value percentage */}
              <Text
                position={[0, bar.value + 0.2, 0]}
                fontSize={0.15}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {`${Math.round(bar.value * 100)}%`}
              </Text>
            </group>
          );
        })}
        
        {/* Dashboard title */}
        <Text
          position={[0, 0.9, 0.1]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          DIGITAL MARKETING DASHBOARD
        </Text>
      </animated.group>
      
      {/* Decorative sphere representing global reach */}
      <mesh position={[2, 0.5, -1]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#0989ff"
          roughness={0.3}
          metalness={0.7}
          opacity={0.7}
          transparent={true}
        />
      </mesh>
    </group>
  );
}
