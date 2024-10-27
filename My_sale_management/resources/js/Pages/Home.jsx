import { lazy, Suspense } from "react";
import Layout from "../Layouts/Layout";

//___ Components ___//
import Loader from "../Components/Loader/Loader";
const MyModal = lazy(() => import("../Components/Modal/MyModal"));

function Home({ page }) {
    return (
        <>
            <div style={{ textAlign: "right" }}>
                <Suspense fallback={<Loader />}>
                    <MyModal
                        ModalOpenBtnTitle="Add product"
                        slug="Add new product"
                    />
                </Suspense>
            </div>
            <h1>Home</h1>
        </>
    );
}

Home.layout = (page) => <Layout child={page} />;
export default Home;
