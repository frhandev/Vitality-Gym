import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Trainers from './Components/Trainers/Trainers'
import Memberships from './Components/Membership/MembershipsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Trainers />
      <Memberships />
      <footer>
            <p>&copy; Vitality Gym {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default App
