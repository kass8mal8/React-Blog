import React from 'react'
import "./style"
const BlogList=({blogs, handleDelete} )=>{
  
  const image="https://www.whatlaptops.com/wp-content/uploads/2020/09/How-Many-Watts-Does-a-Laptop-Use-When-Charging-1-780x470.jpghttps://www.whatlaptops.com/wp-content/uploads/2020/09/How-Many-Watts-Does-a-Laptop-Use-When-Charging-1-780x470.jpg"



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