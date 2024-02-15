import { createContext, useEffect, useState } from "react";
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    const changeUser = (props) => {
        setUser(props)
    }

    return(
        <UserContext.Provider value={{user, changeUser}}>
            {children}
        </UserContext.Provider>
    )
}