import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { useNavigate, useParams } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate();
  const { lang = "en" } = useParams();
  const { title, short_des, category, readTime, thumb, route } = props;
  return /* @__PURE__ */ jsx("div", { className: `BlogsCardHomepahg32 ${lang == "ar" ? "r_dir" : "l_dir"}`, children: /* @__PURE__ */ jsxs("div", { className: "cardFlight", children: [
    /* @__PURE__ */ jsx("div", { className: "imageWrapper", children: /* @__PURE__ */ jsx("img", { src: thumb, alt: "blog_thumbnail" }) }),
    /* @__PURE__ */ jsxs("div", { className: "blogType", children: [
      /* @__PURE__ */ jsx("div", { className: "category", children: category == null ? void 0 : category.en }),
      /* @__PURE__ */ jsx("div", { className: "readTime", children: readTime == null ? void 0 : readTime.en })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "details mt-3", children: [
      /* @__PURE__ */ jsx("div", { className: "sec-title", children: title == null ? void 0 : title.en }),
      /* @__PURE__ */ jsx("p", { className: "para mt-2", children: short_des == null ? void 0 : short_des.en })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btnNl btnNl-secondary",
        onClick: () => navigate(`/${lang}/blog/${route}`),
        children: "Read More"
      }
    )
  ] }) });
}
export {
  Card as C
};
