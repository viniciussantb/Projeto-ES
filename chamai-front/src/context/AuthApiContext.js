import { useState, createContext } from 'react'

export const AuthApiContext = createContext();

const AuthApiContextProvider = ({children}) => {
    const [auth, setAuth] = useState(false);

    return (
        <AuthApiContext.Provider
            value={{auth, setAuth}}
        >

            {children}
        
        </AuthApiContext.Provider>
    );
}

export default AuthApiContextProvider;