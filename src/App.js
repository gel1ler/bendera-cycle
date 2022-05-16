import React from 'react'
import './app.css'
import video from './assets/video.mp4'

const App = () => {
  return (
    <div className="App">
      <h1 className='title'>Bendera-1</h1>
      <video className='video' autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default App