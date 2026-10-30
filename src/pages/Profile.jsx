import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { MessageContext } from "../context/MessagesContext";
import { useForm } from "react-hook-form";
import { ChatMessage } from "../components/ChatMessage";

export default function Profile() {

    const {user, logout} = useContext(AuthContext);
    const {message, addPost} = useContext(MessageContext);
    const {register, handleSubmit} = useForm();

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

     return (
     <div>
    <main className="container main">
        <section className="welcome">
        <h1>{user.username ? "Welcome, " : "Sign In to see your account data"}<span>{user.username}</span></h1>
        <p className="welcome__sub">Manage your account, share what you're up to, and find your next plan.</p>
        </section>

        <div className="grid">

        <section className="card">
            <div className="card__head">
            <h2>Account</h2>
            <p>Look for your email and password.</p>
            </div>

            <form className="htmlForm" action="#" method="post">
            <label className="field">
                <span className="field__label">Email</span>
                <input type="email" name="email" value={user.email} placeholder="you@example.com" />
            </label>

            <div className="field">
                <span className="field__label">Password</span>
                <div className="pw">
                <input type="checkbox" id="show-password" className="sr-only" />
                <input type="text" name="password" className="pw__input" value={user.password} autoComplete="new-password" aria-label="Password" placeholder="••••••••" />
                <label htmlFor="show-password" className="pw__eye"></label>
                </div>
            </div>

            </form>
        </section>

        <section className="card">
            <div className="card__head">
            <h2>Add post</h2>
            <p>Share an update with the global chat.</p>
            </div>

            <form className="htmlForm" onSubmit={handleSubmit(submitForm)}>
            <label className="field">
                <span className="field__label">Title</span>
                <input type="text" id="title" placeholder="e.g. Coffee walk this Saturday?"
                {...register("title")} 
                />
            </label>

            <label className="field">
                <span className="field__label">Message</span>
                <textarea id="content" rows="4" placeholder="What's on your mind?" {...register("content")}
                ></textarea>
            </label>

            <div className="htmlForm__actions">
                <button type="submit" className="btn btn--primary">Add post</button>
            </div>
            </form>
        </section>

        <section className="card card--wide">
            <div className="card__head">
            <h2>Your previous posts</h2>
            <p>Everything you've shared recently.</p>
            </div>

            <ul className="posts">
            
            {message && user.username ? message.map((userMessage) => {
                return (
                <ChatMessage userMessage={userMessage} />
            )})
            : <p>There are no any posts in the history</p> 
            }
            </ul>
        </section>

        <Link to="/global-chat" className="chat-cta card card--wide">
            <div className="chat-cta__text">
            <span className="chat-cta__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>
            </span>
            <div>
                <h2>Ready to chat?</h2>
                <p>Jump into your conversations and plan your next meetup.</p>
            </div>
            </div>
            <span className="chat-cta__arrow" aria-hidden="true">→</span>
        </Link>
        
        <section className="card card--wide logout">
            <div className="logout__text">
            <span className="logout__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>
            </span>
            <div>
                <h2>{user.username ? "Logout" : "You aren't signed in"}</h2>
                {user.username ?
                <p>Signed in as <strong>{user.email}</strong>. You can sign back any time. </p>
                : <p>Sign in to unlock more features.</p>
                }
            </div>
            </div>
            {user.username && (
              <Link to="/auth" className="btn btn--danger" onClick={() => logout()}>Log out</Link>
            )}
            
        </section>
      </div>
    </main>
 </div>

);
}