import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "react";
import { I as Index } from "./Index-CydB4oe7.js";
import { Row, Col, Container } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaMinus, FaPlus, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { u as useCart } from "./useCart-DWVGEDuo.js";
import { IoMdCart } from "react-icons/io";
import "../entry-server.js";
import "react-toastify";
import { FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet";
/* empty css                */
import "react-dom/server";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "react-icons/io5";
import "framer-motion";
import "@reduxjs/toolkit";
import "react-bootstrap/Accordion";
import "axios";
import "axios-cache-interceptor";
import "react-spinners/BounceLoader.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
function index$2() {
  const cartItems = useSelector((state) => state.cart.products);
  let navigate = useNavigate();
  const { clearItemsCart, removeItemsCart } = useCart();
  return /* @__PURE__ */ jsx("div", { className: "ProductsPge939d9", children: /* @__PURE__ */ jsxs("div", { className: "ProudctsWrapper", children: [
    /* @__PURE__ */ jsx("div", { className: "sec-title bdr-btm pb-3 pt-1", children: "Order Summary" }),
    cartItems == null ? void 0 : cartItems.map((item, i) => /* @__PURE__ */ jsxs(Row, { className: "mt-3 bdr-btm pt-3 pb-3", children: [
      /* @__PURE__ */ jsx(Col, { lg: "4", children: /* @__PURE__ */ jsxs("div", { className: "product-item", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "btn-remove",
            accordion: true,
            onClick: () => {
              removeItemsCart(item == null ? void 0 : item.id);
            },
            children: /* @__PURE__ */ jsx(MdCancel, { size: 25 })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "product-img", children: /* @__PURE__ */ jsx("img", { src: item == null ? void 0 : item.thumb, alt: "" }) })
      ] }) }),
      /* @__PURE__ */ jsx(Col, { lg: "8", children: /* @__PURE__ */ jsxs("div", { className: "product-details", children: [
        /* @__PURE__ */ jsx("div", { className: "cat-name", children: item == null ? void 0 : item.category }),
        /* @__PURE__ */ jsx("div", { className: "prod-name", children: item == null ? void 0 : item.name }),
        /* @__PURE__ */ jsx("div", { className: "price", children: item == null ? void 0 : item.price }),
        /* @__PURE__ */ jsxs("div", { className: "QtyWrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "qty-icon", children: /* @__PURE__ */ jsx(FaMinus, { size: 16 }) }),
          "1",
          /* @__PURE__ */ jsx("div", { className: "qty-icon", children: /* @__PURE__ */ jsx(FaPlus, { size: 16 }) })
        ] })
      ] }) })
    ] })),
    /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between mt-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btnNl btnNl-secondary",
          onClick: () => {
            navigate(`/${lang}/merchandise`);
          },
          children: "Continue Shopping"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btnNl btnNl-primary",
          onClick: () => {
            clearItemsCart();
          },
          children: "Clear Cart"
        }
      )
    ] })
  ] }) });
}
function index$1() {
  return /* @__PURE__ */ jsxs("div", { className: "SubTotalPfd93", children: [
    /* @__PURE__ */ jsxs("div", { className: "TotalWrapper", children: [
      /* @__PURE__ */ jsx("div", { className: "sec-title bdr-btm pb-3 pt-1", children: "Order Details" }),
      /* @__PURE__ */ jsxs("div", { className: "details pt-3 mt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "price mb-3", children: [
          /* @__PURE__ */ jsx("div", { children: "Price" }),
          /* @__PURE__ */ jsx("div", { children: "AED 120" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "price mb-3", children: [
          /* @__PURE__ */ jsx("div", { children: "Discount Price" }),
          /* @__PURE__ */ jsx("div", { children: "AED 20" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "discountInput mb-3 mt-3", children: [
          /* @__PURE__ */ jsx("input", { className: "inputField", type: "text", placeholder: "Coupon" }),
          /* @__PURE__ */ jsx("button", { className: "btnNl btnNl-primary pd-cst", children: "Apply" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "price Total mb-1", children: [
          /* @__PURE__ */ jsx("div", { className: "TOtalPrice", children: "Total Price" }),
          /* @__PURE__ */ jsx("div", { children: "AED 100" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "VATTax", children: "Incluside 5% VAT" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("button", { className: "btnNl btnNl-primary pd-cst mt-3 w-100", children: [
      "Place Order",
      /* @__PURE__ */ jsx(FaArrowRightLong, { className: "mx-3", size: 16 })
    ] })
  ] });
}
function index() {
  const cartItems = useSelector((state) => state.cart.products);
  let [searchParams, setSearchParams] = useSearchParams();
  const checkoutStatus = searchParams.get("checkout");
  let navigate = useNavigate();
  let { lang: lang2 } = useParams();
  return /* @__PURE__ */ jsx("div", { className: "cartPage393 py-60", children: /* @__PURE__ */ jsx(Container, { children: (cartItems == null ? void 0 : cartItems.length) ? /* @__PURE__ */ jsxs(Row, { className: "gx-lg-5", children: [
    /* @__PURE__ */ jsx(Col, { md: "8", lg: "8", children: /* @__PURE__ */ jsx(index$2, {}) }),
    /* @__PURE__ */ jsx(Col, { className: "h-100 position-relative", md: "4", lg: "4", children: /* @__PURE__ */ jsx(index$1, {}) })
  ] }) : checkoutStatus == "success" ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "w-100 d-flex justify-content-center align-items-center flex-column", children: [
    /* @__PURE__ */ jsx(FaCheck, { className: "cartBt", size: 220 }),
    /* @__PURE__ */ jsx("div", { className: "sec-title mb-3", children: "Booking Successful" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btnNl btnNl-secondary btnLk",
        onClick: () => {
          navigate(`/${lang2}`);
        },
        children: "Continue Shopping"
      }
    )
  ] }) }) : /* @__PURE__ */ jsxs("div", { className: "w-100 d-flex justify-content-center align-items-center flex-column", children: [
    /* @__PURE__ */ jsx(IoMdCart, { className: "cartBt", size: 220 }),
    /* @__PURE__ */ jsx("div", { className: "sec-title mb-3", children: "Your cart is currently empty.!" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btnNl btnNl-secondary btnLk",
        onClick: () => {
          navigate(`/${lang2}`);
        },
        children: "Continue Shopping"
      }
    )
  ] }) }) });
}
function Cart() {
  const { lang: lang2 } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "title", content: " Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang2 && `${lang2}/`}cart`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang2}`,
          href: `${void 0}/${lang2 && `${lang2}/`}cart`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index, { title: "Cart", path: "Home - Cart" }),
    /* @__PURE__ */ jsx(index, {})
  ] });
}
export {
  Cart as default
};
