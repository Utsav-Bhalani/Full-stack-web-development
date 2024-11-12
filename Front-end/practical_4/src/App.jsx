import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [selectedFont, setSelectedFont] = useState('Arial');

  const incrby5 = () => setCount(count + 5);
  const reset = () => setCount(0);
  const incrby1 = () => setCount(count + 1);
  const decrby1 = () => setCount(count - 1 < 0 ? 0 : count - 1);

  return (
    <div className='mainBlock' style={{ fontFamily: selectedFont }}>
      <div className='language-select'>
        <select value={selectedFont} onChange={(e) => { setSelectedFont(e.target.value) }}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="monospace">Monospace</option>
          <option value="Impact">Impact</option>
        </select>
      </div>
      <div className='countDis'>
        <p className='count'>Count:</p>
        <p>{count}</p>
      </div>

      <div className='buttons'>
        <button className='button' onClick={reset}>Reset</button>
        <button className='button' onClick={incrby1}>Increment</button>
        <button className='button' onClick={decrby1}>Decrement</button>
        <button className='button' onClick={incrby5}>Increment 5</button>
      </div>
      <div className='welcome'>Welcome to My Page</div>
      <div className='inputs'>
        <div className='input'>
          <p>First Name:</p><input type="text" placeholder='First Name' onChange={(e) => { setFName(e.target.value) }} />
        </div>
        <div className='input'>
          <p>Last Name:</p><input type="text" placeholder='Last Name' onChange={(e) => { setLName(e.target.value) }} />
        </div>
      </div>
      <div className='disName'>
        <div>Name: {fName} {lName}</div>
      </div>
    </div>
  );
}

export default App;
