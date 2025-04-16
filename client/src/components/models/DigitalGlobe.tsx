import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface DigitalGlobeProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotationSpeed?: number;
  color?: string;
  emissive?: string;
}

export default function DigitalGlobe({
  position = [0, 0, 0],
  scale = [1, 1, 1],
  rotationSpeed = 0.3,
  color = '#13b5c5',
  emissive = '#0a5c8f'
}: DigitalGlobeProps) {
  const globeRef = useRef<THREE.Mesh>(null);
  const dataPointsRef = useRef<THREE.Group>(null);
  
  // Create random data points on the globe
  const dataPoints = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      // Generate random spherical coordinates
      const phi = Math.random() * Math.PI * 2; // longitude
      const theta = Math.random() * Math.PI; // latitude
      const r = 1.05; // slightly larger than globe radius
      
      // Convert to cartesian coordinates
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);
      
      // Random size for each point
      const size = Math.random() * 0.04 + 0.01;
      
      return { position: [x, y, z], size };
    });
  }, []);
  
  // Create connection lines between some points
  const connections = useMemo(() => {
    const lines = [];
    const connectionCount = 15;
    
    for (let i = 0; i < connectionCount; i++) {
      const start = Math.floor(Math.random() * dataPoints.length);
      const end = Math.floor(Math.random() * dataPoints.length);
      
      if (start !== end) {
        lines.push({
          start: dataPoints[start].position,
          end: dataPoints[end].position
        });
      }
    }
    
    return lines;
  }, [dataPoints]);
  
  // Animation
  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * rotationSpeed;
    }
    
    if (dataPointsRef.current) {
      dataPointsRef.current.rotation.y += delta * rotationSpeed;
    }
  });
  
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <group position={position} scale={scale}>
        {/* Main globe */}
        <mesh ref={globeRef} castShadow receiveShadow>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial 
            color={color}
            emissive={emissive}
            emissiveIntensity={0.3}
            roughness={0.7}
            metalness={0.3}
            transparent
            opacity={0.9}
            wireframe
          />
        </mesh>
        
        {/* Data points */}
        <group ref={dataPointsRef}>
          {dataPoints.map((point, i) => (
            <mesh 
              key={i}
              position={point.position as [number, number, number]}
              castShadow
            >
              <sphereGeometry args={[point.size, 16, 16]} />
              <meshStandardMaterial
                color="#ffffff"
                emissive="#ffffff"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
          
          {/* Connection lines */}
          {connections.map((line, i) => (
            <line key={i}>
              <bufferGeometry attach="geometry">
                <bufferAttribute
                  attach="attributes-position"
                  array={new Float32Array([
                    ...line.start,
                    ...line.end
                  ])}
                  count={2}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial
                attach="material"
                color="#0dc6ae"
                linewidth={1}
                opacity={0.4}
                transparent
              />
            </line>
          ))}
        </group>
      </group>
    </Float>
  );
}
