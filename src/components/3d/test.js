import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, CameraShake } from '@react-three/drei'
import Model from './bicycle'

const Test = ({ starsScale, x, y, z }) => {
    const config = {
        maxYaw: 0.1, // Max amount camera can yaw in either direction
        maxPitch: 0.1, // Max amount camera can pitch in either direction
        maxRoll: 0.1, // Max amount camera can roll in either direction
        yawFrequency: 0.1, // Frequency of the the yaw rotation
        pitchFrequency: 0.1, // Frequency of the pitch rotation
        rollFrequency: 0.1, // Frequency of the roll rotation
        intensity: 0.5, // initial intensity of the shake
        decay: false, // should the intensity decay over time
        decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
        controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
    }

    // position={[0, -50, -1000]} initial
    // position={[10, -7, 0]} final

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <CameraShake {...config} />
            <mesh scale={0.2} position={[x, y, z]} rotation={[0, Math.PI / 2, 0]}>
                <Model />
            </mesh>
            <mesh scale={starsScale}>
                <Stars />
            </mesh>
        </Canvas>
    )
}

export default Test