import { useState } from 'react'
import './App.css'

function App() {
   const [counter,setCount]=useState(10);
   const addvalue =()=> {
    setCount((prevcount)=>prevcount+1);
    setCount((prevcount)=>prevcount+1);
    setCount((prevcount)=>prevcount+1);
    // batching- only  same value taken so use callback function 
   }
   const decvalue=()=>{
    setCount(counter-1);
   }
  return (
    <>
      <h1>Hey this is a Counter {counter}</h1>
      <h2>The value is :  {counter} </h2>
      <button onClick={addvalue}>Increase Counter</button> {"   "}
      <button onClick={decvalue}>Decrease Counter</button>
      <p>footer:  {counter}</p>
    </>
  )
}

export default App
