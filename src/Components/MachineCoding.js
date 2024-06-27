import React from 'react'
import { Link } from 'react-router-dom'

const MachineCoding = () => {
  return (
    <div>
        <h1>List of React Machine Coding Ques</h1>
        <ol>
            <Link to={"/file-explorer"}><li>File Explorer</li></Link>
            <Link to={"/Pagination"}><li>Pagination</li></Link>
            <Link to={"/Progress"}><li>Progress</li></Link>

            {/* least recently used cache */}
            <Link to={"/LruCache"}><li>LruCache</li></Link>
        </ol>
    </div>
  )
}

export default MachineCoding