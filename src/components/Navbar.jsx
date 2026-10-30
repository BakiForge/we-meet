import { useContext } from 'react';
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

// TODO: FIX THE NAVBAR LINKS

export function Navbar() {

    const {user, logout} = useContext(AuthContext);

    return (
    <div>
        <header className="nav">
        <div className="container nav__inner">
        <Link className="brand" to="/" aria-label="weMeet home">
            <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8.5a6.5 6.5 0 0 0-12 3.2c0 1.3.4 2.4 1 3.4L5 19l4-1.2a6.5 6.5 0 0 0 8-9.3Z" />
                <path d="M17.5 9.2A5 5 0 0 1 21 14a5 5 0 0 1-.9 2.8l.6 3-3-1a5 5 0 0 1-6.4-1.6" />
            </svg>
            </span>
            <span className="brand__name">we<span className="brand__accent">Meet</span></span>
        </Link>

        <nav className="nav__links" aria-label="Main navigation">
            <Link href="#home" className="is-active" to="/" >Home</Link>
            <Link to="/profile">Profile</Link>
            <a href="#community">Community</a>
            <a href="#about">About</a>
        </nav>

        {user.username && user.email && user.password
        ? <Link className="btn btn--primary btn--sm nav__cta" to="/auth" onClick={() => logout()}>
            Logout
          </Link>
        : <Link className="btn btn--primary btn--sm nav__cta" to="/auth">Login</Link>
        }
        </div>
        </header>
    </div>
    )
}