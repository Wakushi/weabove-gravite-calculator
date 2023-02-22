import React from "react"
import prime from "../assets/prime.gif"
import ordos from "../assets/ordos.png"
import gravite from "../assets/gravite.png"
import box from "../assets/gold.png"


export default function Gravite (props) {

// Variable shorts for the data we want to display to the user.
  let ordosNFT = Object.keys(props.userData.ordos.details).length;
  let primeNFT = Object.keys(props.userData.prime.details).length;
  let ordosSum = props.userData.ordos.sum;
  let primeSum = props.userData.prime.sum;
  let totalGRV = props.userData.total;

    return (
        <main>

            <img 
                onClick={props.toggleModal} 
                className="opening-modal-icon shadow" 
                width="100px" 
                src={box} 
                alt="modal opening"
            ></img>

            {props.userKey && primeNFT == 0 && ordosNFT < 10 && <p className="eligibility-msg">{props.checkEligibility()}</p>}

            <input 
                className="user-input"
                type="text"
                value={props.userKey}
                placeholder="0x000..."
                onChange={props.handleChange}
                onPaste={props.handlePaste}
            />

           

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

                <div className="total-gravite">

                    <h2>$GRV</h2>
                    <h3>Daily : <em>{totalGRV}</em></h3>
                    <h5>Weekly : <em>{totalGRV * 7}</em></h5>
                    <h5>Monthly : <em>{totalGRV * 30}</em></h5>

                </div>

                <div className="ordos-collection">

                    <h2>Ordos DB Collection</h2>
               
                    <img className="ordos-img" src={ordos} alt="ordos collection" width="100%"></img>
                    
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