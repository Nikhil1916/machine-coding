import React from 'react'
import VideoStream from './VideoStream'
import ChatWindow from './ChatWindow'

const LiveChat = () => {
  return (
    <div className='p-2 flex'>
        <VideoStream/>
        <ChatWindow/>
    </div>
  )
}

export default LiveChat