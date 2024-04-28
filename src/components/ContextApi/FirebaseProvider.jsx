import { createContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";


export const AuthContext=createContext(null)
const Googleprovider = new GoogleAuthProvider();
const Githubprovider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {
  const [loggedUser,setLoggedUser]=useState(null)
  const [loading,setLoading]=useState(true)
// Create User
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

  }

  // Login user

  const UserLoginWithEmailAndPassword=(e,p)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,e,p);
}

// Google Login

const GoogleLogin=()=>{
  setLoading(true)
 return signInWithPopup(auth,Googleprovider)
}

// Github Login
const GithubLogin=()=>{
  setLoading(true)
 
  return signInWithPopup(auth, Githubprovider);
}

// Update User

const UpdateUser=(currentUser,displayName,photoURL)=>{
  setLoading(true)
  return updateProfile(currentUser,{
      displayName, photoURL
  })
}

// Sign Out

const SignOut=()=>{
  setLoading(false)
  return signOut(auth);
}


  useEffect(()=>{
    

    const subscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user)
        setLoading(false)
        
      } else {
        // User is signed out
        
        setLoggedUser(null)
      }
    });

    return ()=>{
      subscribe()
  }

  },[])








console.log(loggedUser)



  const contextValue={createUser,UserLoginWithEmailAndPassword,GoogleLogin,GithubLogin,SignOut,loggedUser,UpdateUser}


  return (
    <AuthContext.Provider value={contextValue}>
      {children}

    </AuthContext.Provider>
 
  )
}

export default FirebaseProvider