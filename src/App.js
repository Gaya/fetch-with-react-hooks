import React, { useState, useCallback } from 'react';

import './App.css';

import Profile from './components/Profile';

import useFetch from './hooks/useFetch';

import { fetchProfile } from './fetch';

function App() {
  const [id, setId] = useState(1);
  const [profile, isLoading, error] = useFetch(useCallback(() => fetchProfile(id), [id]));

  return (
    <div className="App">
      <h1>Fetching async with Hooks Demonstration</h1>

      <section className="profile-container">
        <Profile profile={profile} isLoading={isLoading} error={error} />
        <button onClick={() => setId(2)}>Load different profile</button>
        <button onClick={() => setId(16)}>Load missing profile</button>
      </section>
    </div>
  );
}

export default App;
