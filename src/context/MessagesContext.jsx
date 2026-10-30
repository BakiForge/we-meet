import { createContext, useState } from "react";

export const MessageContext = createContext(null);

export default function MessageProvider({children}) {
   const [message, setMessage] = useState(JSON.parse(localStorage.getItem("messages")));

   function addPost(sender, title, content) {
      const messages = JSON.parse(localStorage.getItem("messages") || "[]");
      const newMessage = { sender: sender, title: title, content: content};
      messages.push(newMessage);
      localStorage.setItem("messages", JSON.stringify(messages));
      setMessage(messages);
   }
   

    return (
        <MessageContext.Provider value={{ message, addPost }}>
            {children}
        </MessageContext.Provider>
    );
}