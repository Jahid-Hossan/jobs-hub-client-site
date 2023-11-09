import { Link, NavLink } from "react-router-dom";
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

                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-sm lg:btn-md btn-ghost bg-prim' : 'btn btn-sm lg:btn-md hover:bg-prim btn-ghost'} >Home</NavLink>

                            <NavLink to={'/all-jobs'} className={({ isActive }) => isActive ? 'btn btn-sm lg:btn-md btn-ghost bg-prim' : 'btn btn-sm lg:btn-md hover:bg-prim btn-ghost'} >All Jobs</NavLink>


                            {
                                user && <NavLink to={'/applied-jobs'} className={({ isActive }) => isActive ? 'btn  btn-ghost btn-sm lg:btn-md bg-prim' : 'btn hover:bg-prim btn-sm lg:btn-md btn-ghost'}  >Applied Jobs</NavLink>
                            }

                            {
                                user && <NavLink to={'/add-a-job'} className={({ isActive }) => isActive ? 'btn  btn-ghost btn-sm lg:btn-md bg-prim' : 'btn hover:bg-prim btn-sm lg:btn-md btn-ghost'}  >Add A Job</NavLink>

                            }
                            {
                                user && <NavLink to={'/my-jobs'} className={({ isActive }) => isActive ? 'btn  btn-ghost btn-sm lg:btn-md bg-prim' : 'btn hover:bg-prim  btn-sm lg:btn-md btn-ghost'}  >My Jobs</NavLink>
                            }

                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-9 h-9 lg:w-12 lg:h-12" src={'https://i.ibb.co/dLZnYJ4/wepik-export-20231108151817-JMm-P.png'} alt="" />
                        <a className=" font-bold normal-case text-xl">Jobs Hub</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1.5 px-1">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn hover:bg-prim btn-ghost'} >Home</NavLink>

                        <NavLink to={'/all-jobs'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn hover:bg-prim btn-ghost'} >All Jobs</NavLink>


                        {
                            user && <NavLink to={'/applied-jobs'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn hover:bg-prim btn-ghost'}  >Applied Jobs</NavLink>
                        }

                        {
                            user && <NavLink to={'/add-a-job'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn hover:bg-prim btn-ghost'}  >Add A Job</NavLink>

                        }
                        {
                            user && <NavLink to={'/my-jobs'} className={({ isActive }) => isActive ? 'btn  btn-ghost bg-prim' : 'btn hover:bg-prim  btn-ghost'}  >My Jobs</NavLink>
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-1.5">
                    {
                        user && <div className="">

                            <img className=" w-9 h-9 lg:w-12 lg:h-12 rounded-full" title={user?.displayName} src={user?.photoURL} />

                        </div>
                    }
                    <NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'btn btn-sm lg:btn-md  btn-ghost border-prim border-2 bg-prim ' : ' lg:btn-md btn border-prim border-2 btn-ghost btn-sm l  hover:bg-prim'}  >Blogs</NavLink>
                    {
                        user ?
                            <button onClick={() => logOut()} className="btn btn-sm lg:btn-md btn-ghost border-2 border-prim hover:bg-prim">Log Out</button>
                            :
                            <NavLink className={({ isActive }) => isActive ? 'btn btn-sm lg:btn-md btn-ghost border-prim border-2  bg-prim ' : ' lg:btn-md btn border-prim border-2 btn-ghost btn-sm l  hover:bg-prim'} to={'/login'}>Log in</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;