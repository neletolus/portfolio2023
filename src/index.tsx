import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./css/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import FontStyles from "./fontStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <FontStyles></FontStyles>
    <App />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
