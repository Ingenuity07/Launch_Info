import { Link } from "react-router-dom";

const Navbar = () => {
    return (
       <nav className="navbar">
           <h1>Spacex</h1>
           <div className="links">
               <Link to="/">HOME</Link>
               {/* <Link to="/create">New blog</Link> */}

           </div>
       </nav>
    );
}
 
export default Navbar;