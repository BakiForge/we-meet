import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {

    const {user, logout} = useContext(AuthContext);

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
            <p>Update your email and password.</p>
            </div>

            <form className="form" action="#" method="post" onsubmit="return false;">
            <label className="field">
                <span className="field__label">Email</span>
                <input type="email" name="email" value={user.email} placeholder="you@example.com" />
            </label>

            <div className="field">
                <span className="field__label">Password</span>
                <div className="pw">
                <input type="checkbox" id="show-password" className="sr-only" />
                <input type="text" name="password" className="pw__input" value={user.password} autocomplete="new-password" aria-label="Password" placeholder="••••••••" />
                <label for="show-password" className="pw__eye"></label>
                </div>
            </div>

            <div className="form__actions">
                <button type="submit" className="btn btn--primary">Save changes</button>
                <button type="reset" className="btn btn--ghost">Cancel</button>
            </div>
            </form>
        </section>

        <section className="card">
            <div className="card__head">
            <h2>Add post</h2>
            <p>Share an update with the global chat.</p>
            </div>

            <form className="form" action="#" method="post" onsubmit="return false;">
            <label className="field">
                <span className="field__label">Title</span>
                <input type="text" name="title" placeholder="e.g. Coffee walk this Saturday?" />
            </label>

            <label className="field">
                <span className="field__label">Message</span>
                <textarea name="body" rows="4" placeholder="What's on your mind?"></textarea>
            </label>

            <div className="form__actions">
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
            <li className="post">
                <div className="post__meta">
                <span className="post__avatar">AL</span>
                <div>
                    <strong>Coffee walk this Saturday?</strong>
                    <span className="post__time">2 days ago · 12 replies</span>
                </div>
                </div>
                <p>Looking for people to join a relaxed 1-hour walk and coffee around the river. All levels welcome.</p>
            </li>
            <li className="post">
                <div className="post__meta">
                <span className="post__avatar">AL</span>
                <div>
                    <strong>Study night at the library</strong>
                    <span className="post__time">1 week ago · 7 replies</span>
                </div>
                </div>
                <p>Quiet corner, two hours, no phones. Bring your own work and let's keep each other focused.</p>
            </li>
            <li className="post">
                <div className="post__meta">
                <span className="post__avatar">AL</span>
                <div>
                    <strong>Looking for a board game group</strong>
                    <span className="post__time">2 weeks ago · 3 replies</span>
                </div>
                </div>
                <p>Anyone up for a monthly game night? Strategy games preferred, snacks provided.</p>
            </li>
            </ul>
        </section>

        <a href="messages.html" className="chat-cta card card--wide">
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
        </a>
        
        <section className="card card--wide logout">
            <div className="logout__text">
            <span className="logout__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>
            </span>
            <div>
                <h2>Log out</h2>
                <p>Signed in as <strong>alex@example.com</strong>. You can sign back in any time.</p>
            </div>
            </div>
            <Link to="/auth" className="btn btn--danger" onClick={() => logout()}>Log out</Link>
        </section>
      </div>
    </main>
 </div>
     );
}