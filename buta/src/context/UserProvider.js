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
      console.log(user);
      console.log("userString");
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

    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}