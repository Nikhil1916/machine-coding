import React, { useState } from 'react'
import explorer from '../data/data';
import FileExplorer from './FileExplorer';
import useTraverse from '../hooks/useTraverse';

const FileExplorerBody = () => {
  const [FileExplorerD, setFileExplorerD] = useState(explorer);
  const { insertNode } = useTraverse();
  const handleAdd = (folderId,item,isFolder) => {
    return insertNode(FileExplorerD, folderId,item,isFolder)
  }
  return (
    <div className='ml-1'>
        <FileExplorer handleAdd={handleAdd} data={FileExplorerD} />
    </div>
  )
}

export default FileExplorerBody