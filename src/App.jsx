import React, { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)

  const incr = () => {
    setCounter(counter + 1)
  }

  const dec = () => {
    if(counter > 0){
      setCounter(counter - 1)
    } else {
      alert('Counter cannot go below 0')
    }
  }
  return (
    <div>
    <h1>{counter}</h1>
      <button onClick={incr}>+</button>
      <br/>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default App
