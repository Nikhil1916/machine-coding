import  { useEffect } from "react";
import { useState } from "react";

const InfiniteScroll = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const getMemes = async () => {
    setLoading(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    // console.log(json);
    setMemes((_) => [ ..._,...json.memes]);
    setLoading(false);
  };

  useEffect(() => {
    getMemes();
    window.addEventListener("scroll", handleScroll);
     return () => {
    window.removeEventListener("scroll", handleScroll); 
  };
  }, []);

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight -100 && !loading) {
        console.log("adding data");
        getMemes();
    }
  };

  return (
    <div className="flex flex-wrap">
      {memes?.map((_, index) => {
        return (
          <div className="m-2 shadow-lg p-2 w-44">
            <img
              className="max-h-[200px]"
              width={"200px"}
              height={"200px"}
              src={_.url}
              alt={_.title}
            />
            <span>{_.title}</span>
          </div>
        );
      })}
      {loading && (
        <div className="flex flex-wrap justify-center">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="m-2 shadow-lg p-2 w-44 animate-pulse bg-white rounded-md"
            >
              <div className="h-[200px] w-full bg-gray-300 rounded-md mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
