import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
 const[name, setName] = useState("____");

 let data = "";
 const handlerchange=(e)=>{
  data = e.target.value;
 }

 const final=()=>{
  setName(data);
 }
  return (
    <div id="main">
      <input id='input' onChange={handlerchange}></input>
      <button id='button' onClick={final}>Click</button>
      <p id='text'> Hello my name is {name} and I study at Newton School</p>
    </div>
  )
}


export default App;
