import { useState } from "react";

const Accordion = ({ title, items, className }) => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className={`my-6 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {items.map((it, i) => (
        <div key={i} className="border-b">
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full text-left p-2 font-medium">
            {it.question}
          </button>
          {openIdx === i && (
            <p className="px-2 pb-2 text-sm text-gray-600">{it.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};
export default Accordion;
