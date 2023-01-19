import React from "react"
import prime from "../assets/prime.gif"
import ordos from "../assets/ordos.png"
import gravite from "../assets/gravite.png"

export default function Gravite (props) {

// Variable shorts for the data we want to display to the user.
  let ordosNFT = Object.keys(props.userData.ordos.details).length;
  let primeNFT = Object.keys(props.userData.prime.details).length;
  let ordosSum = props.userData.ordos.sum;
  let primeSum = props.userData.prime.sum;
  let totalGRV = props.userData.total;

    return (
        <main>

            <h2 className="total-gravite">Daily gravite earned : <em>{totalGRV}</em> $GRV</h2>


            <div className="input-box">
                <input className="user-input"
                    type="text"
                    value={props.userKey}
                    placeholder="0x000..."
                    onChange={props.handleChange}
                    onPaste={props.handlePaste}
                />
                
                {/* <ion-icon onClick={props.handleFetch} name="search-circle-outline"></ion-icon> */}
                
            </div>

           
        
            <div className="collections">

                <div className="prime-collection"> 
                    <h2>Prime Collection</h2>
                    <img className="prime-img" src={prime} alt="prime collection" width="300px"></img>
                    <h3>You hold <em>{primeNFT}</em> Primes</h3>
                    <div className="prime-sum">
                        <h4><em>{primeSum} $GRV</em></h4>
                        <img className="gravite-icon" src={gravite} alt="gravite"></img> 
                    </div>
                </div>

                <div className="ordos-collection">
                    <h2>Ordos Database Collection</h2>
                    <img className="ordos-img" src={ordos} alt="ordos collection" width="300px"></img>
                    <h3>You hold <em>{ordosNFT}</em> Ordos Database</h3>
                    <div className="ordos-sum">
                        <h4><em>{ordosSum} $GRV</em></h4>
                        <img className="gravite-icon" src={gravite} alt="gravite"></img> 
                    </div>
                </div>

                

                              
            </div>

        </main>
    ) 
}