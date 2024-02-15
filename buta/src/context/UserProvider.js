import { createContext, useState } from "react";
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const changeUser = (props) => {
        setUser(props)
    }
    // // const getUser = (props) => {
    // //     setUser(props)
    // // }

    return(
        <UserContext.Provider value={{user, changeUser}}>
            {children}
        </UserContext.Provider>
    )
}