import React from 'react'
import ReactDom from "react-dom/client"
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import HomeBody from './components/HomeBody'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Error from './components/Error'
import Notifications from 'react-notify-toast';
import Login from './components/Login'
import { Provider } from 'react-redux'
import store from './utils/store'
import Search from './components/Search'

const AppLayout = () => {
    return (
      <Provider store={store}>
      <Notifications  />
      <Header/>
      <SideBar/>
      <Outlet/>
      <Footer/>
      </Provider>
    )
  }
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/home",
                element:<HomeBody/>
            },
            {
                path:"/search",
                element:<Search/>
            }

        ]
    },
    {
        path:"/login",
        element:<Login/>

    }
])



const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
