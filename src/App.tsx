import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Design from './pages/Design'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/design/*' element={<Design />} />
          <Route path='/design/' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
