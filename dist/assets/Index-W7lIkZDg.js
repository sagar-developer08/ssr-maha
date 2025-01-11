import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { C as Card } from "./Card-BZuaqTbV.js";
import { I as Index$1 } from "./Index-uvPi-vXe.js";
import { b as blogs } from "./blogs-DN9EWmDd.js";
import { u as useWindowDimensions } from "./useWindowSize-BmynClH8.js";
function Index(props) {
  var _a;
  const { blogData } = props;
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };
  const PrevArrow = () => /* @__PURE__ */ jsx(
    "button",
    {
      className: "slider_custom_arrows",
      onClick: previousSlide,
      disabled: currentSlide === 0,
      children: /* @__PURE__ */ jsx(FaAngleLeft, { fontSize: "24px" })
    }
  );
  const { width } = useWindowDimensions();
  let toCut = width > 992 ? 3 : width >= 776 ? 2 : 1;
  const NextArrow = () => {
    var _a2;
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: "slider_custom_arrows ms-3",
        onClick: nextSlide,
        disabled: blogData ? currentSlide >= (blogData == null ? void 0 : blogData.length) - toCut : currentSlide >= ((_a2 = blogs) == null ? void 0 : _a2.length) - toCut,
        children: /* @__PURE__ */ jsx(FaAngleRight, { fontSize: "24px" })
      }
    );
  };
  return /* @__PURE__ */ jsx("div", { className: "BlogsHomepage33d3 py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs("h3", { className: "tag-line mb-3", children: [
      " ",
      (props == null ? void 0 : props.subTitle) ? props == null ? void 0 : props.subTitle : "Blogs"
    ] }),
    /* @__PURE__ */ jsx("h4", { className: "main-title mb-3 ", children: (props == null ? void 0 : props.title) ? props == null ? void 0 : props.title : "Tourist Guides on Things To Do In Dubai UAE" }),
    /* @__PURE__ */ jsxs("div", { className: "SliderWrapper3  mt-3 mt-md-5", children: [
      /* @__PURE__ */ jsx("div", { className: "arrowslic22dernext", children: /* @__PURE__ */ jsx(NextArrow, {}) }),
      /* @__PURE__ */ jsx("div", { className: "arrowslic22derprev", children: /* @__PURE__ */ jsx(PrevArrow, {}) }),
      blogData ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Slider, { ref: sliderRef, ...settings, children: blogData == null ? void 0 : blogData.map((item) => /* @__PURE__ */ jsx(Card, { ...item, slider: true })) }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Slider, { ref: sliderRef, ...settings, children: (_a = blogs) == null ? void 0 : _a.map((item) => /* @__PURE__ */ jsx(Card, { ...item, slider: true })) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sliderArrows slider_pd-end2 mt-3", children: /* @__PURE__ */ jsx(Index$1, { prevArrow: /* @__PURE__ */ jsx(PrevArrow, {}), nextArrow: /* @__PURE__ */ jsx(NextArrow, {}) }) })
  ] }) });
}
export {
  Index as I
};
