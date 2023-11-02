import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext()

export const Provider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState("")

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("user"))
        setUser(userInfo)

        // if(!userInfo){
        //     navigate('/signin');
        // }
    },[navigate])

    return (
        <Context.Provider value={{username : user}}>
            {children}
        </Context.Provider>
    )
}

export default Context