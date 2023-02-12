import React from "react";
import weabove from "../assets/weabove.png"
import gravite from "../assets/opensea.png"

export default function Header(props) {
    return(
        <header>
            
                <a target='_blank' href="https://weabove.io/"><img className="main-logo" src={weabove} width="110px"></img></a>
                <div className="header-title">
                    <h1>GRAVITE <em>CALCULATOR</em></h1>
                </div>
                <a target="_blank" href="https://opensea.io/collection/weabove-prime"><img className="os-logo" src={gravite} alt="opensea" width="50px"></img></a>
          
        </header>
    )
}