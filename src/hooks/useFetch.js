import { useState, useEffect, useRef } from 'react';

function useFetch(resolver) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [resolvedValue, setValue] = useState(undefined);
  const resolving = useRef(null);

  useEffect(
    () => {
      // if resolver changed and doesn't match the current resolving Promise, trigger effect
      if (resolving.current !== resolver) {
        resolving.current = resolver;

        // reset fetch state values
        setIsLoading(true);
        setError(undefined);

        resolver()
          .then((value) => {
            setValue(value);
          })
          .catch(e => {
            setError(e);
          })
          .then(() => {
            setIsLoading(false);

            // reset current resolving back to false
            resolving.current = null;
          });
      }
    },
    // if resolver changes, fetch again
    [resolver],
  );

  return [resolvedValue, isLoading, error];
}

export default useFetch;
