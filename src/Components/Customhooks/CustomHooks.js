import React from 'react'
import useCounter from '../../hooks/useCounter';
import useWindowSize from '../../hooks/useWindowsize';

const CustomHooks = () => {
    const { count, increment, decrement, reset } = useCounter(0);
    const { windowSize } = useWindowSize();
  return (
    <div>
        <p>{count}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={increment}>Increment</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={decrement}>Decrement</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={reset}>Reset</button>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>Use Window Size Hook</p>
        <p>Height: {windowSize.height}</p>
        <p>Width: {windowSize.width}</p>
    </div>
  )
}

export default CustomHooks