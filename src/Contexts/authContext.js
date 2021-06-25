import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) { 

    const { state } = useLocation();
    const navigate = useNavigate();
    const { isUserLoggedIn, token: savedToken } = JSON.parse(localStorage.getItem("login")) || { isUserLoggedIn: false, token: null };

    const [authState, authDispatch] = useReducer(authReducer, { isUserLoggedIn, token: savedToken });

    const login = async (credentials) => {
        try {
            const { data: { result }} = await axios.post("https://video-library-backend.ashishgupta08.repl.co/user/login", { username:credentials.username, password:credentials.password } );
            localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: true, token: result }))
            authDispatch({ type:"LOGIN", payload: result });
            navigate(state?.from ? state.from : "/");
        } catch (e) {
            console.log(e);
        }
    };

    const logout = async () => {
        try {
            localStorage?.removeItem("login");
            authDispatch({ type:"LOGOUT" });
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };

    const signup = async (credentials) => {
        try {
            console.log(credentials)
            const { data: { result }} = await axios.post("https://video-library-backend.ashishgupta08.repl.co/user/signup", { username:credentials.username, password:credentials.password, name:credentials.name, email:credentials.email } );
            localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: true, token: result }))
            authDispatch({ type:"LOGIN", payload: result });
            navigate(state?.from ? state.from : "/");
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const { isUserLoggedIn, token } = JSON.parse(localStorage?.getItem("login")) || {};
        isUserLoggedIn && authDispatch({ type:"LOGIN", payload: token });
    }, [])

    return (
        <AuthContext.Provider value={{ authState, authDispatch, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}

export function authReducer(state, action){
    switch (action.type) {
        case "LOGIN":
            return { ...state, isUserLoggedIn: true, token: action.payload }
        case "LOGOUT":
            return { ...state, isUserLoggedIn: false, token: null }
        default:
            return state
    }
}