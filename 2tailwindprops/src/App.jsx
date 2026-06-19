import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myarr=[1,2,4,5];
  return (
    <>
      <h1 className="text-3xl font-bold underline">Vite wth tailwind</h1>
      <Card view="Lanscape" myar={myarr}/>
      <Card view="water"/>
      <Card view="bear"/>
    </>
  );
}

export default App;
