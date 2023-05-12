import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'

const ValidationError = () => {
  return (
    <div className='min-h-screen'>
      <div className='bg-[#FFE8E8] w-[60%] max-w-xs flex flex-col items-center rounded-3xl py-8 px-5 m-auto mt-5'>
        <div><RiErrorWarningFill className='text-[#CF1212] text-5xl'/></div>
        <p className='mt-3 text-center font-semibold'>Unable to validate Wallet!!!!,<br/>Try another Wallet</p>
        <button className='bg-[#FF1E1E] py-4 px-14 mt-5 rounded-full text-white'>Cancel</button>
      </div>
    </div>
  )
}

export default ValidationError