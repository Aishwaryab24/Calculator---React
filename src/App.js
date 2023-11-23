import React, {useState} from "react";
import './App.css';

function App() {
  const [value, setValue]=useState("");

  const getValue=(e)=>{
    setValue(value+e.target.innerHTML);
  }

  return (
    <div className="App">
      <div className="calculator">
        
        <input type="text" id="text" name="text" placeholder="0" value={value} />
    
        <div className="grid-container">
            <button className="grid-item" onClick={getValue}>7</button>
            <button className="grid-item" onClick={getValue}>8</button>
            <button className="grid-item" onClick={getValue}>9</button>
            <button className="grid-item del" onClick={e => setValue(value.slice(0, -1))}>DEL</button>
            <button className="grid-item" onClick={getValue}>4</button>
            <button className="grid-item" onClick={getValue}>5</button>
            <button className="grid-item" onClick={getValue}>6</button>
            <button className="grid-item" onClick={getValue}>+</button>
            <button className="grid-item" onClick={getValue}>1</button>
            <button className="grid-item" onClick={getValue}>2</button>
            <button className="grid-item" onClick={getValue}>3</button>
            <button className="grid-item" onClick={getValue}>-</button>
            <button className="grid-item" onClick={getValue}>.</button>
            <button className="grid-item" onClick={getValue}>0</button>
            <button className="grid-item" onClick={getValue}>/</button>
            <button className="grid-item" onClick={getValue}>*</button>
            <button className="grid-item reset" onClick={e => setValue("")}>RESET</button>
            <button className="grid-item equal" onClick={e => setValue(eval(value))} >=</button>
        </div>

    </div>
    </div>
  );
}

export default App;
