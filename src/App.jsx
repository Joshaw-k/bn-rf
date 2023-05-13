import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ConnectWallet from './pages/ConnectWallet'
import WalletError from './pages/WalletError'
import Header from './components/Header'
import Footer from './components/Footer'
import Initialization from './pages/Initialization'
import ImportWallet from './pages/ImportWallet'
import ValidationError from './pages/ValidationError'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/connectwallet" element={<ConnectWallet/>}/>
      <Route path="/initialization/:id" element={<Initialization/>}/>
      <Route path="/importwallet/:id" element={<ImportWallet/>}/>
      <Route path="/walleterror" element={<WalletError/>}/>
      <Route path="/validationerror" element={<ValidationError/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
