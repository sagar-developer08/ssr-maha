import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { I as Index$1 } from "./Index-CydB4oe7.js";
import { I as Index$2, a as Index$3 } from "./Index-8W1JpIEZ.js";
import { Container, Row, Col } from "react-bootstrap";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import { d as contactUs } from "../entry-server.js";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
/* empty css                */
import "react-redux";
import "react-whatsapp";
import "react-bootstrap/Accordion";
import "react-dom/server";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "react-icons/fa";
import "react-icons/io5";
import "framer-motion";
import "@reduxjs/toolkit";
import "react-icons/fa6";
import "axios";
import "axios-cache-interceptor";
import "react-spinners/BounceLoader.js";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
function Index() {
  return /* @__PURE__ */ jsx("div", { className: "detailsCOn3939 py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx("div", { className: "tag-line mb-3", children: "Contact" }),
    /* @__PURE__ */ jsx("h4", { className: "main-title", children: "We are here to help you!" }),
    /* @__PURE__ */ jsx("p", { className: "para", children: "Do you have questions? We have the answers! You may contact us regarding anything because our team is friendly and always available for help. Whether you want us to book a flight on behalf of someone else or just Book a balloon ride Dubai for yourself, we ensure a smooth and amazing experience throughout." }),
    /* @__PURE__ */ jsxs(Row, { className: "mt-3 g-3", children: [
      /* @__PURE__ */ jsx(Col, { md: 6, lg: "4", children: /* @__PURE__ */ jsxs("div", { className: "details", children: [
        /* @__PURE__ */ jsx(MdMailOutline, { className: "contactIcon", size: 30 }),
        /* @__PURE__ */ jsx("h1", { className: "name", children: "Contact Us" }),
        /* @__PURE__ */ jsx("div", { className: "info inFOdetails", children: "Get an eagle-eye view of Dubai’s wonders! Contact hot air balloon Dubai flight and explore the city’s hidden treasures! Your next adventure is just a call away!" }),
        /* @__PURE__ */ jsx("a", { className: "info", href: "mailto:fly@mahab.net", children: "fly@mahab.net" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "info",
            href: "mailto:operation@mahaballoonadventures.com",
            children: "operation@mahaballoonadventures.com"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(Col, { md: 6, lg: "4", children: /* @__PURE__ */ jsxs("div", { className: "details", children: [
        /* @__PURE__ */ jsx(FiPhone, { className: "contactIcon", size: 25 }),
        /* @__PURE__ */ jsx("h2", { className: "name", children: "Get in Touch with Our Team" }),
        /* @__PURE__ */ jsx("div", { className: "info inFOdetails", children: "Our top-notch representatives are always ready to answer your questions. We offer comprehensive customer support. Get your Dubai balloon adventure contact now!" }),
        /* @__PURE__ */ jsx("a", { className: "info", href: "tel:971504179392", children: "+971 50 417 9392" }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("a", { className: "info", href: "tel:971565459255", children: "+971 56 545 9255" })
      ] }) }),
      /* @__PURE__ */ jsx(Col, { md: 6, lg: "4", children: /* @__PURE__ */ jsxs("div", { className: "details", children: [
        /* @__PURE__ */ jsx(GrLocation, { className: "contactIcon", size: 30 }),
        /* @__PURE__ */ jsx("h3", { className: "name", children: "Book Your Balloon Ride Today" }),
        /* @__PURE__ */ jsx("div", { className: "info inFOdetails", children: "Want to fly over breathtakingly beautiful Dubai scenery? Reserve your hot air balloon ride through our website and see majestic landscapes from the sky. We make booking easy so you can enjoy this great trip without any hassle." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "info",
            href: "https://maps.app.goo.gl/j21TQhVPtsQsmN768",
            target: "__blank",
            children: "Margham Dubai, United Arab Emirates"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "map", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "iFramgeMap",
        src: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d57920.9886785125!2d55.544209872160216!3d24.861739048193225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ef57f936d1fe813%3A0xc7dba3988b5d01a2!2smaha%20balloon%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d24.8712891!2d55.5472793!5e0!3m2!1sen!2s!4v1728893796057!5m2!1sen!2s",
        width: "100",
        height: "500",
        allowfullscreen: "",
        loading: "lazy",
        referrerpolicy: "no-referrer-when-downgrade"
      }
    ) })
  ] }) });
}
const img1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/contactUs.webp";
function index() {
  const [formData, setFormData] = useState({});
  const [checkTerms, setCheckTerms] = useState(false);
  const [isLoaidng, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    console.log("formData: ", formData);
    if (!(formData == null ? void 0 : formData.name)) {
      toast.info("Please fill your First name");
      return;
    }
    if (!(formData == null ? void 0 : formData.last_name)) {
      toast.info("Please fill your Last name");
      return;
    }
    if (!(formData == null ? void 0 : formData.email)) {
      toast.info("Please fill your email");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData == null ? void 0 : formData.email)) {
      toast.info("Please enter a valid email");
      return;
    }
    if (!(formData == null ? void 0 : formData.phone)) {
      toast.info("Please fill your phone");
      return;
    }
    if (!checkTerms) {
      toast.info("Please Accept our Terms");
      return;
    }
    setIsLoading(true);
    try {
      const response = await contactUs(formData);
      console.log("🚀 ~ handleChange ~ response:", response);
      if ((response == null ? void 0 : response.status) == 200 || (response == null ? void 0 : response.status) == 201) {
        toast.success("Thank you for sharing this with us");
        setFormData({});
      } else {
        toast.error("Oops!, something went wrong please try again later");
      }
    } catch (err) {
      console.log("Fomr Error: ", err);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "contactformdi83 py-60", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { className: "g-3", children: [
    /* @__PURE__ */ jsx(Col, { lg: "6", children: /* @__PURE__ */ jsxs("div", { className: "formArea", children: [
      /* @__PURE__ */ jsxs(Row, { children: [
        /* @__PURE__ */ jsx(Col, { xs: 6, md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "First Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "inputField",
              name: "name",
              type: "text",
              onChange: handleChange,
              value: formData == null ? void 0 : formData.first_name
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(Col, { xs: 6, md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "last_name", children: "Last Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "inputField",
              name: "last_name",
              type: "text",
              onChange: handleChange,
              value: formData == null ? void 0 : formData.last_name
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "inputField",
            name: "email",
            type: "email",
            onChange: handleChange,
            value: formData == null ? void 0 : formData.email
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "phone", children: "Phone" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "inputField",
            name: "phone",
            type: "phone",
            onChange: handleChange,
            value: formData == null ? void 0 : formData.phone
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "phone", children: "Message" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "inputField",
            name: "message",
            type: "text",
            rows: 8,
            onChange: handleChange,
            value: formData == null ? void 0 : formData.message
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "termsGroup mt-4", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            id: "terms",
            name: "terms",
            onChange: (e) => {
              setCheckTerms(e.target.checked);
            }
          }
        ),
        /* @__PURE__ */ jsxs("label", { htmlFor: "terms", children: [
          "I accept the ",
          /* @__PURE__ */ jsx(Link, { to: "/terms", children: "Terms " })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btnNl btnNl-primary dpsk39 mt-3",
          onClick: handleSubmit,
          disabled: isLoaidng,
          children: isLoaidng ? "Submitting" : "Submit"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Col, { lg: "6", children: /* @__PURE__ */ jsx("div", { className: "imgeWrapper", children: /* @__PURE__ */ jsx("img", { src: img1, alt: "" }) }) })
  ] }) }) });
}
let contactData = {
  faqsList: [
    {
      id: 0,
      qes: {
        en: "How can I contact Maha Balloon Adventures?",
        ar: ""
      },
      ans: {
        en: ` <p>For inquiries, contact us at: <br/> Email: <a href="mailto:fly@mahab.net">fly@mahab.net</a> and <a href="mailto:operation@mahaballoonadventures.com">operation@mahaballoonadventures.com</a> <br/> Phone No: +971 50 417 9392 | No: +971 56 545 9255 </p>`,
        ar: ""
      }
    },
    {
      id: 1,
      qes: {
        en: "What are your customer service hours?",
        ar: ""
      },
      ans: {
        en: `Our customer service team is available from 9 AM to 6 PM, Sunday through Friday.`,
        ar: ""
      }
    },
    {
      id: 2,
      qes: {
        en: "Where are you located?",
        ar: ""
      },
      ans: {
        en: `We are located in Dubai, UAE. For specific address details, please contact us directly.`,
        ar: ""
      }
    },
    {
      id: 3,
      qes: {
        en: "Can I visit your office in person?",
        ar: ""
      },
      ans: {
        en: `Yes, you can visit our office. Please contact us to schedule an appointment.`,
        ar: ""
      }
    },
    {
      id: 4,
      qes: {
        en: "How quickly will I receive a response to my inquiry?",
        ar: ""
      },
      ans: {
        en: `We aim to respond to all inquiries within 24 hours during business days.`,
        ar: ""
      }
    },
    {
      id: 5,
      qes: {
        en: "Do you offer support in multiple languages?",
        ar: ""
      },
      ans: {
        en: `Yes, our team can assist you in several languages. Please specify your preferred language when contacting us.`,
        ar: ""
      }
    },
    {
      id: 6,
      qes: {
        en: "Can I speak to someone directly about my booking?",
        ar: ""
      },
      ans: {
        en: `Of course! Our experts are on hand to have a conversation regarding your reservation. Please call us or send us an email to organize it.`,
        ar: ""
      }
    },
    {
      id: 7,
      qes: {
        en: "Is there a live chat option available?",
        ar: ""
      },
      ans: {
        en: `Right now, there is no option for live chat. But you can email or phone us anytime for immediate assistance.`,
        ar: ""
      }
    },
    {
      id: 8,
      qes: {
        en: "How do I update or change my booking details?",
        ar: ""
      },
      ans: {
        en: `To alter the details of your bookings, kindly reach out through email or phone with your reference number for bookings.`,
        ar: ""
      }
    },
    {
      id: 9,
      qes: {
        en: "What information do I need to provide when contacting you?",
        ar: ""
      },
      ans: {
        en: `When contacting us, please provide your full name, booking reference number (if applicable), and any specific details related to your inquiry.`,
        ar: ""
      }
    }
  ]
};
const banner = "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/contact%20us%20banner.webp";
function Contact() {
  const { lang } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact Maha Balloon | Book Your Aerial Adventure Ride in Dubai" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "title",
          content: "Contact Maha Balloon | Book Your Aerial Adventure Ride in Dubai"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Reach out to Maha Balloon Adventures for inquiries or bookings. Contact us today to plan your unforgettable hot air balloon experience in Dubai."
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}contact-us`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}contact-us`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index$1, { title: "Contact Us", path: "Home - Contact Us", bg: banner }),
    /* @__PURE__ */ jsx(Index, {}),
    /* @__PURE__ */ jsx(index, {}),
    /* @__PURE__ */ jsx(Index$2, {}),
    /* @__PURE__ */ jsx(Index$3, { content: contactData == null ? void 0 : contactData.faqsList })
  ] });
}
export {
  Contact as default
};
