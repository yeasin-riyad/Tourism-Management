import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../ContextApi/FirebaseProvider"


const PrivateRouter = ({children}) => {
    const location=useLocation()
    const {loggedUser,loading}=useContext(AuthContext)
    console.log(location)
    if(loading){
        return  <div>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        

      </div>
    }
    else if(!loggedUser){
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    else{
        return (
            <div>{children}</div>
          )
    }
  
}

export default PrivateRouter