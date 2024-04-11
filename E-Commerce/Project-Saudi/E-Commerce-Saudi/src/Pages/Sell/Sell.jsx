import React from "react";

//___ Css ___//
import "./Sell.scss";

//___ Components ___//
import CreateInvoice from "../../Components/CreateInvoice/CreateInvoice";

const Sell = () => {
  return (
    <div className="Sell">
      <CreateInvoice />
    </div>
  );
};

export default Sell;
