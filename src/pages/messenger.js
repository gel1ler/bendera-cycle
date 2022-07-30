import React from 'react'
import { Box, Typography } from '@mui/material'
import Chats from '../components/messenger/chats'
import Header from '../components/UI/header'

const Messenger = () => {
    return (
        <Box>
            <Header />
            <Chats />
        </Box >
    )
}

export default Messenger