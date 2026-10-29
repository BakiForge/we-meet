import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({
        username: localStorage.getItem("currentUsername") ? localStorage.getItem("currentUsername") : null,
        email: localStorage.getItem("currentEmail") ? localStorage.getItem("currentEmail") : null,
        password: localStorage.getItem("currentPassword") ? localStorage.getItem("currentPassword") : null
    });
     // { username: bakiforge, email: baki@gmail.com, password: 123}
     function signUp(username, email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if(users.find(user => user.email === email)) {
            return { success: false, error: "User already exists"};
        }
        const newUser = { username: username, email: email, password: password};
        users.push(newUser);
        localStorage.setItem("currentUsername", username);
        localStorage.setItem("currentEmail", email);
        localStorage.setItem("currentPassword", password);
        localStorage.setItem("users", JSON.stringify(users));
        setUser({ username: username, email: email, password: password});
        return { success: true};
     } 

     function login( username, email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(user => user.username === username && user.email === email && user.password === password);
        if(!user) {
            return { success: false, error: "User did not exists"};
        }
        localStorage.setItem("currentUserEmail", email);
        setUser({ username: username, email: email, password: password });
        return { success: true};
     }

     function logout() {
        localStorage.removeItem("currentUsername");
        localStorage.removeItem("currentEmail");
        localStorage.removeItem("currentPassword");
        setUser({ username: null, email: null, password: null});
     }
   
    
    return (
        <AuthContext.Provider value={{user, signUp, login, logout}}>
           {children}
        </AuthContext.Provider>
    )
}