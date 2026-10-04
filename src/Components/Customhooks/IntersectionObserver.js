import React, { useMemo, useRef } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const IntersectionObserver = () => {
  const ref = useRef(null);
  const options = useMemo(()=>{
    return {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };
  }, []);
  const {intersectionObserver} = useIntersectionObserver(ref, options);
  console.log(intersectionObserver?.isIntersecting);
  console.log(intersectionObserver?.intersectionRatio);
  return (
    <div ref={ref} className={`h-[100px]  absolute top-[1000px] w-[100%] ${intersectionObserver?.isIntersecting ? "bg-green-500" : "bg-red-500"}`}>
      <h2>Intersection Observer Example</h2>
      <p>Scroll down to see the effect</p>
    </div>
  )
}

export default IntersectionObserver