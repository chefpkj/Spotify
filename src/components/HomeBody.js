import React,{useEffect,useState} from 'react';
import { newReleaseURL,favURL } from '../constants';
import {notify} from 'react-notify-toast';
import Shimmer from './Shimmer';
import {useDispatch} from "react-redux";
import { changeCount } from '../utils/favSlice';




const MusicCard=({name,artists,images})=>{

    const dispatch=useDispatch();

    //function to add the song to the fav
    async function addToFav(name,imgUrl,artist){
        // notify.show("ADDING...","custom",70000);
        let myColor = { text: "#FFFFFF" };
        notify.show("Adding...", "error", 20000, myColor);

        //writing logic to check if the song is already added or not 
        let tempData=await fetch(favURL);
        let data=await tempData.json();
        let temp=0;
        data.map((song)=>{
            if(song?.name===name){
                temp++;
            let myColor = { text: "#FFFFFF" };
            notify.hide();
            notify.show("Already Added!!", "error", 2000, myColor);
            return;
            }
        })
        if(temp!=0){

            // console.log("repeating data....",temp[0]);
            return;
        }
        // console.log("the value of temp: ",temp.length);



        data={
            "name":name,
            "imgUrl":imgUrl,
            "artist":artist
        }
        const response=await fetch(favURL,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin':'*'
              },
            body: JSON.stringify(data)
        })
        if(response.status<=300){
            dispatch(changeCount());
            let myColor = { background: '#1CDF63', text: "#FFFFFF" };
            notify.hide();
            notify.show("Added!!", "custom", 2000, myColor);
        }
        else{
            let myColor = { background: '#1CDF63', text: "#FFFFFF" };
            notify.hide();
            notify.show("Something went wrong :(", "error", 1000, myColor);

        }
        const result=await response.json();
        console.log("added....",result);


        
    }
    var songName=name;
    if(name.length>28){
        songName=name.substring(0,23)+"...";
    }
    var artistName=artists[0]?.name;
    if(artistName.length>20){
        artistName=artistName.substring(0,16)+"...";
    }

    return (
    <div className="bg-[#141414] p-5 w-fit h-auto rounded-lg hover:bg-[#282828] my-5 mx-1 hover:cursor-pointer group/item" >
     <div className="flex flex-col">
         <img width="200rem" aria-hidden="false" draggable="false" loading="lazy" className="rounded-lg" src={images[0].url} alt="pkj's song" sizes="(min-width: 1280px) 232px, 192px"/>
         <span className="text-base text-white pt-5">{songName}</span>
         <div className="flex justify-between ">
         <span className="text-sm text-[#9F9F9F] pt-2 pb-4">{artistName}</span>
         <span onClick={()=>addToFav(name,images[0]?.url,artists[0]?.name)} className="text-xs text-[#000000] h-fit rounded-full p-1 invisible group-hover/item:visible bg-[#1BD760] hover:bg-[#1CDF63] hover:p-[0.27rem] ">Add</span>
         </div>
     </div>
   </div>
   )
}

const HomeBody = () => {

    const [albums,setAlbums]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);

    //function to call the api
    async function getMeMusic(){
        const token="Bearer "+localStorage.getItem('spotify_x-auth-token');
        const response=await fetch(newReleaseURL,{
            method:"GET",
            headers:{
                // "Authorization": "Bearer BQAoxDp-N8uW3EiGTJBhO6fF_4WBEP963Q_YyVmM2tU_z51QB9TbVVGPX82BlXwnB05onvQFEox1DlsnYDE1hQBIY2OLrjUP_R4seFBODSE_cgSFo8U"
                "Authorization": token

            }
        });
        // console.log("my token", token);
        const data=await response.json();
        // console.log("get set go!!",data);
        setAlbums(data.albums);
        setIsLoaded(true);
    }
    useEffect(()=>{
        getMeMusic();
    },[])


  return (
    <div>
      <div className="pl-[27rem] pt-[4rem] h-full bg-[#111010] flex flex-wrap">
        <div className="text-white w-full text-2xl hover:underline hover:cursor-pointer	mt-5 mx-5">New Release</div>
        {isLoaded ? (
          albums?.items?.map((item) => {
            return <MusicCard {...item} key={item?.id} />;
          })
        ) : (
          <Shimmer/>
        )}
        ;ß
      </div>
    </div>
  );
}

export default HomeBody
