import React, { useState, useEffect } from 'react'
import './style.css'
import { Box, Typography, IconButton, Drawer, Stack, Button } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Header = ({ video, title }) => {
    const [scroll, setScroll] = useState(0)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const delta = window.innerHeight * 0.3

    const handleScroll = () => {
        setScroll(window.scrollY)
        console.log(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

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
            <Drawer anchor='left' open={open2} onClose={() => setOpen2(false)} >
                <Box sx={{ px: 20, pt: 2, width: '30vw', height: '100%', bgcolor: 'secondary.main', width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <Typography color="primary">text</Typography>
                        <IconButton
                            edge='end'
                            onClick={() => setOpen2(false)}
                            sx={{
                                zIndex: 3,
                                position: 'right',
                                top: 0,
                                left: 0,
                                color: 'primary.main'
                            }}>
                            <ArrowRightIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Drawer>
            <Drawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
            >

                <Box sx={{ px: 2, pt: 2, height: '100%', width: '30vw', bgcolor: 'secondary.main' }}>

                    <Typography variant='h5' color="primary">
                        Menu
                    </Typography>
                    <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                        <Button variant="outlined" fullWidth startIcon={<ArrowRightIcon />} onClick={() => setOpen2(true)}>Проекты</Button>
                        <Button variant="outlined" fullWidth startIcon={<ArrowRightIcon />}>О нас</Button>
                        <Button variant="outlined" fullWidth startIcon={<ArrowRightIcon />}>грохочет</Button>
                    </Stack>
                </Box>

            </Drawer>
            <Box
                sx={{
                    opacity: scroll > delta ? 0 : 1,
                    transition: 'all 0.5s linear',
                    width: '100%',
                    height: '70vh',
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