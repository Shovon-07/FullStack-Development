import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

//___ Additional utility ___//
import Loader from "./Components/Loader/Loader";

//___ Components ___//
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="main">
        <Header />
        <div className="container">
          {loading && <Loader />}
          <Outlet context={[setLoading]} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
