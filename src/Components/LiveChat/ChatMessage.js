import React from 'react'

const ChatMessage = ({data}) => {
  return (
    <div className='flex p-2 gap-2 items-center'>
        <img className='rounded-full' height={"30px"} width={"40px"} src={data?.image} alt='img' />
        <div>
            <p>{data?.name}</p>
            <p>{data?.message}</p>
        </div>
    </div>
  )
}

export default ChatMessage