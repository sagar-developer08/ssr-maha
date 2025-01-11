import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { I as Index } from "./Index-CydB4oe7.js";
import { Row, Col, Container } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
/* empty css                */
function index$1() {
  const cartItems = useSelector((state) => state.cart.products);
  let navigate = useNavigate();
  return /* @__PURE__ */ jsx("div", { className: "wishlistProducts", children: /* @__PURE__ */ jsxs("div", { className: "ProudctsWrapper", children: [
    /* @__PURE__ */ jsx("div", { className: "sec-title bdr-btm pb-3 pt-1", children: "Wishlist Summary" }),
    cartItems == null ? void 0 : cartItems.map((item, i) => /* @__PURE__ */ jsxs(Row, { className: "mt-3 bdr-btm pt-3 pb-3", children: [
      /* @__PURE__ */ jsx(Col, { lg: "4", children: /* @__PURE__ */ jsxs("div", { className: "product-item", children: [
        /* @__PURE__ */ jsx("div", { className: "btn-remove", children: /* @__PURE__ */ jsx(MdCancel, { size: 25 }) }),
        /* @__PURE__ */ jsx("div", { className: "product-img", children: /* @__PURE__ */ jsx("img", { src: item == null ? void 0 : item.thumb, alt: "" }) })
      ] }) }),
      /* @__PURE__ */ jsx(Col, { lg: "4", children: /* @__PURE__ */ jsxs("div", { className: "product-details", children: [
        /* @__PURE__ */ jsx("div", { className: "cat-name", children: item == null ? void 0 : item.category }),
        /* @__PURE__ */ jsx("div", { className: "prod-name", children: item == null ? void 0 : item.name }),
        /* @__PURE__ */ jsx("div", { className: "price", children: item == null ? void 0 : item.price })
      ] }) }),
      /* @__PURE__ */ jsx(Col, { lg: 4, children: /* @__PURE__ */ jsx("div", { className: "w-100 h-100 d-flex justify-content-start align-items-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "btnNl btnNl-primary",
          onClick: () => {
            toast.success("Wow so easy !");
          },
          children: "Add to Cart"
        }
      ) }) })
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
      /* @__PURE__ */ jsx("button", { className: "btnNl btnNl-primary", children: "Clear Wishlist" })
    ] })
  ] }) });
}
function index() {
  const wishlistItems = useSelector((state) => state.wishlist.products);
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx("div", { className: "wishlistPage33d py-60", children: /* @__PURE__ */ jsx(Container, { children: (wishlistItems == null ? void 0 : wishlistItems.length) ? /* @__PURE__ */ jsx(Row, { className: "gx-lg-5", children: /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx(index$1, {}) }) }) : /* @__PURE__ */ jsxs("div", { className: "w-100 d-flex justify-content-center align-items-center flex-column", children: [
    /* @__PURE__ */ jsx(FaHeart, { className: "wishBtl", size: 220 }),
    /* @__PURE__ */ jsx("div", { className: "sec-title mb-3", children: "Your Wishlist is currently empty.!" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btnNl btnNl-secondary btnLk",
        onClick: () => {
          navigate(`/`);
        },
        children: "Continue Shopping"
      }
    )
  ] }) }) });
}
function Wishlist() {
  const { lang: lang2 } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: " Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "title", content: "Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang2 && `${lang2}/`}wishlist`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang2}`,
          href: `${void 0}/${lang2 && `${lang2}/`}wishlist`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index, { title: "Wishlist", path: "Home - Wishlist" }),
    /* @__PURE__ */ jsx(index, {})
  ] });
}
export {
  Wishlist as default
};
