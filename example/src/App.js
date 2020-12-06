import React from 'react'

import { Card, Background } from 'ui-glassmorphism'
import 'ui-glassmorphism/dist/index.css'

import img from './bg.jpg'

const App = () => {
  return (
    <Background dark={false} style={{ padding: '108px' }} img={img} blur={100}>
      <Card
        style={{ height: '50vh', fontSize: '40px' }}
        transparency={0.1}
        color='#9B9B9B'
      >
        HI
      </Card>
    </Background>
  )
}

export default App
