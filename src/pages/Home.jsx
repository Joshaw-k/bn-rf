import React from 'react'
import Hero from '../components/Hero'
import Selection from '../components/Selection'
import globe_one from "../assets/globe_one.png"
import globe_two from "../assets/globe_two.png"

const Home = () => {
  return (
    <div className='relative'>
      <Hero/>
      <Selection/>
      <div className='absolute right-0 top-[32rem] -z-20 md:w-[20rem] md:h-[20rem]'>
        <img src={globe_one} alt="" className='w-full opacity-0 md:opacity-100' />
      </div>
      <div className='absolute md:w-[10rem] md:h-[10rem] left-0 -z-20 bottom-80'>
        <img src={globe_two} alt="" className='w-full opacity-0 md:opacity-100'/>
      </div>
    </div>
  )
}

export default Home
