import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
     
    }, delay);

    return () => {
      
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;