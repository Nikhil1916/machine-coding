import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AccordianItem = ({ title, description , isOpen, setIsOpen }) => {
  return (
    <div className="w-[50%] p-2 ml-[25%]">
      <div className="bg-gray-400 p-2 flex justify-between items-center">
        <span>{title}</span>
        <FontAwesomeIcon onClick={
            setIsOpen
        } className="p-2 cursor-pointer" icon={faDownLong} />
      </div>
   {   isOpen && <div className="bg-gray-100 p-2">{description}</div>}
    </div>
  );
};

export default AccordianItem;
