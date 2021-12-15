import { useState, createContext } from 'react'

export const UserContext = createContext();

const UserContextProvider = ({ children }) =>{
    const [user, setUser] = useState({
      name: '',
      lastname: '',
      numRides: 0,
      email: '',
      university: '',
      course: '',
      phoneNumber: 0,
    });

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;