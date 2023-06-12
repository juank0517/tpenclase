import { useState } from 'react'
import './App.css'
import { Form } from './components/Form/Form'
import { Redes } from './components/Redes/Redes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Login</h1>
      <Form />
      <Redes />
    </>
  )
}

export default App
