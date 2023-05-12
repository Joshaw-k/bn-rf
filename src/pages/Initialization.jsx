import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import MetaMask from "../assets/MetaMask.png"
import { Link } from 'react-router-dom';

const Initialization = () => {
  return (
    <div className='min-h-[100vh]'>
      <div className='max-w-md mx-auto mt-10 w-[90%] bg-[#222222] px-6 pt-3 pb-10 rounded-3xl'>
            <div className='flex justify-between items-center mb-8'>
                <h5 className='text-white font-bold'>Back</h5>
                <AiOutlineClose className='text-[#FF1E1E] text-2xl'/>
            </div>
            <div className='px-5 py-8 rounded-2xl mb-5 border border-[#00C920]'>
                <p className='text-[#00C920]'>Initializing...</p>
            </div>
            <Link to="/importwallet" className='px-5 py-8 rounded-2xl border cursor-pointer hover:bg-[rgba(48,48,48,0.7)] border-[#9F9F9F] flex items-center justify-between'>
                <div className='flex flex-col gap-y-10 text-white'>
                    <h3 className='font-bold text-2xl'>Metamask</h3>
                    <h5>Easy-to-Use browser extension</h5>
                </div>
                <div className='w-[30px] h-[30px]'>
                    <img src={MetaMask} alt="logo.png" className='w-full' />
                </div>
            </Link>
      </div>
    </div>
  )
}

export default Initialization
