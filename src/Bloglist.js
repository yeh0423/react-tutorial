//經由props傳遞資料,函式進來使用
const Bloglist =({blogs,title,handledelete})=>{
    
    return(
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((blog)=>(
             <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <button onClick={()=>handledelete(blog.id)}>delete blog</button>
             </div>   
            ))}
        </div>      
    );
}
export default Bloglist;