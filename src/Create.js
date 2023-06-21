import { useState } from "react";

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Jasdhir');
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch('http://localhost:3030/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog..</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Jasdhir">Jasdhir</option>
          <option value="Ravi">Ravi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default Create
