import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import { Box } from '@chakra-ui/react'
import Router from './components/Router'
import Nav from './components/Nav'
import Saudi from './components/Saudi'
import Footer from './components/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (

    <Box>
      <Nav/>
      <Router></Router>
      <Footer/>
  
      
        
    </Box>
    
  )
}

export default App
