import React from 'react'
import BlocknodeRectification from "../assets/BlocknodeRectification.png"
import {BsFillArrowDownCircleFill} from "react-icons/bs"

const Hero = () => {
  return (
      <div className='container m-auto p-20'>
        <img src={BlocknodeRectification} alt="hero.png" className='sm:w-full md:w-1/2 m-auto' />
      <div className='w-90 m-auto text-white text-center p-10'>
        <p className='mb-8'>Every digital artwork on Upside is authentic and truly unique.</p>

        <p className='mb-8'>Blockchain technology makes this new approach to digital ownership possible.<br/>
        Open and decentralized protocol for syncing various Wallets issues on Secure Server.</p>

        <p className='mb-8'>This is not an app but a protocol that establishes a remote resolution<br/>
        between all noncustodial wallet It is an online server which gets you across to every wallet <br/>representative to enable effective complain and rectification of issues.</p>

        <p className='mb-8'>You will be on a chat with an Artificial Intelligence Robot with zero Human interference.</p>
      </div>
      <div className='flex gap-x-5 w-[37%] m-auto'>
        <button className='py-3 px-8 bg-[rgba(0,201,32,1)] rounded-full font-bold '>Connect Wallet</button>
        <button className='pl-5 flex-1 bg-transparent rounded-full font-bold inline-flex gap-x-14 text-[rgba(0,201,32,1)] ring-1 ring-inset ring-[rgba(0,201,32,1)] justify-center items-center' >Select Chain <BsFillArrowDownCircleFill className='text-4xl bg-white rounded-full'/></button>
      </div>
      </div>
  )
}

export default Hero
