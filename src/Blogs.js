import React from "react"
import BlogList from "./BlogList"
import Search from "./Search"
import {useState}  from  'react'

const Blogs=()=>{
  const [blogs, setBlogs] =useState ([
    {title:"Day 1:Youtube Videos ",date:"1/4/2022",id:1},
    {title:"Day 2:Sololearn Tutorials ",date:"4/4/2022",id:2},
    {title:"Day 3:Pdf Tutorials",date:"8/4/2022",id:3},
    {title:"Day 4:React Project Start",date:"10/4/2022",id:4} 
  ]) 
  

  const handleDelete=(id)=>{
    const remBlogs=blogs.filter(blog=> blog.id !== id)
    setBlogs(remBlogs)
  }
  return (
    <div>
      <Search />
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  )
}
export default Blogs