import "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import "react-helmet";
import "react-slick";
import "react-toastify";
import "react-modal-video";
/* empty css                */
import "react-international-phone";
import { i as getallusers } from "../entry-server.js";
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
function B2b() {
  let [referralcodes, setreferralcodes] = useState([]);
  useEffect(() => {
    const getusers = async () => {
      try {
        const response = await getallusers();
        let temp = response.data.map((data) => data.referral_code);
        console.log(temp);
        setreferralcodes(temp);
      } catch (error) {
        console.log(error);
      }
    };
    getusers();
  }, []);
  useState({
    FName: "",
    LName: "",
    email: "",
    phone: "",
    role: ""
    // initially empty to force user selection
  });
  useState({ id: "" });
  useState(false);
  useState(false);
  useState(0);
  useRef();
  useState(0);
  useState({});
  useState({});
  useState(false);
  useState(false);
  useState(false);
  useEffect(() => {
    window.location.replace("https://b2b.mahaballoonadventures.ae/");
  }, []);
  return "Loading...";
}
export {
  B2b as default
};
