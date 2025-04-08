import React from 'react'
import { Container } from './App.styles'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar/Sidebar'

const App: React.FC = () => {
  return (
    <Container>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </Container>
  )
}

export default App
