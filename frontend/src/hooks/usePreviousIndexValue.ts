import { useRef, useEffect } from 'react';

export const usePreviousIndexValue = (value: number | null) => {
  const ref = useRef<number | null>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
