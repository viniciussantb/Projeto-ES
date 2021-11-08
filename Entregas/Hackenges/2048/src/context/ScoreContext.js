import { useState, createContext} from "react";

export const ScoreContext = createContext();

export const ScoreContextProvider = ({ children }) => {
    const [scoreValue, setScoreValue] = useState(0);
    const [maxScoreValue, setMaxScoreValue] = useState(0);

    return(
        <ScoreContext.Provider
            value={{
                scoreValue,
                setScoreValue,
                maxScoreValue,
                setMaxScoreValue
            }}
        >

            {children}

        </ScoreContext.Provider>
    );
};
