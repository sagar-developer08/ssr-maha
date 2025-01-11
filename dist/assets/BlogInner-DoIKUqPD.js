import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import { I as Index$4 } from "./Index-CydB4oe7.js";
import { I as Index$5, a as Index$6 } from "./Index-8W1JpIEZ.js";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineLink } from "react-icons/ai";
import { FaLinkedin, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import { L as Loader } from "../entry-server.js";
import { b as blogs } from "./blogs-DN9EWmDd.js";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from "react-share";
import { toast } from "react-toastify";
import Slider from "react-slick";
import { C as Card } from "./Card-BZuaqTbV.js";
import { I as Index$3 } from "./Index-uvPi-vXe.js";
import { u as useWindowDimensions } from "./useWindowSize-BmynClH8.js";
import { useInView } from "react-intersection-observer";
import Modal from "react-bootstrap/Modal";
import { MdOutlineClose } from "react-icons/md";
import { PhoneInput } from "react-international-phone";
import { u as useAuthApi } from "./useAuthApi-BDQziAt1.js";
/* empty css                */
import "react-redux";
import "react-whatsapp";
import "react-bootstrap/Accordion";
import "react-dom/server";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "react-icons/io5";
import "framer-motion";
import "@reduxjs/toolkit";
import "axios";
import "axios-cache-interceptor";
import "react-spinners/BounceLoader.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
function Index$2() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { id, lang } = useParams();
  const [blogDetail, setBlogDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    var _a2;
    let CurrentBlog = (_a2 = blogs) == null ? void 0 : _a2.filter((item) => (item == null ? void 0 : item.route) == id)[0];
    setBlogDetails(CurrentBlog);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Customer Testimonials | Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "title",
          content: "Customer blogs | Maha Hot Air Balloons in Dubai"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}blog/${id}`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}blog/${id}`
        }
      )
    ] }),
    isLoading ? /* @__PURE__ */ jsx(Loader, {}) : /* @__PURE__ */ jsx("div", { className: "blogDetaildsk3i py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsxs("div", { className: "blogType", children: [
        /* @__PURE__ */ jsx("div", { className: "category", children: (_a = blogDetail == null ? void 0 : blogDetail.category) == null ? void 0 : _a.en }),
        /* @__PURE__ */ jsx("div", { className: "readTime", children: (_b = blogDetail == null ? void 0 : blogDetail.readTime) == null ? void 0 : _b.en })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "main-title", children: (_c = blogDetail == null ? void 0 : blogDetail.title) == null ? void 0 : _c.en }),
      /* @__PURE__ */ jsx("div", { className: "main-img", children: /* @__PURE__ */ jsx("img", { src: blogDetail == null ? void 0 : blogDetail.featured_img, alt: "blog Featured" }) }),
      /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "blogInfo", children: [
          /* @__PURE__ */ jsxs("div", { className: "blogAuth", children: [
            /* @__PURE__ */ jsx("div", { className: "title", children: "Written by" }),
            /* @__PURE__ */ jsx("div", { className: "name", children: blogDetail == null ? void 0 : blogDetail.author })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "blogDate", children: [
            /* @__PURE__ */ jsx("div", { className: "title", children: "Published on" }),
            /* @__PURE__ */ jsx("div", { className: "name", children: blogDetail == null ? void 0 : blogDetail.publish_date })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "social w-100", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              style: { cursor: "pointer" },
              onClick: () => {
                navigator.clipboard.writeText(window.location.href);
                toast.info("Link Copied to Clipboard", {
                  autoClose: 1e3,
                  hideProgressBar: true
                });
              },
              children: /* @__PURE__ */ jsx("div", { className: "social-item", children: /* @__PURE__ */ jsx(AiOutlineLink, { size: 20 }) })
            }
          ),
          /* @__PURE__ */ jsx(
            LinkedinShareButton,
            {
              url: window.location.href,
              title: (_d = blogDetail == null ? void 0 : blogDetail.title) == null ? void 0 : _d.en,
              summary: (_e = blogDetail == null ? void 0 : blogDetail.short_des) == null ? void 0 : _e.en,
              source: window.location.href,
              children: /* @__PURE__ */ jsx("div", { className: "social-item", children: /* @__PURE__ */ jsx(FaLinkedin, { size: 20 }) })
            }
          ),
          /* @__PURE__ */ jsx(
            TwitterShareButton,
            {
              url: window.location.href,
              title: (_f = blogDetail == null ? void 0 : blogDetail.title) == null ? void 0 : _f.en,
              hashtag: "#MahaHotAirBalloons",
              children: /* @__PURE__ */ jsx("div", { className: "social-item", children: /* @__PURE__ */ jsx(FaXTwitter, { size: 20 }) })
            }
          ),
          /* @__PURE__ */ jsx(
            FacebookShareButton,
            {
              url: window.location.href,
              hashtag: "#MahaHotAirBalloons",
              children: /* @__PURE__ */ jsx("div", { className: "social-item", children: /* @__PURE__ */ jsx(FaFacebook, { size: 20 }) })
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "details", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "BlogDetailsk",
            dangerouslySetInnerHTML: {
              __html: (_g = blogDetail == null ? void 0 : blogDetail.description) == null ? void 0 : _g.en
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "BlogDetailsk",
            dangerouslySetInnerHTML: {
              __html: (_h = blogDetail == null ? void 0 : blogDetail.more_description) == null ? void 0 : _h.en
            }
          }
        )
      ] })
    ] }) })
  ] });
}
function Index$1() {
  var _a;
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
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
        disabled: currentSlide >= ((_a2 = blogs) == null ? void 0 : _a2.length) - toCut,
        children: /* @__PURE__ */ jsx(FaAngleRight, { fontSize: "24px" })
      }
    );
  };
  return /* @__PURE__ */ jsx("div", { className: "BlogsRelated33d3 py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { md: 12, lg: 6, children: /* @__PURE__ */ jsx("div", { className: "main-title mb-3", children: "Related Blogs" }) }),
      /* @__PURE__ */ jsx(Col, { md: 12, lg: 6, children: /* @__PURE__ */ jsx("div", { className: "sliderArrows slider_pd-end2", children: /* @__PURE__ */ jsx(
        Index$3,
        {
          prevArrow: /* @__PURE__ */ jsx(PrevArrow, {}),
          nextArrow: /* @__PURE__ */ jsx(NextArrow, {})
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "SliderWrapper3 mt-3 mt-md-5", children: [
      /* @__PURE__ */ jsx("div", { className: "arrowslic22dernext", children: /* @__PURE__ */ jsx(NextArrow, {}) }),
      /* @__PURE__ */ jsx("div", { className: "arrowslic22derprev", children: /* @__PURE__ */ jsx(PrevArrow, {}) }),
      /* @__PURE__ */ jsx(Slider, { ref: sliderRef, ...settings, children: (_a = blogs) == null ? void 0 : _a.map((item) => /* @__PURE__ */ jsx(Card, { ...item, slider: true })) })
    ] })
  ] }) });
}
function Index(props) {
  const { show, setShow } = props;
  const [formData, setFormdata] = useState({
    FName: "",
    LName: "",
    email: "",
    phone: ""
  });
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const { PostRegister } = useAuthApi();
  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlePhoneChange = (value) => {
    setFormdata((prev) => ({ ...prev, phone: value }));
  };
  const handleRegisterSubmit = async () => {
    var _a, _b;
    let UpdatedData = {};
    const passd = window.crypto.randomUUID();
    UpdatedData.first_name = formData == null ? void 0 : formData.FName;
    UpdatedData.last_name = formData == null ? void 0 : formData.LName;
    UpdatedData.email = formData == null ? void 0 : formData.email;
    UpdatedData.phone = formData == null ? void 0 : formData.phone;
    UpdatedData.password = passd;
    UpdatedData.vrify_password = passd;
    UpdatedData.role = "Customer";
    setIsRegisterLoading(true);
    if (!(formData == null ? void 0 : formData.FName)) {
      toast.error("Please Add First Name");
      setIsRegisterLoading(false);
      return;
    }
    if (!(formData == null ? void 0 : formData.LName)) {
      toast.error("Please Add Last Name");
      setIsRegisterLoading(false);
      return;
    }
    if (!(formData == null ? void 0 : formData.email)) {
      toast.error("Please Add Email");
      setIsRegisterLoading(false);
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData == null ? void 0 : formData.email)) {
      toast.error("Please Add a valid Email");
      setIsRegisterLoading(false);
      return;
    }
    if (((_a = formData == null ? void 0 : formData.phone) == null ? void 0 : _a.length) <= 6) {
      toast.error("Please Add a valid Whatsapp Number");
      setIsRegisterLoading(false);
      return;
    }
    const response = await PostRegister(UpdatedData);
    console.log("🚀 ~ handleRegisterSubmit ~ response:", response);
    if ((response == null ? void 0 : response.status) == 200 || (response == null ? void 0 : response.status) == 201) {
      toast.success("Registration Successfull");
      setIsRegisterLoading(false);
    } else {
      console.log("🚀 ~ handleRegisterSubmit ~ response:", response == null ? void 0 : response.data);
      toast.error(((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.error) || "Something Went Wrong");
      setIsRegisterLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Modal, { show, fullscreen: true, onHide: () => setShow(false), children: /* @__PURE__ */ jsxs(Modal.Body, { children: [
    /* @__PURE__ */ jsx("div", { className: "w-100  d-flex justify-content-end", children: /* @__PURE__ */ jsx(
      MdOutlineClose,
      {
        onClick: () => {
          setShow(false);
        },
        className: "CloseIcon",
        size: 30,
        style: { cursor: "pointer" }
      }
    ) }),
    /* @__PURE__ */ jsxs(
      Container,
      {
        id: "pdopModealTOdk3ds",
        className: "d-flex justify-content-center align-content-center flex-column h-100",
        children: [
          /* @__PURE__ */ jsx("div", { className: "sec-title", children: "Want to Get More Discount?" }),
          /* @__PURE__ */ jsx("p", { className: "para mt-3", children: "Get Registerd with us to get awesome discount and become B2C partner" }),
          /* @__PURE__ */ jsx(Row, { className: "gy-5 w-100", children: /* @__PURE__ */ jsx(Col, { md: 12, children: /* @__PURE__ */ jsxs("div", { className: "StepForm", children: [
            /* @__PURE__ */ jsxs(Row, { className: " mt-2 mt-md-5", children: [
              /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "FName", children: "First Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    className: "inputField",
                    name: "FName",
                    type: "text",
                    onChange: handleChange,
                    value: formData == null ? void 0 : formData.FName
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "LName", children: "Last Name" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    className: "inputField",
                    name: "LName",
                    type: "text",
                    onChange: handleChange,
                    value: formData == null ? void 0 : formData.LName
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: "inputField",
                  name: "email",
                  type: "email",
                  placeholder: "abc@gmail.com",
                  onChange: handleChange,
                  value: formData == null ? void 0 : formData.email
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form_group form_groupPhone mt-4", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "whatsAppNo", children: "WhatsApp Number" }),
              /* @__PURE__ */ jsx(
                PhoneInput,
                {
                  defaultCountry: "ae",
                  onChange: (value) => handlePhoneChange(value),
                  value: formData == null ? void 0 : formData.phone
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "btnNl btnNl-primary mt-4",
                onClick: handleRegisterSubmit,
                disabled: isRegisterLoading,
                children: isRegisterLoading ? "Registring" : "Submit"
              }
            )
          ] }) }) })
        ]
      }
    )
  ] }) }) });
}
const banner = "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Blog%20Inner%20banner.webp";
function BlogInner() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
    delay: 300
  });
  const [FormModalShow, setFormModalShow] = React.useState(false);
  React.useEffect(() => {
    if (inView) {
      setFormModalShow(true);
    }
  }, [inView]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Index$4, { title: "Blogs", path: "Home - Blogs", bg: banner }),
    /* @__PURE__ */ jsx(Index$2, {}),
    /* @__PURE__ */ jsx(Index$1, {}),
    /* @__PURE__ */ jsx(Index$5, {}),
    /* @__PURE__ */ jsx(Index$6, {}),
    /* @__PURE__ */ jsx(Index, { show: FormModalShow, setShow: setFormModalShow }),
    /* @__PURE__ */ jsx("div", { ref, style: { minHeight: "20px" } })
  ] });
}
export {
  BlogInner as default
};
