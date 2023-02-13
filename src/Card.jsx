import React from "react";
import Star from '../public/images/star.png'
import './App.css'

export default function Card(props){
    return(
        <div className="Card-div">
            <img className="card-img" src={props.item.coverImg}/>
            <br></br>
            <img src={Star}/>
            <span>{props.item.stats.rating}
            </span>
            <span className="rating" > (6). USA</span>       
            <p className="card-par">{props.item.title}</p>
            <div>

            <p className="card-par2">From {props.item.price} <span className="person    " >/person</span> </p>
            </div>

        </div>
    )
}