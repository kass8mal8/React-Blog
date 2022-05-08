import React from "react"
import BlogList from "./BlogList"
import Search from "./Search"

const Home=()=>{
  const blogs=[
    {title:"New Twitter Face",author:"Yoshi",id:1},
    {title:"Mars Journey",author:"Mario",id:2},
    {title:"A Part Together",author:"Yoshi",id:2}

  ]

  const handleDelete=(id)=>{
    blogs.filter(blog=> blog.id !== id)
  }
  return (
    <div>
      <Search />
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  )
}
export default Home