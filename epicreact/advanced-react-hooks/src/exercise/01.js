// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)
  const [count, dispatch] = React.useReducer(countReducer, {
    inCount: initialCount,
  })

  const {inCount} = count

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount

  function countReducer(count, action) {
    const {type, step} = action
    switch (type) {
      case 'INCREMENT':
        return {...count, inCount: count.inCount + step}

      default:
        return count
    }
  }

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{inCount}</button>
}

function App() {
  return <Counter />
}

export default App
