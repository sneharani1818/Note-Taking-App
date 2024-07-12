import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import SideNavbar from './components/SideNavbar'
import Dashboard from './components/Dashboard';


const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar/><SideNavbar/><Intro/></>,
    },
    {
        path: "/login",
        element:<><Navbar/><Login/></>,
    },
    {
        path: "/createaccount",
        element:<><Navbar/><CreateAccount/></>,
    },
    {
        path:"/dashboard",
        element:<><Dashboard /></>
    }
]);


const App = () => {
  const [login, setLogin] = useState(false)


  var token;
    useEffect(()=>{
        token = localStorage.getItem("authtoken")
        if(token){
            setLogin(true)
            
        }
        else{
            setLogin(false)
        }
        console.log(login)
    },[token, login])
  return (    
    <RouterProvider token={token} login={login} router={router} />
  )
}

export default App