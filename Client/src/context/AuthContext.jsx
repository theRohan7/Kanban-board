
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData, loginUser } from "../services/authService";



export const Authcontext = createContext();


export const useAuth = () => useContext(Authcontext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(() => localStorage.getItem("user-token"));

    const navigate = useNavigate();


    const verifyAuth = useCallback(
        async (currentToken) => {
            if(!currentToken){
                setLoading(false);
                navigate("/login");
                return;
            }
            try {
                const response = await getUserData(currentToken);

                if(response.status === 200){
                    const userData = response.data;
                    setUser(userData);
                    navigate("/");
                } else {
                    handleLogout();
                }
                
            } catch (error) {
                console.error("Authentication Error: ", error);
            } finally {
                setLoading(false);
            }
        }, [navigate]
    )

    useEffect(() => {
        verifyAuth(token);
    },[token, verifyAuth]);

    useEffect(() => {},[user]);

    const login = useCallback(async (email, password) => {
        setLoading(true);
        try {
            const response = await loginUser({email, password});

            if(response.status === 200){
                const newToken = response.data.token;
                localStorage.setItem("user-token", newToken);
                setToken(newToken);

                return response.data;
            }
            
        } catch (error) {
           throw new Error("Login Error: ", error);
        } finally {
            setLoading(false);
        }
    },[])

    const handleLogout = () => {
        localStorage.removeItem("user-token");
        setToken(null);
        setUser(null);
        navigate("/login");
    };

    return (
        <Authcontext.Provider value={{ user, loading, login, handleLogout }}>
          {!loading && children}
        </Authcontext.Provider>
      );
}