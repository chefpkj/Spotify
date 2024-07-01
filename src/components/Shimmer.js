import React from 'react'

export const Card=()=>{
    return (
        <div className="bg-[#141414] p-5 w-fit h-auto rounded-lg hover:bg-[#282828] my-5 mx-1 hover:cursor-pointer group/item">
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



const Shimmer = () => {
    return (
        <>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </>
       )
}

export default Shimmer
