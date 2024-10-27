import { lazy, Suspense, useEffect, useState } from "react";
import Layout from "../../Layouts/Layout";

//___ Components ___//
import Loader from "../../Components/Loader/Loader";
const MyModal = lazy(() => import("../../Components/Modal/MyModal"));
const Form = lazy(() => import("../../Components/Form/Form"));
const HomeTable = lazy(() => import("./HomeTable"));

//___ Input fields for modal start ____//
const inputField = [
    {
        field: "email",
        type: "email",
        placeholder: "Enter your email",
        className: "inputBox",
    },
    {
        field: "password",
        type: "password",
        placeholder: "Enter your password",
        className: "inputBox d-flex",
    },
];
//___ Input fields for modal end ____//

function Home({ page }) {
    return (
        <div className="animated fadeInDown">
            <div style={{ textAlign: "right" }}>
                <Suspense fallback={<Loader />}>
                    <MyModal
                        ModalOpenBtnTitle="Add product"
                        slug="Add new product"
                    />
                </Suspense>
            </div>
            <h1>Home</h1>
            <Suspense fallback={<Loader />}>
                <HomeTable />
            </Suspense>

            {/* <Suspense fallback={<Loader />}>
                <Form
                    title={"Sign in"}
                    inputFields={inputField}
                    api={"/signin"}
                    loginOrSingupUrl={"/signup"}
                    loginOrSingup={"Sign up"}
                />
            </Suspense> */}
        </div>
    );
}

Home.layout = (page) => <Layout child={page} />;
export default Home;
