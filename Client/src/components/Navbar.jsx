import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const {user, logoutUser}=useContext(AuthContext);
    return ( 
        <>
        
<div className="relative shadow bg-slate-400">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

    <div className="w-full backdrop-blur-sm">
        <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
        <Link to="/" className="text-2xl">Chat</Link>
        {user && <span>Logged In as {user.name} </span>}

            <ul className="flex items-center gap-5">
                {
                    user && <li onClick={()=>logoutUser()}><Link to="login">Logout</Link></li>
                }
                {
                    !user && 
                    <>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    </>
                }
                
            </ul>
        </div>
    </div>
</div>
        
        </>

    );
}
 
export default Navbar;