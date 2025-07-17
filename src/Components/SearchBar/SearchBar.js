import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState();
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const fetchData = async () => {
    if (!searchText) return;
    if (cache[searchText]) {
        setSearchResult(cache[searchText]);
    } else {
      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );
      const json = await data.json();
      setSearchResult(json[1]);
      setCache((prevCache)=>{
        return {
            ...prevCache,
            [searchText]:json[1]
        }
      })
    }
  };

  return (
    <div className="m-10">
      <input
        type="text"
        placeholder="search"
        className="border border-black p-2 shadow-lg w-96"
        value={searchText}
        onChange={(e) => {
          setSearchText(e?.target?.value);
        }}
        onFocus={() => {
          setIsResultVisible(true);
        }}
        onBlur={() => {
          setIsResultVisible(false);
        }}
      />
      {searchResult?.length > 0 && isResultVisible && (
        <ul className="p-2 border border-black w-96 shadow-lg">
          {searchResult?.map((val, i) => {
            return (
              <li className="hover:bg-gray-200 cursor-pointer p-1" key={i}>
                {val}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
