import { useEffect, useState } from "react";
import './App.css';

function App() {
  const colors = ["green","red","blue","yellow"];

  const [compPattern, setCompPattern] = useState([]);
  const [playersPattern, setPlayersPattern ] =  useState([]);
  const [gameStatus, setGameStatus] = useState('stopped');

 useEffect(()=>{
  if(gameStatus === 'running'){
    if(compPattern.toString() !== playersPattern.toString()){
        setGameStatus('stopped')
    }else {
      computePattern()
    }
  }
 })

const computePattern = () =>{
  if(gameStatus === "stopped") setGameStatus("running");
  setPlayersPattern([])
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  let currentPattern = [...compPattern, randomColor ]
  setCompPattern(currentPattern);
}


  const addToPlayersPattern = (color) => {
    setPlayersPattern([...playersPattern,color])
  }
  
  console.log("playersPattern: ",playersPattern)
  console.log("compPattern: ",compPattern)
  console.log("compPattern: ",compPattern)



  return (
    <div className="App">
     <h1>Simon Game</h1>

  <div id="colours">
    <div onClick={()=>addToPlayersPattern("green")} id="green">green</div>
    <div onClick={()=>addToPlayersPattern("red")} id="red">red</div>
    <div onClick={()=>addToPlayersPattern("blue")} id="blue">blue</div>
    <div onClick={()=>addToPlayersPattern("yellow")} id="yellow">yellow</div>
    </div>

  
    <button onClick={()=>computePattern()}>Start</button>
  

  </div>
  
  );
}

export default App;
