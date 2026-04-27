import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Torus, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function Spinner3D() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const ring3 = useRef<THREE.Mesh>(null)
  const core = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1.current) ring1.current.rotation.x = t * 1.2
    if (ring2.current) ring2.current.rotation.y = t * 0.9
    if (ring3.current) ring3.current.rotation.z = t * 1.5
    if (core.current)  core.current.rotation.y  = t * 2
  })

  return (
    <>
      <mesh ref={ring1}>
        <Torus args={[1.2, 0.04, 16, 80]}>
          <meshStandardMaterial color="#00f5ff" emissive="#00f5ff" emissiveIntensity={3} />
        </Torus>
      </mesh>
      <mesh ref={ring2}>
        <Torus args={[0.9, 0.04, 16, 80]}>
          <meshStandardMaterial color="#a3ff00" emissive="#a3ff00" emissiveIntensity={3} />
        </Torus>
      </mesh>
      <mesh ref={ring3}>
        <Torus args={[0.6, 0.04, 16, 80]}>
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={3} />
        </Torus>
      </mesh>
      <mesh ref={core}>
        <Sphere args={[0.25, 32, 32]}>
          <meshStandardMaterial color="#ffffff" emissive="#00f5ff" emissiveIntensity={2} />
        </Sphere>
      </mesh>
    </>
  )
}

export default function LoadingSpinner3D({ size = 120 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 3]} intensity={2} color="#00f5ff" />
        <Suspense fallback={null}>
          <Spinner3D />
        </Suspense>
      </Canvas>
    </div>
  )
}
