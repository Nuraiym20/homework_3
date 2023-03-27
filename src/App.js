import React, { useState } from 'react'
import Button from './Button'

const App = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div>
      <Button onClick={handleClick} text='Активировать' />
      {active && <span>Активна</span>}
    </div>
  )
}

export default App
