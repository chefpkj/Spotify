import React from 'react'
import { useRouteError } from 'react-router-dom'
import BgImage from "../assests/img/errorBg.jpg"
import BgImage2 from "../assests/img/errorBg2.gif"

const Error = () => {
  const err=useRouteError();
  return (
    <div className='bg-black h-screen' style={{ backgroundImage:`url(${BgImage2})` }}>
       
        <div className='flex h-[80%] justify-center items-center'>
            <div>
            <div className='text-3xl text-white mb-[-90] '>IT'S GETTIN'</div>
            <div className='text-[17rem] text-white flex'><div>L</div><div className='italic pl-1 pr-1'>I</div><div>T</div></div>
            <div className='text-3xl text-white mt-[-70] '>IN HERE!</div>
            </div>
        </div>
      <div className='text-lg text-white flex justify-center pt-9'>BRB with some super-hot updates. See you real soon!</div>
      <div className='text-red-400 flex justify-center '>{err.status+":"+err.statusText}</div>
    </div>
  )
}

export default Error
