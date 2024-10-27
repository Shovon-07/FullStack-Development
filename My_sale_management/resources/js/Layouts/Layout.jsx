import { lazy, Suspense, useState, useEffect } from "react";

//___ Css ___//
import "../assets/css/global.css";
import "../assets/css/variables.css";

//___ Components ___//
const Header = lazy(() => import("../Components/Header/Header"));
const Sidenav = lazy(() => import("../Components/Sidenav/Sidenav"));
const Footer = lazy(() => import("../Components/Footer/Footer"));

const Layout = ({ child }) => {
    const [toggleSideNav, setToggleSideNav] = useState(false);
    const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     if (counter != 100) {
    //         setCounter((prev) => (prev = prev + 1));
    //     }
    // });

    return (
        <div className="main">
            {/* Header */}
            <Suspense fallback={"Loading..."}>
                <Header
                    toggleSideNav={toggleSideNav}
                    setToggleSideNav={setToggleSideNav}
                />
            </Suspense>

            {/* Sidenav */}
            <Suspense fallback={"Loading..."}>
                <Sidenav
                    toggleSideNav={toggleSideNav}
                    setToggleSideNav={setToggleSideNav}
                />
            </Suspense>
            <div className="container">
                {/* <h1>Count = {counter} </h1> */}
                <div
                    className={`body-overlay ${
                        toggleSideNav == true ? "active" : ""
                    }`}
                    onClick={() => setToggleSideNav((prev) => !prev)}
                ></div>
                {child}
            </div>

            {/* Footer */}
            <Suspense fallback={"Loading..."}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Layout;
