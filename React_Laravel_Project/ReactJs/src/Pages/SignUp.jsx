import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const onSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Sign up for free</h1>
                    <input type="text" placeholder="Enter your name" />
                    <input type="email" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <input type="password" placeholder="Retype password" />
                    <button className="btn btn-block">Sign up</button>
                    <p className="message">
                        Already registered? <Link to={"/login"}>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
