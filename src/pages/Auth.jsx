import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Auth() {
    const [mode, setMode] = useState("login");
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {user, signUp, login} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function submitForm(data) {
     setError(null);
     let result;
     if(mode === "login") {
      result = login(data.username, data.password, data.email);
     } else {
      result = signUp(data.username, data.password, data.email);
     }
     if(result.success) {
      navigate("/profile");
     } else {
      setError(result.error);
     }
    }


    return (
    <div>
  <main className="auth">
    <div className="auth__glow" aria-hidden="true"></div>

    <div className="container auth__inner">
      <section className="auth__card" aria-labelledby="auth-title">

        <h1 className="auth__title" id="auth-title">Welcome to <span className="accent">weMeet</span></h1>
    <p className="auth__text">{mode === "login" ? "Login with your details - it takes about 20 seconds" :
    "Sign up with your details - it takes about 20 seconds"}</p>

        <form className="form" action="#" method="post" onSubmit={handleSubmit(submitForm)}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            placeholder="User123"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required"
              },
              
            })}
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            placeholder="user123@gmail.com"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required"
              }
            })}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            placeholder="••••••••"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required"
              },
              minLength: {
                value: 5,
                message: "Password must be at least 5 characters long"
              },
              maxLength: {
                value: 12,
                message: "Password must be at most 12 characters long"
              }
            })}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
              
            <p className="field__aside">
            {mode === "login" ? "Don't have an account?" :
              "Already have an account?"
            }
            <a href="#" onClick={() => {
                if(mode === "login") {
                    setMode("signup");
                } else {
                    setMode("login");
                }
            }}>
                {mode === "login" ?  "Sign up here" :  "Login here" }
            </a>
            </p>
          </div>

          {error && (
            <p className="auth-alert is-hidden" id="auth-error" role="alert" aria-live="polite">
              {error}
            </p>
          )}

          <button className="btn btn--primary btn--block" type="submit">
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </section>
    </div>
  </main>
    </div>
    );
}