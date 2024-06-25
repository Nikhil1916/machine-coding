import { useEffect, useState } from "react";
import "./Pagination.css"
const Product = ({item,index,page}) => {
    return (
        <div style={{minWidth:'400px',backgroundColor:'#F8F0E3', display:'flex',gap:'20px',alignItems:'center',marginBottom:'10px',marginRight:'10px',border:'1px solid black'}}>
            <span>{(page*10+index-10)}</span>
            <img height={100} width={100} src={item.thumbnail} alt="product" />
            <p>{item.title}</p>
        </div>
    );
}

const Pagination = () => {
    console.log(3);
    const [products, setProducts] = useState([]);
    const [page,setPage]=useState(1);
    const [totalPages, setTotalPages] = useState(0);

    
    // console.log(page);
    const fetchProducts = async() => {
        const data = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
        const json = await data.json();
        // console.log(json );
        setProducts(json?.products || []);
        setTotalPages(Math.ceil(json?.total/10));
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    useEffect(()=>{
        // console.log(1);
        const timeout = setTimeout(()=>{
            fetchProducts();
        },1000);
        return () => {
            // console.log(2);
            clearTimeout(timeout);
        }
    },[page])

  return (
    <div >
        {
            products.length>0 && (
                <div style={{display:'flex',flexWrap:'wrap', gap:'40px', justifyContent:'center',alignItems:'center'}}>
                    {
                        products.map((item,i)=>{
                           return <Product page={page} key={item.id} item={item} index = {i+1} />
                        })
                    }
                </div>
            )
        }
        <div className="pagination">
            <span className={page==1? 'hide':''} onClick={()=>{
                setPage(page-1);
            }}>⬅️</span>
            {
                [...Array(totalPages)].map((_,i)=>{
                    return <span className={page==(i+1)? 'gray':''} onClick={()=>{
                        setPage(i+1);
                    }} key={i}>{i+1}</span>
                })
            }
            <span className={page>=totalPages? 'hide':''} onClick={()=>{
                setPage(page+1);
            }}>➡️</span>
        </div>
    </div>

  )
}


export default Pagination