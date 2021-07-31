// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {
  PokemonForm,
  PokemonDataView,
  fetchPokemon,
  PokemonInfoFallback,
} from '../pokemon'
import {ErrorBoundary} from 'react-error-boundary'

// class ErrorBoundary extends React.Component {
//   state = {err: null}
//   static getDerivedStateFromError(err) {
//     return {err}
//   }

//   render() {
//     return this.state.err ? (
//       <div role="alert">
//         There was an error:{' '}
//         <pre style={{whiteSpace: 'normal'}}>{this.state.err.message}</pre>
//       </div>
//     ) : (
//       this.props.children
//     )
//   }
// }

function PokemonInfo({pokemonName}) {
  // 🐨 Have state for the pokemon (null)
  // const [pokemon, setPokemon] = React.useState(null)
  // const [err, setErr] = React.useState(null)
  // const [status, setStatus] = React.useState('idle')
  const [info, setInfo] = React.useState({
    status: 'idle',
    err: null,
    pokemon: null,
  })
  const {status, err, pokemon} = info
  // 🐨 use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
  // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
  // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null
  // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
  //   fetchPokemon('Pikachu').then(
  //     pokemonData => { /* update all the state here */},
  //   )
  // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
  //   1. no pokemonName: 'Submit a pokemon'
  //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
  //   3. pokemon: <PokemonDataView pokemon={pokemon} />

  React.useEffect(() => {
    // if (!pokemonName) return setStatus('idle')
    if (!pokemonName) return setInfo({status: 'idle'})
    // setStatus('pending')
    // setPokemon(null)
    setInfo({status: 'pending'})
    fetchPokemon(pokemonName)
      .then(pokemonData => {
        // setPokemon(pokemonData)
        // setStatus('resolved')
        setInfo({status: 'resolved', pokemon: pokemonData})
      })
      .catch(error => {
        // setStatus('rejected')
        // setErr(error)
        setInfo({status: 'rejected', err: error})
      })
  }, [pokemonName])

  if (status === 'rejected')
    // return (
    //   <div role="alert">
    //     There was an error:{' '}
    //     <pre style={{whiteSpace: 'normal'}}>{err.message}</pre>
    //   </div>
    // )
    throw err
  if (status === 'idle') return 'Submit a pokemon'
  else if (status === 'pending')
    return <PokemonInfoFallback name={pokemonName} />
  else if (status === 'resolved') return <PokemonDataView pokemon={pokemon} />

  // 💣 remove this
  // return 'TODO'
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        {/* <ErrorBoundary key={pokemonName}> */}
        <ErrorBoundary
          fallbackRender={ErrorFallback}
          onReset={() => setPokemonName('')}
          resetKeys={[pokemonName]}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
