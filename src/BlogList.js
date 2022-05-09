import React from 'react'
import "./style"
const BlogList=({blogs, handleDelete} )=>{
  
  return(
    <div>
      {blogs.map(blog=>
      (
        <div className="blogPreview" key={blog.id}>
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