import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      password,
      mobile,
      address,
    });
    handleReset();
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setPassword('');
    setMobile('');
    setAddress('');
    setCount(0);
  };

  return (
    <div className="App">
      <form className="formbox" onSubmit={handleSubmit}>
        <header> Form</header>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required/>
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
        <div> Total time : {count} seconds</div>
      </form>
    </div>
  );
}

export default App;
