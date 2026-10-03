import React from 'react'
import useFetch from '../../hooks/useFetch';

const Fetch = () => {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
    });
    console.log("Data", data);
    console.log("Loading", loading);
    console.log("Error", error);
    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Error: {error.message}</p>
    }
  return (
    <div>
        {
            data && data?.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Fetch