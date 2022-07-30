import React from 'react'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import { Main, Secret, Messenger } from './pages/pages'

const App = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/messenger' element={<Messenger />} />
    </Routes>
  )
}

export default App