import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'jasdhir', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yogesh', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'jasdhir', id: 3 }
  ])

  const [name, setName] = useState('Jasdhir');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
  useEffect(()=>{
    console.log('use effect ran')
    console.log(blogs)
  },[name])

  return (
  <div className="home">
    <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
    <button onClick={() => setName('Singh')}>change name</button>
    <p>{name}</p>
  </div>
  )
}

export default Home
