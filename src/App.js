import React from 'react'
import './app.css'
import video from './assets/video.mp4'
import Header from './components/header/header'
import { Box, Typography } from '@mui/material'

const App = () => {
  return (
    <Box>
      <Header
        title='B E &nbsp;&nbsp;&nbsp; N D E R A - aea 1 eae'
        video={video}
      />
      <Box sx={{ my: 4, mx: 'auto', width: '62.5%' }}>
        <Typography variant='h3' aling='center'>
          Отец-прародитель
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
          <Typography variant='h6' aling='center'>
            Именно так его прозвали в том самом роковом документе 1932 года. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas iste a hic consequatur repellendus aperiam voluptatum minus eligendi aliquid rem, expedita culpa! Architecto rerum saepe, inventore nam dicta aspernatur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda et consectetur vitae minus dolorum mollitia maxime obcaecati natus vero. Dolor non pariatur asperiores, molestias ex cum nostrum sint magnam dolorum iure hic illo ab commodi magni quod ducimus? Laboriosam minima ex quidem maiores, nemo nesciunt non veniam voluptates perspiciatis facere rerum et consequatur a laudantium veritatis expedita asperiores, necessitatibus inventore iusto voluptatem sequi sit ratione, quae fugiat? Incidunt aspernatur odit voluptate dignissimos, rerum porro molestiae quo, dolorem officia quam atque quisquam maiores autem voluptatum repellendus totam unde temporibus quis culpa aliquam. Doloribus inventore quas consequatur nulla ipsa mollitia eos?
          </Typography>
        </Box>

      </Box>
    </Box>
  )
}

export default App