// src/entry-server.js
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App"; // Your App component

const context = {}; // Context to handle server-side rendering data

// Directly render to string in this file, no need for a separate render function
const appHtml = ReactDOMServer.renderToString(
  <StaticRouter location={url} context={context}>
    <App />
  </StaticRouter>
);

export default appHtml; // Export the SSR HTML string directly
