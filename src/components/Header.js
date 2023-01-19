import React from "react";
import weabove from "../assets/weabove.png"
import gravite from "../assets/gravite.png"

export default function Header() {
    return(
        <header>
            <img className="main-logo" src={weabove} width="50px"></img>
            <div className="header-title">
                <img className="gravite" src={gravite}></img>
                    <h1>GRAVITE CALCULATOR</h1>
                <img className="gravite" src={gravite}></img>
            </div>
            
            <p>This web app calculates how much gravite ($GRV) you will earn in the WeAbove staking program, by entering your wallet public key.</p>
        </header>
    )
}