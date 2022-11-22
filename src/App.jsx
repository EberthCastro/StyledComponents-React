import { React } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import SignupPage from './pages/SignupPage'



function App() {
  
  return (
    <div>

      {/* <GlobalStyle> */}
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
    </Routes>
      {/* </GlobalStyle> */}
      
    
    </div>
  )
}

export default App
