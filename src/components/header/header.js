import React, { useState, useEffect, useRef } from 'react'
import './style.css'
import { Box, Typography, IconButton, Drawer, Stack, Button, Slide } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SlideMenu from '../slideMenu'

const Header = ({ video, title }) => {
    const [scroll, setScroll] = useState(0)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const delta = window.innerHeight * 0.3

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    const handleClose = () => {
        setOpen(false)
        setOpen2(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    const containerRef = useRef(null)

    return (
        <Box className="header">
            <IconButton
                onClick={() => setOpen(true)}
                size='large'
                sx={{
                    zIndex: 3,
                    position: 'fixed',
                    top: 20,
                    left: 20,
                    color: 'primary.main'
                }}
            >
                <DensityMediumIcon />
            </IconButton>
            <Drawer
                open={open}
<<<<<<< HEAD
                onClose={() => setOpen(false)}
=======
                onClose={handleClose}
>>>>>>> a60f64d8f07437455960ade76345ac5ad7c74536
            >
                <Box sx={{ px: 2, pt: 2, height: '100%', width: '30vw', bgcolor: 'secondary.main' }} ref={containerRef}>
                    <Typography variant='h5' color="primary">
                        Menu
                    </Typography>
                    <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                        <Button variant="outlined" fullWidth startIcon={<ArrowRightIcon />} onClick={() => setOpen2(true)}>Проекты</Button>
                        <Button variant="outlined" fullWidth startIcon={<ArrowRightIcon />}>О нас</Button>
                        <Button variant="outlined" fullWidth startIcon={<ArrowRightIcon />}>грохочет</Button>
                    </Stack>
                    <SlideMenu state={open2} title='sdfs' container={containerRef} />
                </Box>
            </Drawer>
            <Box
                sx={{
                    opacity: scroll > delta ? 0 : 1,
                    transition: 'all 0.5s linear',
                    width: '100%',
                    height: '70vh',
                    width: '40vw',
                    background: 'rgb(0, 0, 0)',
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, transparent 100%)',
                    zIndex: 1,
                    position: 'fixed',
                    top: 0,
                }}
            />
            <Typography
                variant="h3"
                sx={{
                    zIndex: 2,
                    fontFamily: 'Montserrat, sans-serif',
                    position: 'fixed',
                    top: 20,
                    transition: 'all 0.5s linear',
                    opacity: scroll > delta ? 0 : 1,
                }}
            >
                {title}
            </Typography>
            <video className='video' autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </Box >
    )
}

export default Header