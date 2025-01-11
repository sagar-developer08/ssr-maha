import { jsx, jsxs } from "react/jsx-runtime";
import "react";
/* empty css                */
import { Container } from "react-bootstrap";
const banner = "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Home.jpg";
function Index({ title = "Banner", path = "Home", bg }) {
  return /* @__PURE__ */ jsx("div", { className: "commBanner21", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "wrapper w-100",
      style: {
        backgroundImage: `url(${bg ? bg : banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      children: /* @__PURE__ */ jsx("div", { className: "bannerText w-100 h-100", children: /* @__PURE__ */ jsxs(Container, { children: [
        /* @__PURE__ */ jsx("div", { className: "banner-title", children: title }),
        /* @__PURE__ */ jsx("div", { className: "bradcrum", children: path })
      ] }) })
    }
  ) });
}
export {
  Index as I
};
