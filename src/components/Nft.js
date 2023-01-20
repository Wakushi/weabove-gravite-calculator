import React from "react";

export default function Nft(props) {

    const ifpsId = props.img.slice(7, props.img.length)
    const httpImg = `https://ipfs.io/ipfs/${ifpsId}`

    console.log(httpImg)

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