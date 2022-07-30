import React from 'react'
import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material'

const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ bgcolor: 'dark.main' }}>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header