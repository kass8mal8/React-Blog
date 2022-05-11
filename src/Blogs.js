import React from "react"
import BlogList from "./BlogList"
import {useState}  from  'react'

const Blogs=()=>{
  const [blogs, setBlogs] =useState ([
    {title:"Day 1:Youtube Videos ",body:"Hello", date:"1/4/2022",id:1, src:" https://i.ytimg.com/vi/AVQzfUNFudU/maxresdefault.jpg"},
    {title:"Day 2:Sololearn Tutorials ",body:"Hello", date:"4/4/2022",id:2, src:" https://i.insider.com/60f8275d0729770012b9084d?width=600&format=jpeg&auto=webp"},
    {title:"Day 3:Pdf Tutorials",body:"Hello", date:"8/4/2022",id:3, src:" https://i.ytimg.com/vi/vrRJor7R66A/maxresdefault.jpg"},
    {title:"Day 4:React Project Start",body:" Hello", date:"10/4/2022",id:4, src:"https://wallpaperaccess.com/full/3949102.jpg "},
    {title:"Day 5:It's Coming Together",body:"Hello", date:"14/4/2022",id:5, src:"https://www.whatlaptops.com/wp-content/uploads/2020/09/How-Many-Watts-Does-a-Laptop-Use-When-Charging-1-780x470.jpg "}

  ]) 
  

  const handleDelete=(id)=>{
    const remBlogs=blogs.filter(blog=> blog.id !== id)
    setBlogs(remBlogs)
  }
  
  return (
    <div>
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  )
}
export default Blogs