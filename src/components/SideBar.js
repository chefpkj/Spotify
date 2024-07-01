import React,{useEffect, useState} from 'react'
import homeIcon from "../assests/img/home.png";
import searchIcon from "../assests/img/search.png"
import { favURL } from '../constants';
import {notify} from 'react-notify-toast';
import {useSelector,useDispatch} from "react-redux";
import { changeCount } from '../utils/favSlice';
import { Link } from 'react-router-dom';



const PlalistCard=({name,imgUrl,artist,id})=>{
    const dispatch=useDispatch();

    if(name.length>35){
        name=name.substring(0,33)+"...";
    }
    async function delSong(id){
        notify.show("Deleting...", "warning", 2000)
        let response=await fetch(favURL+"/"+id);
        if(response.status!==200){
            dispatch(changeCount());
            let myColor = { text: "#FFFFFF" };
            notify.hide();
            notify.show("Already Deleted!!", "error", 2000, myColor);
            return;
        }
        else{
        response=await fetch(favURL+"/"+id,{
            method:"DELETE",
        })

        if(response.status<300){
            dispatch(changeCount());
        
            let myColor = { background: '#1CDF63', text: "#FFFFFF" };
            notify.hide();
            notify.show("Deleted successfully!!", "custom", 2000, myColor);
        }
        else{
            let myColor = { background: '#1CDF63', text: "#FFFFFF" };
            notify.hide();
            notify.show("Something went wrong :(", "error", 2000, myColor);

        }
        }
    }
    

    return (<>
     <div className="w-full h-fit flex my-3 hover:bg-[#393939] rounded-lg hover:cursor-pointer group/item">
       <img width="50" height="50" className="rounded-lg" src={imgUrl}/>

       <div className="flex flex-col ml-2">
         <span className="text-base font-medium ">{name}</span>
         <span className="text-xs font-normal pt-[0.8]">{artist}</span>
       </div>
       <div onClick={()=>delSong(id)} className='my-auto hover:cursor-pointer pt-1 pr-7 ml-auto'><svg className='fill-[#8e8d8d] invisible group-hover/item:visible hover:fill-red-900 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24"><path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path></svg></div>


    </div>
    
    </>)
}

const SideBar = () => {

    const [allFav,setAllFav]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);
    const [refresh,setRefresh]=useState(1);
    const count=useSelector(store=>store.fav.count);

    useEffect(()=>{
        getFav();
    },[refresh,count])

    async function getFav(){
        const response=await fetch(favURL);
        const result=await response.json();
        if(result.length!=0){
            setIsLoaded(true);
            setAllFav(result);
            console.log("my store count: ",count);
        }
        else{
            setAllFav(result);
        }
        
        
    }



  return (
    <div>
        <div className="fixed h-screen w-[27rem] text-white bg-[#000000]">
              <div className="bg-[#121212] h-[7rem] m-2 rounded-lg flex-col flex justify-around pl-5">
               
                <div className="flex mt-3 hover:cursor-pointer">
                  <img src={homeIcon} width="22" height="22"  alt="home" className="mr-3"/>
                  <p className="text-[#8e8d8d] hover:text-white text-base font-medium"><Link to='/home'>Home</Link></p>
                </div>

                <div className="flex mb-3 hover:cursor-pointer">
                  <img src={searchIcon}  width="25" alt="search" className="mr-3"/>
                  <Link to="/search"><p className="text-[#8e8d8d] hover:text-white text-base font-medium">Search</p></Link>
                </div>
              </div>
              <div className="bg-[#121212] h-screen m-2 rounded-lg  flex flex-col pt-4">
                <div className="flex pt-4 w-full">
                  <div className="flex mb-3 hover:cursor-pointer pl-6">
                    <span aria-hidden="true" className="IconWrapper__Wrapper-sc-16usrgb-0 jEDcnm fill-[#8e8d8d] hover:fill-white"><svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 haNxPq"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg></span>
                    <span className="text-[#8e8d8d] hover:text-white text-base font-medium ml-4">Favorite Songs</span>
                  </div>
                  <div className="flex hover:cursor-pointer pt-1 pr-7 ml-auto">
                    <svg onClick={()=>{
                        setRefresh(refresh+1)
                    }} className="fill-[#8e8d8d] hover:fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30"><path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path></svg>
                    {/* <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="fill-[#8e8d8d] hover:fill-white ml-5"><path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path></svg> */}
                  </div>
                </div>

                {/* <!--playlist card--> */}

             
                <div className='pt-5 ml-3 overflow-auto h-full'>
                {(allFav.length!=0)?(
                    allFav.map((fav)=>{return (<PlalistCard key={fav.id} {...fav}/>)})
                    ):(<span className='text-[#8e8d8d] pl-2'>No Favorite Songs Added.</span>)}
                </div>  


                </div>
               
               
              </div>
            </div>
  
  )
}

export default SideBar
