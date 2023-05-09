import React from 'react'
import BlocknodeRectification from "../assets/BlocknodeRectification.png"
import {BsFillArrowDownCircleFill} from "react-icons/bs"

const Hero = () => {
  return (
      <div className='container mx-auto p-8 my-10'>
        <div className='sm:w-full mx-auto mb-5'>
          <img src={BlocknodeRectification} alt="hero.png" className='w-full' />
        </div>
      <div className='w-95 m-auto text-white text-center p-2'>
        <p className='mb-8'>Every digital artwork on Upside is authentic and truly unique.</p>

        <p className='mb-8'>Blockchain technology makes this new approach to digital ownership possible.<br/>
        Open and decentralized protocol for syncing various Wallets issues on Secure Server.</p>

        <p className='mb-8'>This is not an app but a protocol that establishes a remote resolution<br/>
        between all noncustodial wallet It is an online server which gets you across to every wallet <br/>representative to enable effective complain and rectification of issues.</p>

        <p className='mb-8'>You will be on a chat with an Artificial Intelligence Robot with zero Human interference.</p>
      </div>
      <div className='flex flex-col gap-y-3 m-auto'>
        <button className='py-3 px-4 bg-[rgba(0,201,32,1)] rounded-full font-bold hover:text-[rgba(0,201,32,1)] hover:bg-white'>Connect Wallet</button>
        <button className='pl-5 pr-1 py-1 bg-transparent rounded-full font-bold inline-flex justify-between text-[rgba(0,201,32,1)] ring-1 ring-inset ring-[rgba(0,201,32,1)] justify-center items-center' >Select Chain <BsFillArrowDownCircleFill className='text-4xl bg-white rounded-full'/></button>
      </div>
      </div>
  )
}

export default Hero
