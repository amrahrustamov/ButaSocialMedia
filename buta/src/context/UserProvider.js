import React, { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();
   // const userString = localStorage.getItem('user');
   export const useUser = () => {
    return useContext(UserContext);
  };
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

  useEffect(() => {
    const cookieValue = getCookie('Email');
    if (cookieValue) {
      setUser(JSON.parse(cookieValue));
    }
  }, [user]);

    const getCookie = (name) => {
        const cookieName = `${name}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
          let cookie = cookieArray[i];
          while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
          }
          if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
          }
        }
        return null;
      };
      const updateUser = (newUser) => {
        setUser(newUser);
        console.log("data.user");
        console.log(newUser);
        console.log("data.user");
      };

    return(
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}