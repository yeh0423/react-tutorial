import { useState } from "react";

const Home = ()=>{
 /*
    const [name,setName] = useState('mario');
    const [age,setAge] = useState(25);
    //click event ,usestate
    const handleclick = () => {
        setName('luigi');
        setAge('30');
    }
    return (
        <div className="home">
            <h2>homepage</h2> 
            <button onClick={handleclick}>click me</button>
            <p>{name} is {age} years old</p>
        </div>     
    )
    */
    //output list
    const[blogs,setBlogs]=useState([
        {title:'my new website',body:'abcd',author:'mario',id:1},
        {title:'welcome party!',body:'abcd',author:'yoshi',id:2},
        {title:'web dev top tips',body:'abcd',author:'mario',id:3},
    ])
    return (
        <div className="home">
            {blogs.map((blog)=>(
             <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
             </div>   
            ))}
        </div>    
    )
};

export default Home;