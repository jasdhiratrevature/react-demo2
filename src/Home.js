import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3030/blogs')
    .then(response=>{
      return response.json()
    })
    .then(data=>{
      //console.log(data)
      setIsPending(false);
      setBlogs(data)
    })
  }, [])

  return (
    <div className="home">
       { isPending && <div>Loading...</div> }
       {blogs && <BlogList blogs={blogs} />}   
        </div>
  )
}

export default Home
