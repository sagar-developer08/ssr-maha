import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import "react";
import { useParams } from "react-router-dom";
function Index({ prevArrow, nextArrow }) {
  const { lang = "en" } = useParams();
  return /* @__PURE__ */ jsx(Fragment, { children: lang == "ar" ? /* @__PURE__ */ jsxs(Fragment, { children: [
    nextArrow,
    " ",
    prevArrow
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    prevArrow,
    " ",
    nextArrow
  ] }) });
}
export {
  Index as I
};
