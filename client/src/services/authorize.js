import axios from "axios"


// เก็บข้อมูลหรือเก็บ token / username => session storage
export const authenticate = (response, next) => {
    if (window !== "undefined") {
        console.log(response)
        //เก็บข้อมูลลง session storage
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.email))
    }
    next()
}

//ดึงข้อมูล token
export const getToken = () => {
    if (window !== "undefined") {
        if (localStorage.getItem("token")) {
            return JSON.parse(localStorage.getItem("token"))
        }
        else {
            return false
        }
    }
}

//ดึงข้อมูล user
export const getUser = () => {
    if (window !== "undefined") {
        if (localStorage.getItem("user")) {
            return JSON.parse(localStorage.getItem("user"))
        }
        else {
            return false
        }
    }
}

// logout หรือ clear session

export const logout = (next) => {
    if (window !== "undefined") {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }
    next()
}

export const getUserId = async () => {
    if (window !== "undefined") {
        if (localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem("user"))
            try {
                const id = await axios.post(`${import.meta.env.VITE_APP_API}/get-userId`, { user })
                return id
            } catch (error) {
                throw error;
            }
        }
        else {
            return false
        }
    }
}