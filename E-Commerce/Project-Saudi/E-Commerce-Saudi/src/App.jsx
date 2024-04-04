import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

//___ Components ___//
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   axios.interceptors.request.use(
  //     (config) => {
  //       setLoading(true);
  //       return config;
  //     },
  //     (error) => {
  //       return Promise.reject(error);
  //     }
  //   );

  //   axios.interceptors.response.use(
  //     (config) => {
  //       setLoading(false);
  //       return config;
  //     },
  //     (error) => {
  //       return Promise.reject(error);
  //     }
  //   );
  // }, []);

  return (
    <>
      <div className="main">
        <Header />
        <div className="container">
          {/* <Loader show={loading} /> */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
