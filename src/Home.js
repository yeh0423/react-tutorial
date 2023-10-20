import { useState } from "react";

const Home = ()=>{

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
};

export default Home;