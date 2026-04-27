import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'
import { sportConfig } from '../../lib/mockData'

function Orb({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.5
  })
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          distort={0.4}
          speed={3}
          roughness={0}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

interface SportsOrbProps {
  sport: string
  size?: number
  className?: string
}

export default function SportsOrb({ sport, size = 80, className = '' }: SportsOrbProps) {
  const config = sportConfig[sport] ?? { color: '#00f5ff', icon: '🏆' }
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 2]} intensity={2} color={config.color} />
        <pointLight position={[-2, -2, 2]} intensity={1} color="#ff00ff" />
        <Suspense fallback={null}>
          <Orb color={config.color} />
        </Suspense>
      </Canvas>
    </div>
  )
}
