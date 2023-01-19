import React from "react";

export default function Nft(props) {

    const ifpsId = props.img.slice(7, props.img.length)
    const httpImg = `https://ipfs.io/ipfs/${ifpsId}`

    console.log(httpImg)

    return(
        <div>
            <img src={httpImg} width='200px'></img>
            <h3>{props.id}</h3>
            <h4>Reward : {props.reward}</h4>
        </div>
    )
}