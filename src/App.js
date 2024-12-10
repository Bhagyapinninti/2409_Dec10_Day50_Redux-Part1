import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { useRef } from 'react';

function App() {

let dispatch = useDispatch();
let inputRef= useRef();
let storeObj = useSelector((store)=>{
return store;
});

  return (
    <div className="App">
      <h1>Redux</h1>
      <input ref={inputRef}></input>

      <button onClick={()=>{
       dispatch({type:"Fruits types", data:inputRef.current.value})
      }} >Fruits types</button>

      <button onClick={()=>{
        dispatch({type:"Vegetables types", data:inputRef.current.value})
      }}>Vegetables types</button>
      
      <br></br>
      <h2> Fruits: {storeObj.fruits.join()}</h2>
      <h2> Vegetables: {storeObj.vegetables.join()}</h2>
    </div>


  );
}

export default App;
