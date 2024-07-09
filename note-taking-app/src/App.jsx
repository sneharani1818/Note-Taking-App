import { useState } from 'react'
import Navbar from './components/Navbar'
import CreateAccount from './components/CreateAccount'
import Intro from './components/Intro'
import Login from './components/Login'
import MainPage from './components/MainPage'
// import SideNavbar from './components/SideNavbar'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Intro />
      <Login />
      <MainPage />
      {/* <SideNavbar /> */}
      <CreateAccount />
    </>
  )
}

export default App
