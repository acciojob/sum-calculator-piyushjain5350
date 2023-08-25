import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [add,setAdd]=useState(0);
  function additionFn(){
    setAdd(()=>{
      return Number(add)+Number(event.target.value);
    })
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="number" placeholder="0"  onChange={additionFn}/>

        <p>{add}</p>
    </div>
  )
}

export default App
