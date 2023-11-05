import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // popup login
    const googlePopUp = (provider) => {
        setLoading(true)
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.setCustomParameters({ prompt: 'select_account' });

        return signInWithPopup(auth, provider)

    }

    // password  Sign Up
    const passwordSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateUser = (name, pic) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: pic
        })
    }

    // password  login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 
    const logOut = () => {
        return signOut(auth)

    }

    // state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // const userEmail = currentUser?.email || user?.email;
            // const loggedEmail = { email: userEmail }
            setUser(currentUser)
            setLoading(false);
            // if (currentUser) {
            //     axios.post('http://localhost:5000/jwt', loggedEmail, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data)
            //         })
            // } else {
            //     axios.post('http://localhost:5000/logout', loggedEmail, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data)
            //         })
            // }
        })
        return () => {
            unSubscribe()
        }
    }, [user])


    const value = {
        googlePopUp,
        passwordSignUp,
        handleUpdateUser,
        logIn,
        user,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;