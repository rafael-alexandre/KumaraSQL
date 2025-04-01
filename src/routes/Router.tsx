import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Audit from '@/screens/Audit/Audit'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Audit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
