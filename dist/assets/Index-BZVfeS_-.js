import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { u as useCart } from "./useCart-DWVGEDuo.js";
function Index(props) {
  var _a, _b, _c, _d;
  const { lang = "en" } = useParams();
  useDispatch();
  const { addItemstoCart } = useCart();
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `ProductListingDCardKk3 ${(props == null ? void 0 : props.slider) ? "slidersps" : ""} ${lang == "ar" ? "r_dir" : "l_dir"}`,
      ...props,
      children: /* @__PURE__ */ jsxs("div", { className: "cardProd", children: [
        /* @__PURE__ */ jsx("div", { className: "imageWrapper", children: /* @__PURE__ */ jsx(Link, { to: `/${lang}/merchandise/ds`, children: /* @__PURE__ */ jsx("img", { src: (_a = props == null ? void 0 : props.product) == null ? void 0 : _a.thumb, alt: "" }) }) }),
        /* @__PURE__ */ jsx(Link, { to: `/${lang}/merchandise/ds`, children: /* @__PURE__ */ jsxs("div", { className: "namePrice mt-2", children: [
          /* @__PURE__ */ jsx("div", { className: "name", children: (_b = props == null ? void 0 : props.product) == null ? void 0 : _b.name }),
          /* @__PURE__ */ jsx("div", { className: "price", children: (_c = props == null ? void 0 : props.product) == null ? void 0 : _c.price })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "colors", children: (_d = props == null ? void 0 : props.product) == null ? void 0 : _d.category }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "btnNl btnNl-secondary w-100 mt-3",
            onClick: () => addItemstoCart(props == null ? void 0 : props.product),
            children: [
              " ",
              "Add to cart"
            ]
          }
        )
      ] })
    }
  );
}
export {
  Index as I
};
