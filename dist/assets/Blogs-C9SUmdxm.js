import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { I as Index$1 } from "./Index-CydB4oe7.js";
import { I as Index$2, a as Index$3 } from "./Index-8W1JpIEZ.js";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { b as blogs } from "./blogs-DN9EWmDd.js";
import { Helmet } from "react-helmet";
/* empty css                */
import "react-redux";
import "../entry-server.js";
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
import "react-whatsapp";
function Card(props) {
  const { lang } = useParams();
  const { title, short_des, category, readTime, thumb, route } = props;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `${(props == null ? void 0 : props.slider) ? "BlogsList3CardHomepahg32 dkj30329K" : "BlogsList3CardHomepahg32"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "cardFlight", children: [
        /* @__PURE__ */ jsx("div", { className: "imageWrapper", children: /* @__PURE__ */ jsx("img", { src: thumb, alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { className: "blogType", children: [
          /* @__PURE__ */ jsx("div", { className: "category", children: category == null ? void 0 : category.en }),
          /* @__PURE__ */ jsx("div", { className: "readTime", children: readTime == null ? void 0 : readTime.en })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "details mt-3", children: [
          /* @__PURE__ */ jsx("div", { className: "sec-title", children: title == null ? void 0 : title.en }),
          /* @__PURE__ */ jsx("p", { className: "para mt-2", children: short_des == null ? void 0 : short_des.en })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: `/${lang}/blog/${route}`, children: /* @__PURE__ */ jsx("button", { className: "btnNl btnNl-secondary", children: "Read More" }) })
      ] })
    }
  );
}
function Index() {
  var _a;
  return /* @__PURE__ */ jsx("div", { className: "BlogList3939m py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx("div", { className: "main-title", children: "Latest News & Articles" }),
    /* @__PURE__ */ jsx("div", { className: "BlogsList", children: /* @__PURE__ */ jsx(Row, { className: "g-5", children: (_a = blogs) == null ? void 0 : _a.map((item, i) => /* @__PURE__ */ jsx(Col, { xs: 12, md: 6, lg: 4, children: /* @__PURE__ */ jsx(Card, { ...item }) }, "blogsList" + i)) }) })
  ] }) });
}
const banner = "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Blogs%20banner.webp";
function Blogs() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Blogs - Dubai Hot Air Balloon Adventure | Maha Balloon " }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "title",
          content: "Blogs - Dubai Hot Air Balloon Adventure | Maha Balloon "
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Stay updated with the latest blogs from Maha Balloon Adventures. Learn tips, insights, and the best times for hot air balloon rides in UAE."
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}blogs`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}blogs`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index$1, { title: "Blogs", path: "Home - Blogs", bg: banner }),
    /* @__PURE__ */ jsx(Index, {}),
    /* @__PURE__ */ jsx(Index$2, {}),
    /* @__PURE__ */ jsx(Index$3, {})
  ] });
}
export {
  Blogs as default
};
