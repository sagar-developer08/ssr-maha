import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useRef, useState, useEffect } from "react";
import { I as Index$6 } from "./Index-CydB4oe7.js";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { u as useSize } from "../entry-server.js";
import "react-form-stepper";
import { I as Index$5 } from "./Index-uvPi-vXe.js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch } from "react-redux";
import Lightbox from "yet-another-react-lightbox";
/* empty css                */
import { I as Index$7, a as Index$8 } from "./Index-8W1JpIEZ.js";
import { Helmet } from "react-helmet";
/* empty css                */
import "react-dom/server";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "react-icons/io5";
import "framer-motion";
import "@reduxjs/toolkit";
import "react-icons/fa6";
import "react-toastify";
import "axios";
import "axios-cache-interceptor";
import "react-spinners/BounceLoader.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
import "react-whatsapp";
const brand1$1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/tripadvisor.png";
const brand2$1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/makemytrip_logo.png";
const brand3$1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/bookingcom_logo.png";
const brand4$1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/viator_logo.png";
const thumb = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/WhyUs/Trusted Balloon.webp";
const plyIcon = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/playbutton.png";
function Index$4(props) {
  var _a, _b, _c;
  useRef();
  useState(0);
  const [readMore, setReadMore] = useState(true);
  const [mobile, setMobile] = useState(false);
  const { width } = useSize();
  useParams();
  useEffect(() => {
    if (width <= 580) {
      setMobile(true);
      setReadMore(false);
    } else {
      setMobile(false);
      setReadMore(true);
    }
  }, [width]);
  return /* @__PURE__ */ jsx("div", { className: "AboutINtro32dc py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs(Row, { className: "gy-3 mb-2", children: [
      /* @__PURE__ */ jsx(Col, { xs: 12, lg: 6, children: /* @__PURE__ */ jsxs("h2", { className: "main-title", children: [
        (_a = props == null ? void 0 : props.content) == null ? void 0 : _a.extra.title.en,
        " "
      ] }) }),
      /* @__PURE__ */ jsxs(Col, { xs: 12, lg: 6, children: [
        /* @__PURE__ */ jsxs("div", { className: "details", children: [
          /* @__PURE__ */ jsxs("h3", { className: "title", children: [
            " ",
            (_b = props == null ? void 0 : props.content) == null ? void 0 : _b.extra.subtitle.en
          ] }),
          /* @__PURE__ */ jsx("p", { children: (_c = props == null ? void 0 : props.content) == null ? void 0 : _c.extra.details.en })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "BrandsList", children: [
          /* @__PURE__ */ jsx("img", { src: brand1$1, alt: "", width: "135px" }),
          /* @__PURE__ */ jsx("img", { src: brand2$1, alt: "", width: "135px" }),
          /* @__PURE__ */ jsx("img", { src: brand3$1, alt: "", width: "135px" }),
          /* @__PURE__ */ jsx("img", { src: brand4$1, alt: "", width: "135px" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "VideoIntro mt-5 mb-md-5", children: /* @__PURE__ */ jsxs("div", { className: "imgWrapper", children: [
      /* @__PURE__ */ jsx("img", { src: thumb, alt: "" }),
      /* @__PURE__ */ jsx("div", { className: "playButton", children: /* @__PURE__ */ jsx("img", { src: plyIcon }) })
    ] }) })
  ] }) });
}
const whyUsIntro = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/WhyUs/WhyYouSHouldIntro.webp";
function Index$3(props) {
  var _a, _b;
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [CurrentStep, setCurrentStep] = useState(0);
  const { lang = "en" } = useParams();
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      console.log("next: ", next);
      setCurrentStep(next);
      setCurrentSlide(next);
    }
  };
  let SLidesData = [
    {
      title: { en: "Unforgettable Experiences", ar: "" },
      details: {
        en: "At Maha Hot Air Balloon, every flight is a memorable adventure. Our hot air balloon rides offer breathtaking views of the Dubai desert, letting you witness stunning sunrises and vast golden dunes from a unique perspective. Whether celebrating a special occasion, planning a romantic getaway, or seeking adventure, we have you covered.",
        ar: ""
      }
    },
    {
      title: { en: "Expertise and Safety", ar: "" },
      details: {
        en: "Safety is our top priority. Our hot air balloons are operated by experienced and certified pilots dedicated to ensuring a safe and enjoyable flight. We adhere to strict safety protocols and guidelines set by the General Civil Aviation Authority (GCAA), giving you peace of mind as you soar high above the desert.",
        ar: ""
      }
    },
    {
      title: { en: "Exceptional Customer Service", ar: "" },
      details: {
        en: `From the moment you book your flight to the time you land, our dedicated team is committed to providing exceptional service. Our friendly staff will assist you with every detail, ensuring a seamless and enjoyable experience. We take pride in our hospitality, and our guests frequently commend us for our attentive and accommodating service.`,
        ar: ""
      }
    },
    {
      title: { en: "Tailored Packages for Everyone", ar: "" },
      details: {
        en: `We offer a variety of packages to cater to different preferences and budgets. Whether you choose our Classic, Majestic, or Royal Package, each option is designed to provide a unique experience. Enjoy gourmet breakfasts, photos with falcons, camel rides, and dune bashing. Our hot air balloon rides offer a spectacular setting. Don't Miss it!`,
        ar: ""
      }
    },
    {
      title: { en: "Stunning Views and Unique Experiences", ar: "" },
      details: {
        en: `Experience the magic of the Dubai desert like never before. Our flights typically take place just before sunrise, allowing you to capture stunning colors of the sky as the sun rises over the horizon. You’ll have the chance to see iconic landmarks, wildlife, and breathtaking landscapes, all while floating peacefully in the sky.`,
        ar: ""
      }
    },
    {
      title: { en: "Memories to Last a Lifetime", ar: "" },
      details: {
        en: `Every flight with Maha Hot Air Balloon comes with a commemorative flight certificate signed by our pilot, allowing you to remember your adventure long after you’ve landed. Additionally, our professional photography options ensure that you can capture every moment of your journey, creating memories that you can cherish forever.`,
        ar: ""
      }
    },
    {
      title: { en: "Book your adventure today!", ar: "" },
      details: {
        en: `Don’t wait to experience the breathtaking beauty of the Dubai desert from above! Reserve your hot air balloon adventure today for a truly unforgettable journey. With expert pilots and tailored packages, we promise an extraordinary experience that will leave you in awe. Embrace the magic of the skies and create lasting memories with us!
`,
        ar: ""
      }
    }
  ];
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
  const NextArrow = () => /* @__PURE__ */ jsx(
    "button",
    {
      className: "slider_custom_arrows ms-3",
      onClick: nextSlide,
      disabled: currentSlide >= (SLidesData == null ? void 0 : SLidesData.length) - 1,
      children: /* @__PURE__ */ jsx(FaAngleRight, { fontSize: "24px" })
    }
  );
  return /* @__PURE__ */ jsx("div", { className: "IntroSLider23e py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx("h4", { className: "main-title", children: (_b = (_a = props == null ? void 0 : props.content) == null ? void 0 : _a.title) == null ? void 0 : _b.en }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(Slider, { ref: sliderRef, ...settings, children: SLidesData == null ? void 0 : SLidesData.map((item, i) => {
      var _a2, _b2;
      return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
        Row,
        {
          className: ` timeLIneWrap gy-3 ${lang == "ar" ? "r_dir" : "l_dir"}`,
          children: [
            /* @__PURE__ */ jsx(Col, { lg: "6", children: /* @__PURE__ */ jsx("div", { className: "wrapper", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: whyUsIntro,
                alt: "Hot Air Balloon Dubai | Hot Air Balloon Ride Dubai | Maha Balloon Adventures ",
                title: "Hot Air Balloon Dubai | Hot Air Balloon Ride Dubai | Maha Balloon Adventures ",
                description: "Hot air balloon over Dubai’s desert, capturing the serene experience offered by Maha Balloon Adventures."
              }
            ) }) }),
            /* @__PURE__ */ jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxs("div", { className: "details h-100 d-flex justify-content-center flex-column", children: [
              /* @__PURE__ */ jsx("h5", { className: "mt-3 titleSlide", children: (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.en }),
              /* @__PURE__ */ jsx("p", { className: "para mt-3", children: (_b2 = item == null ? void 0 : item.details) == null ? void 0 : _b2.en }),
              /* @__PURE__ */ jsx("div", { className: "sliderArrows", children: /* @__PURE__ */ jsx(
                Index$5,
                {
                  prevArrow: /* @__PURE__ */ jsx(PrevArrow, {}),
                  nextArrow: /* @__PURE__ */ jsx(NextArrow, {})
                }
              ) })
            ] }) })
          ]
        }
      ) });
    }) }) })
  ] }) });
}
const brand1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured1.png";
const brand2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured2.png";
const brand3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured3.png";
const brand4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured4.png";
const brand5 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured5.png";
function Index$2() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 2e3,
    autoplaySpeed: 2e3,
    cssEase: "linear"
  };
  return /* @__PURE__ */ jsx("div", { className: "HomePageFeaturedIN ", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs(Row, { className: "gy-3 desktop3", children: [
      /* @__PURE__ */ jsx(Col, { xs: 12, lg: 6, children: /* @__PURE__ */ jsx("div", { className: "sec-title", children: "As Featured In" }) }),
      /* @__PURE__ */ jsx(Col, { xs: 12, lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "BrandsList", children: [
        /* @__PURE__ */ jsx("img", { src: brand1, alt: "", width: "100px" }),
        /* @__PURE__ */ jsx("img", { src: brand2, alt: "", width: "100px" }),
        /* @__PURE__ */ jsx("img", { src: brand3, alt: "", width: "100px" }),
        /* @__PURE__ */ jsx("img", { src: brand4, alt: "", width: "100px" }),
        /* @__PURE__ */ jsx("img", { src: brand5, alt: "", width: "100px" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mobilet", children: /* @__PURE__ */ jsxs(Row, { className: "gy-3 ", children: [
      /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsx("div", { className: "sec-title", children: "As Featured In" }) }),
      /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs(Slider, { ...settings, children: [
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand1, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand2, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand3, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand4, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand5, alt: "", width: "100px" }) })
      ] }) })
    ] }) })
  ] }) });
}
function Index$1(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { lang = "en" } = useParams();
  useDispatch();
  return /* @__PURE__ */ jsx("div", { className: "safetyMasuei2139 py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs("div", { className: "heading", children: [
      /* @__PURE__ */ jsx("h4", { className: "tag-line mb-3", children: "Safety Measures" }),
      /* @__PURE__ */ jsx("h5", { className: "main-title", children: (_b = (_a = props == null ? void 0 : props.content) == null ? void 0 : _a.title) == null ? void 0 : _b.en })
    ] }),
    /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
      /* @__PURE__ */ jsx(Col, { md: 6, lg: true, children: /* @__PURE__ */ jsx("div", { className: lang == "ar" ? "safetyHalf1 arB" : "safetyHalf1", children: (_e = (_d = (_c = props == null ? void 0 : props.content) == null ? void 0 : _c.safety) == null ? void 0 : _d.slice(0, 5)) == null ? void 0 : _e.map((item, i) => {
        var _a2, _b2;
        return /* @__PURE__ */ jsxs("div", { className: "safetyItem", children: [
          /* @__PURE__ */ jsxs("div", { className: "safetyNo", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsx(Accordion, { defaultActiveKey: "0", flush: true, children: /* @__PURE__ */ jsxs(Accordion.Item, { eventKey: "0", children: [
            /* @__PURE__ */ jsx(Accordion.Header, { children: /* @__PURE__ */ jsx("h5", { className: "title", children: (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.en }) }),
            /* @__PURE__ */ jsx(Accordion.Body, { children: (_b2 = item == null ? void 0 : item.detail) == null ? void 0 : _b2.en })
          ] }) })
        ] });
      }) }) }),
      /* @__PURE__ */ jsx(Col, { md: 6, lg: true, children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "wrapper",
          title: "Safety Measures Hot Air Balloon Rides in Dubai | Maha Balloon Adventures",
          description: "Details the safety protocols and measures Maha Balloon Adventures follows for safe hot air balloon rides in Dubai."
        }
      ) }),
      /* @__PURE__ */ jsx(Col, { md: 6, lg: true, children: /* @__PURE__ */ jsx("div", { className: lang == "ar" ? "safetyHalf2 arB" : "safetyHalf2", children: (_h = (_g = (_f = props == null ? void 0 : props.content) == null ? void 0 : _f.safety) == null ? void 0 : _g.slice(5, 10)) == null ? void 0 : _h.map((item, i) => {
        var _a2, _b2;
        return /* @__PURE__ */ jsxs("div", { className: "safetyItem", children: [
          /* @__PURE__ */ jsxs("div", { className: "safetyNo", children: [
            i == 4 ? "" : "0",
            i + 6
          ] }),
          /* @__PURE__ */ jsx(Accordion, { defaultActiveKey: "0", flush: true, children: /* @__PURE__ */ jsxs(Accordion.Item, { eventKey: "0", children: [
            /* @__PURE__ */ jsx(Accordion.Header, { children: /* @__PURE__ */ jsx("h5", { className: "title", children: (_a2 = item == null ? void 0 : item.title) == null ? void 0 : _a2.en }) }),
            /* @__PURE__ */ jsx(Accordion.Body, { children: (_b2 = item == null ? void 0 : item.detail) == null ? void 0 : _b2.en })
          ] }) })
        ] });
      }) }) })
    ] }),
    /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(
      Col,
      {
        className: "d-flex justify-content-center align-items-center mt-4",
        xs: 12
      }
    ) })
  ] }) });
}
const cert = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp1.webp";
const cert2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp2.webp";
const cert3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp3.webp";
const cert4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp4.webp";
const cert5 = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/MBA%20Certificate%20A4.webp5.webp";
function Index() {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 2e3,
    autoplaySpeed: 2e3,
    cssEase: "linear"
  };
  return /* @__PURE__ */ jsxs("div", { className: "AboutCertificate3223 py-60", children: [
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
      /* @__PURE__ */ jsx(Col, { xs: 12, lg: 4, children: /* @__PURE__ */ jsx("h3", { className: "sec-title", children: "Our Safety Certifications: The Crown Jewel of Your Aviation Journey!" }) }),
      /* @__PURE__ */ jsx(Col, { className: "desktop3", xs: 12, lg: 8, children: /* @__PURE__ */ jsxs("div", { className: "certifcates", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: cert,
            alt: "Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures",
            title: "Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures",
            description: "Describes the luxury hot air balloon rides in Dubai with stunning desert views offered by Maha Balloon Adventures.",
            height: "100px",
            onClick: () => {
              setOpen(true);
              setIndex(0);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: cert2,
            alt: "Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures",
            title: "Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures",
            description: "Describes the luxury hot air balloon rides in Dubai with stunning desert views offered by Maha Balloon Adventures.",
            height: "100px",
            onClick: () => {
              setOpen(true);
              setIndex(1);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: cert3,
            alt: "Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures",
            title: "Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures",
            description: "Describes the luxury hot air balloon rides in Dubai with stunning desert views offered by Maha Balloon Adventures.",
            height: "100px",
            onClick: () => {
              setOpen(true);
              setIndex(2);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: cert4,
            alt: "Top Hot air balloon adventure in UAE | The Dubai Balloon | Maha Balloon Adventures",
            title: "Top Hot air balloon adventure in UAE | The Dubai Balloon | Maha Balloon Adventures",
            description: "Maha Balloon Adventures is top in UAE for hot air balloon adventures, offering premium services and exceptional experiences.",
            height: "100px",
            onClick: () => {
              setOpen(true);
              setIndex(3);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: cert5,
            alt: "Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures",
            title: "Fly Dubai Luxury Hot Air Balloon | Rides with Stunning Desert  | Maha Balloon Adventures",
            description: "Describes the luxury hot air balloon rides in Dubai with stunning desert views offered by Maha Balloon Adventures.",
            height: "100px",
            onClick: () => {
              setOpen(true);
              setIndex(4);
            }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Col, { className: "mobilet", xs: 12, lg: 8, children: /* @__PURE__ */ jsxs(Slider, { ...settings, children: [
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: cert, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: cert2, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: cert3, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: cert4, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: cert5, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: cert2, alt: "", width: "100px" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      Lightbox,
      {
        index,
        open,
        close: () => setOpen(false),
        slides: [
          { src: cert },
          { src: cert2 },
          { src: cert3 },
          { src: cert4 },
          { src: cert5 }
        ]
      }
    ) })
  ] });
}
let whyusData = {
  intro: {
    title: { en: "Why You Should Fly with Maha Hot Air Balloon Dubai", ar: "" },
    detail: {
      en: `<h5>Unforgettable Experiences</h5> 
      <p>At Maha Hot Air Balloon, we believe that every flight should be a memorable adventure. Our hot air
balloon rides offer breathtaking views of the Dubai desert, allowing you to witness the stunning
sunrise and the vast expanse of golden dunes from a unique perspective. Whether you’re celebrating
a special occasion, planning a romantic getaway, or simply seeking adventure, our flights provide an
extraordinary experience that will stay with you forever.</p> 

<h5>Expertise and Safety</h5> 
      <p>Safety is our top priority. Our hot air balloons are operated by experienced and certified pilots who are
dedicated to ensuring a safe and enjoyable flight. We adhere to strict safety protocols and guidelines
set by the General Civil Aviation Authority (GCAA), giving you peace of mind as you soar high above
the desert.</p>

      <h5>Exceptional Customer Service</h5> 
      <p>From the moment you book your flight to the time you land, our dedicated team is committed to
providing exceptional service. Our friendly staff will assist you with every detail, ensuring a seamless
and enjoyable experience. We take pride in our hospitality, and our guests frequently commend us for
our attentive and accommodating service.</p>

 <h5>Tailored Packages for Everyone</h5> 
      <p>We offer a variety of packages to cater to different preferences and budgets. Whether you choose our
Classic, Majestic, or Royal Package, each option is designed to provide a unique experience. Enjoy
gourmet breakfasts, photo with falcon, camel ride and dune bashing. Whether you’re planning a
romantic proposal, a unique birthday party, or a memorable family outing and corporate groups alike,
our hot air balloon rides provide a spectacular setting. You get exceptional value for a high-quality
adventure, ensuring that your sky-high journey is both affordable and unforgettable.</p>

<h5>Stunning Views and Unique Experiences</h5> 
      <p>Experience the magic of the Dubai desert like never before. Our flights typically take place just before
sunrise, allowing you to capture the stunning colours of the sky as the sun rises over the horizon.
You’ll have the chance to see iconic landmarks, wildlife, and the breathtaking landscape, all while
floating peacefully in the sky.</p>

<h5>Memories to Last a Lifetime</h5> 
      <p>Every flight with Maha Hot Air Balloon comes with a commemorative flight certificate signed by our
pilot, allowing you to remember your adventure long after you’ve landed. Additionally, our professional
photography options ensure that you can capture every moment of your journey, creating memories
that you can cherish forever.</p>

 <p>Book Your Adventure Today!</p>

 <p>Join us at Maha Hot Air Balloon Adventures for an unforgettable experience in the skies above Dubai.
Whether you’re a first-time flyer or a seasoned adventurer, we promise a journey filled with wonder,
excitement, and breathtaking beauty.</p>


      `,
      ar: ""
    },
    extra: {
      title: {
        en: "Maha Balloon Adventures : The Best Hot Air Balloon Operator in Dubai ",
        ar: ""
      },
      subtitle: { en: "Fly High: Dubai’s Ultimate Balloon Experience", ar: "" },
      details: {
        en: "Are you ready to go beyond the ordinary? Elevate your adventure with an exhilarating hot air balloon ride that takes you 300 meters above Dubai’s stunning desert landscape! Marvel at the endless golden dunes and enjoy a breathtaking view of the tranquil desert, stretching as far as the eye can see. This ride is not just an attraction; it’s a once-in-a-lifetime experience set in the serene beauty of the Arabian Desert. Bring your friends and create unforgettable memories on Dubai’s most thrilling desert balloon adventure – and the best part?",
        ar: ""
      }
    }
  },
  safetyMethods: {
    title: { en: "Top Reasons to Fly with Maha Balloon Adventures", ar: "" },
    safety: [
      {
        title: { en: "Expertise and Safety First", ar: "" },
        detail: {
          en: "At Maha Balloon Adventures, safety is our top priority. Our experienced pilots are certified and trained to ensure a safe and enjoyable flight experience. We strictly adhere to all safety regulations set by the General Civil Aviation Authority (GCAA), giving you peace of mind as you soar through the skies.",
          ar: ""
        }
      },
      {
        title: { en: "Unmatched Scenic Views", ar: "" },
        detail: {
          en: "Experience the breathtaking beauty of the Dubai desert like never before. Our flights typically take place just before sunrise, allowing you to capture the stunning colours of the sky as the sun rises over the horizon. You’ll have the chance to see iconic landmarks, wildlife, and the breathtaking landscape, all while floating peacefully in the sky.",
          ar: ""
        }
      },
      {
        title: { en: "Tailored Packages for Everyone", ar: "" },
        detail: {
          en: "We offer a variety of packages to suit different preferences and budgets. Whether you choose our Classic, Majestic, or Royal package, each option is designed to provide a unique and memorable experience tailored to your needs.",
          ar: ""
        }
      },
      {
        title: { en: "Exceptional Customer Service", ar: "" },
        detail: {
          en: "Our dedicated team is committed to providing you with exceptional service from the moment you book your flight until you land. We pride ourselves on our hospitality and attention to detail, ensuring a seamless and enjoyable experience for all our guests.",
          ar: ""
        }
      },
      {
        title: { en: "Captivating Wildlife Sightings", ar: "" },
        detail: {
          en: "During flights, guests have the opportunity to spot local wildlife, including Arabian oryx and camels, adding an exciting element to the adventure and connecting them with the natural beauty of the desert.",
          ar: ""
        }
      },
      {
        title: { en: "Comfortable and Spacious Balloons", ar: "" },
        detail: {
          en: "Our hot air balloons are designed to accommodate up to 24 passengers, ensuring a comfortable and spacious environment for everyone. You can relax and enjoy the ride without feeling cramped.",
          ar: ""
        }
      },
      {
        title: { en: "Exceptional Value", ar: "" },
        detail: {
          en: "We offer competitive pricing without compromising on quality. Our commitment to providing outstanding value ensures that you receive a premium experience at an affordable price, making your adventure both accessible and unforgettable.",
          ar: ""
        }
      },
      {
        title: { en: "Commemorative Flight Certificates", ar: "" },
        detail: {
          en: "Every guest receives a personalized E-Flight certificate signed by the pilot as a keepsake of your unforgettable adventure. It’s a perfect memento to remember your experience.",
          ar: ""
        }
      },
      {
        title: { en: "Positive Guest Feedback", ar: "" },
        detail: {
          en: "We are proud to have received numerous positive reviews from our guests, highlighting our commitment to excellence. Our customers frequently commend us for our friendly staff, professional service, and unforgettable experiences.",
          ar: ""
        }
      },
      {
        title: { en: "Environmental Responsibility", ar: "" },
        detail: {
          en: "Maha Balloon Adventures is committed to environmental sustainability and responsible tourism practices, ensuring that their operations have minimal impact on the beautiful desert landscape they showcase.",
          ar: ""
        }
      }
    ]
  },
  ourFleet: {
    title: { en: "Our State-of-the-Art Hot Air Balloon Fleet", ar: "" },
    subtitle: { en: "Our Fleet ", ar: "" },
    detail: {
      en: "<p>At Maha Balloon Adventure, we take pride in our fleet of cutting-edge hot air balloons designed to provide you with a safe, comfortable, and unforgettable experience. Our balloons are meticulously maintained and regularly inspected to ensure the highest standards of safety and reliability.</p> <p>Our fleet comprises of two balloons to suit every ballooning preference, such as Ultramagic  N500. It has capacity to accommodate up to 24 guests per balloon, making it perfect for a private, intimate flight and giving you peace of mind as you soar through the skies.</p>",
      ar: ""
    }
  },
  faqsList: [
    {
      id: 0,
      qes: { ar: "", en: "How experienced are your balloon pilots?" },
      ans: {
        ar: "",
        en: "All our pilots at Maha B have GCAA UAE General Civil Aviation Authority license and a vast experience in flying thus offering safety to the clients."
      }
    },
    {
      id: 1,
      qes: { ar: "", en: "What safety measures do you have in this place?" },
      ans: {
        ar: "",
        en: "First of all, let us note that the safety issue prevails in this respective sphere. Every flight done in our balloon uses highly trained and licensed pilots whose aim is to provide a safe and fun experience. In adherence to safety practices, we observe measures provided by the General Civil Aviation Authority (GCAA) to give you the desired comfort while flying over the beautiful Dubai desert."
      }
    },
    {
      id: 2,
      qes: { ar: "", en: "Do you have any certifications or awards?" },
      ans: {
        ar: "",
        en: "Yes, we are please to have several accreditations from the General Civil Aviation Authority (GCAA) to ensure that we compete high on safety and its operational standards. We are known by the numerous awards and recognitions we have received. Moreover, our commitment to safety, excellence in customer relations and in offering amazing experiences, place us amongst the best hot air balloon operators in Dubai"
      }
    },
    {
      id: 3,
      qes: { ar: "", en: "What is the capacity of your balloons?" },
      ans: {
        ar: "",
        en: "Maha B offers two types of balloons for different experiences: One of them can transport up to 20 passengers while the other is a balloon  that can take up to 24 passengers. For private purposes, we offer the balloon with seating capacity for 6 passengers to guarantee a more individualized experience."
      }
    },
    {
      id: 4,
      qes: { ar: "", en: "How is the weather handled for balloon rides?" },
      ans: {
        ar: "",
        en: "In the course of the flight, if the weather hampers the chances, Maha B will advise on flying at the next possible date. If we cannot reschedule, we will give a full refund within 10 working days as indicated in our cancellation policy."
      }
    },
    {
      id: 5,
      qes: {
        ar: "",
        en: "Can you accommodate special requests or celebrations?"
      },
      ans: {
        ar: "",
        en: "Yes, Special requests for celebrations are welcome. Whatever the celebration, be it a birthday, anniversary, family event, graduation or any other special event, we ensure that your occasion is memorable. Have your hot air balloon ride with additional choices such as. A gourmet breakfast, birthday cake, or romantic accents in case it is an anniversary. Families with children from five and up to elderly people can enjoy wonderful views together; graduates and other people who have significant anniversaries in their lives: birthdays or retirements, for example, could celebrate such events with our flight."
      }
    },
    {
      id: 6,
      qes: {
        ar: "",
        en: "Do you provide transportation to the balloon launch site?"
      },
      ans: {
        ar: "",
        en: "Yes, All clients who hire our services are provided with transportation to and from the site where the balloon launch will be conducted."
      }
    },
    {
      id: 7,
      qes: { ar: "", en: "What is your refund policy?" },
      ans: {
        ar: "",
        en: `<ul><li>Any cancellation that is done 72 hours or more before the time of the flight will be fully reimbursed.</li><li>The clients who would wish to cancel their tickets are allowed to do so, but they will only be credited 50% of the ticket amount if such a cancellation is done 48 hours to the actual flight time.</li><li>Any cancellations that are done within  24 hours to the particular flight are not refundable whatsoever.</li><li>Any passenger who does not turn up at the agreed point and time of pickup, they are considered a no show. In this case though, the full charge for the booked flight will be incurred and no refund shall be available. For cancellation request kindly email us via the channel you booked the tickets with.</li></ul>`
      }
    },
    {
      id: 8,
      qes: {
        ar: "",
        en: "Do you offer training or certification for aspiring balloon pilots?"
      },
      ans: {
        ar: "",
        en: "You should note that we are not an organisation that provides training and certification to those who want to become balloon pilots. However, all the guests are provided with flight certificate that is signed by the pilot as a token to take away. This certificate makes one to have a good memory of the hot air balloon ride."
      }
    },
    {
      id: 9,
      qes: { ar: "", en: "Is the flight suitable for everyone?" },
      ans: {
        ar: "",
        en: "Our flights are suitable for passengers aged 5 to 80 years. Unfortunately, children under 5 and adults over 80 are not permitted to fly. Children under 18 must be accompanied by a parent or guardian. Please note that the maximum weight limit is 120 kg. Guests exceeding this limit will need pilot approval and may incur an additional charge"
      }
    }
  ]
};
const banner = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/WhyUs/banner.webp";
function About() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Why Choose Maha Balloon | Hot Air Balloon Adventure In Dubai" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "title",
          content: "Why Choose Maha Balloon | Hot Air Balloon Adventure In Dubai"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Discover why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai. Experience unmatched service, breathtaking views, and memories."
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}why-us`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}why-us`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index$6, { title: "Why Us", path: "Home - Why Us", bg: banner }),
    /* @__PURE__ */ jsx(Index$4, { content: whyusData == null ? void 0 : whyusData.intro }),
    /* @__PURE__ */ jsx(Index$2, {}),
    /* @__PURE__ */ jsx(Index$3, { content: whyusData == null ? void 0 : whyusData.intro }),
    /* @__PURE__ */ jsx(Index$1, { content: whyusData == null ? void 0 : whyusData.safetyMethods }),
    /* @__PURE__ */ jsx(Index, {}),
    /* @__PURE__ */ jsx(
      Index$7,
      {
        title: "Gift an Unforgettable Hot Air Balloon Adventure!",
        detail: "Customize a package for your loved one and enjoy a FREE adventure for yourself—limited time only!"
      }
    ),
    /* @__PURE__ */ jsx(Index$8, { content: whyusData == null ? void 0 : whyusData.faqsList })
  ] });
}
export {
  About as default
};