import { createContext, useState } from "react";
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    const userString = localStorage.getItem('user');
    setUser(userString);

    const changeUser = (props) => {
        setUser(props)
    }

    return(
        <UserContext.Provider value={{user, changeUser}}>
            {children}
        </UserContext.Provider>
    )
}