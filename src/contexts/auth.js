import React from ' react';
import { createContext, useState } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});
function AuthProvider({children}){
    const[user, setUser] = useState(null);
    return(
        <AuthContext.Provider value={{signed: !!user, user}}>
            {children}
        </AuthContext.Provider>
    );
    
}

export default AuthProvider;