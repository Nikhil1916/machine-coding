import { useEffect, useRef } from "react";

const useMemoCustom = (callback, dependencies) => {
    const prevDependencies = useRef([]);
    console.log(dependencies, prevDependencies.current);

    // variable or state to store the previous value of the callback
    const prevValue = useRef();

    // dependency change or no dependency
    const hasDependencyChanged = dependencies ? JSON.stringify(prevDependencies.current) !== JSON.stringify(dependencies) : true;
    if(hasDependencyChanged) {
        prevDependencies.current = dependencies;
        prevValue.current = callback();
    };

    // not needed as per chat gpt since on coomponent unmount the cleanup will be called automatically
    // useEffect(() => {
    //    return () => {
    //     prevDependencies.current = null;
    //    }
    // }, []);

    return prevValue.current;
}

export default useMemoCustom;