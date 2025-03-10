import Home from "./components/HomePage/Home"
import "./App.css"
import { createContext, useState } from "react"
import Game from "./components/GamePage/Game";

const contextCreate=createContext();

function App() {
  const [flag,setFlag]=useState(false);
  return (
    <>
      <contextCreate.Provider value={{setFlag}}>
        {!flag ? <Home/> : <Game/>}
      </contextCreate.Provider>
    </>
  )
}

export default App
export {contextCreate}
