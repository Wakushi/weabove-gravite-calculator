import React from "react";

export default function Nft(props) {

    const ifpsId = props.img.slice(7, props.img.length) // takes the id string of the ipfs img from the ipfs url
    const httpImg = `https://ipfs.io/ipfs/${ifpsId}`    // allows to display ipfs content to hmtl

    return(
        <div className="nft">
            <img src={httpImg} width='100%'></img>
            <div className="nft-stats">
                <h3>#{props.id}</h3>
                <h4><em>{props.reward} $GRV</em></h4>
            </div>
        </div>
    )
}