import { useState, useEffect } from 'react';

function usePromise(resolver) {
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(undefined);
  const [resolvedValue, setValue] = useState(undefined);

  useEffect(
    () => {
      // reset fetch state values
      setPending(true);
      setError(undefined);

      // resolve the Promise
      resolver()
        .then((value) => {
          setValue(value);
        })
        .catch(e => {
          setError(e);
        })
        .then(() => {
          setPending(false);
        });
    },
    // if resolver changes, resolve again
    [resolver],
  );

  return [resolvedValue, isPending, error];
}

export default usePromise;
