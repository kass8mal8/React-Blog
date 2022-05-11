import React from 'react'
import "./style"
const BlogList=({blogs, handleDelete} )=>{


  return(
    <div className="flexDiv">
      {blogs.map(blog=>
      (
        <div onClick={(id)=>  { 
          if (blog.id === id) {
             return (<div className="blogDetails" key={blog.id}>
                 <p>{blog.body} </p>   
              </div>)}
         } 
        } className="blogPreview" key={blog.id}>
          
            <div className="imageDiv">
                   <img src={blog.src} alt="illustration" width=""/>

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