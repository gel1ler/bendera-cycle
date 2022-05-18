import React from 'react'
import './app.css'
import video from './assets/video.mp4'
import Header from './components/header/header'
import { Box, Typography } from '@mui/material'

const App = () => {
  return (
    <Box className="App">
      <Header
        title='B E N D E R A - 1'
        video={video}
      />
      <Box sx={{ my: 4, mx: 'auto', width: '62.5%' }}>
        <Typography variant='h3' aling='center' color='primary' >
          Отец-прародитель
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Typography variant='h6' aling='center' color='primary'>
            Именно так его прозвали в том самом роковом документе 1932 года. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas iste a hic consequatur repellendus aperiam voluptatum minus eligendi aliquid rem, expedita culpa! Architecto rerum saepe, inventore nam dicta aspernatur!
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default App