import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import { i as imgt1 } from "./testimonial-sfUoU7oJ.js";
import { PhoneInput } from "react-international-phone";
import { u as useAuthApi } from "./useAuthApi-BDQziAt1.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { k as axios, j as LoginUser } from "../entry-server.js";
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
import "axios";
import "axios-cache-interceptor";
import "react-spinners/BounceLoader.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
const social1 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M37.6%2020.4167C37.6%2019.1167%2037.4833%2017.8667%2037.2667%2016.6667H20V23.7583H29.8667C29.4417%2026.05%2028.15%2027.9917%2026.2083%2029.2917V33.8917H32.1333C35.6%2030.7%2037.6%2026%2037.6%2020.4167Z'%20fill='%234285F4'/%3e%3cpath%20d='M19.9995%2038.3333C24.9495%2038.3333%2029.0995%2036.6917%2032.1329%2033.8917L26.2079%2029.2917C24.5662%2030.3917%2022.4662%2031.0417%2019.9995%2031.0417C15.2245%2031.0417%2011.1829%2027.8167%209.74121%2023.4833H3.61621V28.2333C6.63288%2034.225%2012.8329%2038.3333%2019.9995%2038.3333Z'%20fill='%2334A853'/%3e%3cpath%20d='M9.74199%2023.4833C9.37533%2022.3833%209.16699%2021.2083%209.16699%2020C9.16699%2018.7917%209.37533%2017.6167%209.74199%2016.5167V11.7667H3.61699C2.33366%2014.3214%201.66586%2017.141%201.66699%2020C1.66699%2022.9583%202.37533%2025.7583%203.61699%2028.2333L9.74199%2023.4833Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M19.9995%208.95832C22.6912%208.95832%2025.1079%209.88332%2027.0079%2011.7L32.2662%206.44166C29.0912%203.48332%2024.9412%201.66666%2019.9995%201.66666C12.8329%201.66666%206.63288%205.77499%203.61621%2011.7667L9.74121%2016.5167C11.1829%2012.1833%2015.2245%208.95832%2019.9995%208.95832Z'%20fill='%23EA4335'/%3e%3c/svg%3e";
const social2 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_588_3765)'%3e%3cpath%20d='M40%2020C40%208.95431%2031.0457%201.52588e-05%2020%201.52588e-05C8.9543%201.52588e-05%200%208.95431%200%2020C0%2029.9826%207.31371%2038.2567%2016.875%2039.757V25.7813H11.7969V20H16.875V15.5938C16.875%2010.5813%2019.8609%207.81252%2024.4293%207.81252C26.6175%207.81252%2028.9062%208.20314%2028.9062%208.20314V13.125H26.3843C23.8998%2013.125%2023.125%2014.6667%2023.125%2016.2483V20H28.6719L27.7852%2025.7813H23.125V39.757C32.6863%2038.2567%2040%2029.9826%2040%2020Z'%20fill='%231877F2'/%3e%3cpath%20d='M27.7852%2025.7812L28.6719%2020H23.125V16.2483C23.125%2014.6667%2023.8998%2013.125%2026.3843%2013.125H28.9063V8.20312C28.9063%208.20312%2026.6175%207.8125%2024.4293%207.8125C19.8609%207.8125%2016.875%2010.5812%2016.875%2015.5938V20H11.7969V25.7812H16.875V39.757C17.8932%2039.9168%2018.9369%2040%2020%2040C21.0631%2040%2022.1068%2039.9168%2023.125%2039.757V25.7812H27.7852Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_588_3765'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const social3 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_588_3770)'%3e%3cpath%20d='M34.4456%2033.8022H28.509V24.5967C28.509%2022.4015%2028.4694%2019.5757%2025.4213%2019.5757C22.3293%2019.5757%2021.8562%2021.9674%2021.8562%2024.4368V33.8016H15.9195V14.8713H21.6187V17.4583H21.6985C22.2688%2016.4927%2023.093%2015.6984%2024.0832%2015.1599C25.0735%2014.6214%2026.1927%2014.3589%2027.3216%2014.4004C33.3387%2014.4004%2034.4481%2018.3192%2034.4481%2023.4173L34.4456%2033.8022ZM9.22093%2012.2836C8.53954%2012.2838%207.87341%2012.0838%207.30679%2011.7091C6.74018%2011.3344%206.29854%2010.8017%206.03768%2010.1784C5.77681%209.55514%205.70844%208.86927%205.84125%208.20754C5.97406%207.54581%206.30208%206.93794%206.78381%206.46079C7.26553%205.98364%207.87934%205.65864%208.5476%205.5269C9.21587%205.39516%209.90857%205.46259%2010.5381%205.72066C11.1677%205.97874%2011.7058%206.41586%2012.0845%206.97676C12.4631%207.53766%2012.6653%208.19715%2012.6654%208.87182C12.6655%209.31979%2012.5765%209.76338%2012.4034%2010.1773C12.2304%2010.5912%2011.9767%2010.9673%2011.6568%2011.2841C11.337%2011.6009%2010.9572%2011.8522%2010.5393%2012.0237C10.1213%2012.1952%209.67335%2012.2836%209.22093%2012.2836ZM12.1893%2033.8022H6.2464V14.8713H12.1893V33.8022ZM37.4053%200.00245871H3.26324C2.48831%20-0.00620023%201.74157%200.290121%201.18718%200.826306C0.63279%201.36249%200.316098%202.09467%200.306641%202.86196V36.808C0.315775%2037.5757%200.63228%2038.3084%201.18665%2038.8451C1.74102%2039.3819%202.48792%2039.6788%203.26324%2039.6706H37.4053C38.1822%2039.6802%2038.9311%2039.3842%2039.4877%2038.8475C40.0443%2038.3107%2040.3629%2037.5772%2040.3736%2036.808V2.85951C40.3626%202.0907%2040.0437%201.35769%2039.4871%200.821516C38.9306%200.285343%2038.1818%20-0.0101312%2037.4053%208.46779e-06'%20fill='%230A66C2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_588_3770'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const social4 = "data:image/svg+xml,%3csvg%20width='480'%20height='24'%20viewBox='0%200%20480%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='12.5'%20y1='11.5'%20x2='216.5'%20y2='11.5'%20stroke='black'%20stroke-opacity='0.4'/%3e%3cpath%20d='M233.672%2012.8672V12.6875C233.672%2012.0781%20233.76%2011.513%20233.938%2010.9922C234.115%2010.4661%20234.37%2010.0104%20234.703%209.625C235.036%209.23438%20235.44%208.93229%20235.914%208.71875C236.388%208.5%20236.919%208.39062%20237.508%208.39062C238.102%208.39062%20238.635%208.5%20239.109%208.71875C239.589%208.93229%20239.995%209.23438%20240.328%209.625C240.667%2010.0104%20240.924%2010.4661%20241.102%2010.9922C241.279%2011.513%20241.367%2012.0781%20241.367%2012.6875V12.8672C241.367%2013.4766%20241.279%2014.0417%20241.102%2014.5625C240.924%2015.0833%20240.667%2015.5391%20240.328%2015.9297C239.995%2016.3151%20239.591%2016.6172%20239.117%2016.8359C238.648%2017.0495%20238.117%2017.1562%20237.523%2017.1562C236.93%2017.1562%20236.396%2017.0495%20235.922%2016.8359C235.448%2016.6172%20235.042%2016.3151%20234.703%2015.9297C234.37%2015.5391%20234.115%2015.0833%20233.938%2014.5625C233.76%2014.0417%20233.672%2013.4766%20233.672%2012.8672ZM235.117%2012.6875V12.8672C235.117%2013.2891%20235.167%2013.6875%20235.266%2014.0625C235.365%2014.4323%20235.513%2014.7604%20235.711%2015.0469C235.914%2015.3333%20236.167%2015.5599%20236.469%2015.7266C236.771%2015.888%20237.122%2015.9688%20237.523%2015.9688C237.919%2015.9688%20238.266%2015.888%20238.562%2015.7266C238.865%2015.5599%20239.115%2015.3333%20239.312%2015.0469C239.51%2014.7604%20239.659%2014.4323%20239.758%2014.0625C239.862%2013.6875%20239.914%2013.2891%20239.914%2012.8672V12.6875C239.914%2012.2708%20239.862%2011.8776%20239.758%2011.5078C239.659%2011.1328%20239.508%2010.8021%20239.305%2010.5156C239.107%2010.224%20238.857%209.99479%20238.555%209.82812C238.258%209.66146%20237.909%209.57812%20237.508%209.57812C237.112%209.57812%20236.763%209.66146%20236.461%209.82812C236.164%209.99479%20235.914%2010.224%20235.711%2010.5156C235.513%2010.8021%20235.365%2011.1328%20235.266%2011.5078C235.167%2011.8776%20235.117%2012.2708%20235.117%2012.6875ZM244.625%209.875V17H243.18V8.54688H244.586L244.625%209.875ZM247.266%208.5L247.258%209.84375C247.138%209.81771%20247.023%209.80208%20246.914%209.79688C246.81%209.78646%20246.69%209.78125%20246.555%209.78125C246.221%209.78125%20245.927%209.83333%20245.672%209.9375C245.417%2010.0417%20245.201%2010.1875%20245.023%2010.375C244.846%2010.5625%20244.706%2010.7865%20244.602%2011.0469C244.503%2011.3021%20244.438%2011.5833%20244.406%2011.8906L244%2012.125C244%2011.6146%20244.049%2011.1354%20244.148%2010.6875C244.253%2010.2396%20244.411%209.84375%20244.625%209.5C244.839%209.15104%20245.109%208.88021%20245.438%208.6875C245.771%208.48958%20246.167%208.39062%20246.625%208.39062C246.729%208.39062%20246.849%208.40365%20246.984%208.42969C247.12%208.45052%20247.214%208.47396%20247.266%208.5Z'%20fill='black'%20fill-opacity='0.4'/%3e%3cline%20x1='263.5'%20y1='11.5'%20x2='467.5'%20y2='11.5'%20stroke='black'%20stroke-opacity='0.4'/%3e%3c/svg%3e";
function Index$3(props) {
  const { handleChange, handleSubmit, isLoading, setForgotPassword } = props;
  return /* @__PURE__ */ jsx("div", { className: "LoginCustomer32", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
    /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "formWrapper", children: [
      /* @__PURE__ */ jsx("div", { className: "form-title", children: "Welcome to Maha Balloon Adventures Dubai!" }),
      /* @__PURE__ */ jsx("p", { className: "form-details mt-2", children: "Please sign in to your account to get fantastic offers, discounts, and other benefits. You can make residual income by signing up to the best referral and affiliate marketing program with the best hot air balloon adventure company in the Middle East." }),
      /* @__PURE__ */ jsxs("div", { className: "loginform mt-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "inputField",
              name: "email",
              type: "email",
              placeholder: "abc@gmail.com",
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "password", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Password" }),
            /* @__PURE__ */ jsx("span", { onClick: () => setForgotPassword(true), children: "Forget Password?" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "inputField",
              name: "password",
              type: "password",
              onChange: handleChange
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 btnWrapper", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "btnNl btnNl-primary",
              onClick: (e) => {
                if (isLoading) {
                  return;
                }
                handleSubmit(e);
              },
              children: isLoading ? "Logging..." : "Login"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "btnNl btnNl-secondary",
              onClick: () => {
                props.setlogIn(false);
              },
              children: "Create Account"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "SoicalWrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "OrSOicalWrapper", children: /* @__PURE__ */ jsx("img", { src: social4, alt: "" }) }),
          /* @__PURE__ */ jsxs("div", { className: "SocialLog", children: [
            /* @__PURE__ */ jsx("img", { src: social1, alt: "google-login" }),
            /* @__PURE__ */ jsx("img", { src: social2, alt: "facebook-login" }),
            /* @__PURE__ */ jsx("img", { src: social3, alt: "linkedIn-login" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsx("div", { className: "imgWrapper", children: /* @__PURE__ */ jsx("img", { src: imgt1, alt: "" }) }) })
  ] }) }) });
}
function Index$2(props) {
  const {
    handleChange,
    formData,
    handleRegisterSubmit,
    isRegisterSending,
    setFormData
  } = props;
  return /* @__PURE__ */ jsx("div", { className: "RegisterCustomer32", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
    /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "formWrapper", children: [
      /* @__PURE__ */ jsx("div", { className: "form-title", children: "Welcome to Maha Balloon Adventures Dubai!" }),
      /* @__PURE__ */ jsx("p", { className: "form-details mt-2", children: "Please sign in to your account to get fantastic offers, discounts, and other benefits. You can make residual income by signing up to the best referral and affiliate marketing program with the best hot air balloon adventure company in the Middle East." }),
      /* @__PURE__ */ jsxs("div", { className: "ReGisterForm mt-2", children: [
        /* @__PURE__ */ jsx("div", { className: "regFormWrapper", children: /* @__PURE__ */ jsxs(Row, { children: [
          /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "first_name", children: "First Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "inputField",
                name: "first_name",
                type: "text",
                placeholder: "",
                onChange: handleChange,
                value: formData == null ? void 0 : formData.first_name
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "last_name", children: "Last Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "inputField",
                name: "last_name",
                type: "text",
                placeholder: "",
                value: formData == null ? void 0 : formData.last_name,
                onChange: handleChange
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "inputField",
                name: "email",
                type: "email",
                placeholder: "abc@gmail.com",
                value: formData == null ? void 0 : formData.email,
                onChange: handleChange
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group form_groupPhone mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "Mobile", children: "Mobile Number" }),
            /* @__PURE__ */ jsx(
              PhoneInput,
              {
                defaultCountry: "ae",
                value: formData == null ? void 0 : formData.phone,
                onChange: (phone) => setFormData((prev) => ({
                  ...prev,
                  ["phone"]: phone
                }))
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Col, { lg: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "inputField",
                name: "password",
                type: "password",
                placeholder: "",
                onChange: handleChange
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Col, { lg: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "vrify_password", children: "Verify Password" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "inputField",
                name: "vrify_password",
                type: "password",
                placeholder: "",
                onChange: handleChange
              }
            )
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 btnWrapper", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "btnNl btnNl-secondary",
              onClick: () => {
                props.setlogIn(true);
              },
              children: "Back"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "btnNl btnNl-primary",
              onClick: (e) => {
                handleRegisterSubmit(e);
              },
              children: isRegisterSending ? "Sending..." : "Create Account"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsx("div", { className: "imgWrapper", children: /* @__PURE__ */ jsx("img", { src: imgt1, alt: "" }) }) })
  ] }) }) });
}
function Index$1(props) {
  const [formData, setFormData] = useState({ email: "" });
  const [isLoading, setIsLoaidng] = useState(false);
  const { PostForgotPass } = useAuthApi();
  let navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    var _a, _b;
    setIsLoaidng(true);
    if (!(formData == null ? void 0 : formData.email)) {
      toast.error("Please Enter a Valid Email");
      setIsLoaidng(false);
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData == null ? void 0 : formData.email)) {
      setIsLoaidng(false);
      toast.error("Email is Invalid");
      return;
    }
    let Payload = {
      emailOrPhone: formData == null ? void 0 : formData.email
    };
    const response = await PostForgotPass(Payload);
    console.log("🚀 ~ handleSubmit ~ response:", response);
    if ((response == null ? void 0 : response.status) == 200 || (response == null ? void 0 : response.status) == 201) {
      setIsLoaidng(false);
      props == null ? void 0 : props.onhide();
      toast.success(
        ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.message) || "Verification Token Sent to Email"
      );
      props == null ? void 0 : props.backGO();
      navigate("/");
    } else {
      setIsLoaidng(false);
      toast.error(((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.error) || "Something Went Wrong");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "forgetPasswrodForm3232", children: [
    /* @__PURE__ */ jsx("div", { className: "form-title mb-3", children: "Generate Password" }),
    /* @__PURE__ */ jsx("div", { className: "regFormWrapper", children: /* @__PURE__ */ jsxs(Row, { className: "g-3", children: [
      /* @__PURE__ */ jsx(Col, { lg: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "pass", children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "inputField",
            name: "email",
            type: "email",
            placeholder: "",
            onChange: handleChange
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(Col, { lg: 12, children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-secondary mx-3",
            onClick: () => props.backGO(),
            children: "Back"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary",
            onClick: handleSubmit,
            disabled: isLoading,
            children: isLoading ? "Sending..." : "Submit"
          }
        )
      ] })
    ] }) })
  ] });
}
const Api = axios.create({
  timeout: 6e4
});
Api.interceptors.request.use(
  (request) => {
    return {
      ...request,
      onUploadProgress: function(progressEvent) {
        console.log(
          Math.round(progressEvent.loaded * 100 / progressEvent.total)
        );
      }
    };
  },
  (error) => {
    console.log("interceptor request ERROR", error);
    return error == null ? void 0 : error.request;
  }
);
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("interceptor response ERROR", error);
    return error == null ? void 0 : error.response;
  }
);
function Index(props) {
  const [logIn, setlogIn] = useState(true);
  const [ForgotPassword, setForgotPassword] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { PostRegister, PostLogin } = useAuthApi();
  const backGO = () => {
    setlogIn(true);
    setForgotPassword(false);
    navigate("/");
  };
  let initData = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    vrify_password: "",
    role: ""
  };
  const [RegisterformData, setRegisterFormData] = useState({ ...initData });
  const [isRegisterSending, setIsRegisterSending] = useState(false);
  const handleRegisterChange = (e) => {
    setRegisterFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleRegisterSubmit = async (e) => {
    var _a;
    let UpdatedData = { ...RegisterformData };
    UpdatedData.role = "Customer";
    setIsRegisterSending(true);
    e.preventDefault();
    //! validation
    if (!UpdatedData.first_name) {
      setIsRegisterSending(false);
      toast.error("Please Enter First Name");
      return;
    }
    if (!UpdatedData.last_name) {
      setIsRegisterSending(false);
      toast.error("Please Enter Last Name");
      return;
    }
    if (!UpdatedData.email) {
      setIsRegisterSending(false);
      toast.error("Please Enter Email Address");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(UpdatedData == null ? void 0 : UpdatedData.email)) {
      setIsRegisterSending(false);
      toast.error("Email is Invalid");
      return;
    }
    if (!UpdatedData.phone) {
      setIsRegisterSending(false);
      toast.error("Please Enter Phone No");
      return;
    }
    if (!UpdatedData.password) {
      setIsRegisterSending(false);
      toast.error("Please Enter A Valid Password");
      return;
    }
    if (UpdatedData.password !== (UpdatedData == null ? void 0 : UpdatedData.vrify_password)) {
      setIsRegisterSending(false);
      toast.error("Please Enter Matching Password");
      return;
    }
    const response = await PostRegister(UpdatedData);
    console.log("🚀 ~ handleRegisterSubmit ~ response:", response);
    if ((response == null ? void 0 : response.status) == 200 || (response == null ? void 0 : response.status) == 201) {
      toast.success("Registration Successfull, Pending Approval ");
      setIsRegisterSending(false);
      setRegisterFormData({ ...initData });
      setlogIn(true);
    } else {
      setIsRegisterSending(false);
      toast.error(((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.error) || "Something Went Wrong");
    }
  };
  const [LogFormData, setLogFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsloadng] = useState(false);
  const handleChange = (e) => {
    setLogFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    var _a, _b, _c;
    e.preventDefault();
    setIsloadng(true);
    //! validation
    if (!(LogFormData == null ? void 0 : LogFormData.email)) {
      setIsloadng(false);
      toast.error("Please Enter Valid Email");
      return;
    }
    if (!(LogFormData == null ? void 0 : LogFormData.password)) {
      setIsloadng(false);
      toast.error("Please Enter Valid Password");
      return;
    }
    const response = await PostLogin(LogFormData);
    console.log("🚀 ~ handleSubmit ~ response:", response);
    if ((response == null ? void 0 : response.status) == 200 || (response == null ? void 0 : response.status) == 201) {
      let payload = {
        userData: (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.user,
        token: (_b = response == null ? void 0 : response.data) == null ? void 0 : _b.token
      };
      dispatch(LoginUser(payload));
      setIsloadng(false);
      toast.success("Logged In  Successfull");
      setLogFormData({ email: "", password: "" });
      props == null ? void 0 : props.onHide();
    } else {
      setIsloadng(false);
      toast.error(((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.error) || "Invalid Credentials");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "CustomerRegister3929", children: /* @__PURE__ */ jsxs(
    Modal,
    {
      ...props,
      size: "lg",
      fullscreen: true,
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      children: [
        /* @__PURE__ */ jsx(Modal.Header, { closeButton: true, children: /* @__PURE__ */ jsx(Modal.Title, { id: "contained-modal-title-vcenter" }) }),
        /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsx("div", { className: "ItemWrapperCust", children: ForgotPassword ? /* @__PURE__ */ jsx(
          Index$1,
          {
            onhide: props == null ? void 0 : props.onHide,
            ForgotPassword,
            setForgotPassword,
            backGO
          }
        ) : logIn ? /* @__PURE__ */ jsx(
          Index$3,
          {
            setlogIn,
            handleChange,
            handleSubmit,
            isLoading,
            setForgotPassword
          }
        ) : /* @__PURE__ */ jsx(
          Index$2,
          {
            setlogIn,
            formData: RegisterformData,
            setFormData: setRegisterFormData,
            handleChange: handleRegisterChange,
            handleRegisterSubmit,
            isRegisterSending
          }
        ) }) })
      ]
    }
  ) });
}
export {
  Index as default
};
