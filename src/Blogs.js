import React from "react"
import BlogList from "./BlogList"
import {useState}  from  'react'

const Blogs=()=>{
  const [blogs, setBlogs] =useState ([
    {title:"Day 1:Youtube Videos ",body:"Watched Tutorials on YouTube from The Net Ninja and Coding Train. The Tutorial from Net Ninja was named The Complete React Tutorial and it really made me understand much of the concepts in React. The Coding Train was of use to me by mostly referring from its videos on JavaScript array methods such as map, filter, sort and reduce.", date:"1/5/2022",id:1, src:" https://i.ytimg.com/vi/AVQzfUNFudU/maxresdefault.jpg"},
    {title:"Day 2:Sololearn Tutorials ",body:"I enrolled for a course in Sololearn entitled React Redux. The course consisted of 23 lessons. I was able to go through all the 23 lessons and earned my Sololearn React certificate for completion of the tutorial. At the end of Day Two I had some knowledge on the basics of React even though the Redux part was still confusing to me.", date:"4/5/2022",id:2, src:" https://i.insider.com/60f8275d0729770012b9084d?width=600&format=jpeg&auto=webp"},
    {title:"Day 3:Pdf Tutorials",body:"I downloaded various pdf tutorials from pdf drive some of them being Practical ReactJs and Building Modern Websites Using React. ", date:"8/5/2022",id:3, src:" https://i.ytimg.com/vi/vrRJor7R66A/maxresdefault.jpg"},
    {title:"Day 4:React Project Start",body:" Hello", date:"10/5/2022",id:4, src:"https://wallpaperaccess.com/full/3949102.jpg "},
    {title:"Day 5:It's Coming Together",body:"I wrote the code and my blog was now coming out according to my design", date:"14/4/2022",id:5, src:"https://www.whatlaptops.com/wp-content/uploads/2020/09/How-Many-Watts-Does-a-Laptop-Use-When-Charging-1-780x470.jpg "},
    {title:"Day 6",body:"Hello",date:"20/5/2022",id:6,src:"https://creativetimblog.com/blog/wp-content/uploads/2020/07/react-projects-730x410.jpg"} 
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