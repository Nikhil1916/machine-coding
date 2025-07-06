const Pagination = ({currPage, totalPages, setCurrentPage}) => {
  return (
   <div className='flex justify-center'>
     <div className='p-2 m-2 cursor-pointer'>
        {currPage!=0 && <span onClick={()=>setCurrentPage((d)=>d-1)} className='p-2 border border-gray-300 border-collapse'>Prev</span>}
        {[...Array(totalPages).keys()]?.map((_)=>{
            return (
                <span className={'p-2 border border-gray-300 border-collapse '+ (currPage == _ ? "bg-blue-200" : "")} key={_} onClick={()=>{
                    setCurrentPage(_)
                }}>
                    {_+1}
                </span>
            )
        })}
        {currPage!=totalPages-1 && <span onClick={()=>setCurrentPage((d)=>d+1)} className='p-2 border border-gray-300 border-collapse'>Next</span>}
    </div>
        {totalPages + " " +currPage}
   </div>
  )
}

export default Pagination