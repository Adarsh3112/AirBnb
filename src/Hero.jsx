import React from "react";
import Collage from '../public/images/photo-grid.png'
export default function Hero(){
    return(
        <div className="Hero">
            <img className="hero-img" src={Collage}/>
        </div>
    )
}