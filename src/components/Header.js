import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
     <div className="flex-col h-fit">
              {/* <!--header--> */}
              <div className="bg-[#1C0F3C] text-white fixed ml-[27rem]  h-[4rem] w-screen top-0 flex">
                  <div className="flex w-fit mt-4 mx-4">
                      <Link to="/login"><div className="rounded-full bg-[#0A0713] hover:bg-[#393939] w-8 h-8 flex justify-center mr-2">
                        <svg role="img" height="16" width="16" aria-hidden="true" className="fill-white Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF mt-auto mb-auto" viewBox="0 0 16 16" data-encore-id="icon"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>
                      </div></Link>
                      <Link to="/search"><div className="rounded-full bg-[#0A0713] hover:bg-[#393939] w-8 h-8 flex justify-center ml-1">
                        <svg role="img" height="16" width="16" aria-hidden="true" className="fill-white Svg-sc-ytk21e-0 leya-dW IYDlXmBmmUKHveMzIPCF mt-auto mb-auto" viewBox="0 0 16 16" data-encore-id="icon"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>                    
                      </div></Link>
                  </div>

                  <div className="flex mt-auto mb-auto ml-auto mr-auto">
                    <div className="bg-white text-black text-base hover:font-medium font-normal h-fit p-1 pl-2 pr-2 mr-2  rounded-full">
                      Explore Premium
                    </div>

                    <div className="bg-[#0E0A1C] text-white text-base hover:font-medium font-normal h-fit p-1 pl-2 pr-2 ml-2  rounded-full">
                      Install App
                    </div>
                    <div className="rounded-full bg-[#0A0713] hover:bg-[#393939] w-8 h-8 flex justify-center mr-2 ml-4">
                      <svg role="img" height="16" width="16" aria-hidden="true" data-testid="user-icon" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 haNxPq fill-white mt-auto mb-auto"><path d="M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"></path></svg>
                    </div>

                  </div>
              </div>
    
            </div>
    </div>
  )
}

export default Header
