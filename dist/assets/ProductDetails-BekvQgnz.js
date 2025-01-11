import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { I as Index$5 } from "./Index-CydB4oe7.js";
import { I as Index$6, a as Index$7 } from "./Index-8W1JpIEZ.js";
import Lightbox from "yet-another-react-lightbox";
/* empty css                */
import { FaExpandArrowsAlt, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ReactStars from "react-rating-stars-component";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { u as useCart } from "./useCart-DWVGEDuo.js";
import Slider from "react-slick";
import { I as Index$4 } from "./Index-BZVfeS_-.js";
import { I as Index$3 } from "./Index-uvPi-vXe.js";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
/* empty css                */
import "react-redux";
import "../entry-server.js";
import "react-dom/server";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "react-icons/io5";
import "framer-motion";
import "@reduxjs/toolkit";
import "react-bootstrap/Accordion";
import "react-toastify";
import "axios";
import "axios-cache-interceptor";
import "react-spinners/BounceLoader.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
import "react-whatsapp";
function Index$2({ sliderData }) {
  var _a;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  useEffect(() => {
    if (sliderData) {
      setIsOpen(false);
      setPhotoIndex(0);
      setLightboxSlides(
        sliderData.map((img) => ({
          src: img
        }))
      );
    }
  }, [sliderData]);
  const openLightBox = () => {
    const index = parseInt(
      document.querySelector(".product-main-image-figure").getAttribute("index")
    ) || 0;
    setIsOpen(true);
    setPhotoIndex(index);
  };
  function changeBgImage(e, image, index) {
    let imgs = document.querySelectorAll(".product-main-image-figure img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = image;
    }
    document.querySelector(".product-image-gallery .active").classList.remove("active");
    document.querySelector(".product-main-image-figure").setAttribute("index", index);
    e.currentTarget.classList.add("active");
  }
  if (!sliderData) {
    return /* @__PURE__ */ jsx("div", {});
  }
  return /* @__PURE__ */ jsxs("div", { className: "productSlideridk32d", children: [
    " ",
    /* @__PURE__ */ jsx("div", { className: "product-slider-wrape", children: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "product-gallery product-gallery-vertical", children: /* @__PURE__ */ jsxs("div", { className: "row g-0 m-0", children: [
        /* @__PURE__ */ jsxs("figure", { className: "product-main-image-figure", index: "0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: sliderData[0],
              alt: "productImg",
              className: "product_image"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "btn-product-gallery", onClick: openLightBox, children: /* @__PURE__ */ jsx(FaExpandArrowsAlt, { className: "icon-arrows" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "product-image-gallery", children: sliderData && ((_a = sliderData == null ? void 0 : sliderData.slice(0, 4)) == null ? void 0 : _a.map((item, index) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `product-gallery-item ${0 === index ? "active" : ""}`,
            onClick: (e) => changeBgImage(e, `${item}`, index),
            children: /* @__PURE__ */ jsx("div", { className: "img-wrapper h-100", children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "productThumImg",
                src: sliderData[index],
                alt: "product back"
              }
            ) })
          },
          index
        ))) })
      ] }) }),
      /* @__PURE__ */ jsx(
        Lightbox,
        {
          open: isOpen,
          close: () => setIsOpen(false),
          slides: lightboxSlides,
          index: photoIndex,
          onIndexChange: setPhotoIndex
        }
      )
    ] }) })
  ] });
}
const prod1$1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod1.jpg";
const prod2$1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod2.jpg";
const prod3$1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod3.jpg";
const prod4$1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod4.jpg";
function Index$1() {
  const [selected, setSelected] = useState(false);
  const [qty, setQty] = useState(1);
  useCart();
  return /* @__PURE__ */ jsx("div", { className: "productDetailsk39dsk py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs("div", { className: "breadCrumb32 w-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "breadItem", children: [
        "Merchandise ",
        /* @__PURE__ */ jsx(IoIosArrowForward, { className: "BreakIcon", size: 16 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "breadItem active", children: "T-shirt" })
    ] }),
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsx(Index$2, { sliderData: [prod1$1, prod2$1, prod3$1, prod4$1] }) }),
      /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "detailsProduct", children: [
        /* @__PURE__ */ jsx("div", { className: "name mb-2", children: "T-Shirt" }),
        /* @__PURE__ */ jsx("div", { className: "price", children: "100 Aed" }),
        /* @__PURE__ */ jsxs("div", { className: "reviews", children: [
          /* @__PURE__ */ jsx("p", { className: "rating", children: /* @__PURE__ */ jsx(
            ReactStars,
            {
              count: 5,
              edit: false,
              size: 24,
              isHalf: true,
              value: 4.5,
              emptyIcon: /* @__PURE__ */ jsx(AiFillStar, {}),
              halfIcon: /* @__PURE__ */ jsx(AiOutlineStar, {}),
              fullIcon: /* @__PURE__ */ jsx(AiFillStar, {}),
              activeColor: "#000",
              color: "#e4e2e2"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "reviewInfo", children: "(4.5 stars) " }),
          /* @__PURE__ */ jsx("p", { className: "reviewInfo", children: "• 10 reviews" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "details", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat." }),
        /* @__PURE__ */ jsxs("div", { className: "category", children: [
          /* @__PURE__ */ jsx("div", { className: "category-name", children: "Color" }),
          /* @__PURE__ */ jsxs("div", { className: "category-type", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setSelected(true),
                className: `btnNl  ${selected ? "btnNl-cate-pri" : "btnNl-cate-sec"} pdkd`,
                children: "White"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setSelected(false),
                className: `btnNl ${selected ? "btnNl-cate-sec" : "btnNl-cate-pri"} pdkd`,
                children: "Black"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "quantatity", children: [
          /* @__PURE__ */ jsx("div", { className: "qty", children: "Quantatity" }),
          /* @__PURE__ */ jsxs("div", { className: "QtyWrapper", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                onClick: () => {
                  if (qty == 1) {
                    return;
                  }
                  setQty(qty - 1);
                },
                children: /* @__PURE__ */ jsx(FaMinus, { size: 16 })
              }
            ),
            qty,
            /* @__PURE__ */ jsx(
              "div",
              {
                onClick: () => {
                  setQty(qty + 1);
                },
                children: /* @__PURE__ */ jsx(FaPlus, { size: 16 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "addtocarts w-100", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "btnNl btnNl-primary w-100 mb-3 pdDdsd",
              children: "Add To Cart"
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "btnNl btnNl-secondary w-100 pdDdsd", children: "Buy Now" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "tagShipText mt-3 text-center", children: "Free shipping over 500 Aed" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "MoreDetails", children: /* @__PURE__ */ jsxs(
      Tabs,
      {
        defaultActiveKey: "description",
        id: "fill-tab-example",
        className: "mb-3",
        children: [
          /* @__PURE__ */ jsx(Tab, { eventKey: "description", title: "Description", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere." }),
          /* @__PURE__ */ jsx(Tab, { eventKey: "reviews", title: "Reviews", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere." })
        ]
      }
    ) })
  ] }) });
}
const prod1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod1.jpg";
const prod2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod2.jpg";
const prod3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod3.jpg";
const prod4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod4.jpg";
function Index() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let cardData = [
    {
      id: 1,
      thumb: prod1,
      name: "T-shirt",
      price: "100Aed",
      category: "White | Black"
    },
    {
      id: 2,
      thumb: prod2,
      name: "Water Bottle",
      price: "100Aed",
      category: "Black"
    },
    {
      id: 3,
      thumb: prod3,
      name: "Keychain",
      price: "100Aed",
      category: "White"
    },
    {
      id: 3,
      thumb: prod4,
      name: "Cup",
      price: "100Aed",
      category: "White"
    },
    {
      id: 1,
      thumb: prod1,
      name: "T-shirt",
      price: "100Aed",
      category: "White | Black"
    },
    {
      id: 2,
      thumb: prod2,
      name: "Water Bottle",
      price: "100Aed",
      category: "Black"
    },
    {
      id: 3,
      thumb: prod3,
      name: "Keychain",
      price: "100Aed",
      category: "White"
    },
    {
      id: 3,
      thumb: prod4,
      name: "Cup",
      price: "100Aed",
      category: "White"
    }
  ];
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
  const NextArrow = () => /* @__PURE__ */ jsx(
    "button",
    {
      className: "slider_custom_arrows ms-3",
      onClick: nextSlide,
      disabled: currentSlide >= (cardData == null ? void 0 : cardData.length) - 1,
      children: /* @__PURE__ */ jsx(FaAngleRight, { fontSize: "24px" })
    }
  );
  return /* @__PURE__ */ jsx("div", { className: "merchandise32PP39 py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { md: 12, lg: 6, children: /* @__PURE__ */ jsx("div", { className: "main-title mb-3", children: "Related Products" }) }),
      /* @__PURE__ */ jsx(Col, { md: 12, lg: 6, children: /* @__PURE__ */ jsx("div", { className: "sliderArrows", children: /* @__PURE__ */ jsx(
        Index$3,
        {
          prevArrow: /* @__PURE__ */ jsx(PrevArrow, {}),
          nextArrow: /* @__PURE__ */ jsx(NextArrow, {})
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(Slider, { ref: sliderRef, ...settings, children: cardData == null ? void 0 : cardData.map((item) => /* @__PURE__ */ jsx(
      Index$4,
      {
        product: item,
        slider: true
      },
      "product" + (item == null ? void 0 : item.id)
    )) }) })
  ] }) });
}
function ProductDetails() {
  const { lang, id } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "title", content: " Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}merchandise/${id}`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}merchandise/${id}`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index$5, { title: "Merchandise", path: "Home - Merchandise" }),
    /* @__PURE__ */ jsx(Index$1, {}),
    /* @__PURE__ */ jsx(Index, {}),
    /* @__PURE__ */ jsx(Index$6, {}),
    /* @__PURE__ */ jsx(Index$7, {})
  ] });
}
export {
  ProductDetails as default
};
