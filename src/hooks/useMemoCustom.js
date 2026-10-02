import { useRef } from "react";

const useMemoCustom = (callback, dependencies) => {
    const isFirstRender = useRef(true);
    const prevDependencies = useRef([]);

    if(isFirstRender.current) {
        isFirstRender.current = false;
        prevDependencies.current = dependencies;
        return callback();
    }

    const hasDependencyChanged = dependencies ? JSON.stringify(prevDependencies.current) !== JSON.stringify(dependencies) : true;
    if(hasDependencyChanged) {
        prevDependencies.current = dependencies;
        return callback();
    }

}

export default useMemoCustom;