import React from "react";
import weabove from "../assets/weabove.png"
import gravite from "../assets/gravite.png"

export default function Header() {
    return(
        <header>
            
                <a target='_blank' href="https://weabove.io/"><img className="main-logo" src={weabove} width="200px"></img></a>

                <h1>GRAVITE <em>CALCULATOR</em></h1>
                
                <img className="grav-logo" src={gravite} alt="gravite" width="40px"></img>
          
        </header>
    )
}