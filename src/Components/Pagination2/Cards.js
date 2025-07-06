
const Cards = ({data}) => {
  return (
    <div className='border border-gray-400 p-2 ml-3 m-2 ml-3'>
        <img width={"200px"} height={"200px"} src={data.thumbnail} />
        <p className='text-gray-700'>{data.title}</p>
        <p className='w-60 text-gray-500'>{data.description}</p>
    </div>
  )
}

export default Cards