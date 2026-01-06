import React, { useEffect, useState } from 'react'
import "./styles.css";
const COUNT = 3;
const CShapeRender = () => {
const [stack, setStack] = useState([]);
const [unwinding, setUnwinding] = useState(false);

  const handleClick = (i) => {
    if(unwinding || stack.length === COUNT) return;

    if(stack.includes(i)) return;
    const updated = [...stack, i];
    setStack(updated);
    if(updated.length === COUNT) {
        setUnwinding(true);
    }
  }
  const genereateSquares = () => {
   const sqaures = [];
   for(let i=0;i<COUNT;i++) {
    sqaures.push(
        <div key={i} className={`square ${stack.includes(i) ? "green":""}`} onClick={()=>handleClick(i)}></div>
    )
   }
   return sqaures;
  }

  useEffect(()=>{
    if(!unwinding) return;
    const interval = setInterval(()=>{
        setStack((prev)=>{
            if(prev.length == 0) {
                setUnwinding(false);
                clearInterval(interval);
                return [];
            }
            return prev.slice(0, -1);
        })
    },2000);
    return () => clearInterval(interval)
  },[unwinding])
  return (
   <div className='app1'>
        <div className='box-wrapper'>
            {genereateSquares()}
        </div>
   </div>
  )
}

export default CShapeRender