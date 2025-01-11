import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { I as Index$1 } from "./Index-CydB4oe7.js";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
/* empty css                */
let faqsPageData = [
  {
    ques: { en: "Is the flight suitable for all ages?", ar: "" },
    answer: {
      en: "<p>Passengers must be between the ages of 5 and 80 years old. Children under 5 and adults over 80 are not permitted to fly. Children under the age of 18 must be accompanied by a parent or guardian. The maximum weight limit is Max 120 kg. Guests exceeding this limit require pilot approval and will incur an extra charge.</p>",
      ar: ""
    }
  },
  {
    ques: { en: "Are there any medical restrictions?", ar: "" },
    answer: {
      en: "<p>Yes, passengers must sign a declaration form confirming they do not have serious medical conditions such as heart problems, recent knee or back surgeries, phobias of heights, pregnancy, or physical/mental disabilities.</p>",
      ar: ""
    }
  },
  {
    ques: {
      en: "What are the best times for a hot air balloon ride in Dubai?",
      ar: ""
    },
    answer: {
      en: "<p>The hot air balloon season typically runs from September to May, with the best flying conditions generally found during the winter months.</p>",
      ar: ""
    }
  },
  {
    ques: { en: "What is the duration of the entire experience?", ar: "" },
    answer: {
      en: "<p>The flight duration is 45- 60 minutes , although it may vary slightly depending on weather conditions and wind direction.</p>",
      ar: ""
    }
  },
  {
    ques: {
      en: "What happens if there are high winds or bad weather?",
      ar: ""
    },
    answer: {
      en: "<p>If weather conditions do not permit a flight, Maha B will recommend rescheduling for the next available day. If rescheduling is not possible, we will provide a full refund within 10 working days, subject to their cancellation policy.</p>",
      ar: ""
    }
  },
  {
    ques: { en: "How experienced are your balloon pilots?", ar: "" },
    answer: {
      en: "<p>All pilots at Maha B hold a valid GCAA (UAE General Civil Aviation Authority) licence and have extensive flying experience, ensuring a safe and enjoyable experience.</p>",
      ar: ""
    }
  },
  {
    ques: { en: "How do I book a flight?", ar: "" },
    answer: {
      en: "<p>Flights can be booked through the Maha B website or through travel agents. Online bookings allow payment via credit card or net banking.</p>",
      ar: ""
    }
  },
  {
    ques: { en: " What should I bring on the flight?", ar: "" },
    answer: {
      en: "<p>Passengers are required to bring a form of identification (passport, Emirates ID, or any government-issued ID). It’s also advisable to wear comfortable clothing and sturdy shoes.</p>",
      ar: ""
    }
  },
  {
    ques: {
      en: "What is the cancellation policy for extreme weather conditions?",
      ar: ""
    },
    answer: {
      en: "<p>Cancellations can be made by sending email through the original mode of booking. Cancellation before 72 hours- 100 % refund, 48 hours-50% and less than 24 hours is nonrefundable. If a passenger does not show up at the designated pickup location at the scheduled time, it will be considered a no-show. The full charge for the booked flight will apply, and no refund will be issued. </p>",
      ar: ""
    }
  },
  {
    ques: { en: "Will I receive confirmation of my flight details?", ar: "" },
    answer: {
      en: "<p>Yes, Maha B will email you the evening before your flight by 8 PM to confirm the pick-up time, location, and other flight details.</p>",
      ar: ""
    }
  },
  {
    ques: { en: "What type of balloons does Maha B use?", ar: "" },
    answer: {
      en: "<p>Maha B operates two types of balloons for shared packages: one with a capacity of 20 passengers and another with a capacity of 24 passengers. They also have smaller balloons available for private bookings, accommodating up to 6 passengers. </p>",
      ar: ""
    }
  },
  {
    ques: { en: "How can I contact Maha B for more information?", ar: "" },
    answer: {
      en: ` <p>For additional inquiries, you can contact Maha B at: <br/> Email: <a href="mailto:fly@mahab.net">fly@mahab.net</a> and <a href="mailto:operation@mahaballoonadventures.com">operation@mahaballoonadventures.com</a> <br/> No: +971 50 417 9392 <br/> No: +971 56 545 9255 </p>`,
      ar: ""
    }
  }
];
function Index() {
  const { lang = "en" } = useParams();
  return /* @__PURE__ */ jsxs("div", { className: lang == "ar" ? "FaqsI39Kk py-60 arB" : "FaqsI39Kk py-60", children: [
    " ",
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx("div", { className: "main-title mb-3", children: "Faqs List" }),
      /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx(Accordion, { defaultActiveKey: "0", flush: true, children: faqsPageData == null ? void 0 : faqsPageData.map((item, i) => {
        var _a, _b;
        return /* @__PURE__ */ jsxs(Accordion.Item, { eventKey: i, children: [
          /* @__PURE__ */ jsx(Accordion.Header, { children: (_a = item == null ? void 0 : item.ques) == null ? void 0 : _a.en }),
          /* @__PURE__ */ jsxs(Accordion.Body, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                dangerouslySetInnerHTML: {
                  __html: (_b = item == null ? void 0 : item.answer) == null ? void 0 : _b.en
                }
              }
            ),
            " "
          ] })
        ] });
      }) }) })
    ] })
  ] });
}
const banner = "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Faqs%20banner.webp";
function Faqs() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "title", content: " Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}faqs`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}faqs`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index$1, { title: "Faqs", path: "Home - Faqs", bg: banner }),
    /* @__PURE__ */ jsx(Index, {})
  ] });
}
export {
  Faqs as default
};
