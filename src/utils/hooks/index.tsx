import React from "react";

function useMount() {
  const [isMount, setMount] = React.useState(false);
  React.useEffect(() => {
    setMount(true);
    return () => {
      setMount(false);
    };
  }, []);
  return isMount;
}

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export { useMount, useDebounce };
