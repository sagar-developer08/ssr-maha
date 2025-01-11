import { jsx, jsxs } from "react/jsx-runtime";
import "react";
/* empty css                */
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { IoSadOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";
function index() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx("div", { className: "Pag404eDiek", children: /* @__PURE__ */ jsxs(Container, { className: "py-60  text-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "notFound-title", children: [
      "4",
      /* @__PURE__ */ jsx(IoSadOutline, {}),
      "4"
    ] }),
    /* @__PURE__ */ jsx("p", { children: "But don’t be afraid. Just click on Go To Home Button." }),
    /* @__PURE__ */ jsx("button", { className: "btnNl btnNl-primary", onClick: () => navigate("/"), children: "Go To Home" })
  ] }) });
}
function NotFound() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "title", content: "Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}404`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(index, {})
  ] });
}
export {
  NotFound as default
};
