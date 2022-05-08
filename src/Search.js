import React from "react"
import "./style"
import {useState} from 'react'
const Search =()=>{
  const [placeholder, setPlaceholder]=useState("enter name of blog")
  const handleSearch =()=>{

  }
  return(
    <div className="searchBlog">
      <input type="text" value={placeholder}
      onChange={e=>setPlaceholder(e.target.value)} />
      <button onClick ={handleSearch }>search</button>
        
    </div>
  )
}
export default Search 