import React from 'react'
import "./style"
const BlogList=({blogs, handleDelete} )=>{
  
  const images=[
    {src:"https://cdn.fs.teachablecdn.com/u8LFsjeERwyHlzyIg4w0",alt="day 1",id:1},
    {src:"https://p7.hiclipart.com/preview/243/80/25/sololearn-computer-programming-android-android.jpg",alt: "day 2",id:2},
    {src:"https://www.tutorialspoint.com/testng/images/testng_pdfcover.jpg",alt:"day 3",id:3},
    {src:"https://i.pinimg.com/originals/8c/d3/64/8cd3649cb68490847d1a036a4c7b5cb1.jpg",alt:"day 4",id:4}]



  return(
    <div>
      {blogs.map(blog=>
      (
        <div className="blogPreview" key={blog.id}>
            {images.map(image=>
              (
            <div className="imageDiv">
                   <img src={image.src} alt={image.alt} width=""/>
            </div>
              )
              )}
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