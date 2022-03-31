import './loader.css'
import {createPortal} from "react-dom";
import React from "react";

const modal = document.getElementById("modal")!;
export const Loader = () => {
    return (createPortal(<div className='container'>
            <div className="bars-common bar-one"/>
            <div className="bars-common bar-two"/>
            <div className="bars-common bar-three"/>

            <div className="squares-common square-one"/>
            <div className="squares-common square-two"/>
        </div>, modal)
    );
};