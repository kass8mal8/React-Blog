import React from 'react'
import "./style"
const BlogList=({blogs, handleDelete} )=>{
  
  const images=[
    {src:"https://cdn.fs.teachablecdn.com/u8LFsjeERwyHlzyIg4w0",alt="day 1"},
    {src:"https://p7.hiclipart.com/preview/243/80/25/sololearn-computer-programming-android-android.jpg",alt: "day 2"} 

  return(
    <div>
      {blogs.map(blog=>
      (
        <div className="blogPreview" key={blog.id}>
            <div className="imageDiv">
              <img src={image} alt="web" width=""/>
            </div>
            <h3>{blog.title}</h3>
            <p>written on: {blog.date}</p>
            <button onClick ={()=>handleDelete(blog.id)}>delete blog</button>
        </div>
      )
        )}
    </div>
  )
}
export default BlogList