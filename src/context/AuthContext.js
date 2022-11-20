import React, { createContext } from 'react'
import app from '../config/firebase'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const UserContext = createContext()

const AuthContext = ({children}) => {
    const auth = getAuth(app)

    // Sign up with email and password
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login with email and password
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }


    const authValue = {signup,login}
  return (
    <UserContext.Provider value={authValue}>{children}</UserContext.Provider>
  )
}

export default AuthContext