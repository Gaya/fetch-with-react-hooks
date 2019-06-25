import React, { useState } from 'react';

import Profile from './Profile';

import './App.css';

function App() {
  const [id, setId] = useState(1);

  return (
    <div className="App">
      <h1>Demonstration</h1>
      <Profile id={id} />

      <button onClick={() => setId(2)}>Load different profile</button>
      <button onClick={() => setId(16)}>Load unfound profile</button>
    </div>
  );
}

export default App;
