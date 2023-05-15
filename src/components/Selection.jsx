import React from 'react'
import { Link } from 'react-router-dom'
import { selection } from '../utils/selection';


const Selection = () => {
  return (
    <div className='container p-10 mb-10 m-auto bg-[rgba(48,48,48,0.3)] backdrop-blur-sm border border-[rgba(48,48,48,0.9)] rounded-3xl'>
      <h3 className='text-center font-semibold text-2xl md:text-3xl lg:text-5xl mb-10 text-[rgba(0,200,32,1)] '>Make Your Selection Below</h3>
      <div className='container grid sm:grid-cols-2 lg:grid-cols-3 m-auto gap-10'>
          {selection.map((item,index)=>{
            const {icon,title,text} = item;
            return <Link to="/connectwallet" className='select text-center cursor-pointer bg-[rgba(48,48,48,0.3)] hover:bg-[rgba(48,48,48,0.9)] border border-[rgba(48,48,48,0.7)] group rounded-3xl py-10 px-5' key={index}>
              <div className='flex place-content-center w-[55px] h-[55px] p-2 mb-5 m-auto rounded-2xl bg-[rgba(0,200,32,1)] group-hover:bg-white'>
                <img src={icon} alt="selection-icon.png" className='w-full' />
              </div>
              <div>
                <h4 className='text-white font-semibold mb-2'>{title}</h4>
                <h6 className='text-gray-500 text-xs max-w-[13rem] m-auto'>{text}</h6>
              </div>
            </Link>
          })}
      </div>
    </div>
  )
}

export default Selection
