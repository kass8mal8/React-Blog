import React from 'react'
import "./style"
const BlogList=({blogs} )=>{
  return(
    <div>
      {blogs.map(blog=>
      (
        <div className="blogPreview">
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
        </div>
      )
        )}
    </div>
  )
}
export default BlogList