import { HelmetProvider, Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Agrovet software" />
      </Helmet>

      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}

      <div className="animated fadeInDown">
        <h1 className="page-title">Dashboard</h1>
      </div>
    </HelmetProvider>
  );
};

export default Home;
