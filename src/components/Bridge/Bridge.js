import React, { useState } from "react";
import Web3Modal from "../Web3Modal/Web3Modal";
import Nav from "../Navbar/Navbar";

const Bridge = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);

    return (

        <>
            <Nav close={toggle1}></Nav>
            <Web3Modal visible={show1} close={toggle1}></Web3Modal>
        </>
    )
}

export default Bridge
