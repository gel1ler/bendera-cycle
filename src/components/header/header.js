import React, { useState, useEffect } from 'react'
import './style.css'
import { Box, Typography, IconButton, Drawer } from '@mui/material'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'

const Header = ({ video, title }) => {
    const [scroll, setScroll] = useState(0)
    const [open, setOpen] = useState(false)
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
                    color: 'white'
                }}
            >
                <DensityMediumIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
            >
                asdasd
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
                color='primary'
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