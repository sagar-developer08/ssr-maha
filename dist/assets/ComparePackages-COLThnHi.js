import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, createElement } from "react";
import { Helmet } from "react-helmet";
import { useParams, useSearchParams } from "react-router-dom";
import { I as Index$1 } from "./Index-CydB4oe7.js";
import { Container, Row, Col } from "react-bootstrap";
import { s as setBooking, b as setPackageId, c as setPackage, a as fetchPackagesData } from "../entry-server.js";
import { useDispatch } from "react-redux";
/* empty css                */
import "react-dom/server";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "react-icons/fa";
import "react-icons/io5";
import "framer-motion";
import "@reduxjs/toolkit";
import "react-bootstrap/Accordion";
import "react-icons/fa6";
import "react-toastify";
import "axios";
import "axios-cache-interceptor";
import "react-spinners/BounceLoader.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
const img1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/Packages/card1.jpg";
function Card({
  featured = true,
  package_image,
  thumb,
  title,
  price_adult,
  price_child,
  short_detail,
  itineraries,
  duration,
  location,
  id,
  packageVal
}, props) {
  const { lang = "en" } = useParams();
  const dispatch = useDispatch();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `pkCompareCard32 ${lang == "ar" ? "r_dir" : "l_dir"}`,
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "ImgThumb", children: [
          featured && /* @__PURE__ */ jsx("div", { className: "featured", children: "Featured" }),
          /* @__PURE__ */ jsx("img", { src: package_image ? package_image : img1, alt: title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "detailsSec", children: [
          /* @__PURE__ */ jsx("h4", { className: "card-title mt-4", children: title }),
          /* @__PURE__ */ jsxs("div", { className: "tag-line mt-2", children: [
            price_adult ? /* @__PURE__ */ jsxs(Fragment, { children: [
              " ",
              "ADULTS: AED",
              price_adult
            ] }) : "PRICE ON REQUEST",
            " ",
            "/",
            "  ",
            price_child && /* @__PURE__ */ jsxs(Fragment, { children: [
              "CHILD: AED ",
              price_child
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "para mt-2", children: short_detail }),
          /* @__PURE__ */ jsxs("div", { className: "time mt-1", children: [
            /* @__PURE__ */ jsx("p", { className: "para bds", children: "Time" }),
            /* @__PURE__ */ jsx("p", { className: "para", children: duration })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsx("p", { className: "para bds", children: "Location" }),
            /* @__PURE__ */ jsx("p", { className: "para", children: location })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("ul", { children: itineraries == null ? void 0 : itineraries.map((item, i) => /* @__PURE__ */ jsx("li", { children: item == null ? void 0 : item.activity }, "Iters" + i)) }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxs(
          "button",
          {
            className: "btnNl btnNl-primary pds mrs",
            accordion: true,
            onClick: () => {
              dispatch(setBooking(true));
              dispatch(setPackageId(id));
              dispatch(setPackage(packageVal));
            },
            children: [
              " ",
              "Book Now"
            ]
          }
        ) })
      ]
    }
  );
}
function Index() {
  var _a, _b;
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({});
  useEffect(() => {
    const fetchPackageListData = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchPackagesData();
        if (Array.isArray(data)) {
          setPackagesData(data);
        }
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPackageListData();
  }, []);
  let [searchParams, setSearchParams] = useSearchParams();
  const compare1Query = searchParams.get("compare1");
  const compare2Query = searchParams.get("compare2");
  useEffect(() => {
    if (!compare1Query) {
      return;
    }
    setSelectedPackage((prev) => ({
      ...prev,
      campare1: parseInt(compare1Query)
    }));
  }, [compare1Query]);
  useEffect(() => {
    if (!compare2Query) {
      return;
    }
    if (compare1Query == compare2Query) {
      return;
    }
    setSelectedPackage((prev) => ({
      ...prev,
      campare2: parseInt(compare2Query)
    }));
  }, [compare2Query]);
  return /* @__PURE__ */ jsx("div", { className: "comparePackage993 py-60", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { children: [
    /* @__PURE__ */ jsxs(Col, { xs: 6, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "", children: "Campare to:" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            className: "selectOption",
            name: "campare1",
            id: "",
            onChange: (e) => setSelectedPackage((prev) => ({
              ...prev,
              [e.target.name]: e.target.value
            })),
            value: selectedPackage == null ? void 0 : selectedPackage.campare1,
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, selected: true, children: "Package to Compare" }),
              packagesData == null ? void 0 : packagesData.map((item) => /* @__PURE__ */ jsx(
                "option",
                {
                  value: item == null ? void 0 : item.id,
                  disabled: (selectedPackage == null ? void 0 : selectedPackage.campare2) == (item == null ? void 0 : item.id) ? true : false,
                  children: item == null ? void 0 : item.title
                }
              ))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3", children: (_a = packagesData == null ? void 0 : packagesData.filter((item) => (item == null ? void 0 : item.id) == (selectedPackage == null ? void 0 : selectedPackage.campare1))) == null ? void 0 : _a.map((item) => /* @__PURE__ */ createElement(Card, { ...item, key: item == null ? void 0 : item.id, packageVal: item })) })
    ] }),
    /* @__PURE__ */ jsxs(Col, { xs: 6, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "", children: "Campare with:" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            className: "selectOption",
            name: "campare2",
            id: "",
            onChange: (e) => setSelectedPackage((prev) => ({
              ...prev,
              [e.target.name]: e.target.value
            })),
            value: selectedPackage == null ? void 0 : selectedPackage.campare2,
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, selected: true, children: "Package to Compare with" }),
              packagesData == null ? void 0 : packagesData.map((item) => /* @__PURE__ */ jsx(
                "option",
                {
                  value: item == null ? void 0 : item.id,
                  disabled: (selectedPackage == null ? void 0 : selectedPackage.campare1) == (item == null ? void 0 : item.id) ? true : false,
                  children: item == null ? void 0 : item.title
                }
              ))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-3", children: (_b = packagesData == null ? void 0 : packagesData.filter((item) => (item == null ? void 0 : item.id) == (selectedPackage == null ? void 0 : selectedPackage.campare2))) == null ? void 0 : _b.map((item) => /* @__PURE__ */ createElement(Card, { ...item, key: item == null ? void 0 : item.id, packageVal: item })) })
    ] })
  ] }) }) });
}
function ComparePackages() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "title", content: " Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}compare-packages`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}compare-packages`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index$1, { title: "Compare Packages", path: "Home - Compare Packages" }),
    /* @__PURE__ */ jsx(Index, {})
  ] });
}
export {
  ComparePackages as default
};
