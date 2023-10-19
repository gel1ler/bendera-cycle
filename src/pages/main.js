import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import Test from '../components/3d/test'

const Main = () => {
    const [size, setSize] = useState(100)
    const [opacity, setOpacity] = useState(1)
    const [lSpacing, setLSpacing] = useState(40)
    const [display, setDisplay] = useState('block')
    const [starsScale, setStarsScale] = useState(8)
    const [x, setX] = useState(0)
    const [y, setY] = useState(-50)
    const [z, setZ] = useState(-1000)


    const scroll = event => {
        let direction = Math.sign(event.deltaY) < 0 ? true : false
        if (direction && display === 'block') {
            console.log(1)
            setSize(size + 10)
            setOpacity(opacity - 0.04)
            setLSpacing(lSpacing + 5)
            setStarsScale(starsScale - 0.27)
            setX(x + 0.3625)
            setY(y + 1.64375)
            setZ(z + 38.45)
            opacity <= 0 && setDisplay('none')
        }
        else if (!direction && size > 100) {
            console.log(2)
            setSize(size - 10)
            setOpacity(opacity + 0.04)
            setLSpacing(lSpacing - 5)
            setStarsScale(starsScale + 0.27)
            setX(x - 0.3625)
            setY(y - 1.64375)
            setZ(z - 38.45)
            opacity > 0 && setDisplay('block')
        }
    }

    useEffect(() => {
        window.addEventListener('wheel', scroll, true)
        return () => window.removeEventListener('wheel', scroll, true)
    })

    return (
        <>
            <Typography
                variant='h1'
                align='center'
                sx={{
                    fontWeight: 'bold',
                    letterSpacing: lSpacing,
                    fontSize: size,
                    opacity: opacity,
                    display
                }}
            >
                BcYCLE
            </Typography>
            <Box sx={{ position: 'absolute', width: '100vw', height: '100vh', left: 0, top: 0 }}>
                <Test starsScale={starsScale} x={x} y={y} z={z} />
            </Box>
        </>
    )
}

export default Main