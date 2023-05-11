import React, { useEffect, useRef } from 'react'

import Binance from "../assets/Binance.png"
import Bitcoin from "../assets/Bitcoin.png"
import Tron from "../assets/Tron.png"
import XRP from "../assets/XRP.png"
import Tether from "../assets/Tether.png"
import Litecoin from "../assets/Litecoin.png"
import Ethereum from "../assets/Ethereum.png"

const bitPrices = [{
    'logo':Bitcoin,
    'fullName':"Bitcoin",
    "shortName":"BTC",
    "price":"$29,433.00",
    "percent":"+1.53%"
},{
    'logo':Ethereum,
    'fullName':"Ethereum",
    "shortName":"ETH",
    "price":"$1,905.52",
    "percent":"-0.49%"
},{
    'logo':Tether,
    'fullName':"Tether",
    "shortName":"USDT",
    "price":"$1,002.00",
    "percent":"-0.81%"
},{
    'logo':Binance,
    'fullName':"BinanceCoin",
    "shortName":"BNB",
    "price":"$327.36",
    "percent":"-2.20%"
},{
    'logo':XRP,
    'fullName':"XRP",
    "shortName":"XRP",
    "price":"$0.465",
    "percent":"+0.81%"
},{
    'logo':Litecoin,
    'fullName':"Litecoin",
    "shortName":"LTC",
    "price":"$89.32",
    "percent":"+0.21%"
},{
    'logo':Tron,
    'fullName':"Tron",
    "shortName":"TRX",
    "price":"$0.0663",
    "percent":"+1.28%"
},]

const Header = () => {
    const handleSlider = ()=>{
        const copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector(".logos").appendChild(copy);
    }
    useEffect(()=>{
    handleSlider()
    })
    
  return (
    <div className='bg-[rgba(48,48,48,0.3)] w-full p-2.5 cursor-pointer mt-5 border-t border-[rgb(44,44,44)] overflow-hidden logos flex gap-x-14'>
        <div className='flex gap-x-14 logos-slide'>
        {bitPrices.map((item,index)=>{
            const {logo,fullName,shortName,price,percent} = item
            return (
                <div key={index} className='flex justify-start items-center gap-x-2'>
                    <img src={logo} alt="logo" className='w-[25px] h-[25px]' />
                    <div className='flex gap-x-2'>
                        <h5 className='font-semibold text-white'>{fullName}</h5>
                        <span className='text-xs text-[#868686]'>{shortName}</span>
                    </div>
                    <div className='flex gap-x-2'>
                        <h5 className='font-semibold text-white'>{price}</h5>
                        <span className='text-xs text-[#30FF21]'>{percent}</span>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Header
