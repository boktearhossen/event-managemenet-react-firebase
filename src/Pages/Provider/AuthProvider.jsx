import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/Firebas.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  
  
  
  //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

//onAuthStateChanged
   useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoading(false)
       })
       return () => {
        unSubscribe()
       }
     },[])


     //logout
     const logOut = ()=> {
        setLoading(true)
        return signOut(auth)
     }


    // sign in user
    const signInUser = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }


    
   const authInfo = {user, createUser, logOut, signInUser, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.object,
}
export default AuthProvider;