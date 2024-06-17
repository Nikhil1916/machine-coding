import React, { useState } from 'react'
import explorer from '../data/data';
import FileExplorer from './FileExplorer';

const Body = () => {
  const [FileExplorerD, setFileExplorerD] = useState(explorer);
  return (
    <div className='ml-1'>
        <FileExplorer data={FileExplorerD} />
    </div>
  )
}

export default Body