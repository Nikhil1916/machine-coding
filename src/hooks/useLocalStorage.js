const { useState } = require("react");

const isBrowser = typeof window !== "undefined";

const useLocalStorage = (key, value) => {
  if (!key) {
    throw new Error("Key is required for useLocalStorage hook");
  }

  const [storedValue, setStoredValue] = useState(() => {
    let localStoredValue = null;
    try {
      localStoredValue = isBrowser
        ? JSON.parse(localStorage.getItem(key))
        : null;
    } catch (error) {
      console.error("Error reading localStorage key “" + key + "”: ", error);
    }
    return localStoredValue !== null ? localStoredValue : value;
  });

  if (!isBrowser) {
    return [value, () => {}, () => {}];
  }

  const setValue = (newValue) => {
    try {
      if (typeof newValue === "function") {
        newValue = newValue(storedValue);
      }
      setStoredValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Error setting localStorage key “" + key + "”: ", error);
    }
  };

  const removeValue = () => {
    setStoredValue(null);
    localStorage.removeItem(key);
  };

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
