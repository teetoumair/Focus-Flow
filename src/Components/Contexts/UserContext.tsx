import { createContext, useContext, useState } from "react"

interface User {
    name: string;
    email: string;
}

interface UserContextType{
    user: User | null;
    login: (name: string, email: string) => void;
    logout: () => void;
}

const userContext = createContext<UserContextType | null>(null)

function UserProvider({children}: {children: React.ReactNode}){

    const [user, setUser] = useState <User | null> (null)

    const login = (name: string, email: string) =>{
        setUser({name, email})
    }

    const logout = () => {
        setUser(null)
    }

    return(
        <userContext.Provider value = {{user, login, logout}}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () =>{
    const ctx = useContext(userContext)
    if (!ctx) throw new Error("useUser must be inside the UserProvider")
    return ctx
}

export default UserProvider