import React, { useState, useEffect } from "react";
import Home from "../components/Home/Home";
import { useHistory } from "react-router-dom";
import Nav2 from "../components/Navbar/Navbar2";
import { isMobile } from "../utils/userAgent";

const HomePage = ()  => {

  const [show1, setShow1] = useState(false);
  const toggle1 = () => setShow1(!show1);
  let history = useHistory()

  useEffect(() => {

      if(isMobile) {
        console.log("mobile device detected")
        history.push("/mobilepage")
      } 
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        if(isMobile) {
          console.log("mobile device detected")
          history.push("/mobilepage")
        }
      } else {
        if(isMobile) {
          console.log("mobile device detected")
          history.push("/mobilepage")
        } else {
        console.log("unsupprted browser")
          history.push("/installmetamask")
      }
      }

    }, [history])

  return (

      <> 
        <Nav2/>
        <Home close={toggle1}></Home>   
      </>
  )
}

export default HomePage
