import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { I as Index$1 } from "./Index-CydB4oe7.js";
import { I as Index$2, a as Index$3 } from "./Index-8W1JpIEZ.js";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";
import { u as useOutsideAlerter } from "./useOutsideAlerter-Kk6SgUQ9.js";
import { Helmet } from "react-helmet";
import { i as imgt1 } from "./testimonial-sfUoU7oJ.js";
import { useParams } from "react-router-dom";
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
const playIcon = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/playbutton.png";
const testimonial1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials1.webp";
const testimonial2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials2.webp";
const testimonial3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials3.webp";
const testimonial4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials4.webp";
const testimonial5 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials5.webp";
const testimonial6 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials6.webp";
const testimonial7 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials7.webp";
const gallery5 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Blog/blog%20featured%20image1.webp";
function Index() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoPoster, setVideoPoster] = useState("");
  const wrapperRef = useRef();
  const videoRef = useRef();
  const handleOpen = async (link, poster) => {
    await setVideoPoster(poster);
    await setVideoLink(link);
    setVideoOpen(true);
    videoRef.current.play();
  };
  const handleClose = () => {
    setVideoPoster("");
    setVideoLink("");
    setVideoOpen(false);
    videoRef.current.pause();
  };
  useEffect(() => {
    if (videoLink) {
      videoRef.current.play();
    }
  }, [videoLink]);
  useEffect(() => {
    useOutsideAlerter(wrapperRef, handleClose);
  }, [wrapperRef]);
  let galleryList = [
    {
      thumb: testimonial1,
      col_lg: 4,
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Ajay%20Family_V1.mp4"
    },
    {
      thumb: testimonial2,
      col_lg: 4,
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha_story_04.mp4"
    },
    {
      thumb: testimonial3,
      col_lg: 4,
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Yara Family_V1.mp4"
    },
    { thumb: gallery5, col_lg: 8, videoUrl: "" },
    {
      thumb: testimonial4,
      col_lg: 4,
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Dellany_V1.mp4"
    },
    {
      thumb: testimonial7,
      col_lg: 4,
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maya_story_03.mp4"
    },
    {
      thumb: testimonial6,
      col_lg: 4,
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha Story_02.mp4"
    },
    {
      thumb: testimonial5,
      col_lg: 4,
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Parag_V1.mp4"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "testimonials393KD0 py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { md: 12, lg: 8, children: /* @__PURE__ */ jsx("div", { className: "main-title mb-3", children: "See what our Happy Customers Have to Say!" }) }),
      /* @__PURE__ */ jsx(Col, { md: 12, lg: 4, children: /* @__PURE__ */ jsx("div", { className: "sliderArrows" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galleryList ", children: /* @__PURE__ */ jsx(Row, { className: "g-4", children: galleryList == null ? void 0 : galleryList.map((item, i) => /* @__PURE__ */ jsx(Col, { md: 6, lg: item == null ? void 0 : item.col_lg, children: /* @__PURE__ */ jsxs("div", { className: "imgWrapper", children: [
      /* @__PURE__ */ jsx("img", { src: item == null ? void 0 : item.thumb, alt: "" }),
      (item == null ? void 0 : item.videoUrl) ? /* @__PURE__ */ jsx("div", { className: "Playbuton", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: playIcon,
          alt: "",
          onClick: () => {
            if (item == null ? void 0 : item.videoUrl) {
              handleOpen(item == null ? void 0 : item.videoUrl, item == null ? void 0 : item.thumb);
            }
          }
        }
      ) }) : null
    ] }) }, "gallery" + i)) }) }),
    videoLink ? /* @__PURE__ */ jsxs("div", { className: `${"cst_modal"}`, ref: wrapperRef, children: [
      /* @__PURE__ */ jsx("div", { className: "closeIcon_wrapper", children: /* @__PURE__ */ jsx("div", { className: "closeIcon", onClick: () => handleClose(), children: /* @__PURE__ */ jsx(IoIosCloseCircle, { className: "closeIcon", size: 35 }) }) }),
      /* @__PURE__ */ jsxs(
        "video",
        {
          autoPlay: true,
          playsInline: true,
          controls: true,
          preload: "metadata",
          ref: videoRef,
          children: [
            /* @__PURE__ */ jsx(
              "source",
              {
                poster: videoPoster,
                src: videoLink,
                type: "video/mp4"
              }
            ),
            "Your browser does not support the video tag."
          ]
        }
      )
    ] }) : null
  ] }) });
}
let testimonial = {
  testimonialList: [
    {
      id: 1,
      thumb: imgt1,
      details: "Very interesting sky journey. Very nice and respectful pilot, like wise very experienced pilot captain and also funny that makes the baloon journey simple and fun, I would absolutely advice this company you can trust them.",
      author: "Nzar",
      videoUrl: ""
    }
  ],
  faqsList: [
    {
      id: 0,
      qes: {
        en: "Where can I read Customer testimonials in Dubai balloon?",
        ar: ""
      },
      ans: {
        en: `You can read customer testimonials on our Testimonials Page, where we showcase genuine reviews and Feedback on balloon rides Dubai from our guests.`,
        ar: ""
      }
    },
    {
      id: 1,
      qes: {
        en: "How can I submit my testimonial?",
        ar: ""
      },
      ans: {
        en: `Submitting your testimonial is an easy task! You can either fill out a form and submit it on our Testimonial page or send us an e-mail at <a href="mailto:testimonials@mahaballoonadventures.com">testimonials@mahaballoonadventures.com</a>.`,
        ar: ""
      }
    },
    {
      id: 2,
      qes: {
        en: "Can I see video testimonials from previous customers?",
        ar: ""
      },
      ans: {
        en: `Yes, check out our Video Testimonials section for real stories and visual experiences shared by our happy adventurers.`,
        ar: ""
      }
    },
    {
      id: 3,
      qes: {
        en: "Can I share my testimonial on social media?",
        ar: ""
      },
      ans: {
        en: `Absolutely! We encourage you to share your experience on social media. Tag us Insert Social media handles to join the conversation.`,
        ar: ""
      }
    }
  ]
};
const banner = "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/contact%20us%20banner.webp";
function Testimonial() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Testimonials | Hot Air Balloons in Dubai | Maha Balloons" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "title",
          content: "Testimonials | Hot Air Balloons in Dubai | Maha Balloons"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Read reviews and testimonials from our satisfied customers. See why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai."
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}testimonial`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}testimonial`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index$1, { title: "Testimonials", path: "Home - Testimonials", bg: banner }),
    /* @__PURE__ */ jsx(Index, {}),
    /* @__PURE__ */ jsx(Index$2, {}),
    /* @__PURE__ */ jsx(Index$3, { content: testimonial == null ? void 0 : testimonial.faqsList })
  ] });
}
export {
  Testimonial as default
};
