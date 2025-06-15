import React from 'react'
import { Link } from 'react-router-dom'

const MachineCoding = () => {
  return (
    <div>
        <h1 className='m-2 font-bold'>List of React Machine Coding Ques</h1>
        <ol>
            <Link to={"/file-explorer"}><li className='m-2 text-blue-500'>File Explorer</li></Link>
            <Link to={"/Pagination"}><li className='m-2 text-blue-500'>Pagination</li></Link>
            <Link to={"/Progress"}><li className='m-2 text-blue-500'>Progress</li></Link>

            {/* least recently used cache */}
            <Link to={"/LruCache"}><li className='m-2 text-blue-500'>LruCache</li></Link>

            <Link to={"/selfThemeToggler"}><li className='m-2 text-blue-500'>ThemeToggle</li></Link>
            <Link to={"/configUi"}><li className='m-2 text-blue-500'>Config Ui</li></Link>
            <Link to={"/InfiniteScroll"}><li className='m-2 text-blue-500'>Infinite Scroll</li></Link>
            <Link to={"/Accordian"}><li className='m-2 text-blue-500'>Accordian</li></Link>
            
        </ol>
    </div>
  )
}

export default MachineCoding