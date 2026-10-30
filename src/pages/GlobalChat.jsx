import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { MessageContext } from "../context/MessagesContext";
import { ChatMessage } from "../components/ChatMessage";

export default function GlobalChat() {
    const {user} = useContext(AuthContext);
    const {message, addPost} = useContext(MessageContext);
    const {handleSubmit, register} = useForm();
    
    function submitForm(data) {
      if(!user.username) {
        alert("Sign in to start chatting"); // TODO: Show error in the form
        return;
      }
       if(data.title === '' || data.content === '') {
        alert("You can't post empty post");
        return;
      }
      addPost(user.username, data.title, data.content);
    }

    return ( <div>
    <main class="page">
        <div class="container">
        <div class="page__head">
            <h1 class="page__title">Chat with your <span class="accent">favorite</span></h1>
            <p class="page__text">Say hello, share a plan, or drop a thought — everyone here is nearby.</p>
        </div>

        <section class="panel panel--post" aria-labelledby="post-panel-title">
            <h2 class="panel__title" id="post-panel-title">Add post</h2>
            <p class="panel__text">Share an update with the global chat.</p>

            <form class="post-form" onSubmit={handleSubmit(submitForm)}>
            <div class="field">
                <label for="post-title">Title</label>
                <input
                id="title"
                type="text"
                placeholder="e.g. Coffee walk this Saturday?"
                autocomplete="off"
                {...register("title")}
                />
            </div>

            <div class="field">
                <label for="post-message">Message</label>
                <textarea
                id="content"
                name="message"
                rows="4"
                placeholder="What's on your mind?"
                {...register("content")}
                ></textarea>
            </div>

            <button class="btn btn--primary" type="submit">Add post</button>
            </form>
        </section>

        <section class="panel" aria-labelledby="chat-panel-title">
            <h2 class="panel__title" id="chat-panel-title">Global chat</h2>
            <p class="panel__text">Everything people are sharing right now.</p>

            <div class="posts">
            {message && user.username ? message.map((userMessage) => {
                return (
                 <ChatMessage userMessage={userMessage} />
             );
             }) 
            : <p>Sign in to see all posts</p>}
           
            </div>
        </section>
        </div>
     </main>
    </div>);
}