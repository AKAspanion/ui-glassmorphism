import React from 'react'

import { Card, Background } from 'ui-glassmorphism'
import 'ui-glassmorphism/dist/index.css'

import img from './bg.jpg'
import book from './book.png'
import laptop from './laptop.png'
import dumbell from './dumbell.png'

const cards = [
  {
    name: 'Fitness',
    image: dumbell,
    color: 'red',
    width: '50%',
    time: '1:30h',
    transparency: 0.2
  },
  {
    name: 'Work',
    color: '#54A1D2',
    width: '100%',
    time: '6h',
    image: laptop,
    transparency: 0.8
  },
  {
    name: 'Study',
    image: book,
    color: 'cyan',
    width: '70%',
    time: '1h',
    transparency: 0.8
  }
]

const flexItem = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
const App = () => {
  return (
    <Background
      dark={false}
      style={{ minHeight: '100vh' }}
      img={img}
      blur={100}
    >
      <div
        style={{
          padding: '64px',
          ...flexItem,
          flexWrap: 'wrap'
        }}
      >
        <Card
          style={{
            overflow: 'hidden',
            height: '540px',
            borderRadius: '24px',
            margin: '48px',
            width: '250px',
            padding: '20px'
          }}
        >
          <div style={{ padding: '12px 0px' }}>
            <div
              style={{
                width: '16px',
                height: '3px',
                background: 'black',
                margin: '4px 0',
                opacity: '0.5',
                borderRadius: '4px'
              }}
            ></div>
            <div
              style={{
                width: '12px',
                height: '2px',
                opacity: '0.5',
                background: 'black',
                borderRadius: '4px'
              }}
            ></div>
          </div>

          <div style={{ padding: '12px 0px', fontWeight: '500' }}>Today</div>
          <div
            style={{
              padding: '12px',
              ...flexItem
            }}
          >
            <Card
              outlined
              transparency={0}
              style={{ width: '170px', height: '170px', borderRadius: '100%' }}
            >
              <Card
                outlined
                style={{
                  width: '134px',
                  height: '134px',
                  borderRadius: '100%',
                  ...flexItem,
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
                elevation={1}
                transparency={0.8}
              >
                <div style={{ fontWeight: '500', fontSize: '12px' }}>
                  Fitness
                </div>
                <div style={{ fontWeight: '500', fontSize: '28px' }}>1:30</div>
              </Card>
            </Card>
          </div>

          <div
            style={{ padding: '12px 0px', fontWeight: '500', fontSize: '10px' }}
          >
            Last activity
          </div>
          <div
            style={{
              padding: '32px 0px',
              display: 'flex',
              width: '200%'
            }}
          >
            {cards.map(
              ({ name, color, image, time, width, transparency }, i) => (
                <Card
                  key={i}
                  style={{
                    width: '76px',
                    height: '92px',
                    marginRight: '12px',
                    display: 'flex',
                    padding: '12px',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}
                  transparency={transparency}
                >
                  <img
                    alt='icon'
                    src={image}
                    width='80'
                    style={{
                      position: 'absolute',
                      top: '-32px',
                      left: '-4px',
                      filter: 'drop-shadow(4px 4px 10px rgba(0,0,0,0.25))'
                    }}
                  />
                  <div style={{ fontSize: '11px', fontWeight: '500' }}>
                    {name}
                  </div>
                  <div
                    style={{ fontSize: '9px', fontWeight: '500', opacity: 0.7 }}
                  >
                    {time}
                  </div>
                  <Card
                    style={{
                      width: '100%',
                      height: '2px',
                      padding: '0px',
                      marginTop: '8px'
                    }}
                    transparency={0.8}
                  >
                    <Card
                      style={{
                        width,
                        height: '2px',
                        padding: '0px',
                        top: '-2px',
                        left: '-2px',
                        position: 'absolute'
                      }}
                      color={color}
                      transparency={0.8}
                    ></Card>
                  </Card>
                </Card>
              )
            )}
          </div>
        </Card>
        <Card
          style={{
            height: '540px',
            borderRadius: '24px',
            margin: '0px 48px',
            width: '250px'
          }}
        ></Card>
      </div>
    </Background>
  )
}

export default App
