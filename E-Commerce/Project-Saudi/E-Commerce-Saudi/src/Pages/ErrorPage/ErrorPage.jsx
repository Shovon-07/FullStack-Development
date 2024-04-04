import React from "react";
// import { useRouteError } from "react-router-dom";

//___ CSS ___//
import "./ErrorPage.scss";

const ErrorPage = () => {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="ErrorPage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
};

export default ErrorPage;
