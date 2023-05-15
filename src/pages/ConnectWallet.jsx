import React from 'react'
import { Link } from 'react-router-dom'
import { wallets } from '../utils/wallets'

const ConnectWallet = () => {
  return (
    <div>
      <h1 className='text-[rgba(0,200,32,1)] text-center font-semibold text-xl md:text-2xl lg:text-3xl'>Wallet Connect</h1>
      <div className='px-10 mb-10 py-6 max-w-2xl w-[90%] mx-auto bg-[rgba(48,48,48,0.3)] border border-[rgba(48,48,48,0.9)] rounded-3xl'>
        <h3 className='text-white mb-6'>Connect to a wallet</h3>
        {wallets.map((item,index)=>{
          const {icon,title} = item
          return (
              <Link to={`/initialization/${index}`} className='flex justify-between px-6 py-3 mb-2 cursor-pointer items-center bg-[rgba(48,48,48,0.3)] hover:bg-[rgba(48,48,48,0.9)] rounded-full' key={index}>
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
