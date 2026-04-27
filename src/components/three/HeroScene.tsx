import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, Suspense } from 'react'
import { Torus, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Glowing Trophy Orb
function TrophyOrb() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.3
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
  })
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.4}
          distort={0.35}
          speed={2}
          roughness={0}
          metalness={0.9}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

// Orbiting Rings
function OrbitRing({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * speed
  })
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <Torus args={[radius, 0.02, 16, 120]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </Torus>
    </mesh>
  )
}

// Floating Spark Particles
function Sparks() {
  const count = 120
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  const ref = useRef<THREE.Points>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.04
    ref.current.rotation.x = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00f5ff" size={0.04} transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#00f5ff" />
      <pointLight position={[-5, -3, -5]} intensity={1.5} color="#a3ff00" />
      <pointLight position={[0, 0, 0]} intensity={1} color="#ff00ff" />

      <Suspense fallback={null}>
        <Stars radius={30} depth={50} count={3000} factor={3} saturation={1} fade speed={0.5} />
        <TrophyOrb />
        <OrbitRing radius={2.8} color="#00f5ff" speed={0.5} tilt={0.3} />
        <OrbitRing radius={3.6} color="#a3ff00" speed={-0.3} tilt={-0.6} />
        <OrbitRing radius={4.4} color="#ff00ff" speed={0.2} tilt={1.0} />
        <Sparks />
      </Suspense>
    </Canvas>
  )
}
