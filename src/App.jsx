import { React } from 'react'
import {Routes, Route} from 'react-router-dom'
import GlobalStyle from './styles/globalStyles'
import Home from './pages/Home'
import PricingPage from './pages/PricingPage'
import SignupPage from './pages/SignupPage'



function App() {
  
  return (
    <div>

      {/* <GlobalStyle> */}
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
