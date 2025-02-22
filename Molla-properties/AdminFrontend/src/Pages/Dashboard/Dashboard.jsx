//___ Css ___//
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h3 className="pageTitle">Dashboard</h3>
      {/* <div className="mainBox d-flex-start gap-10">
        <div className="left">
          <h4 style={{ marginBottom: "30px" }}>Earned</h4>
          <Suspense fallback={<Loader />}>
            <MyAreaChart />
          </Suspense>
        </div>
        <div className="right d-flex gap-20">
          <div className="item d-flex">
            <Suspense fallback={<Loader />}>
              <MyPieChart />
            </Suspense>
            <div className="tag">
              <p>
                <span></span> Sold
              </p>
              <p>
                <span></span> Purchase
              </p>
              <p>
                <span></span> Profit
              </p>
              <p>
                <span></span> Damage
              </p>
            </div>
          </div>
          <div className="item d-flex-start">
            <h4 style={{ marginBottom: "20px", textAlign: "left" }}>
              Top contributor
            </h4>
            <ul className="topContributor">
              {messageData.map((items, index) => {
                return (
                  <li className="c_pointer d-flex-start gap-20" key={index}>
                    <img src={items.img} alt="" className="msgUserPic" />
                    <div>
                      <h4 className="title">
                        {items.title.length > 25
                          ? items.title.slice(0, 25) + "..."
                          : items.title}
                      </h4>
                      <p className="description">
                        {items.description.length > 50
                          ? items.description.slice(0, 50) + "..."
                          : items.description}
                      </p>
                      <p
                        className="time"
                        style={{ fontSize: "0.8rem", textAlign: "right" }}
                      >
                        {items.time}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div> */}

      <div className="dashboardTxt d-flex gap-10">
        <h1 className="txt">Molla properties</h1>
        <h2 className="txt">
          This is admin panel <br /> You can manage your website
        </h2>
      </div>
    </div>
  );
};

export default Dashboard;
