import React from "react"
import BlogList from "./BlogList"
import {useState}  from  'react'

const Blogs=()=>{
  const [blogs, setBlogs] =useState ([
    {title:"Day 1:Youtube Videos ",date:"1/4/2022",id:1, src:"https://cdn.fs.teachablecdn.com/u8LFsjeERwyHlzyIg4w0"},
    {title:"Day 2:Sololearn Tutorials ",date:"4/4/2022",id:2, src:"https://p7.hiclipart.com/preview/243/80/25/sololearn-computer-programming-android-android.jpg"},
    {title:"Day 3:Pdf Tutorials",date:"8/4/2022",id:3, src:"https://cdn0.vox-cdn.com/thumbor/87gvaTSgtyqQfYxEZUuwi8L1Qd0=/0x14:800x547/1200x800/filters:focal(0x14:800x547)/cdn0.vox-cdn.com/assets/3124217/new_youtube_logo.jpg "},
    {title:"Day 4:React Project Start",date:"10/4/2022",id:4, src:" https://wallpaperaccess.com/full3949102.jpg"},
    {title:"Day 5:It's Coming Together",date:"14/4/2022",id:5, src:"https:/"}

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