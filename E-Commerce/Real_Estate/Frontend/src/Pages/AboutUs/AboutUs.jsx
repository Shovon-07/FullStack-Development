import { Link } from "react-router-dom";
//___ Css ___//
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs page content">
      <h3 className="pageTitle">About us</h3>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <div>
        <h4 className="aboutusTitle">
          We take pride in introducing ourselves.
        </h4>
        <p>
          <Link to="/">Molla properties </Link> is one of the foremost and
          pioneer Real Estate Developers & Construction Company, specializing in
          superior quality residential as well as commercial developments within
          and inside{" "}
          <Link to="https://en.wikipedia.org/wiki/Rajshahi" target="_blank">
            Rajshahi city.
          </Link>
        </p>
        <p>
          One of our upright principles is not to compromise on quality,
          products and advanced services that our buyers most aspire.
        </p>
        <p>
          The secret of our steady success to become a pioneer in real estate
          business lies in three basic tenets of providing dependability,
          superior quality products and excellence in service. This is our
          winning strategy. We continuously strive to create a better living for
          everyone, with value for investments that come with a total package of
          a great lifestyle, facilities and location.
        </p>
        <p>
          We are extremely delighted and happy because of the satisfaction of
          our valued clients. We receive all round praise for our state of the
          art architectural design, environment friendly living facility and
          selection of building sites. We opt for the best location for our
          clients, who are our foundations of success.
        </p>
        <p>
          We consider ourselves as extremely fortunate as there has been
          continuous pouring of satisfaction expressed by our respected clients
          be it the projects that we handed over or the ones that is underway.
          They know, by now, that we value their needs and choices and respect
          the special relationship that we enjoy with each of them.
        </p>
        <p>Executing their dreams has become our hobby and passion.</p>
        <p>
          What we offer: <Link to="/">Molla properties</Link>, standing on a
          different plain, provides superior leadership in the Real Estate
          Development sector. We provide excellence in our construction work,
          management systems and customer services to fulfill or exceed our
          customer’s expectation.
        </p>
        <h4 className="aboutusTitle">Who we are?</h4>
        <p>
          <Link to="/">Molla properties </Link> Homes Ltd. is a fast growing
          real estate company in Bangladesh. It has been known for its
          spectacular and innovative living concepts and daring architectural
          designs. This has been made possible by the committed professional
          architects.
        </p>
        <h4 className="aboutusTitle">What we do?</h4>
        <p>
          We invest our expertise and passion in keeping our pledge of giving
          the best. Thereby, our actions are guided by a binding value system.
          In It , our dedicated employees are the driving force of the company .
          The values on which we work together regularly set standards for our
          employees working in all sectors, from the highest office to the
          ground work.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
