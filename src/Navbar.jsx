import React from "react";
import Logo from '../public/images/airbnb-logo.png'
export default function Navbar(){
    return(
        <div className="nav">
            <img className="logo-img" src={Logo}/>
        </div>
    )
}