import React from "react"
import "./style"
import {useState} from 'react'
import AddBlog from "./AddBlog"
const Search =()=>{
  const [placeholder, setPlaceholder]=useState("enter name of blog")
  const handleSearch =()=>{

  }
  return(
    <div className="searchBlog">
      <input type="text" value={placeholder}
      onChange={e=>setPlaceholder(e.target.value)} />
      <button onClick ={handleSearch }>search</button>
        <AddBlog />
    </div>
  )
}
export default Search 