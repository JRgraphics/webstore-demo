import React, { Suspense } from "react";
import ReactDOM from "react-dom";

// Styles
import "./index.css";
import "./index.scss";

// Components
import App from "./App";
import Div100vh from "react-div-100vh"; // Improves the responsiveness on mobile devices
import Loading from "./components/Loading";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Div100vh>
        <App />
      </Div100vh>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
