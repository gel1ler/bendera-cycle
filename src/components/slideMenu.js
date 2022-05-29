import React, { useRef } from 'react'
import { Slide, Typography, Box } from '@mui/material'

const SlideMenu = ({ title, state, setState, container }) => {
    return (
        <Slide direction="left" in={state} container={container.current}>
            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '30vw',
                    height: '100%',
                    bgcolor: 'secondary.main',
                    color: 'primary.main'
                }}
            >
                {title}
            </Box>
        </Slide>
    )
}

export default SlideMenu