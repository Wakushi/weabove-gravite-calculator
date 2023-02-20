import React from "react";

export default function LoreNft(props) {

    return(
        <div className="lore-nft">
            <img src={props.img} width='100%'></img>
            <div className="nft-stats">
                <h3>{props.id}</h3>
                <h4><em>{props.reward} $GRV</em></h4>
            </div>
        </div>
    )
}