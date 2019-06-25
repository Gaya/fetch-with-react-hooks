import React from 'react';

const Profile = ({ profile, isLoading, error }) => {
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
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </article>
  );
};

export default Profile;
