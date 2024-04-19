import { Suspense, lazy } from "react";

//___ Css ___//
import "./Sell.scss";

//___ Additional utility ___//
import Loader from "../../Components/Loader/Loader";

//___ Components ___//
const CreateInvoice = lazy(() =>
  import("../../Components/CreateInvoice/CreateInvoice")
);

const Sell = () => {
  return (
    <div className="Sell">
      <Suspense fallback={<Loader />}>
        <CreateInvoice />
      </Suspense>
    </div>
  );
};

export default Sell;
