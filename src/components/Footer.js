import React,{audio,useRef} from 'react'
// import song1 from "../assests/img/rangDe.mp3"
// import home from "../assests/img/home.png";
// import songs from "../assests/img/rangDe"
// import ff from "../assests/img/Mp3.mp3"





const Footer = () => {
  const audioElement=new Audio("../assests/img/rangDe.mp3")

  const temp=useRef(null);
  let aud = new Audio("/assests/img/rangDe.mp3")
  const playsong=()=>{
    aud.play();
    
    //tzemp.current.play()


  }
  return (
    
       <div className="sticky bottom-0 pl-[40%] pt-3 h-[5rem] bg-[#000000] w-full">    
            <div className="">
              <figure>
              {/* <button className="text-white" onClick={()=>{
                      playsong();
                    }}>ggg</button> */}
                <audio controls>
                  <source src="/rangDe.mp3" type='audio/mpeg'/>
                </audio>
        
                    {/* controls
                    src={ff}
                    // type="audio/mpeg"
                    // onClick={()=>{
                    //   playsong();
                    // }}
                    /> */}
            </figure>
            </div>     


          </div>

  )
}

export default Footer
