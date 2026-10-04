import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';

const LocalStorage = () => {
  const [storedValue, setStoredValue, removeValue] = useLocalStorage("myKey", "defaultValue");
  return (
    <div>
    <h1>Local Storage Example</h1>
    <p>Stored Value: {storedValue}</p>
    <input type="text" value={storedValue} onChange={(e) => setStoredValue(e.target.value)} />
    <button onClick={removeValue}>Remove Value</button>
    </div>
  )
}

export default LocalStorage