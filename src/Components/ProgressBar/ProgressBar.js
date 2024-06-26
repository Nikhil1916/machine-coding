import { useEffect, useState } from "react";
import "./ProgressBar.css";
const ProgressBar = ({value,onComplete}) => {
    const [percentage, setPercentage] = useState(value);
    useEffect(()=>{
        if(percentage>=99) onComplete();
        setPercentage(Math.min(100,Math.max(0,value)));
    },[value]);
    return (
        <div className="progress">
            <span style={{color:percentage>49 ? 'white':''}}>{percentage.toFixed()+"%"}</span>
            <div role="progressbar"
             style={{width:`${percentage}%`}}
             aria-valuemin={0}
             aria-valuemax={100}
             aria-valuenow={percentage.toFixed()}
             ></div>
        </div>
    );
}

const ProgressBarBody = () => {
    const [value,setValue] = useState(0);
    const [intervalV, setSetInterval] = useState(null);
    const [success, setSuccess]=useState(false);
    useEffect(()=>{
        const i=setInterval(()=>{
            console.log(value);
            setValue((val)=>{
                if(val>=99) {
                    clearInterval(i);
                    return 100;
                } else {
                    return val+1;
                }
            });
        },100);
        setSetInterval(i);
    },[]);
    return (
        <div className="app">
        <h1>Progress Bar</h1>
        <ProgressBar value={value} onComplete={()=>setSuccess(true)} />
        <p>{success?'complete!':'Loading..'}</p>
        </div>
    );
}

export default ProgressBarBody;