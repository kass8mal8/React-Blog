import React from 'react'
import "./style"
const BlogList=({blogs, handleDelete} )=>{
  
  const image="https://i.pinimg.com/originals/8c/d3/64/8cd3649cb68490847d1a036a4c7b5cb1.jpg "

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