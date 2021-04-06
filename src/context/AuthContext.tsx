import { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface AuthContextState {
    token: TokenState;
    signIn({ email, password }: UserData): Promise<void>;
    userLogged(): boolean;
}

interface UserData {
    email: string;
    password: string;
}

interface TokenState {
    token: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState)

const AuthProvider: React.FC = ({ children }) => {

    const [token, setToken] = useState<TokenState>(() => {
        const token = localStorage.getItem('@PermissionYT:token');

        if (token) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            return { token }
        }

        return {} as TokenState;
    })

    const signIn = useCallback(async ({ email, password }: UserData) => {
        const response = await api.post("/sessions", {
            email,
            password,

        });

        const { token } = response.data;

        setToken(token);

        localStorage.setItem("@PermissionYT:token", token);
        api.defaults.headers.authorization = `Bearer ${token}`;
        // console.log(response.data)
    }, []);

    const userLogged = useCallback(() => {
        const token = localStorage.getItem('@PermissionYT:token');
        if (token) {
            return true;
        }
        return false;
    }, []);



    return (
        <AuthContext.Provider value={{ token, signIn, userLogged }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextState {
    const context = useContext(AuthContext);
    return context;
}


export { AuthProvider, useAuth }