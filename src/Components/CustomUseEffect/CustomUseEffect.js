import React, { useState } from 'react'
import { useCustomEffect } from '../../hooks/useCustomEffect';

const CustomUseEffect = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useCustomEffect(() => {
        console.log("count changed", count);
        return () => {
            console.log("cleanup for count", count);
        }
    },[count]);

    console.log("COmponent Rendered");

  return (
    <div>
        <h1>Custom Use Effect</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>Increment Count</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount1(count1 + 1)}>Increment Count1</button>
    </div>
  )
}

export default CustomUseEffect