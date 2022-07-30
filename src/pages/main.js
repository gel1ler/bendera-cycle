import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import Test from '../components/3d/test'

const Main = () => {
    const [size, setSize] = useState(100)
    const [opacity, setOpacity] = useState(1)
    const [lSpacing, setLSpacing] = useState(40)
    const [display, setDisplay] = useState('block')

    const scroll = event => {
        let direction = Math.sign(event.deltaY) < 0 ? true : false
        if (direction && display === 'block') {
            console.log(1)
            setSize(size + 10)
            setOpacity(opacity - 0.04)
            setLSpacing(lSpacing + 5)
            opacity <= 0 && setDisplay('none')
        }
        else if (!direction && size > 100) {
            console.log(2)
            setSize(size - 10)
            setOpacity(opacity + 0.04)
            setLSpacing(lSpacing - 5)
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
                <Test />
            </Box>
        </>
    )
}

export default Main