import React, { useState } from 'react'
import ICard from '@/interfaces/ICard'
import { Container } from './Audit.styles'

const Audit: React.FC = () => {
  const [ cards, setCards ] = useState<ICard[]>([])

  return (
    <Container>

    </Container>
  )
}

export default Audit
