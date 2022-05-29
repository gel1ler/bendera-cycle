import React from 'react'
import './app.css'
import video from './assets/video.mp4'
import Header from './components/header/header'
import { Box, Typography } from '@mui/material'

const App = () => {
  return (
    <Box
      className="App"
      sx={{
        width: '50%',
        mx: 'auto',
        height: '90vh',
        bgcolor: 'red',
        position: 'relative'
      }}>

      <Typography variant="h3" sx={{ position: 'absolute', top: 1, right: 1 }}>X</Typography>
    </Box>
  )
}

export default App