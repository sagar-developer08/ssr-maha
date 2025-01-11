import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { I as Index$1 } from "./Index-CydB4oe7.js";
import { Container } from "react-bootstrap";
/* empty css                */
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "PrimaryDei39Page py-60", children: [
    " ",
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs("div", { className: "content_wrap", children: [
      /* @__PURE__ */ jsx("div", { className: "tag-line mb-3", children: "Policy" }),
      /* @__PURE__ */ jsx("div", { className: "main-title mb-3", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { children: "At Maha Balloon Adventures, we prioritize your privacy and are committed to safeguarding the information collected throughout the balloon flight process. We understand that your details are sensitive, and we implement robust measures to protect your data from unauthorized access, disclosure, or misuse. Your information will only be utilized for communication purposes directly related to your flight, ensuring a seamless and personalized experience." }),
      /* @__PURE__ */ jsx("h3", { children: "Information We Collect" }),
      /* @__PURE__ */ jsx("p", { children: "To provide you with the best possible service, we collect specific personal details during the booking process. This includes your name, contact information (such as phone number and email address), and a form of identification (ID) to confirm your identity and ensure compliance with safety protocols. All collected information is securely stored in our database, which is protected by advanced security measures to prevent unauthorized access. We want to assure you that your information is not shared with third parties under any circumstances unless required by law or with your explicit consent." }),
      /* @__PURE__ */ jsx("h3", { children: "Data Usage" }),
      /* @__PURE__ */ jsx("p", { children: "Your information is vital for the smooth operation of our services. We use your personal details for several key purposes:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Reservation Confirmation:" }),
          " Your data allows us to accurately confirm your flight reservation, ensuring that all details are correct and up to date."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Coordination of Pick-Ups:" }),
          " We use your contact information to arrange pick-up times and locations, making the process convenient and tailored to your needs."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Compliance with Flight Safety Standards:" }),
          " We are committed to maintaining the highest safety standards. Your personal information is essential for verifying identities, conducting safety briefings, and complying with aviation regulations."
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Overall, we utilize your information solely for these purposes, ensuring a safe, efficient, and enjoyable balloon flight experience while respecting your privacy." })
    ] }) })
  ] });
}
function Privacy() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Customer Privacy Policy | Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "title",
          content: "Customer Privacy Policy | Maha Hot Air Balloons in Dubai"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}privacy-policy`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}privacy-policy`
        }
      )
    ] }),
    " ",
    /* @__PURE__ */ jsx(Index$1, { title: "Privacy Policy", path: "Home - Privacy Policy" }),
    /* @__PURE__ */ jsx(Index, {})
  ] });
}
export {
  Privacy as default
};
