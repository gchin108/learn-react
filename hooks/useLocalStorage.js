"use client"
import { useState, useEffect } from "react";

export function useLocalStorage(initialState, key){
  const [value, setValue] = useState([]);

  // reading from local storage
  useEffect(() => {
    // This will only run after the component has mounted on the client
    const storedValue = localStorage.getItem(key);
    console.log(storedValue);
    setValue(storedValue ? JSON.parse(storedValue) : initialState);
  }, []);//initialState is the fallback value, []

  //saving to local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]); //needs to convert to string because in local storage the value in the key-value pair is a string
  return [value, setValue]; // <-- Changed this from {value, setValue}
}