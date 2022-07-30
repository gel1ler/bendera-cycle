import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Model from './bicycle'

const Box = () => {
    return (
        <mesh>
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color='hotpink' />
        </mesh>
    )
}

const Test = () => {
    return (
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.3} />
            <Stars />
        </Canvas>
    )
}

export default Test