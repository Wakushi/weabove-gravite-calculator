import React from "react";
import Gravite from "./components/Gravite";
import Header from "./components/Header"
import Nft from "./components/Nft"
import Footer from "./components/Footer"

export default function App() {

// Empty state variable that will hold the data fetched from Hando's API.
  const [userData, setUserData] = React.useState(
    {
      ordos: {sum : 0, details : []},
      prime : {sum : 0, details : []},
      total : 0
    }
  )

// User text input saved in state . Intends to hold the user public key and complete the fetch request.
  const [userKey, setUserKey] = React.useState("")


// fetchData : gets data from Hando's API and stores it to userData. 
   function fetchData() {
     fetch(`https://api.handosensei.com/weabove/estimate-staking/${userKey}`)
     .then(res => res.json())
     .then(data => setUserData(data))
   }




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



  return (
    <>
      <Header />
      <Gravite 
        handleChange={handleChange}
        handlePaste={handlePaste}
        userData={userData}
        userKey={userKey}
        handleFetch={fetchData}
      />
      {/* displays collection component only is data is fetched and userData != empty. */}
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

