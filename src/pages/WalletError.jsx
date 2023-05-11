import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

const WalletError = () => {
  return (
    <div className='min-h-screen'>
      <div className='bg-[#FFE8E8] w-[80%] max-w-lg rounded-full flex justify-between items-center py-3 px-5 m-auto mt-5'>
        <div className='flex justify-between items-center gap-x-3'>
            <div><RiErrorWarningFill className='text-[#CF1212] text-2xl'/></div>
            <p>Please click on the connect button to connect!</p>
        </div>
        <div className=''>
            <AiOutlineClose className='text-[#151515] text-md'/>
        </div>
      </div>
    </div>
  )
}

export default WalletError
