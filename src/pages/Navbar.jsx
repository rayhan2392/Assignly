import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/assignLyLogo2-removebg-preview.png";
import useAuth from "../customHooks/useAuth";
import { useState } from "react";

const Navbar = () => {
  const { user,logOutUser } = useAuth();
  const [open,setOpen] = useState(false);

  const handleClickLogOut = ()=>{
    //logout the user
    logOutUser()
    .then(result=>console.log(result.user))
    .catch(error=>console.log(error))

    //toggle set open state
    setOpen(false);

  }
 
  
  console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/assignments">Assignments</NavLink>
      </li>
      <li>
        <NavLink to="/createAssignment">Create Assignment</NavLink>
      </li>
      <li>
        <NavLink to="/pendingAssignments">Pending Assignments </NavLink>
      </li>
     {
      user?
      '':
      <li>
      <NavLink to="/register">Sign Up</NavLink>
     </li>

     }
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="font-bold  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <img className="w-[200px] h-[150px]" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-bold menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">

        {
          user?
          <>
          <div className="relative">
          <img onClick={()=>setOpen(!open)} className="h-14 w-14 object-cover border-4 border-gray-400 rounded-full cursor-pointer" src="https://i.ibb.co/zZChys7/empty-Profile.png" alt="user" />

         {
          open && 
           <div className="bg-white -left-10 w-52 p-4 shadow-lg rounded-sm absolute z-10 ">
          <ul>
             <li onClick={handleClickLogOut} className="p-2 font-bold cursor-pointer hover:bg-blue-100">Log Out</li>
             <li onClick={()=>setOpen(false)} className="p-2 font-bold cursor-pointer hover:bg-blue-100">
              <Link to='/myAssignments'>My Assignments</Link>
            </li>
          </ul>
       </div>
         }

        </div>
          </>:
     <Link to='/login'>
       <button className="btn bg-[#403F3F] text-white">Log In</button>
     </Link>
        }
      
      </div>
    </div>
  );
};

export default Navbar;
