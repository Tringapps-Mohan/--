import React from "react";
import './Card.css';
function Card(props){
    return (
        <div className="container">
            {Object.entries(props).map(e=><div><div className="titles">{e[0].toUpperCase()}</div><div>:</div><div className="values">{e[1]}</div></div>)}
        </div>
    )
}

export default Card;
