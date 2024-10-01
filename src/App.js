import React, { useState } from 'react'
import './App.css'
import { FaRobot } from 'react-icons/fa'
const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0, facing: 'NORTH' })

  const moveForward = () => {
    let { x, y, facing } = position

    switch (facing) {
      case 'NORTH':
        if (y < 4) y += 1
        break
      case 'EAST':
        if (x < 4) x += 1
        break
      case 'SOUTH':
        if (y > 0) y -= 1
        break
      case 'WEST':
        if (x > 0) x -= 1
        break
      default:
        break
    }

    setPosition({ ...position, x, y })
  }

  const rotateRobot = (direction) => {
    let currentDirectionIndex = directions.indexOf(position.facing)

    if (direction === 'left') {
      currentDirectionIndex = (currentDirectionIndex + 3) % 4
    } else if (direction === 'right') {
      currentDirectionIndex = (currentDirectionIndex + 1) % 4
    }

    setPosition({ ...position, facing: directions[currentDirectionIndex] })
  }

  return (
    <div className='App'>
      <h1>Robot Simulator Test App By Michell Okwu</h1>
      <div className='grid'>
        {[...Array(5)].map((_, row) => (
          <div key={row} className='row'>
            {[...Array(5)].map((_, col) => (
              <div
                key={col}
                className={`cell ${
                  position.x === col && position.y === 4 - row ? 'robot' : ''
                }`}
              >
                {position.x === col && position.y === 4 - row && (
                  <span className='robot-icon'>
                    <FaRobot />
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className='controls'>
        <button onClick={moveForward}>Forward Movement</button>
        <button onClick={() => rotateRobot('left')}>Rotate to the Left</button>
        <button onClick={() => rotateRobot('right')}>
          Rotate to the Right
        </button>
      </div>

      <p>
        Positioning : (X: {position.x}, Y: {position.y}) | Facing:{' '}
        {position.facing}
      </p>
    </div>
  )
}

export default App
