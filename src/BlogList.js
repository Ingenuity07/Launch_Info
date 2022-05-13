import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogList = ({blogs, title }) => {
   
    return (
        <div className="Blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    
                    <h2>{blog.name}</h2>
                    <h3>{blog.details}</h3>
                    
                    <h3 style={ {marginTop:"5px", color:"red"}  }>{blog.status}</h3>
                    

                    {blog.launches.length==0&&(<div>
                        No Launches
                    </div>)}
                    {blog.launches&&
                        blog.launches.slice(0,3).map((ele,index)=>{
                           
                            return (
                                
                            <div>

                                
                                <Link to={`/blogs/${ele}`}>
                               <div><button> Launch {index+1} </button></div>
                                </Link>
                            </div>
                            
                        )})
                    }
                </div>
            ))}
        </div>
    );
}

export default  BlogList;