import React from 'react';
import './StyleSheet.css';

import temp from './images/temp.png'

import AwakeImages from './images/AwakeImages.js'
import DreamImages from './images/DreamImages.js'

    //0 north - desk (far away computer)
    //1 east - plant and books (far away clock)
    //2 south - bed (far away poster)
    //3 west - window + statue
    //4 computer 
    //5 clock
    //6 poster
    //7 closeup window

export default function getImage(isDreaming, isWeird, direction, variant) {
    if (isWeird && isDreaming) {
        if (DreamImages[variant][direction] == null) {
            return(
                <div>
                    <img className="image" src={temp} alt=""></img>
                </div>
            );           
        } else {
            return(
                <div>
                    <img className="image" src={DreamImages[variant][direction]} alt=""></img>
                </div>
            );    
        }   
    } else {
        if (AwakeImages[variant][direction] == null) {
            return(
                <div>
                    <img className="image" src={temp} alt=""></img>
                </div>
            );           
        } else {
            return(
                <div>
                    <img className="image" src={AwakeImages[variant][direction]} alt=""/>
                </div>
            );
        }
    }
}