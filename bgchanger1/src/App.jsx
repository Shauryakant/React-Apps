import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [color,setColor]=useState('olive')
  function changecolour(color) {
    setColor(color)
  }
  return (
    <div className="w-full h-screen duration-1000" style={{background:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 align-middle">
        <div className="bg-white px-3 py-3 rounded-3xl flex flex-wrap justify-center gap-3 shadow-lg">
          <button onClick={()=>changecolour('red')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style={{background:'red'}}>
            RED
          </button>
          <button onClick={()=>changecolour('blue')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background:'blue'}}>
            BLUE
          </button>
          <button onClick={()=>changecolour('green')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background:'green'}}>
            GREEN
          </button>
          <button onClick={()=>changecolour('pink')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style={{background:'pink'}}>
            PINK
          </button>
          <button onClick={()=>changecolour('grey')} className="outline-none px-4 py-1 rounded-full text-black shadow-lg " style={{background:'grey'}}>
            GREY
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
