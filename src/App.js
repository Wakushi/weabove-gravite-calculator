import React from "react";
import Gravite from "./components/Gravite";
import Header from "./components/Header"
import Wallet from "./components/Wallet"

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
    console.log("fetched")
  }

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

    </>
  )
}

