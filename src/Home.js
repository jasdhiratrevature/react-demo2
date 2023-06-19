import {useState} from 'react'
const Home = () => {
  //let name="Jasdhir"
const [name,setName]=useState("Jasdhir");
const [age,setAge]=useState(32);
  const handleClick=()=>{
    setName('Jasdhir Singh')
    setAge(40);
  }

  return (
  <div className="home">
    <h2>Home Page...</h2>
    <p>{name} is {age} years old</p>
    <button onClick={handleClick}>Click Me</button>
   
  </div>
  )
}

export default Home
