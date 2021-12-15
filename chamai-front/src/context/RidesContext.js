import { useState, createContext } from 'react'

export const RidesContext = createContext();

const RidesContextProvider = ({ children }) =>{
    const [rides, setRides] = useState([]);

    return(
        <RidesContext.Provider value={{rides, setRides}}>
            {children}
        </RidesContext.Provider>
    )
}

export default RidesContextProvider;