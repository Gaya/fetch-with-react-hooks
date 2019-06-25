import React, { useCallback } from 'react';

import { fetchProfile } from './fetch';

import useFetch from './hooks/useFetch';

const Profile = ({ id }) => {
  const [profile, isLoading, error] = useFetch(useCallback(() => fetchProfile(id), [id]));

  if (error) {
    return (
      <article>
        <h5>Whoops! Something went wrong:</h5>
        <p>{error.message}</p>
      </article>
    );
  }

  if (!profile || isLoading) {
    return (
      <article>
        <p>Loading profile information.</p>
      </article>
    );
  }

  return (
    <article>
      <header>
        <h3>Profile</h3>
      </header>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </article>
  );
};

export default Profile;
