import React, { useState } from 'react'
import puzzle from "../assests/img/puzzle-14.gif"


const Card=()=>{
    return (
        <div className="bg-[#141414] p-5 mx-5 w-fit h-auto rounded-lg hover:bg-[#282828] my-5 mx-1 hover:cursor-pointer group/item">
         <div className="flex flex-col">
             {/* <img width="200rem" aria-hidden="false" draggable="false" loading="lazy" className="rounded-lg" src='https://i.scdn.co/image/ab67616d0000b27360098f31391483986de30b66' alt="pkj's song" sizes="(min-width: 1280px) 232px, 192px"/> */}
             <span className="text-base text-white pt-5 w-[192px] h-[232px] bg-slate-700 rounded-lg animate-pulse  my-5 "></span>
             <span className="text-base text-white pt-5 w-[8rem] h-6 bg-slate-700 rounded-lg animate-pulse  my-5 "></span>
             <div className="flex justify-between ">
             <span className="text-sm text-[#9F9F9F] pt-3 w-[8rem] h-6 my-3 rounded-lg bg-slate-700 animate-pulse"></span>
             <span className="text-xs text-[#000000] h-fit rounded-full p-1 invisible group-hover/item:visible bg-[#1BD760] hover:bg-[#1CDF63] hover:p-[0.27rem] ">Add</span>
             </div>
         </div>
       </div>

    )

}


const Search = () => {
    const [txt,setTxt]=useState();
    const [isTyped,setIsTyped]=useState(false);
  return (
    <>
    <div className=' h-screen pl-[27rem] pt-[8rem] '>
      <input type="text" value={txt} placeholder="What do you want to listen to?" onChange={(e)=>{setTxt(e.target.value); setIsTyped(false);}} onKeyDown={ async(e) => {
               if(e.key == "Enter"){
                setIsTyped(true);
                // setQna([...qna,{from:"you",value:question}]);
                // setIsloaded(true);    //trigger shimmer for typing
                setTxt("");        //making search box clear/empty again
                // getAnswer();      //calling api for answer
               }   
               }}  className="w-[40%] mx-[28%] mt-[-55%] bg-[#2A2A2A] p-3 text-sm font-light placeholder:text-[#5D5D5D] text-white rounded-full focus:outline-1 outline-white focus:placeholder:text-white"/>
          
          {isTyped?(
            <div className='flex flex-col mt-14 justify-center items-center pt-3 text-white'>
                <img src={puzzle} className='h-[15rem]'/>
                <span className='text-3xl font-normal my-2	'>It's not you, it's us</span>
                <span>We're looking into it. Please wait a few moments and</span>
                <span>try again.</span>
            </div>

          ):(
            <div className='flex flex-wrap mt-14 justify-center'>
            <Card/>
            <Card/>
            <Card/>
            </div>
           
          )}
         
         
    </div>
    
    </>
  )
}

export default Search
