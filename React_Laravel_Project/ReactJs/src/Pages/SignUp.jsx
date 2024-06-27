import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../assets/Axios-client";
import { useStateContext } from "../Context/ContextProvider";

const SignUp = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const { setUser, setToken } = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value,
        };
        axiosClient
            .post("/sign-up", { payload })
            .then(({ data }) => {
                setUser(data.user), setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
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
