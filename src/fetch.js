const profiles = {
  1: { name: 'Harry', age: 46 },
  2: { name: 'Ed', age: 31 },
  3: { name: 'Richard', age: 24 },
  4: { name: 'John', age: 57 },
  5: { name: 'Tom', age: 32 },
};

export const fetchProfile = (id) => new Promise((resolve, reject) => {
  const profile = profiles[id];

  if (!profile) {
    reject(new Error('Profile not found.'));
    return;
  }

  setTimeout(
    () => resolve(profiles[id]),
    1500,
  );
});
