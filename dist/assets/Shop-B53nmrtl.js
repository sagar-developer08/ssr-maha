import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { I as Index$2 } from "./Index-CydB4oe7.js";
import { I as Index$3, a as Index$4 } from "./Index-8W1JpIEZ.js";
import { Container, Row, Col } from "react-bootstrap";
import { IoFilterSharp, IoSearch } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoMdCloseCircle } from "react-icons/io";
import { I as Index$1 } from "./Index-BZVfeS_-.js";
import { useParams } from "react-router-dom";
import { u as useOutsideAlerter } from "./useOutsideAlerter-Kk6SgUQ9.js";
import { Helmet } from "react-helmet";
/* empty css                */
import "react-redux";
import "../entry-server.js";
import "react-dom/server";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "react-icons/fa";
import "framer-motion";
import "@reduxjs/toolkit";
import "react-bootstrap/Accordion";
import "react-icons/fa6";
import "react-toastify";
import "axios";
import "axios-cache-interceptor";
import "react-spinners/BounceLoader.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
import "react-whatsapp";
import "./useCart-DWVGEDuo.js";
const prod1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod1.jpg";
const prod2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod2.jpg";
const prod3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod3.jpg";
const prod4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod4.jpg";
function Index() {
  const { lang = "en" } = useParams();
  const [showFilter, setShowFilter] = useState(false);
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
      id: 4,
      thumb: prod4,
      name: "Cup",
      price: "100Aed",
      category: "White"
    },
    {
      id: 5,
      thumb: prod3,
      name: "Keychain",
      price: "100Aed",
      category: "White"
    },
    {
      id: 6,
      thumb: prod1,
      name: "T-shirt",
      price: "100Aed",
      category: "White | Black"
    },
    {
      id: 7,
      thumb: prod2,
      name: "Water Bottle",
      price: "100Aed",
      category: "Black"
    },
    {
      id: 8,
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
      id: 4,
      thumb: prod4,
      name: "Cup",
      price: "100Aed",
      category: "White"
    }
  ];
  const wrapperRef = useRef(null);
  useEffect(() => {
    useOutsideAlerter(wrapperRef, setShowFilter);
  }, [wrapperRef]);
  return /* @__PURE__ */ jsx("div", { className: "ProductList3939Kdk3 py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx("div", { className: "tag-line mb-3", children: "Products" }),
    /* @__PURE__ */ jsx("div", { className: "main-title mb-3", children: "Hot Air Balloon Merchandise in Dubai" }),
    /* @__PURE__ */ jsxs("div", { className: "sortFilter", children: [
      /* @__PURE__ */ jsxs("div", { className: "filters", ref: wrapperRef, children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "btnNl btnNl-secondary",
            onClick: () => {
              setShowFilter(!showFilter);
            },
            children: [
              /* @__PURE__ */ jsx(IoFilterSharp, { className: "iconsSI", size: 20 }),
              "Filter"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: lang == "ar" ? `${showFilter ? "filtersListAr filterListActiveAr" : "filtersListAr"}` : ` ${showFilter ? "filtersList filterListActive" : "filtersList"}  `,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "CloseGBar mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: "filterTitle", children: "Filters" }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    onClick: () => {
                      setShowFilter(false);
                    },
                    children: /* @__PURE__ */ jsx(IoMdCloseCircle, { className: "Closefilter", size: 25 })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "filtersItems", children: /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs(InputGroup, { className: "mb-3", children: [
                /* @__PURE__ */ jsx(
                  Form.Control,
                  {
                    placeholder: "Search",
                    "aria-describedby": "basic-addon2",
                    className: "borddr"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "outline-secondary",
                    className: `borddr`,
                    id: "button-addon2",
                    children: /* @__PURE__ */ jsx(IoSearch, { size: 20 })
                  }
                )
              ] }) }) }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sortings", children: /* @__PURE__ */ jsxs("select", { name: "sort", id: "", children: [
        /* @__PURE__ */ jsx("option", { value: "", defaultChecked: true, selected: true, disabled: true, children: "Sort by" }),
        /* @__PURE__ */ jsx("option", { value: "", children: "Default" }),
        /* @__PURE__ */ jsx("option", { value: "", children: "Price Low - High" }),
        /* @__PURE__ */ jsx("option", { value: "", children: "Price High - Low" }),
        /* @__PURE__ */ jsx("option", { value: "", children: "Latest" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "listWrapper mt-5", children: /* @__PURE__ */ jsx(Row, { className: "guCustom", children: cardData == null ? void 0 : cardData.map((item, i) => /* @__PURE__ */ jsx(Col, { md: 6, lg: 3, children: /* @__PURE__ */ jsx(Index$1, { product: item }, "listPd" + i) }, "product" + (item == null ? void 0 : item.id))) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-5 d-flex justify-content-center", children: /* @__PURE__ */ jsx("button", { className: "btnNl btnNl-primary", children: "Load More" }) })
  ] }) });
}
let ContentData = {
  faqsList: [
    {
      id: 0,
      qes: {
        en: "What types of merchandise do you offer?",
        ar: ""
      },
      ans: {
        en: `All kinds of hot air Balloon Souvenirs Dubai with the company’s theme.`,
        ar: ""
      }
    },
    {
      id: 1,
      qes: {
        en: "Can I customize the merchandise with my name or a special date?",
        ar: ""
      },
      ans: {
        en: `Indeed, most of our products may be personalized with your name or date of your choice. This souvenir will remind you about the hot air balloon trip every time you see it.`,
        ar: ""
      }
    },
    {
      id: 2,
      qes: {
        en: "How do I place an order for merchandise?",
        ar: ""
      },
      ans: {
        en: `The ordering process is very smooth since it is done on the website. All one has to do is, choose their items, and also customize them if required, make an online payment and receive the product through our secured order.`,
        ar: ""
      }
    },
    {
      id: 3,
      qes: {
        en: "Do you offer gift wrapping for merchandise purchases?",
        ar: ""
      },
      ans: {
        en: `Yes, we offer gift-wrapping services at a nominal price that will complement special occasions and surprises`,
        ar: ""
      }
    },
    {
      id: 4,
      qes: {
        en: "What payment methods do you accept for merchandise?",
        ar: ""
      },
      ans: {
        en: `The accepted forms of payment include the major credit cards, debit cards and local payment facilities such as Apple Pay and Google Pay to get the best customer experience in shopping.`,
        ar: ""
      }
    },
    {
      id: 5,
      qes: {
        en: "Can I track my merchandise order?",
        ar: ""
      },
      ans: {
        en: `Yes, after the order has been shipped you will be provided with the tracking number so that you can track your order until it reaches to your doorstep.`,
        ar: ""
      }
    },
    {
      id: 6,
      qes: {
        en: "What is the return policy for merchandise?",
        ar: ""
      },
      ans: {
        en: `We have a 30-day money-back guarantee on all merchandise as long as the merchandise is in its original condition. Exchanges are also available.`,
        ar: ""
      }
    },
    {
      id: 7,
      qes: {
        en: "Do you ship internationally?",
        ar: ""
      },
      ans: {
        en: `Yes, we deliver worldwide from Dubai; we want our clients to be able to receive our novelty-exclusive products in any part of the globe.`,
        ar: ""
      }
    },
    {
      id: 8,
      qes: {
        en: "How long does it take to receive my merchandise?",
        ar: ""
      },
      ans: {
        en: `When it comes to orders within Dubai, you will receive it within 3 to 5 days of business working days. International shipping might take longer depending on the final destination.`,
        ar: ""
      }
    },
    {
      id: 9,
      qes: {
        en: "Are there any discounts for bulk purchases?",
        ar: ""
      },
      ans: {
        en: `Of course, discounts are provided to customers when they order goods in large volumes. For more information about special pricing for large quantities please contact us.`,
        ar: ""
      }
    },
    {
      id: 10,
      qes: {
        en: "Can I find exclusive merchandise only on your website?",
        ar: ""
      },
      ans: {
        en: `Yes, we do have special T-shirts and products featuring designs of our brand on the website.`,
        ar: ""
      }
    },
    {
      id: 11,
      qes: {
        en: "Do you offer seasonal or limited edition merchandise?",
        ar: ""
      },
      ans: {
        en: `Yes, we do come up with limited edition and seasonal products in the year and such products usually make good gifts or as a meaningful souvenir.`,
        ar: ""
      }
    },
    {
      id: 11,
      qes: {
        en: "How can I stay updated on new merchandise releases?",
        ar: ""
      },
      ans: {
        en: `Please, fill out the form with your email address to subscribe to our newsletter or follow us on social media to be up to date with the novelties arrivals and special offers.`,
        ar: ""
      }
    },
    {
      id: 12,
      qes: {
        en: "Can I purchase merchandise as a gift?",
        ar: ""
      },
      ans: {
        en: `Absolutely! You can buy any of our merchandise as a gift, with the option to add gift wrapping and a personalized note to the receiver.`,
        ar: ""
      }
    },
    {
      id: 13,
      qes: {
        en: "Do you offer any loyalty or rewards programs for merchandise purchases?",
        ar: ""
      },
      ans: {
        en: `Yes, there is a reward of points that you get every time you make your purchase with us. They can be exchanged for other discounts with subsequent orders.`,
        ar: ""
      }
    },
    {
      id: 14,
      qes: {
        en: "Can I see samples of the merchandise before purchasing?",
        ar: ""
      },
      ans: {
        en: `We do not send tangible samples but on the website, you can see clear photos and other detailed descriptions to aid in your shopping`,
        ar: ""
      }
    },
    {
      id: 15,
      qes: {
        en: "Are your merchandise items handmade or mass-produced?",
        ar: ""
      },
      ans: {
        en: `We have equally been able to maintain a blend between products made by hand and products that are produced in large quantities. The portfolio and tailored nature are accessible to all customers. `,
        ar: ""
      }
    },
    {
      id: 16,
      qes: {
        en: "Do you offer any bundled merchandise deals?",
        ar: ""
      },
      ans: {
        en: `Yes, we do offer deals where you can purchase multiple items at a discount, which is perfect for gifts or souvenirs.`,
        ar: ""
      }
    },
    {
      id: 17,
      qes: {
        en: "Do you offer any bundled merchandise deals?",
        ar: ""
      },
      ans: {
        en: `Yes, we do offer deals where you can purchase multiple items at a discount, which is perfect for gifts or souvenirs.`,
        ar: ""
      }
    },
    {
      id: 18,
      qes: {
        en: "Can I request a custom design for merchandise?",
        ar: ""
      },
      ans: {
        en: `Yes, you are welcome to ask us for special designs including the logo of your company or company’s name.`,
        ar: ""
      }
    }
  ]
};
function Shop() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Shop Merchandise | Maha Hot Air Balloons Dubai" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "title",
          content: "Shop Merchandise | Maha Hot Air Balloons Dubai"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Shop from our exclusive and captivating merchandise at Maha Hot Air Balloons in Dubai! Delightful souvenirs, perfect mementos of your unforgettable hot air balloon adventure."
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}merchandise`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}merchandise`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index$2, { title: "Merchandise", path: "Home - Merchandise" }),
    /* @__PURE__ */ jsx(Index, {}),
    /* @__PURE__ */ jsx(Index$3, {}),
    /* @__PURE__ */ jsx(Index$4, { content: ContentData == null ? void 0 : ContentData.faqsList })
  ] });
}
export {
  Shop as default
};
