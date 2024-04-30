import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./ContextApi/FirebaseProvider";

const Navbar = () => {
  const { SignOut, loggedUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme,setTheme]=useState(localStorage.getItem('theme'))

  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const Theme=localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',Theme)
  },[theme])
  const handleChange=(e)=>{
    if(e.target.checked){
      setTheme('dark')
      
    }else{
      setTheme('light')
      
    }

  }

  return (
    <div className="z-50 sticky top-0">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/AllTouristSpot">All Tourist Spot</NavLink>
              </li>
              <li>
                <NavLink to="/AddTouristSpot">Add Tourists Spot</NavLink>
              </li>
             
              <li >
                <NavLink to={`/MyList/${loggedUser?.displayName}`}>
                  My List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            {" "}
            <a className="btn btn-ghost text-xl">Travel America</a>
          </Link>
        </div>

        <div className="navbar-end">
          {/* Themes */}

          <label className="cursor-pointer grid place-items-center mx-1 lg:mx-6">
            <input
             onChange={handleChange}
             
              type="checkbox"
             
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>

          {loggedUser ? (
            <div className="flex items-center gap-x-1  lg:gap-x-2">
              <div
                className="w-10 rounded-full tooltip tooltip-bottom z-50"
                data-tip={loggedUser.displayName}
              >
                <img
                  className="rounded-full"
                  alt="user Profile Image"
                  src={
                    loggedUser?.photoURL
                      ? loggedUser.photoURL
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
              <button
                className="btn"
                onClick={() => {
                  SignOut().then(() => {
                    navigate("/");
                  });
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            //  <button className="btn" onClick={<Navigate to='/login'></Navigate>}>Login</button>
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
