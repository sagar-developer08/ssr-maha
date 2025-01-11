import "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import "react-modal-video";
/* empty css                */
import "react-international-phone";
import "react-toastify";
import "react-slick";
import "../entry-server.js";
import "react-dom/server";
import "react-router-dom";
import "react-bootstrap";
import "react-redux";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "react-icons/fa";
import "react-icons/io5";
import "framer-motion";
import "@reduxjs/toolkit";
import "react-bootstrap/Accordion";
import "react-icons/fa6";
import "axios";
import "axios-cache-interceptor";
import "react-spinners/BounceLoader.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
function B2C() {
  useState({
    FName: "",
    LName: "",
    email: "",
    phone: ""
  });
  useState(false);
  useState(false);
  useState(0);
  useRef();
  useState(0);
  useEffect(() => {
    window.location.replace("https://b2c.mahaballoonadventures.ae/");
  }, []);
  return "Loading...";
}
export {
  B2C as default
};
