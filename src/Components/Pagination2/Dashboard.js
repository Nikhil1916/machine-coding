import { useEffect, useState } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const LIMIT = 10;
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);
  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail,discountPercentage`
    );
    const json = await data.json();
    console.log(json,Math.ceil(json.total / LIMIT));
    setProducts(json.products);
    setTotalPages(Math.ceil(json.total / LIMIT));
  };
  return (
    <div>
      <div className="flex flex-wrap">
        {products?.map((_) => (
          <Cards data={_} key={_.id} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currPage={currentPage} setCurrentPage={(p)=>setCurrentPage(p)}/>
    </div>
  );
};

export default Dashboard;
