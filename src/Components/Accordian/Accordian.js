import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const data = [
  {
    title: "Node js",
    description: "Node js is a js runtime, used for running js without browser",
  },
  {
    title: "Angular js",
    description: "Node js is a js runtime, used for running js without browser",
  },
  {
    title: "Express js",
    description: "Node js is a js runtime, used for running js without browser",
  },
];

const Accordian = () => {
  const [isOpen, setIsOpen] = useState([0]);
  return (
    <div className="mt-10">
      {data?.map((_, index) => {
        return <AccordianItem key={index} title={_.title} description={_.description} isOpen={isOpen.includes(index)}
            setIsOpen={
                ()=>{
                    if(isOpen.includes(index)) {
                    setIsOpen(isOpen.filter(i=>i!=index))
                } else {
                    setIsOpen([...isOpen, index]);
                }
                }
            }
         />;
      })}
    </div>
  );
};

export default Accordian;
