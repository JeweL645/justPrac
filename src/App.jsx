import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <h1 className='text-3xl font-bold'>Welcome Back</h1>
      <PriceOptions></PriceOptions>



    </>
  )
}

export default App
