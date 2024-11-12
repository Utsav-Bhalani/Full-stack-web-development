/*

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
    </div>
  );
}

export default App;*/

import './App.css';

import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(function() {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className="container">
            <div className="heading">Welcome to CHARUSAT UNIVERSITY !!</div>
            <div className="time"> Time : {date.toLocaleTimeString()}</div>
            <div className="date"> Date : {date.toLocaleDateString()}</div>

        </div>
    )
}

export default DateTime