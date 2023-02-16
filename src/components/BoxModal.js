import React from "react";
import bronze from "../assets/bronze.png";
import silver from "../assets/silver.png";
import gold from "../assets/gold.png";
import icon from "../assets/gravite.png"
import noBox from "../assets/no-box.png"
import lore from "../assets/lore.png"
import twitter from "../assets/twitter.png"

export default function BoxModal(props) {

    // Option States 

    const [loreEdition, setLoreEdition] = React.useState(0)
    const [waPfp, setWaPfp] = React.useState(0)
    const [weeklyBronze, setWeeklyBronze] = React.useState(false)
    const [weeklySilver, setWeeklySilver] = React.useState(false)
    const [weeklyGold, setWeeklyGold] = React.useState(false)

    // Results States

    const [weeklyTotal, setWeeklyTotal]  = React.useState(0)
    const [monthlyTotal, setMonthlyTotal] = React.useState(0)

    const [daysToBronze, setDaysToBronze] = React.useState(0)
    const [daysToSilver, setDaysToSilver] = React.useState(0)
    const [daysToGold, setDaysToGold] = React.useState(0)

    // Lore edition number input 
    function getLoreEditionStat(e) {
        setLoreEdition(e.target.value)
    }

    // weeklySwitch handles the weekly box selection

    function weeklySwitch(e) {

        const clickedBtn = document.getElementById(e.target.id)
        const btnContainer = clickedBtn.parentElement

        const boxImages = document.getElementsByClassName('box-image')
        for(let box of boxImages){
            box.classList.remove('glow')
        }

        const allBtns = document.getElementsByClassName('box-button')
        for(let btn of allBtns){
            btn.classList.remove('switch')
        }

        const allContainers = document.getElementsByClassName('rectangle')
        for(let container of allContainers){
            container.classList.remove('btn-selected')
        }

        setWeeklyBronze(false)
        setWeeklySilver(false)
        setWeeklyGold(false)

        if(e.target.id == "bronze"){
            setWeeklyBronze(true)
            document.getElementById('box-bronze').classList.add('glow')
        } else if (e.target.id == "silver"){
            setWeeklySilver(true)
            document.getElementById('box-silver').classList.add('glow') 
        } else if (e.target.id == "gold"){
            setWeeklyGold(true)
            document.getElementById('box-gold').classList.add('glow')
        } 
        
        clickedBtn.classList.add('switch')
        btnContainer.classList.add('btn-selected')
    }

    // pfpSwitch handles the true/false twitter pfp selection

    function pfpSwitch(e) {
        const clickedBtn = document.getElementById(e.target.id)
        const btnContainer = clickedBtn.parentElement
        clickedBtn.classList.toggle('switch')
        btnContainer.classList.toggle('btn-selected')
        if(waPfp == 0){
            setWaPfp(1)
        } else {
            setWaPfp(0)
        }
    }

    // simulateNewTotal calculates the weekly and monthly gains depending on selected options.

    function simulateNewTotal() {

        const dailyGains = props.userData.total + (loreEdition * 20) + waPfp

        setDaysToBronze(Math.ceil(200 / dailyGains))
        setDaysToSilver(Math.ceil(700 / dailyGains))
        setDaysToGold(Math.ceil(3000 / dailyGains))

        function daysInMonth (month, year) {
            return new Date(year, month, 0).getDate();
        }
  
        const date = new Date();
        const month = date.getMonth() + 1 ;
        const year = date.getFullYear();
        const numberDays = daysInMonth(month, year);


        if(weeklyBronze == true){
            setWeeklyTotal((dailyGains * 7) - 200)
            setMonthlyTotal((dailyGains * numberDays)- (200*4))
        } else if (weeklySilver == true){
            setWeeklyTotal((dailyGains * 7) - 700)
            setMonthlyTotal((dailyGains * numberDays)- (700*4))
        } else if (weeklyGold == true) {
            setWeeklyTotal((dailyGains * 7) - 3000)
            setMonthlyTotal((dailyGains * numberDays)- (3000*4))
        } else {
            setWeeklyTotal((dailyGains * 7))
            setMonthlyTotal(dailyGains * numberDays)
        }
        
    } 

    return (

        <div id="modal">
            <div className="box-modal">
                {/* <div className="rules-modal">
                    
                </div> */}
                <i onClick={props.toggleModal} className="fa-regular fa-circle-xmark"></i>
                <h2>Gravite <em>Simulator</em></h2>
                <div className="simulator-options">

                    <div className="basic-options">

                        <div className="lore">
                            <label className="has-lore" htmlFor="hasLore">Lore Edition</label>
                            <span className="lore-img">                           
                                <img className="basic-option-img" width="50%" src={lore} alt="lore-nft"></img>
                                <input onChange={getLoreEditionStat} id="hasLore" type="number" min="0" max="11"></input>
                            </span>
                            
                        </div>
                        
                        <div className="twitter-pfp">
                            <p className="weabove-pfp">WeAbove PFP</p>
                            <span className="twitter-img">  
                                <img className="basic-option-img" width="50%" src={twitter} alt="lore-nft" ></img>
                                <div className="rectangle-pfp">
                                    <div onClick={pfpSwitch} id="waPfp" className="box-button-pfp">
                                        <img className="icone"alt="altariIcone"src={icon}></img>
                                    </div>
                                </div>     
                            </span>  
                        </div>

                    </div>
                    

                    {/* WEEKLY OPTIONS */}

                    
                    <div className="weekly-options">

                    <h3>Weekly <em>buy</em></h3>
                        <span className="box-selection">
                            <p>None</p>
                            <img className="box-image shadow" src={noBox}></img>
                            <div className="rectangle btn-selected">
                                <div onClick={weeklySwitch} id="no-box" className="box-button switch"><img onClick={weeklySwitch} className="icone"alt="altariIcone"src={icon}></img></div>
                            </div>
                        </span>

                        <span className="box-selection">
                            <p>Bronze</p>
                            <img id="box-bronze" className="box-image shadow" src={bronze}></img>
                            <div className="rectangle">
                                <div onClick={weeklySwitch} id="bronze" className="box-button"><img onClick={weeklySwitch} className="icone"alt="altariIcone"src={icon}></img></div>
                            </div>
                        </span>
                        
                        <span className="box-selection">
                            <p>Silver</p>
                            <img id="box-silver" className="box-image shadow" src={silver}></img>
                            <div className="rectangle">
                                <div onClick={weeklySwitch} id="silver" className="box-button"><img onClick={weeklySwitch}  className="icone"alt="altariIcone"src={icon}></img></div>
                            </div>
                        </span>
                        

                        <span className="box-selection">
                            <p>Gold</p>
                            <img id="box-gold" className="box-image shadow" src={gold}></img>
                            <div className="rectangle">
                                <div onClick={weeklySwitch} id="gold" className="box-button"><img onClick={weeklySwitch}  className="icone"alt="altariIcone"src={icon}></img></div>
                            </div>
                        </span>             

                        <button onClick={simulateNewTotal} className="simulate-btn">Simulate</button>
                    </div>
                </div>

                <div className="simulator-results">
                    <span className="earning-results">
                        <p>Weekly <em>earnings</em> : {weeklyTotal} </p>
                        <p>Monthly <em>earnings</em> : {monthlyTotal} </p>
                        <p className="small-text">(Based on daily earnings and weekly buy)</p>
                    </span>
                    <hr></hr>
                    <span className="box-results">
                        <p>Bronze <em>Box</em> : {daysToBronze} days</p>
                        <p>Silver <em>Box</em> : {daysToSilver} days</p>
                        <p>Gold <em>Box</em> : {daysToGold} days</p>
                        <p className="small-text">(Based on daily earnings only)</p>
                    </span>
                   
                </div>

            </div>
        </div>
        
        
    )
}