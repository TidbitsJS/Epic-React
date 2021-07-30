// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  // const [error, setError] = React.useState('')
  const [userName, setUserName] = React.useState('')

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  function handleSubmit(event) {
    event.preventDefault()
    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value
    // 🐨 Call `onSubmitUsername` with the value of the input

    // onSubmitUsername(event.target.elements[0].value)

    // 2. Extra credit solution
    onSubmitUsername(inputRef.current.value)
  }

  // 3. Extra credit solution
  function handleChange() {
    const value = inputRef.current.value.toLowerCase()

    // const isValid = value === value.toLowerCase()
    // setError(isValid ? null : 'Username must be lower case')

    // 4. Extra credit solution
    setUserName(value)
  }

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={userName}
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      {/* <div role="alert" style={{color: 'red'}}>
        {error}
      </div> */}
      {/* <button type="submit" disabled={Boolean(error)}> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
