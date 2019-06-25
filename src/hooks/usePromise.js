import { useState, useEffect, useRef } from 'react';

function usePromise(resolver) {
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(undefined);
  const [resolvedValue, setValue] = useState(undefined);
  const resolving = useRef(null);

  useEffect(
    () => {
      // if resolver changed and doesn't match the current resolving Promise, trigger effect
      if (resolving.current !== resolver) {
        resolving.current = resolver;

        // reset fetch state values
        setPending(true);
        setError(undefined);

        resolver()
          .then((value) => {
            setValue(value);
          })
          .catch(e => {
            setError(e);
          })
          .then(() => {
            setPending(false);

            // reset current resolving back to false
            resolving.current = null;
          });
      }
    },
    // if resolver changes, fetch again
    [resolver],
  );

  return [resolvedValue, isPending, error];
}

export default usePromise;
