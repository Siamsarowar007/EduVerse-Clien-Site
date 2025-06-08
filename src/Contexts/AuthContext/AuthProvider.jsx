import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    

    // Create User

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // LogInUser

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // AuthState Change Listener
    
    useEffect ( () => {
        const unSubscribe =onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('Auth state changed:', currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

        // Logout User

        const logOut = () => {
        setLoading(true);
        return signOut(auth);
        }

             // Google Sign In
        const  signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
        }

                // Github Sign In
        const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }


    // Auth Info to be provided to children components

    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle,
        signInWithGithub,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;