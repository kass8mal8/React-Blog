import React from "react"
import BlogList from "./BlogList"
import Search from "./Search"
import {useState}  from  'react'

const Blogs=()=>{
  const [blogs, setBlogs] =useState ([
    {title:"New Twitter Face",author:"Yoshi",id:1},
    {title:"Mars Journey",author:"Mario",id:2},
    {title:"Things Falling Appart",author:"Ito",id:3},
    {title:"A Part Together",author:"Yoshi",id:4} 
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