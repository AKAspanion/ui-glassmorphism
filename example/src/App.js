import React from 'react'

import { Card, Background } from 'ui-glassmorphism'
import 'ui-glassmorphism/dist/index.css'

import './index.css'

import bg from './bg.webp'
import book from './book.png'
import play from './play.png'
import laptop from './laptop.png'
import dumbell from './dumbell.png'

const cards = [
  {
    name: 'Fitness',
    image: dumbell,
    color: '#f400d0',
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
  },
  {
    name: 'Play',
    image: play,
    color: 'red',
    width: '70%',
    time: '1h',
    transparency: 0.8
  }
]

const activities = [
  { name: 'S', percent: '50' },
  { name: 'M', percent: '70' },
  { name: 'T', percent: '30' },
  { name: 'W', percent: '90' },
  { name: 'T', percent: '80' },
  { name: 'F', percent: '60' },
  { name: 'S', percent: '80' }
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
      img={bg}
      blur={0}
    >
      <div
        style={{
          padding: '64px',
          ...flexItem,
          flexWrap: 'wrap'
        }}
      >
        <Card
          elevation={1}
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
                height: '2px',
                background: 'black',
                margin: '0 0 3px 0',
                opacity: '0.5',
                borderRadius: '3px'
              }}
            ></div>
            <div
              style={{
                width: '10px',
                height: '2px',
                background: 'black',
                margin: '0 0 3px 0',
                opacity: '0.5',
                borderRadius: '3px'
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
              width: 'calc(100% + 40px)',
              overflow: 'auto scroll',
              margin: '0 -20px'
            }}
            className='activity__card__container'
          >
            <div
              style={{
                padding: '32px 20px',
                display: 'flex',
                width: '380px'
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
                      overflow: 'unset',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      justifyContent: 'flex-end'
                    }}
                    className='activity__card'
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
                      style={{
                        fontSize: '9px',
                        fontWeight: '500',
                        opacity: 0.7
                      }}
                    >
                      {time}
                    </div>
                    <Card
                      style={{
                        width: '100%',
                        height: '2px',
                        padding: '0px',
                        overflow: 'unset',
                        marginTop: '8px'
                      }}
                      transparency={0.8}
                    >
                      <Card
                        style={{
                          width,
                          height: '2px',
                          padding: '0px',
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
          </div>
        </Card>
        <Card
          style={{
            height: '540px',
            borderRadius: '24px',
            margin: '0px 48px',
            width: '250px'
          }}
        >
          <div style={{ padding: '12px 0px' }}>
            <div
              style={{
                width: '8px',
                height: '2px',
                background: 'black',
                margin: '0 0 4px 0',
                opacity: '0.5',
                borderRadius: '4px',
                transform: 'rotate(-45deg)'
              }}
            ></div>
            <div
              style={{
                width: '8px',
                height: '2px',
                background: 'black',
                margin: '0 0 4px 0',
                opacity: '0.5',
                borderRadius: '4px',
                transform: 'rotate(45deg) translate(-1px,-1px)'
              }}
            ></div>
          </div>

          <div style={{ padding: '12px 0px 4px 0px', fontWeight: '500' }}>
            Statistics
          </div>
          <div
            style={{
              fontWeight: '400',
              opacity: '0.7',
              fontSize: '11px'
            }}
          >
            This week
          </div>
          <div
            style={{
              padding: '20px 0px',
              ...flexItem,
              justifyContent: 'space-between'
            }}
          >
            {cards.map(({ name, image, transparency }) => (
              <div style={{ textAlign: 'center' }}>
                <Card
                  style={{
                    width: '36px',
                    height: '36px',
                    padding: '0px',
                    ...flexItem
                  }}
                  transparency={transparency === 0.8 ? 0.2 : 0.8}
                >
                  <img
                    alt={name}
                    src={image}
                    style={{
                      width: '32px',
                      filter: 'drop-shadow(1px 1px 4px rgba(0,0,0,0.25))'
                    }}
                  />
                </Card>
                <div
                  style={{ fontSize: '9px', padding: '8px 0px', opacity: 0.8 }}
                >
                  {name}
                </div>
              </div>
            ))}
          </div>
          <Card transparency={0.9} elevation={1}>
            <div
              style={{
                paddingBottom: '12px',
                fontWeight: '500',
                fontSize: '10px'
              }}
            >
              Activity
            </div>
            <div style={{ ...flexItem, justifyContent: 'space-between' }}>
              {activities.map(({ name, percent }) => (
                <div>
                  <div
                    style={{
                      width: '5px',
                      height: '100px',
                      background: '#ccc',
                      textAlign: 'center',
                      borderRadius: '5px'
                    }}
                  />
                  <div
                    style={{
                      width: '5px',
                      borderRadius: '5px',
                      position: 'absolute',
                      transform: 'rotate(180deg)',
                      transformOrigin: 'top center',
                      height: `${(percent / 100) * 100}px`,
                      background:
                        'linear-gradient(0deg, #F85952 0%, #68C2F7 100%)'
                    }}
                  ></div>
                  <div
                    style={{ fontSize: '8px', paddingTop: '6px', opacity: 0.7 }}
                  >
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div style={{ padding: '20px 0px' }}>
            <Card transparency={0.9}>
              <div
                style={{
                  fontWeight: '500',
                  fontSize: '13px'
                }}
              >
                Plan your daytime!
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </Background>
  )
}

export default App
