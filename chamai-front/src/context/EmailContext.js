import { useState, createContext } from 'react'

export const EmailContext = createContext();

const EmailContextProvider = ({ children }) =>{
    const [email, setEmail] = useState('');

    return(
        <EmailContext.Provider value={{email, setEmail}}>
            {children}
        </EmailContext.Provider>
    )
}

export default EmailContextProvider;