import React from 'react'
import "./style"
const BlogList=({blogs, handleDelete} )=>{
  
  return(
    <div>
      {blogs.map(blog=>
      (
        <div className="blogPreview">
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
            <button onClick ={()=>handleDelete(blog.id)}>delete blog</button>
        </div>
      )
        )}
    </div>
  )
}
export default BlogList