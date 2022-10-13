import { useState } from "react";
import './App.css';

function App() {
  const colors = ["green","red","blue","yellow"];
  const [randomColor, setRandomColor] = useState(colors[10]);



  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    setRandomColor(randomColor);
    console.log("colors",colors)
  }




  return (
    <div className="App">
     <h1>Simon Game</h1>

  <div id="colours">
    <div id="green">green</div>
    <br />
    <div id="red">red</div>
    <br />
    <div id="blue">blue</div>
    <br />
    <div id="yellow">yellow</div>
    </div>

  
    <button>Start</button>
  

  </div>
  
  );
}

export default App;
