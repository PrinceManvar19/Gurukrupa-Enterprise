'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleSystem() {
  const ref = useRef<THREE.Points>(null)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0EA5E9"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function FloatingOrb({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const initialY = position[1]
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = initialY + Math.sin(state.clock.elapsedTime + position[0]) * 0.5
      ref.current.rotation.x = state.clock.elapsedTime * 0.2
      ref.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
    </mesh>
  )
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleSystem />
        <FloatingOrb position={[-4, 2, -2]} color="#0EA5E9" scale={0.8} />
        <FloatingOrb position={[4, -1, -3]} color="#1E3A8A" scale={1} />
        <FloatingOrb position={[0, 3, -4]} color="#1E3A8A" scale={0.6} />
        <FloatingOrb position={[-3, -2, -2]} color="#0EA5E9" scale={0.5} />
        <FloatingOrb position={[5, 1, -5]} color="#0EA5E9" scale={0.7} />
      </Canvas>
    </div>
  )
}
