import React, { useMemo, useState } from 'react'
import { useCustomEffect } from '../../hooks/useCustomEffect';
import useMemoCustom from '../../hooks/useMemoCustom';

const CustomUseMemo = () => {
    const [count, setCount] = useState(0);

    const squaredValue = useMemoCustom(() => {
        console.log("Calculating squared value");
        return count * count;
    }, [count]);

    console.log("COmponent Rendered");

  return (
    <div>
        <h1>Custom Use Memo</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Squared Value: {squaredValue}</p>
    </div>
  )
}

export default CustomUseMemo