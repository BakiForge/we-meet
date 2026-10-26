import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({
        username: localStorage.getItem("currentUsername") ? localStorage.getItem("currentUsername") : null,
        email: localStorage.getItem("currentEmail") ? localStorage.getItem("currentEmail") : null,
        password: localStorage.getItem("currentPassword") ? localStorage.getItem("currentPassword") : null
    });
    const users = [];
     // { username: bakiforge, email: baki@gmail.com, password: 123}
     function signUp(username, email, password) {
        users.push(...users, {
            username: username, 
            email: email, 
            pasword: password
        });
        localStorage.setItem("currentUsername", username);
        localStorage.setItem("currentEmail", email);
        localStorage.setItem("currentPassword", password);
        localStorage.setItem("users", JSON.stringify(users));
        setUser({ username: username, email: email, password: password});
        console.log(localStorage.getItem("users"));
     }

     function logout() {
        localStorage.removeItem("currentUsername");
        localStorage.removeItem("currentEmail");
        localStorage.removeItem("currentPassword");
        setUser({ username: null, email: null, password: null});
     }
   
    
    return (
        <AuthContext.Provider value={{user, signUp, logout}}>
           {children}
        </AuthContext.Provider>
    )
}