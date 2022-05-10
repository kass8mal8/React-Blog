import React from 'react'
import "./style"
const BlogList=({blogs, handleDelete} )=>{
  



  return(
    <div>
      {blogs.map(blog=>
      (
        <div className="blogPreview" key={blog.id}>
          
            <div className="imageDiv">
                   <img src={image} alt="illustration" width=""/>
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