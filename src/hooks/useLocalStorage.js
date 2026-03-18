import { useEffect, useRef } from "react";

/**
 * Custom hook for managing localStorage with debouncing
 * Automatically saves code per language while avoiding excessive writes
 * @param {string} key - localStorage key
 * @param {string} initialValue - value if key doesn't exist
 * @param {number} debounceDelay - delay in ms before saving (default: 1000)
 */
const useLocalStorage = (key, initialValue, debounceDelay = 1000) => {
  const debounceRef = useRef(null);

  const save = (value) => {
    try {
      if (value === undefined || value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (error) {
      console.warn(`Failed to save to localStorage (key: ${key}):`, error.message);
    }
  };
  const debouncedSave = (value) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      save(value);
    }, debounceDelay);
  };
  const restore = () => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? item : initialValue;
    } catch (error) {
      console.warn(`Failed to restore from localStorage (key: ${key}):`, error.message);
      return initialValue;
    }
  };
  const clear = () => {
    try {
      localStorage.removeItem(key);
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    } catch (error) {
      console.warn(`Failed to clear localStorage (key: ${key}):`, error.message);
    }
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return {
    save: debouncedSave,
    restore,
    clear,
    immediate: save, 
  };
};

export default useLocalStorage;
