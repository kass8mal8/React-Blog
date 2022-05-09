import React from "react"
import BlogList from "./BlogList"
import Search from "./Search"
import {useState}  from  'react'

const Blogs=()=>{
  const [blogs, setBlogs] =useState ([
    {title:"React Day 1:Youtube Videos ",author:"Yoshi",id:1},
    {title:"React Day 2:Sololearn Tutorials ",author:"Mario",id:2},
    {title:"React Day 3:Pdf Tutorials",author:"Ito",id:3},
    {title:"React Day 4:React Project Start",author:"Yoshi",id:4} 
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