import { useEffect, useState } from "react";
import "./styles.css";
const ScrollIndicator = () => {
    const [scrolledPercentage, setScrolledPercentage] = useState(0);
    useEffect(()=>{
        window.addEventListener("scroll", calculateScrolledPercentage);

        return ()=>window.removeEventListener("scroll", calculateScrolledPercentage);
    },[]);

    function calculateScrolledPercentage() {
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPercentage = (windowScroll/height) * 100;
        setScrolledPercentage(scrolledPercentage);
        console.log(scrolledPercentage)
    }

    return (
        <div className="header">
            <h1>Scroll indicator</h1>

            <div className="progressContainer">
                 <div className="progressbar" style={{width:`${scrolledPercentage}%`}}></div>
            </div>
        </div>
    )
};

export default ScrollIndicator;