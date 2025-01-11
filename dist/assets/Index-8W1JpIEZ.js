import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../entry-server.js";
import ReactWhatsapp from "react-whatsapp";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "react-router-dom";
let whatsappNo = "+971502600101";
function Index$1(props) {
  useDispatch();
  return /* @__PURE__ */ jsx("div", { className: "giftOfferK312", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { children: [
    /* @__PURE__ */ jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsx("h3", { className: "title", children: (props == null ? void 0 : props.title) ? props == null ? void 0 : props.title : "Gift An Unforgettable Hot Air Balloon Adventure Today" }) }),
    /* @__PURE__ */ jsx(Col, { md: "12", lg: "6", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      ReactWhatsapp,
      {
        className: "Wtp btnNl whtsappUs mt-5",
        number: whatsappNo,
        message: ` Hi There,   I am interested in Gift. Please get in touch with me to send me a customized quote.`,
        children: "WhatsApp Us"
      }
    ) }) })
  ] }) }) });
}
function Index(props) {
  var _a, _b, _c, _d;
  const { lang = "en" } = useParams();
  const [viewMore, setViewMore] = useState(false);
  let faqsData = [
    {
      id: 0,
      qes: "Why should I fly in a hot air balloon in Dubai?",
      ans: "Undoubtedly, one of the best ways to view the beautiful scenery of the rejuvenating desert versus the magic of Dubai skyline is by a Hot Air Balloon Ride. You can enjoy what a wonderful comfort is to be lightly lifted off the ground in a hot air balloon ride."
    },
    {
      id: 1,
      qes: "Do you sell gifts or souvenirs for a hot air balloon flight?",
      ans: "Yes indeed! Sure, you can take an enormous variety of gifts, mementos and souvenirs as a proof of having taken the hot air balloon uae. Carry back trendy merchandise by your side with you as a souvenir of your great ride."
    },
    {
      id: 2,
      qes: "How do I get to the take-off site?",
      ans: "We always know in our hearts to help you with your travel plans with all the questions for directions. The transport team will give detailed on how conveyance will be scheduled."
    },
    {
      id: 3,
      qes: "What happens if the weather is bad?",
      ans: "For us, security is the foremost. If the weather is not flight-compatible, we can reschedule your flight for a time when things are deemed best. Our weather experts forecast 24/7 to ensure smooth and safe experience for our beloved passengers."
    }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: lang == "ar" ? "FaqsCommon32KI3 py-60 arB" : "FaqsCommon32KI3 py-60",
      children: /* @__PURE__ */ jsxs(Container, { children: [
        /* @__PURE__ */ jsx("h5", { className: "main-title mb-3", children: (props == null ? void 0 : props.title) ? props == null ? void 0 : props.title : "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("div", { className: "mt-2", children: (props == null ? void 0 : props.content) ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Fragment, { children: [
          viewMore ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Accordion, { defaultActiveKey: "0", flush: true, children: (_a = props == null ? void 0 : props.content) == null ? void 0 : _a.map((item) => {
            var _a2, _b2;
            return /* @__PURE__ */ jsxs(Accordion.Item, { eventKey: item == null ? void 0 : item.id, children: [
              /* @__PURE__ */ jsx(Accordion.Header, { children: (_a2 = item == null ? void 0 : item.qes) == null ? void 0 : _a2.en }),
              /* @__PURE__ */ jsx(Accordion.Body, { children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "details",
                  dangerouslySetInnerHTML: {
                    __html: (_b2 = item == null ? void 0 : item.ans) == null ? void 0 : _b2.en
                  }
                }
              ) })
            ] });
          }) }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Accordion, { defaultActiveKey: "0", flush: true, children: (_c = (_b = props == null ? void 0 : props.content) == null ? void 0 : _b.slice(0, 10)) == null ? void 0 : _c.map((item) => {
            var _a2, _b2;
            return /* @__PURE__ */ jsxs(Accordion.Item, { eventKey: item == null ? void 0 : item.id, children: [
              /* @__PURE__ */ jsx(Accordion.Header, { children: (_a2 = item == null ? void 0 : item.qes) == null ? void 0 : _a2.en }),
              /* @__PURE__ */ jsx(Accordion.Body, { children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "details",
                  dangerouslySetInnerHTML: {
                    __html: (_b2 = item == null ? void 0 : item.ans) == null ? void 0 : _b2.en
                  }
                }
              ) })
            ] });
          }) }) }),
          ((_d = props == null ? void 0 : props.content) == null ? void 0 : _d.length) <= 10 ? null : /* @__PURE__ */ jsx(
            "button",
            {
              className: "btnNl btnNl-primary mt-2",
              onClick: () => setViewMore(!viewMore),
              children: viewMore ? "View Less" : "View More"
            }
          )
        ] }) }) : /* @__PURE__ */ jsx(Accordion, { defaultActiveKey: "0", flush: true, children: faqsData == null ? void 0 : faqsData.map((item) => /* @__PURE__ */ jsxs(Accordion.Item, { eventKey: item == null ? void 0 : item.id, children: [
          /* @__PURE__ */ jsx(Accordion.Header, { children: item == null ? void 0 : item.qes }),
          /* @__PURE__ */ jsx(Accordion.Body, { children: item == null ? void 0 : item.ans })
        ] })) }) })
      ] })
    }
  );
}
export {
  Index$1 as I,
  Index as a,
  whatsappNo as w
};
