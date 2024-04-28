import { useContext } from "react";
import { Link, NavLink, Navigate, useNavigate,  } from "react-router-dom";
import { AuthContext } from "./ContextApi/FirebaseProvider";


const Navbar = () => {
  const {SignOut,loggedUser}=useContext(AuthContext)
  const navigate = useNavigate();
  
 

  return (
    <div>
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
              <li>
                <NavLink to={`/MyList/${loggedUser?.displayName}`}>My List</NavLink>
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
          {loggedUser? (
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
