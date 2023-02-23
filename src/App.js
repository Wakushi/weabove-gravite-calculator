import React from "react";
import Gravite from "./components/Gravite";
import Header from "./components/Header"
import Nft from "./components/Nft"
import Footer from "./components/Footer"
import BoxModal from "./components/BoxModal";
import LoreNft from "./components/LoreNft";

export default function App() {

// Empty state variable that will hold the data fetched from Hando's API.
  const [userData, setUserData] = React.useState(
    {
      ordos: {sum : 0, details : []},
      prime : {sum : 0, details : []},
      lore : {sum : 0, details : []},
      total : 0
    }
  )

// User text input saved in state . Intends to hold the user public key and complete the fetch request.
  const [userKey, setUserKey] = React.useState("")

// warningMsg holds the custom warning message regarding user eligibility to the staking program.  
  const [warningMsg, setWarningMsg] = React.useState("")


// fetchData : gets data from Hando's API and stores it to userData. 
   function fetchData() {
     fetch(`https://api.handosensei.com/weabove/estimate-staking/${userKey}`)
     .then(res => res.json())
     .then(data => {
        setUserData(data)       
     })
   }

// Checks if the wallet is eligible to the LOYAL3 program (if 1x Prime or 10+ Ordos DTB are held)
// If not it it creates a custom warning message displayed in the Gravite component (Gravite.js) 
   React.useEffect(()=>{
    const userPrimes = Object.keys(userData.prime.details).length
    const userOrdos = Object.keys(userData.ordos.details).length
    const missingOrdos = 10 - userOrdos
    if(userKey && userPrimes == 0 && userOrdos < 10){
      setWarningMsg(<p className="eligibility-msg">Missing 1x Prime or {missingOrdos}x Ordos Database NFTs to access the program</p>)
    }   
   },[userData])


// Checks when the full user key has been entered to fetch data only when key is complete
  React.useEffect(()=>{
    if (userKey >= 42){
      fetchData()
    }
  },[userKey])


  // handleChange listens to user inputs and stores it in userKey.
  function handleChange(event) {
    const {value} = event.target
    setUserKey(value)  
  }

  // handleChange listens to user pasting and stores it in userKey.
  function handlePaste(event) {
    const {value} = event.target
    setUserKey(value)  
  }


 // Iterates over the data from the API to gather and centralize the informations we need
 // in an array.
  const nftOrdosArray = []
  for (const [key, value] of Object.entries(userData.ordos.details)) {
    nftOrdosArray.push(
      {
        nftId:key,
        img:value.img,
        reward:value.rewards
      }
      )
  }

  // We can .map over this array to create our NFT components.
  const ordosElements = nftOrdosArray.map((nft) => {
    return (
      <Nft
        key={nft.nftId}
        id={nft.nftId}
        img={nft.img}
        reward={nft.reward}
      />
    )
  })

 // Iterates over the data from the API to gather and centralize the informations we need
 // in an array.
  const nftPrimeArray = []
  for (const [key, value] of Object.entries(userData.prime.details)) {
    nftPrimeArray.push(
      {
        nftId:key,
        img:value.img,
        reward:value.rewards
      }
      )
  }

  // We can .map over this array to create our NFT components.
  const primeElements = nftPrimeArray.map((nft) => {
    return (
      <Nft
        key={nft.nftId}
        id={nft.nftId}
        img={nft.img}
        reward={nft.reward}
      />
    )
  })

  // Iterates over the data from the API to gather and centralize the informations we need
 // in an array.
 const nftLoreArray = []
 for (const [key, value] of Object.entries(userData.lore.details)) {
  nftLoreArray.push(
     {
       nftId:key,
       img:value.img,
       reward:value.rewards
     }
     )
 }

 // We can .map over this array to create our NFT components.
 const loreElements = nftLoreArray.map((nft) => {
  return (
    <LoreNft
      key={nft.nftId}
      id={nft.nftId}
      img={nft.img}
      reward={nft.reward}
    />
  )
 })


  function toggleModal() {
    if((document.getElementById('modal').style.getPropertyValue('display')) == "flex"){
      document.getElementById('modal').style.display = "none"
    } else {
      document.getElementById('modal').style.display = "flex"
    }
  }

  return (
    <>
      <BoxModal userData={userData} toggleModal={toggleModal} />

      <Header/>

      <Gravite 
        handleChange={handleChange}
        handlePaste={handlePaste}
        warningMsg={warningMsg}
        userData={userData}
        userKey={userKey}
        handleFetch={fetchData}
        toggleModal={toggleModal}
      />
      
      {/* displays collection component only is data is fetched and userData != empty. */}
      {loreElements.length > 0 && <div className="lore-nfts">
        <h2>Lore Collection</h2>
        {loreElements}
      </div>}

      {primeElements.length > 0 && <div className="prime-nfts"> 
        <h2>Prime Collection</h2>
        {primeElements}
      </div>}

      {ordosElements.length > 0 && <div className="ordo-nfts"> 
        <h2>Ordos Database Collection</h2>
        {ordosElements}
      </div>}

      <Footer />
      
    </>
  )
}

