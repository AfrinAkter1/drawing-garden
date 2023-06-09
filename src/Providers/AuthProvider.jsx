import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebse.config";

export const AuthContext = createContext("")
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();
    // password register
    const passwordRegister = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
//    Google sign in
    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    // password login
    const passwordLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut 
    const logOut = () =>{
        return signOut(auth)
    }
// update user 
const updateUserProfile = (name, photourl)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photourl
      })
}
    useEffect(() =>{
         const unsubscrive = onAuthStateChanged(auth, (currentUser) =>{
               setUser(currentUser)
               console.log('current User', currentUser)
               setLoading(false)
         })
         return () =>{
            return unsubscrive()
         }
    },[])

   

    const authInfo = {
               user,
               loading,
               googleSignIn,
               passwordRegister,
               updateUserProfile,
               logOut,
               passwordLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;