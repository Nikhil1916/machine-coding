import { useRef } from "react";

export const useCustomEffect = (callback, dependencies) => {
    console.log(dependencies);
    const isFirstRender = useRef(true);
    const prevDependencies = useRef([]);
    const cleanupRef = useRef();

    // first render
    if(isFirstRender.current) {
        isFirstRender.current = false;
        cleanupRef.current = callback();
        prevDependencies.current = dependencies || [];
        return;
    }


    // dependency change or no dependency
    const hasDependencyChanged = dependencies ? JSON.stringify(prevDependencies.current) !== JSON.stringify(dependencies) : true;
    console.log(JSON.stringify(prevDependencies.current) !== JSON.stringify(dependencies));
    if(hasDependencyChanged) {
        if (typeof cleanupRef.current === "function") {
            cleanupRef.current();
        }
        cleanupRef.current = callback();
    }
    prevDependencies.current = dependencies || [];



    // cleanup
}