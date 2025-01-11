import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { u as useAuthApi } from "./useAuthApi-BDQziAt1.js";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { j as LoginUser } from "../entry-server.js";
import { PhoneInput } from "react-international-phone";
import { BsUpload } from "react-icons/bs";
import { I as Index$b } from "./Index-C0iG2iZf.js";
import { Helmet } from "react-helmet";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import Modal$1 from "react-bootstrap/Modal";
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
const member1 = "/assets/member1-oJwuVx7t.png";
function Index$a(props) {
  useState(30);
  const [LogFormData, setLogFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsloadng] = useState(false);
  const dispatch = useDispatch();
  const { PostLogin } = useAuthApi();
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
      props == null ? void 0 : props.onhide();
    } else {
      setIsloadng(false);
      toast.error(((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.error) || "Invalid Credentials");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "LoginB2Bdk003", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
    /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "formWrapper", children: [
      /* @__PURE__ */ jsx("div", { className: "form-title", children: "Welcome to Maha Balloon Adventures Dubai!" }),
      /* @__PURE__ */ jsx("p", { className: "form-details", children: "Please sign in to your account to get fantastic offers, discounts, and other benefits. You can make residual income by signing up to the best referral and affiliate marketing program with the best hot air balloon adventure company in the Middle East." }),
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
            /* @__PURE__ */ jsx("span", { onClick: () => props == null ? void 0 : props.setForgotPassword(true), children: "Forget Password?" })
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
              className: "btnNl btnNl-secondary",
              onClick: () => {
                props.setlogIn(false);
              },
              children: "Create Account"
            }
          ),
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
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsx("div", { className: "imgWrapper", children: /* @__PURE__ */ jsx("img", { src: member1, alt: "" }) }) })
  ] }) }) });
}
function Index$9({ Step = 30 }) {
  return /* @__PURE__ */ jsx("div", { className: "ProgressStep332", children: /* @__PURE__ */ jsx("div", { className: "progressSteper", style: { width: `${Step}%` } }) });
}
function Index$8(props) {
  const {
    Currentb2bType,
    handleChange,
    formData,
    RegisterComplete,
    setFormData
  } = props;
  return /* @__PURE__ */ jsxs("div", { className: "registerForm3232d", children: [
    RegisterComplete ? /* @__PURE__ */ jsx("div", { className: "form-title mb-3", children: "Registration Successfull" }) : null,
    /* @__PURE__ */ jsx("div", { className: "form-title mb-1", children: props == null ? void 0 : props.title }),
    /* @__PURE__ */ jsx("div", { className: "regFormWrapper", children: /* @__PURE__ */ jsxs(Row, { children: [
      Currentb2bType == "company" ? /* @__PURE__ */ jsx(Col, { md: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "first_name", children: "Company Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "inputField",
            name: "company_name",
            type: "text",
            placeholder: "",
            disabled: RegisterComplete,
            onChange: handleChange,
            value: formData == null ? void 0 : formData.company_name
          }
        )
      ] }) }) : null,
      /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "first_name", children: "First Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "inputField",
            name: "first_name",
            type: "text",
            placeholder: "",
            disabled: RegisterComplete,
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
            onChange: handleChange,
            disabled: RegisterComplete,
            value: formData == null ? void 0 : formData.last_name
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
            onChange: handleChange,
            disabled: RegisterComplete,
            value: formData == null ? void 0 : formData.email
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
            onChange: (phone) => setFormData((prev) => ({ ...prev, ["phone"]: phone })),
            disabled: RegisterComplete
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
            onChange: handleChange,
            disabled: RegisterComplete
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
            onChange: handleChange,
            disabled: RegisterComplete
          }
        )
      ] }) })
    ] }) })
  ] });
}
function Index$7(props) {
  const { handleOTPChange } = props;
  return /* @__PURE__ */ jsxs("div", { className: "emailVerity939", children: [
    /* @__PURE__ */ jsx("div", { className: "form-title mb-3", children: props == null ? void 0 : props.title }),
    /* @__PURE__ */ jsx("div", { className: "emailVerify", children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "enteredOtp", children: "Enter Code" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "inputField",
          name: "enteredOtp",
          type: "text",
          placeholder: "",
          onChange: handleOTPChange
        }
      )
    ] }) })
  ] });
}
function Index$6(props) {
  const { socailLinks, setSoicalLinks } = props;
  let InFIelds = [
    {
      label: "Instagram ID",
      name: "InstagramID"
    },
    {
      label: "TikTok ID",
      name: "TikTokID"
    },
    {
      label: "Youtube Channel",
      name: "YoutubeChannel"
    },
    {
      label: "Snapchat ID",
      name: "SnapchatID"
    },
    {
      label: "LinkedIn ID",
      name: "LinkedInID"
    },
    {
      label: "Weibo ID",
      name: "WeiboID"
    },
    {
      label: "WeChat ID",
      name: "WeChatID"
    },
    {
      label: "Douyin ID",
      name: "DouyinID"
    },
    {
      label: "Zhihu ID",
      name: "ZhihuID"
    },
    {
      label: "Tencent ID",
      name: "TencentID"
    },
    {
      label: "Kuaishou ID",
      name: "Kuaishou ID"
    },
    {
      label: "Youku ID",
      name: "Youku ID"
    },
    {
      label: "Xiaohongshu ID",
      name: "XiaohongshuID"
    },
    {
      label: "Douban ID",
      name: "DoubanID"
    },
    {
      label: "VKontakte ID",
      name: "VKontakteID"
    },
    {
      label: "Telegram ID",
      name: "TelegramID"
    },
    {
      label: "Twitter ID",
      name: "TwitterID"
    },
    {
      label: "RUTUBE ID",
      name: "RUTUBEID"
    },
    {
      label: "Live Journal ID",
      name: "LiveJournalID"
    },
    {
      label: "Odnoklassniki ID",
      name: "OdnoklassnikiID"
    },
    {
      label: "My World@Mail.Ru",
      name: "MyWorldMailRu"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "CreatorForm233l", children: [
    /* @__PURE__ */ jsx("div", { className: "form-title mb-3", children: props == null ? void 0 : props.title }),
    /* @__PURE__ */ jsx("p", { className: "para mb-3", children: "Please share all your social media channels so that we can register you on our platform easily" }),
    /* @__PURE__ */ jsx("div", { className: "regFormWrapper", children: /* @__PURE__ */ jsx(Row, { children: InFIelds == null ? void 0 : InFIelds.map((item) => /* @__PURE__ */ jsx(Col, { lg: 4, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: item == null ? void 0 : item.name, children: item == null ? void 0 : item.label }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "inputField",
          name: item == null ? void 0 : item.name,
          type: "text",
          placeholder: "",
          value: socailLinks == null ? void 0 : socailLinks[item == null ? void 0 : item.name],
          onChange: (e) => {
            setSoicalLinks((prev) => ({
              ...prev,
              [e.target.name]: e.target.value
            }));
          }
        }
      )
    ] }) })) }) })
  ] });
}
function Index$5(props) {
  const cloudinaryRaf = useRef();
  const { widgetRef, setUploadedUrls } = props;
  useEffect(() => {
    cloudinaryRaf.current = window.cloudinary;
    widgetRef.current = cloudinaryRaf.current.createUploadWidget(
      {
        cloudName: void 0,
        uploadPreset: void 0,
        apiKey: void 0,
        sources: ["local"],
        resourceType: "image",
        clientAllowedFormats: "image",
        maxRawFileSize: 5e6,
        maxImageFileSize: 5e6,
        maxFileSize: 5e6,
        multiple: false,
        cropping: true
      },
      async function(error, result) {
        var _a;
        if (error !== void 0) {
          widgetRef.current.close();
          toast.error(
            (error == null ? void 0 : error.statusText) || "Something Wrong with File, please try again"
          );
          return;
        }
        if ((result == null ? void 0 : result.event) == "success") {
          await setUploadedUrls((_a = result == null ? void 0 : result.info) == null ? void 0 : _a.secure_url);
          toast.success("File Uploaded Successfully");
        }
      }
    );
  }, []);
  return /* @__PURE__ */ jsx("div", { id: "UploadCloudinarkd93" });
}
function Index$4(props) {
  const {
    handleChange,
    UserIdsUploadForRead,
    setUploadTermsAgree,
    UploadTermsAgree,
    Currentb2bType,
    setUploadedUrls,
    UploadedUrls,
    currentFile,
    setCurrentFile,
    setTotalUploads,
    TotalUploads,
    UrlDocOpen,
    currentStep
  } = props;
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isViewTerms, setIsViewTerms] = useState(false);
  const handleCloseTerms = () => {
    setIsViewTerms(false);
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/latest/global/all.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const widgetRef = useRef();
  useEffect(() => {
    if (currentFile) {
      widgetRef.current.open();
    }
  }, [currentFile, isScriptLoaded]);
  useEffect(() => {
    if (UploadedUrls) {
      setTotalUploads((prev) => ({ ...prev, [currentFile]: UploadedUrls }));
    }
  }, [UploadedUrls]);
  if (!isScriptLoaded) {
    return /* @__PURE__ */ jsx(Fragment, { children: "Loading..." });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx(
      "script",
      {
        fetchpriority: "high",
        async: true,
        defer: true,
        src: "https://upload-widget.cloudinary.com/latest/global/all.js",
        type: "text/javascript"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "IdUploadForm390L", id: "Upload_Form0s0", children: [
      UrlDocOpen ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "form-title mb-3", children: "Please Proceed with Documentation Upload" }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "form-title mb-3", children: props == null ? void 0 : props.title }) }),
      /* @__PURE__ */ jsxs("div", { className: "IdUploadsWrapper", children: [
        /* @__PURE__ */ jsx(
          Index$5,
          {
            widgetRef,
            currentFile,
            setUploadedUrls
          }
        ),
        Currentb2bType == "company" ? /* @__PURE__ */ jsxs(Row, { children: [
          /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs("label", { htmlFor: "trade_lic", className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "trade_lic", children: "Trade License" }),
            /* @__PURE__ */ jsxs(Row, { className: "w-100 gy-3", children: [
              /* @__PURE__ */ jsx(Col, { md: 7, children: (TotalUploads == null ? void 0 : TotalUploads.trade_lic) ? /* @__PURE__ */ jsx("img", { src: TotalUploads == null ? void 0 : TotalUploads.trade_lic, width: 120 }) : /* @__PURE__ */ jsx(
                "input",
                {
                  className: "inputField",
                  name: "trade_lic",
                  type: "text",
                  placeholder: "",
                  disabled: true
                }
              ) }),
              /* @__PURE__ */ jsx(Col, { md: 5, children: /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "trade_lic",
                  className: "FileUPloadWrapper",
                  onClick: async () => {
                    setCurrentFile("trade_lic");
                  },
                  children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "trade_lic", children: "Upload(Image)" }),
                    /* @__PURE__ */ jsx(BsUpload, {})
                  ]
                }
              ) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "trn_cert", children: "TRN Certificate" }),
            /* @__PURE__ */ jsxs(Row, { className: "w-100 gy-3", children: [
              /* @__PURE__ */ jsx(Col, { md: 7, children: (TotalUploads == null ? void 0 : TotalUploads.trn_cert) ? /* @__PURE__ */ jsx("img", { src: TotalUploads == null ? void 0 : TotalUploads.trn_cert, width: 120 }) : /* @__PURE__ */ jsx(
                "input",
                {
                  className: "inputField",
                  name: "trn_cert",
                  type: "text",
                  placeholder: "",
                  disabled: true
                }
              ) }),
              /* @__PURE__ */ jsx(Col, { md: 5, children: /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "trn_cert",
                  className: "FileUPloadWrapper",
                  onClick: async () => {
                    setCurrentFile("trn_cert");
                  },
                  children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "trn_cert", children: "Upload(Image)" }),
                    /* @__PURE__ */ jsx(BsUpload, {})
                  ]
                }
              ) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "visa_id", children: "Visa Copy of Owner" }),
            /* @__PURE__ */ jsxs(Row, { className: "w-100 gy-3", children: [
              /* @__PURE__ */ jsx(Col, { md: 7, children: (TotalUploads == null ? void 0 : TotalUploads.visa_id) ? /* @__PURE__ */ jsx("img", { src: TotalUploads == null ? void 0 : TotalUploads.visa_id, width: 120 }) : /* @__PURE__ */ jsx(
                "input",
                {
                  className: "inputField",
                  name: "visa_id",
                  type: "text",
                  placeholder: "",
                  disabled: true
                }
              ) }),
              /* @__PURE__ */ jsx(Col, { md: 5, children: /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "visa_id",
                  className: "FileUPloadWrapper",
                  onClick: async () => {
                    setCurrentFile("visa_id");
                  },
                  children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "visa_id", children: "Upload(Image)" }),
                    /* @__PURE__ */ jsx(BsUpload, {})
                  ]
                }
              ) })
            ] })
          ] }) })
        ] }) : null,
        /* @__PURE__ */ jsxs(Row, { children: [
          /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "passport_id", children: [
              "Passport Copy ",
              Currentb2bType == "company" ? "of owner" : ""
            ] }),
            /* @__PURE__ */ jsxs(Row, { className: "w-100 gy-3", children: [
              /* @__PURE__ */ jsx(Col, { md: 7, children: (TotalUploads == null ? void 0 : TotalUploads.passport_id) ? /* @__PURE__ */ jsx("img", { src: TotalUploads == null ? void 0 : TotalUploads.passport_id, width: 120 }) : /* @__PURE__ */ jsx(
                "input",
                {
                  className: "inputField",
                  name: "passport_id",
                  type: "text",
                  placeholder: "",
                  disabled: true
                }
              ) }),
              /* @__PURE__ */ jsx(Col, { md: 5, children: /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "passport_id",
                  className: "FileUPloadWrapper",
                  onClick: async () => {
                    await setCurrentFile("passport_id");
                  },
                  children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "passport_id", children: "Upload(Image)" }),
                    /* @__PURE__ */ jsx(BsUpload, {})
                  ]
                }
              ) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs("label", { htmlFor: "emt_id", className: "form_group mt-4", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "emt_id", children: [
              "Emirates ID / National ID",
              " ",
              Currentb2bType == "company" ? "of owner" : ""
            ] }),
            /* @__PURE__ */ jsxs(Row, { className: "w-100 gy-3", children: [
              /* @__PURE__ */ jsx(Col, { md: 7, children: (TotalUploads == null ? void 0 : TotalUploads.emt_id) ? /* @__PURE__ */ jsx("img", { src: TotalUploads == null ? void 0 : TotalUploads.emt_id, width: 120 }) : /* @__PURE__ */ jsx(
                "input",
                {
                  className: "inputField",
                  name: "emt_id",
                  type: "text",
                  placeholder: "",
                  disabled: true
                }
              ) }),
              /* @__PURE__ */ jsx(Col, { md: 5, children: /* @__PURE__ */ jsxs(
                "label",
                {
                  htmlFor: "emt_id",
                  className: "FileUPloadWrapper",
                  onClick: async () => {
                    setCurrentFile("emt_id");
                  },
                  children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "emt_id", children: "Upload(Image)" }),
                    /* @__PURE__ */ jsx(BsUpload, {})
                  ]
                }
              ) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("label", { htmlFor: "terms", className: "termsGroup mt-4", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              name: "terms",
              onChange: (e) => setUploadTermsAgree(e.target.checked)
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "terms", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("div", { children: "I accept " }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "TermsModal",
                onClick: () => setIsViewTerms(true),
                children: "Terms and Conditions"
              }
            )
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      Modal,
      {
        show: isViewTerms,
        onHide: handleCloseTerms,
        size: "lg",
        fullscreen: false,
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        children: [
          /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsx(Index$b, {}) }),
          /* @__PURE__ */ jsx(Modal.Footer, { children: /* @__PURE__ */ jsx(Button, { variant: "danger", onClick: handleCloseTerms, children: "Close" }) })
        ]
      }
    )
  ] });
}
function Index$3(props) {
  const { lang = "en" } = useParams();
  const [Currentb2bType, setCurrentb2bType] = useState("individual");
  const [Selectedb2bType, setSelectedb2bType] = useState(null);
  const [formNext, setFormNext] = useState(1);
  const [UrlDocOpen, setUrlDocOpen] = useState(false);
  const [steps, setSteps] = useState({ current: 1, total: 2, progress: 50 });
  useDispatch();
  useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formTile, setFormTitle] = useState({
    creator: "Content Creator Registration",
    individual: "B2B Individual Registration",
    company: "B2B Company Registration"
  });
  const { PostRegister, PostUploadId, PostVerifyOTP } = useAuthApi();
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
  const [RegisterComplete, setRegisterComplete] = useState(false);
  const [RegUserResp, setRegUserResp] = useState();
  const handleRegisterChange = (e) => {
    setRegisterFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleRegisterSubmit = async (e) => {
    var _a;
    let UpdatedData = { ...RegisterformData };
    if (Currentb2bType == "creator") {
      UpdatedData.role = "B2B-Influencer";
    } else if (Currentb2bType == "individual") {
      UpdatedData.role = "B2B-Individual";
    } else if (Currentb2bType == "company") {
      UpdatedData.role = "B2B-company";
    }
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
    if ((response == null ? void 0 : response.status) == 200 || (response == null ? void 0 : response.status) == 201) {
      toast.success("Registration Successfull, Pending Approval ");
      setRegisterComplete(true);
      setRegUserResp(response == null ? void 0 : response.data);
      setIsRegisterSending(false);
      if (formNext == 2) {
        if (Currentb2bType == "creator") {
          setSteps((prev) => ({
            ...prev,
            current: 2,
            progress: 50,
            total: 3
          }));
          return;
        } else {
          setSteps((prev) => ({
            ...prev,
            current: 2,
            progress: 100,
            total: 2
          }));
        }
      }
      setFormNext(formNext + 1);
    } else {
      setIsRegisterSending(false);
      toast.error(((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.error) || "Something Went Wrong");
    }
  };
  const [OPTFormData, setOPTFormData] = useState({
    email: "",
    enteredOtp: ""
  });
  const [isOTPSending, setIsOTPSending] = useState(false);
  const [isOTPComplete, setisOTPComplete] = useState(false);
  const handleOTPChange = async (e) => {
    setOPTFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleOTPSubmit = async (e) => {
    var _a, _b;
    let UpdatedPayload = { ...OPTFormData };
    e.preventDefault();
    setIsOTPSending(true);
    UpdatedPayload.email = (_a = RegUserResp == null ? void 0 : RegUserResp.user) == null ? void 0 : _a.email;
    //! validation
    if (!(UpdatedPayload == null ? void 0 : UpdatedPayload.enteredOtp)) {
      setIsOTPSending(false);
      toast.error("Please Enter a valid OTP");
      return;
    }
    if (!(UpdatedPayload == null ? void 0 : UpdatedPayload.email)) {
      setIsOTPSending(false);
      toast.error("Invalid Email, Please Try again later");
      return;
    }
    const response = await PostVerifyOTP(UpdatedPayload);
    if ((response == null ? void 0 : response.status) == 200 || (response == null ? void 0 : response.status) == 201) {
      toast.success("Email Varified");
      setIsOTPSending(false);
      setisOTPComplete(true);
      if (formNext == 2) {
        if (Currentb2bType == "creator") {
          setSteps((prev) => ({
            ...prev,
            current: 2,
            progress: 50,
            total: 3
          }));
          return;
        } else {
          setSteps((prev) => ({
            ...prev,
            current: 2,
            progress: 100,
            total: 2
          }));
        }
      }
      setFormNext(formNext + 1);
    } else {
      setIsOTPSending(false);
      toast.error(((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.error) || "Something Went Wrong");
    }
  };
  const [UserIdsUpload, setUserIdsUpload] = useState({});
  const [UserIdsUploadForRead, setUserIdsUploadForRead] = useState({});
  const [UploadedUrls, setUploadedUrls] = useState("");
  const [currentFile, setCurrentFile] = useState("");
  const [TotalUploads, setTotalUploads] = useState({
    trade_lic: "",
    trn_cert: "",
    visa_id: "",
    passport_id: "",
    emt_id: ""
  });
  const [UploadTermsAgree, setUploadTermsAgree] = useState(false);
  const [isIdUploading, setIsIdUploading] = useState(false);
  useState(false);
  const handleIDupload = (e) => {
    setUserIdsUpload((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0]
    }));
    setUserIdsUploadForRead((prev) => ({
      ...prev,
      [e.target.name]: URL.createObjectURL(e.target.files[0])
    }));
  };
  const submitDataDOcs = async (payload) => {
    var _a;
    const response = await PostUploadId(payload);
    if ((response == null ? void 0 : response.status) == 200 || (response == null ? void 0 : response.status) == 201) {
      toast.success("Documents Uploaded, Please wait for Verification");
      setUserIdsUpload({});
      setUserIdsUploadForRead({});
      setIsIdUploading(false);
      {
        UrlDocOpen && navigate(`/${lang}/b2b`);
      }
      props == null ? void 0 : props.onhide();
    } else {
      setIsIdUploading(false);
      toast.error(((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.error) || "Something Went Wrong");
    }
  };
  const handleIDUploadsSubmit = async (e) => {
    var _a;
    e.preventDefault();
    setIsIdUploading(true);
    let UserID = searchParams.get("user");
    let CompayID = searchParams.get("company");
    let payload = {};
    if (UserID) {
      payload.userId = UserID;
      payload.emt_id = TotalUploads.emt_id;
      payload.passport_id = TotalUploads.passport_id;
    } else if (CompayID) {
      payload.userId = CompayID;
      payload.emt_id = TotalUploads.emt_id;
      payload.passport_id = TotalUploads.passport_id;
      payload.trade_license = TotalUploads.trade_lic;
      payload.trn_certificate = TotalUploads.trn_cert;
      payload.owner_passport = TotalUploads.passport_id;
      payload.visa_copy = TotalUploads.visa_id;
    } else {
      payload.userId = (_a = RegUserResp == null ? void 0 : RegUserResp.user) == null ? void 0 : _a.id;
      payload.emt_id = TotalUploads.emt_id;
      payload.passport_id = TotalUploads.passport_id;
      payload.trade_license = TotalUploads.trade_lic;
      payload.trn_certificate = TotalUploads.trn_cert;
      payload.owner_passport = TotalUploads.passport_id;
      payload.visa_copy = TotalUploads.visa_id;
    }
    console.log("payload: ", payload);
    //! validation
    if (UserID || Currentb2bType !== "company") {
      if (UserID && !(payload == null ? void 0 : payload.emt_id)) {
        setIsIdUploading(false);
        toast.error("Please Upload Your Emirates ID / National ID");
        return;
      }
      if (UserID && !(payload == null ? void 0 : payload.passport_id)) {
        setIsIdUploading(false);
        toast.error("Please Upload Passport ID");
        return;
      }
      if (!UploadTermsAgree) {
        setIsIdUploading(false);
        toast.error("Please Accept to our Terms");
        return;
      }
      submitDataDOcs(payload);
    } else if (CompayID || Currentb2bType == "company") {
      if (CompayID && !(payload == null ? void 0 : payload.trade_license)) {
        setIsIdUploading(false);
        toast.error("Please Upload Trade License");
        return;
      }
      if (CompayID && !(payload == null ? void 0 : payload.trn_certificate)) {
        setIsIdUploading(false);
        toast.error("Please Upload TRN Certificate");
        return;
      }
      if (CompayID && !(payload == null ? void 0 : payload.emt_id)) {
        setIsIdUploading(false);
        toast.error("Please Upload Your Emirates ID / National ID");
        return;
      }
      if (!UploadTermsAgree) {
        setIsIdUploading(false);
        toast.error("Please Accept to our Terms");
        return;
      }
      submitDataDOcs(payload);
    }
  };
  const [socailLinks, setSoicalLinks] = useState({});
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    let authQueryUser = searchParams.get("user");
    let authQueryCompany = searchParams.get("company");
    if (authQueryUser) {
      setSelectedb2bType("individual");
      setSteps({ current: 2, total: 2, progress: 100 });
      setUrlDocOpen(true);
    } else if (authQueryCompany) {
      setSelectedb2bType("company");
      setCurrentb2bType("company");
      setSteps({ current: 2, total: 2, progress: 100 });
      setUrlDocOpen(true);
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "generalB2BForm323d", children: /* @__PURE__ */ jsx(Container, { children: Selectedb2bType ? /* @__PURE__ */ jsxs("div", { className: "FormsWrappper", children: [
    /* @__PURE__ */ jsxs("div", { className: "progSteps mb-3", children: [
      /* @__PURE__ */ jsx(Index$9, { Step: steps == null ? void 0 : steps.progress }),
      /* @__PURE__ */ jsxs("div", { className: "currentStep", children: [
        "Step",
        steps == null ? void 0 : steps.current,
        "/",
        steps == null ? void 0 : steps.total
      ] })
    ] }),
    (steps == null ? void 0 : steps.current) == 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      formNext == 1 ? /* @__PURE__ */ jsx(
        Index$8,
        {
          Currentb2bType,
          title: formTile == null ? void 0 : formTile[Currentb2bType],
          setFormNext,
          formData: RegisterformData,
          setFormData: setRegisterFormData,
          handleChange: handleRegisterChange,
          RegisterComplete
        }
      ) : formNext == 2 ? /* @__PURE__ */ jsx(
        Index$7,
        {
          setFormNext,
          title: "Email Verification",
          handleOTPChange
        }
      ) : null,
      /* @__PURE__ */ jsxs("div", { className: "BtnWrapper mt-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-secondary",
            onClick: () => {
              if (formNext == 1) {
                setSelectedb2bType(null);
                return;
              }
              setFormNext(formNext - 1);
            },
            children: "Back"
          }
        ),
        formNext == 2 ? /* @__PURE__ */ jsx(Fragment, { children: isOTPComplete ? /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary",
            onClick: async (e) => {
              if (formNext == 2) {
                if (Currentb2bType == "creator") {
                  setSteps((prev) => ({
                    ...prev,
                    current: 2,
                    progress: 50,
                    total: 3
                  }));
                  return;
                } else {
                  setSteps((prev) => ({
                    ...prev,
                    current: 2,
                    progress: 100,
                    total: 2
                  }));
                }
              }
              setFormNext(formNext + 1);
            },
            children: "Next"
          }
        ) : /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary",
            disabled: isOTPSending,
            onClick: async (e) => {
              await handleOTPSubmit(e);
            },
            children: isOTPSending ? "Verifying..." : "Verify"
          }
        ) }) : /* @__PURE__ */ jsx(Fragment, { children: RegisterComplete ? /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary",
            onClick: async (e) => {
              if (formNext == 2) {
                if (Currentb2bType == "creator") {
                  setSteps((prev) => ({
                    ...prev,
                    current: 2,
                    progress: 50,
                    total: 3
                  }));
                  return;
                } else {
                  setSteps((prev) => ({
                    ...prev,
                    current: 2,
                    progress: 100,
                    total: 2
                  }));
                }
              }
              setFormNext(formNext + 1);
            },
            children: "Next"
          }
        ) : /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary",
            disabled: isRegisterSending,
            onClick: async (e) => {
              await handleRegisterSubmit(e);
            },
            children: isRegisterSending ? "Sending..." : "Register"
          }
        ) })
      ] })
    ] }) : (steps == null ? void 0 : steps.total) == 3 && (steps == null ? void 0 : steps.current) == 2 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "Step2FOrms", children: /* @__PURE__ */ jsx(
        Index$6,
        {
          title: formTile == null ? void 0 : formTile[Currentb2bType],
          socailLinks,
          setSoicalLinks
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "BtnWrapper mt-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-secondary",
            onClick: () => {
              setFormNext(2);
              setSteps((prev) => ({
                ...prev,
                current: 1,
                progress: 33
              }));
              return;
            },
            children: "Back"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary",
            onClick: () => {
              var _a;
              if (!socailLinks || ((_a = Object.values(socailLinks)) == null ? void 0 : _a.length) < 4) {
                toast.error(
                  "Please Enter atleast 4 Soical account links"
                );
                return;
              }
              setSteps((prev) => ({
                ...prev,
                current: 3,
                progress: 100
              }));
            },
            children: "Next"
          }
        )
      ] })
    ] }) : (steps == null ? void 0 : steps.total) == 2 && (steps == null ? void 0 : steps.current) == 2 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Index$4,
        {
          currentStep: steps == null ? void 0 : steps.current,
          title: formTile == null ? void 0 : formTile[Currentb2bType],
          Currentb2bType,
          handleChange: handleIDupload,
          UserIdsUploadForRead,
          UploadTermsAgree,
          setUploadTermsAgree,
          setUploadedUrls,
          UploadedUrls,
          currentFile,
          setCurrentFile,
          setTotalUploads,
          TotalUploads,
          UrlDocOpen
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "BtnWrapper mt-4", children: [
        UrlDocOpen ? null : /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-secondary",
            onClick: () => {
              if (isOTPComplete) {
                return;
              }
              setFormNext(2);
              setSteps((prev) => ({
                ...prev,
                current: 1,
                progress: 33
              }));
              return;
            },
            children: "Back"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary",
            onClick: (e) => {
              handleIDUploadsSubmit(e);
            },
            children: UrlDocOpen ? /* @__PURE__ */ jsx(Fragment, { children: isIdUploading ? "Uploading..." : "Upload" }) : /* @__PURE__ */ jsx(Fragment, { children: isIdUploading ? "Uploading..." : "Create Account" })
          }
        )
      ] })
    ] }) : (steps == null ? void 0 : steps.current) == 3 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Index$4,
        {
          title: formTile == null ? void 0 : formTile[Currentb2bType],
          handleChange: handleIDupload,
          UserIdsUploadForRead,
          UploadTermsAgree,
          setUploadTermsAgree
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "BtnWrapper mt-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-secondary",
            onClick: () => {
              setFormNext(2);
              setSteps((prev) => ({
                ...prev,
                current: 2,
                progress: 66
              }));
              return;
            },
            children: "Back"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary",
            onClick: (e) => {
              handleIDUploadsSubmit(e);
            },
            children: isIdUploading ? "Uploading..." : "Create Account"
          }
        )
      ] })
    ] }) : null
  ] }) : /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
    /* @__PURE__ */ jsx(Col, { lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "FormWrapperB2b", children: [
      /* @__PURE__ */ jsx("div", { className: "form-title mb-3", children: "Welcome to Maha Balloon Adventures Dubai!" }),
      /* @__PURE__ */ jsx("p", { className: "para mb-3", children: "Please sign in to your account to get fantastic offers, discounts, and other benefits. You can make residual income by signing up to the best referral and affiliate marketing program with the best hot air balloon adventure company in the Middle East." }),
      /* @__PURE__ */ jsxs("div", { className: "typeOption", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: Currentb2bType == "company" ? "OptonBtn active" : "OptonBtn",
            onClick: () => {
              setSteps({ current: 1, total: 2, progress: 50 });
              setCurrentb2bType("company");
            },
            children: "B2B Company"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: Currentb2bType == "creator" ? "OptonBtn active" : "OptonBtn",
            onClick: () => {
              setSteps({ current: 1, total: 3, progress: 33 });
              setCurrentb2bType("creator");
            },
            children: "Content Creator / Influencer"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: Currentb2bType == "individual" ? "OptonBtn active" : "OptonBtn",
            onClick: () => {
              setSteps({ current: 1, total: 2, progress: 50 });
              setCurrentb2bType("individual");
            },
            children: "B2B Individual"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "BtnWrapper mt-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "btnNl btnNl-secondary",
              onClick: () => {
                props == null ? void 0 : props.setlogIn(true);
              },
              children: "Back"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "btnNl btnNl-primary",
              onClick: () => {
                setSelectedb2bType(Currentb2bType);
              },
              children: "Next"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Col, { children: /* @__PURE__ */ jsx("div", { className: "imgWrapper", children: /* @__PURE__ */ jsx("img", { src: member1, alt: "" }) }) })
  ] }) }) });
}
function Index$2(props) {
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
function Index$1(props) {
  const [formData, setFormData] = useState({
    pass: "",
    verify_pass: ""
  });
  let [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoaidng] = useState(false);
  let navigate = useNavigate();
  const { PostResetPass } = useAuthApi();
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    var _a, _b, _c;
    setIsLoaidng(true);
    let tokenQuery = searchParams.get("token");
    if (!tokenQuery) {
      toast.error("Invalid Reset Link");
      setIsLoaidng(false);
    }
    if (!(formData == null ? void 0 : formData.pass)) {
      toast.error("Please Enter a password");
      setIsLoaidng(false);
      return;
    }
    if (((_a = formData == null ? void 0 : formData.pass) == null ? void 0 : _a.length) < 8) {
      toast.error("Password lenght must be greather then 8");
      setIsLoaidng(false);
      return;
    }
    console.log("Pass: ", formData);
    if ((formData == null ? void 0 : formData.pass) !== (formData == null ? void 0 : formData.verify_pass)) {
      toast.error("Password not matched");
      setIsLoaidng(false);
      return;
    }
    let Payload = {
      token: tokenQuery,
      newPassword: formData == null ? void 0 : formData.pass
    };
    const response = await PostResetPass(Payload);
    console.log("🚀 ~ handleSubmit ~ response:", response);
    if ((response == null ? void 0 : response.status) == 200 || (response == null ? void 0 : response.status) == 201) {
      setIsLoaidng(false);
      props == null ? void 0 : props.onhide();
      toast.success(((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.message) || "Password Reset Successfull");
      navigate("/");
      location.reload();
    } else {
      setIsLoaidng(false);
      toast.error(((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.error) || "Something Went Wrong");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "resetPassword", children: [
    /* @__PURE__ */ jsx("div", { className: "form-title mb-3", children: "Set Password" }),
    /* @__PURE__ */ jsx("div", { className: "regFormWrapper", children: /* @__PURE__ */ jsxs(Row, { className: "g-3", children: [
      /* @__PURE__ */ jsx(Col, { lg: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "pass", children: "Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "inputField",
            name: "pass",
            type: "password",
            placeholder: "",
            onChange: handleChange
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Col, { lg: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "verify_pass", children: "Verify Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "inputField",
            name: "verify_pass",
            type: "password",
            placeholder: "",
            onChange: handleChange
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Col, { lg: 12, children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "btnNl btnNl-primary",
          onClick: () => handleSubmit(),
          disabled: isLoading,
          children: isLoading ? "Submitting" : "Submit"
        }
      ) })
    ] }) })
  ] });
}
function Index(props) {
  const [logIn, setlogIn] = useState(true);
  const [ForgotPassword, setForgotPassword] = useState(false);
  const [ResetPassword, setResetPassword] = useState(false);
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const backGO = () => {
    setlogIn(true);
    setForgotPassword(false);
    setResetPassword(false);
    navigate("/");
  };
  useEffect(() => {
    let authQuery = searchParams.get("auth");
    if (authQuery == "register") {
      props == null ? void 0 : props.setShow(true);
      setlogIn(false);
    }
  }, []);
  useEffect(() => {
    let authQuery = searchParams.get("generate");
    if (authQuery == "password") {
      props == null ? void 0 : props.setShow(true);
      setResetPassword(true);
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "authPageMain32", children: /* @__PURE__ */ jsxs(
    Modal$1,
    {
      ...props,
      size: "lg",
      fullscreen: true,
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      children: [
        /* @__PURE__ */ jsx(Modal$1.Header, { closeButton: true, children: /* @__PURE__ */ jsx(Modal$1.Title, { id: "contained-modal-title-vcenter" }) }),
        /* @__PURE__ */ jsx(Modal$1.Body, { children: ResetPassword ? /* @__PURE__ */ jsx("div", { className: "ItemWrapper", children: /* @__PURE__ */ jsx(
          Index$1,
          {
            onhide: props == null ? void 0 : props.onHide,
            ResetPassword,
            setResetPassword,
            backGO
          }
        ) }) : /* @__PURE__ */ jsx("div", { className: "ItemWrapper", children: ForgotPassword ? /* @__PURE__ */ jsx(
          Index$2,
          {
            onhide: props == null ? void 0 : props.onHide,
            ForgotPassword,
            setForgotPassword,
            backGO
          }
        ) : logIn ? /* @__PURE__ */ jsx(
          Index$a,
          {
            setlogIn,
            onhide: props == null ? void 0 : props.onHide,
            setForgotPassword
          }
        ) : /* @__PURE__ */ jsx(
          Index$3,
          {
            setlogIn,
            onhide: props == null ? void 0 : props.onHide
          }
        ) }) })
      ]
    }
  ) });
}
export {
  Index as default
};
