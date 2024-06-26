import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const onSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login to your account</h1>
                    <input type="email" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not registered?{" "}
                        <Link to={"/sign-up"}>Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
