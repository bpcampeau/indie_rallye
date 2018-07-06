import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

const Draw = (props) => {

    const pige = () => {
    
        axios.get(props.route).then((value)=>{
            let winner = value.data[Math.ceil(Math.random(value.length-1))];
            document.getElementById('winnerName').textContent = `${winner.name} ${winner.lastName}`;
        })
    
    }

    return(
        <div id="hiddenPige">
            <div id='winnerName'></div>
            <button className="btn btn-primary" onClick={()=>{pige()}}>ENWEILLE PIGE TOI</button>
        </div>
    )
}

export default Draw;