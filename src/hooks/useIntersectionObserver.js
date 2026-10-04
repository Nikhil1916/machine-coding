import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options) => {
    const [intersectionObserver, setIntersectionObserver] = useState(null);
    useEffect(()=>{
        if(!ref.current) return;
        
        const handler = (entries) => {
            console.log("hello")
            const entry = entries[0];
            setIntersectionObserver(entry);
        }
        const observer = new IntersectionObserver(handler, options);
        observer.observe(ref.current);
        return () => {
            setIntersectionObserver(null);
            observer.disconnect();
        }
    },[ref, options]);

    return {
        intersectionObserver
    }
};

export default useIntersectionObserver;