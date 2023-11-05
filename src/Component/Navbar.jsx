import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Navbar = () => {

    const { logOut, user } = useAuth();
    console.log(user)
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink>Home</NavLink>
                            <NavLink>All Jobs</NavLink>
                            <NavLink>Applied Jobs</NavLink>
                            <NavLink>Add A Job</NavLink>
                            <NavLink>My Jobs</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Jobs Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to={'/home'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn  btn-ghost'} >Home</NavLink>

                        <NavLink to={'/all-jobs'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn  btn-ghost'} >All Jobs</NavLink>


                        {
                            user && <NavLink to={'/applied-jobs'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn  btn-ghost'}  >Applied Jobs</NavLink>
                        }

                        {
                            user && <NavLink to={'/add-a-job'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn  btn-ghost'}  >Add A Job</NavLink>

                        }
                        {
                            user && <NavLink to={'/my-jobs'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn  btn-ghost'}  >My Jobs</NavLink>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Blogs</a>
                    {
                        user ? <button onClick={() => logOut()} className="btn btn-ghost bg-prim">Log Out</button> : <button className="btn btn-ghost bg-prim"><NavLink to={'/login'}>Log in</NavLink></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;