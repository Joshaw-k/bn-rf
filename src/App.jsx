import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ConnectWallet from './pages/ConnectWallet'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/connectwallet" element={<ConnectWallet/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
