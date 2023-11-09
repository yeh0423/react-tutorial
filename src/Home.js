import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = ()=>{
    //output list
    const[blogs,setBlogs]=useState([
        {title:'my new website',body:'abcd',author:'mario',id:1},
        {title:'welcome party!',body:'abcd',author:'yoshi',id:2},
        {title:'web dev top tips',body:'abcd',author:'mario',id:3},
    ])
    const handledelete =(id)=>{
        const newblogs = blogs.filter(blog=>blog.id!==id);//沒被選到的id留下
        setBlogs(newblogs);
    }
    return (
        //props 傳遞數值
        <div className="home">
            <Bloglist blogs={blogs} title="all blogs!" handledelete={handledelete}/>
            
        </div>    
    )
};

export default Home;