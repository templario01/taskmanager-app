import { useState } from "react"
import { ScreenOnboard } from "./ScreenOnboard";
import { ScreenStart } from "./ScreenStart";
import { MainScreen } from "./MainScreen";


export function Phone() {
    // estados
    const [currentScreen, setCurrentScreen] = useState(1)
    const [changeOne, setChangeOne] = useState(true)
    const [tasks, setTasks] = useState([])
  
    // logica
  
    const renderSwitch = (param: number) => {
      switch (param) {
        case 1:
          return <ScreenOnboard />
        case 2:
          return <ScreenStart click={pressClick} />
        case 3:
          return <MainScreen />
        default:
          return <MainScreen />
      }
    }
  
    const pressClick = (event: any) => {
      changeScreen(500, 3)
    }
  
    const changeScreen = (time: number, screenNumber: number) => {
      setTimeout(() => {
        setCurrentScreen(screenNumber)
      }, time)
    }
  
    if (changeOne) {
      changeScreen(2000, 2)
      setChangeOne(false)
    }
  
    console.log(currentScreen)
  
    return <div className="container-phone">{renderSwitch(currentScreen)}</div>
  }