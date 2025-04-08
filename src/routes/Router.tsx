import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Welcome from '@/screens/Welcome/Welcome'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
