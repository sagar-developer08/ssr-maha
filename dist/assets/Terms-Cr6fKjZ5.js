import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { I as Index } from "./Index-CydB4oe7.js";
import { I as Index$1 } from "./Index-C0iG2iZf.js";
/* empty css                */
import "react-bootstrap";
function Terms() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Maha Hot Air Balloons | Get Your Aerial Adventure Ride" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "title",
          content: "Maha Hot Air Balloons | Get Your Aerial Adventure Ride"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}terms`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}terms`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Index,
      {
        title: "Terms and Conditions",
        path: "Home - Terms and Conditions"
      }
    ),
    /* @__PURE__ */ jsx(Index$1, {})
  ] });
}
export {
  Terms as default
};
