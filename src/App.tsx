import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Design from './pages/Design'
import NotFound from './pages/NotFound'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/design/*' element={<Design />} />
          <Route path='/design/' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
