import { lazy, Suspense } from "react";
import Layout from "../Layouts/Layout";

//___ Components ___//
const MyModal = lazy(() => import("../Components/Modal/MyModal"));

function Home({ page }) {
    return (
        <>
            <Suspense fallback={"Loading..."}>
                <MyModal ModalOpenBtnTitle="Add product" slug="Add product" />
            </Suspense>
            <h1>Home</h1>
        </>
    );
}

Home.layout = (page) => <Layout child={page} />;
export default Home;
