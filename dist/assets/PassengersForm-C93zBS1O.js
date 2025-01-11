import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { I as Index$1 } from "./Index-CydB4oe7.js";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";
import { R as ReferenceBooking, C as CreateEntryBooking } from "../entry-server.js";
import { BounceLoader } from "react-spinners";
/* empty css                */
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
function Index() {
  var _a, _b;
  const { id } = useParams();
  const [BookingFatch, setBookingFatch] = useState(false);
  const [BookingData, setBookingData] = useState({});
  const navigate = useNavigate();
  const FatchRefDetails = async () => {
    var _a2, _b2, _c, _d;
    try {
      setBookingFatch(true);
      const resp = await ReferenceBooking(id);
      setBookingData(resp == null ? void 0 : resp.data);
      setAdultAmount(parseInt(((_b2 = (_a2 = resp == null ? void 0 : resp.data) == null ? void 0 : _a2.booking) == null ? void 0 : _b2.slot_adult) || 0));
      setChildAmount(parseInt(((_d = (_c = resp == null ? void 0 : resp.data) == null ? void 0 : _c.booking) == null ? void 0 : _d.slot_child) || 0));
    } catch (err) {
      toast.error("Booking Not Found");
      console.log("🚀 ~ FatchRefDetails ~ err:", err);
    } finally {
      setBookingFatch(false);
    }
  };
  useEffect(() => {
    FatchRefDetails();
  }, [id]);
  const packageval = useSelector((state) => {
    var _a2;
    return (_a2 = state == null ? void 0 : state.booking) == null ? void 0 : _a2.package;
  });
  const [adultAmount, setAdultAmount] = useState(1);
  const [childAmount, setChildAmount] = useState(0);
  const [passengersAdult, setPassengersAdult] = useState([{}]);
  const [passengersChild, setPassengersChild] = useState([{}]);
  const [fieldsAdults, setFieldsAdults] = useState([{}]);
  const [fieldsChilds, setFieldsChilds] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const handleAdultChange = async (e, i) => {
    let CurrData = structuredClone(passengersAdult);
    CurrData[i][e.target.name] = e.target.value;
    await setPassengersAdult(structuredClone(CurrData));
  };
  const handleAdultPhoneChange = async (value, i) => {
    let CurrData = structuredClone(passengersAdult);
    CurrData[i][`phone`] = value;
    await setPassengersAdult(structuredClone(CurrData));
  };
  const handleChildChange = async (e, i) => {
    let CurrData = structuredClone(passengersChild);
    CurrData[i][e.target.name] = e.target.value;
    await setPassengersChild(structuredClone(CurrData));
  };
  const handleChildPhoneChange = async (value, i) => {
    let CurrData = structuredClone(passengersChild);
    CurrData[i][`adult_phone`] = value;
    await setPassengersChild(structuredClone(CurrData));
  };
  useEffect(() => {
    let Adult = new Array(adultAmount).fill({ id: "" });
    let AdultUpdated = Adult == null ? void 0 : Adult.map((item, i) => ({
      id: `adultDX_${i + 1}`,
      name: "",
      last_name: "",
      email: "",
      phone: "",
      weight: ""
    }));
    setPassengersAdult(AdultUpdated);
    setFieldsAdults(AdultUpdated);
  }, [adultAmount]);
  useEffect(() => {
    var _a2, _b2, _c, _d;
    let CurrData = structuredClone(fieldsAdults);
    CurrData[0][`id`] = "adultDX_1";
    CurrData[0][`name`] = (_a2 = BookingData == null ? void 0 : BookingData.UserData) == null ? void 0 : _a2.first_name;
    CurrData[0][`last_name`] = (_b2 = BookingData == null ? void 0 : BookingData.UserData) == null ? void 0 : _b2.last_name;
    CurrData[0][`email`] = (_c = BookingData == null ? void 0 : BookingData.UserData) == null ? void 0 : _c.email;
    CurrData[0][`phone`] = (_d = BookingData == null ? void 0 : BookingData.UserData) == null ? void 0 : _d.phone;
    CurrData[0][`weight`] = "";
    setPassengersAdult(structuredClone(CurrData));
  }, [BookingData]);
  useEffect(() => {
    if (childAmount == 0) {
      return;
    }
    let child = new Array(childAmount).fill({ id: "" });
    let childUpdated = child == null ? void 0 : child.map((item, i) => ({
      id: `childOX_${i + 1}`,
      name: "",
      last_name: "",
      email: "",
      adult_phone: "",
      weight: ""
    }));
    setFieldsChilds(childUpdated);
    setPassengersChild(childUpdated);
  }, [childAmount]);
  const isPassengerValidated = () => {
    for (const passenger of passengersAdult) {
      if (!(passenger == null ? void 0 : passenger.name) || !(passenger == null ? void 0 : passenger.last_name) || !(passenger == null ? void 0 : passenger.email) || !(passenger == null ? void 0 : passenger.phone) || !(passenger == null ? void 0 : passenger.weight)) {
        toast.error("Please fill in all fields for adult passenger!");
        return false;
      }
    }
    if (childAmount > 0) {
      for (const passenger of passengersChild) {
        if (!(passenger == null ? void 0 : passenger.name) || !(passenger == null ? void 0 : passenger.last_name) || !(passenger == null ? void 0 : passenger.email) || !(passenger == null ? void 0 : passenger.adult_phone) || !(passenger == null ? void 0 : passenger.weight)) {
          toast.error("Please fill in all fields for child passenger!");
          return false;
        }
      }
    }
    return true;
  };
  const handleDataSubmit = async () => {
    if (!isPassengerValidated()) {
      return;
    }
    let AdultsPayload = await (passengersAdult == null ? void 0 : passengersAdult.map((item) => {
      var _a2, _b2;
      return {
        name: item == null ? void 0 : item.name,
        last_name: item == null ? void 0 : item.last_name,
        email: item == null ? void 0 : item.email,
        phone: item == null ? void 0 : item.phone,
        weight: item == null ? void 0 : item.weight,
        type: "adult",
        refernce_id: id,
        slotId: (_a2 = BookingData == null ? void 0 : BookingData.booking) == null ? void 0 : _a2.slotId,
        bookingId: (_b2 = BookingData == null ? void 0 : BookingData.booking) == null ? void 0 : _b2.id
      };
    }));
    let ChildsPayload = await (passengersChild == null ? void 0 : passengersChild.map((item) => {
      var _a2, _b2;
      return {
        name: item == null ? void 0 : item.name,
        last_name: item == null ? void 0 : item.last_name,
        email: item == null ? void 0 : item.email,
        phone: item == null ? void 0 : item.adult_phone,
        weight: item == null ? void 0 : item.weight,
        type: "child",
        refernce_id: id,
        slotId: (_a2 = BookingData == null ? void 0 : BookingData.booking) == null ? void 0 : _a2.slotId,
        bookingId: (_b2 = BookingData == null ? void 0 : BookingData.booking) == null ? void 0 : _b2.id
      };
    }));
    let payload = await { passengers: [...AdultsPayload, ...ChildsPayload] };
    try {
      setIsLoading(true);
      const resp = await CreateEntryBooking(payload);
      toast.success("Passengers Added");
    } catch (err) {
      toast.error("Oops, Something went wrong");
      console.log("🚀 ~ FatchRefDetails ~ err:", err);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 1e3);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "Passenger393dk py-60", children: BookingFatch ? /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center justify-content-center my-5 py-5", children: /* @__PURE__ */ jsx(BounceLoader, { color: "#7ab342", size: 60 }) }) : !(BookingData == null ? void 0 : BookingData.UserData) ? /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "sec-title mb-3", children: "No Booking Details Found!" }) }) : /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { className: "step2Size", children: [
    /* @__PURE__ */ jsxs(Col, { className: "colHalf", md: 8, children: [
      /* @__PURE__ */ jsx("div", { className: "sec-title mt-5", children: "Enter Passengers Details" }),
      fieldsAdults == null ? void 0 : fieldsAdults.map((item, i) => {
        var _a2, _b2, _c, _d, _e;
        return /* @__PURE__ */ jsxs("div", { className: "wrapper mt-40", children: [
          /* @__PURE__ */ jsxs("div", { className: "tag-line mt-5", children: [
            "Passenger Adult ",
            i + 1
          ] }),
          /* @__PURE__ */ jsxs(Row, { children: [
            /* @__PURE__ */ jsx(Col, { xs: "12", md: "6", children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-3", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "name", children: [
                "Name ",
                /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
              ] }),
              /* @__PURE__ */ jsx("div", { class: "input-group", children: /* @__PURE__ */ jsx(
                "input",
                {
                  name: "name",
                  type: "text",
                  class: "form-control inputField",
                  onChange: async (e) => {
                    await handleAdultChange(e, i);
                  },
                  value: (_a2 = passengersAdult[i]) == null ? void 0 : _a2.name,
                  disabled: i == 0
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsx(Col, { xs: "12", md: "6", children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-3", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "last_name", children: [
                "Last Name ",
                /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
              ] }),
              /* @__PURE__ */ jsx("div", { class: "input-group", children: /* @__PURE__ */ jsx(
                "input",
                {
                  name: "last_name",
                  type: "text",
                  class: "form-control inputField",
                  onChange: async (e) => {
                    await handleAdultChange(e, i);
                  },
                  value: (_b2 = passengersAdult[i]) == null ? void 0 : _b2.last_name,
                  disabled: i == 0
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form_group mt-3", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "email", children: [
              "Email ",
              /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
            ] }),
            /* @__PURE__ */ jsx("div", { class: "input-group", children: /* @__PURE__ */ jsx(
              "input",
              {
                name: "email",
                type: "text",
                class: "form-control inputField",
                onChange: async (e) => {
                  await handleAdultChange(e, i);
                },
                value: (_c = passengersAdult[i]) == null ? void 0 : _c.email,
                disabled: i == 0
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form_group form_groupPhone mt-4", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "phone", children: [
              "Mobile Number ",
              /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              PhoneInput,
              {
                defaultCountry: "ae",
                onChange: (value) => handleAdultPhoneChange(value, i),
                value: (_d = passengersAdult[i]) == null ? void 0 : _d.phone,
                disabled: i == 0
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form_group mt-3", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "weight", children: [
              "Weight (KG) ",
              /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
            ] }),
            /* @__PURE__ */ jsx("div", { class: "input-group", children: /* @__PURE__ */ jsx(
              "input",
              {
                name: "weight",
                type: "number",
                min: "1",
                max: "120",
                class: "form-control inputField",
                onChange: async (e) => {
                  if (e.target.value > 220) {
                    toast.error("weight is not acceptable");
                    return;
                  }
                  if (e.target.value >= 120) {
                    toast.info(
                      "If weight is more then 120kg Price is doubled"
                    );
                  }
                  if (e.target.value < 0) {
                    return;
                  }
                  if (e.target.value > 150) {
                    return;
                  }
                  await handleAdultChange(e, i);
                },
                value: (_e = passengersAdult[i]) == null ? void 0 : _e.weight
              }
            ) })
          ] })
        ] });
      }),
      childAmount == 0 ? null : /* @__PURE__ */ jsx(Fragment, { children: fieldsChilds == null ? void 0 : fieldsChilds.map((item, i) => {
        var _a2, _b2, _c, _d, _e;
        return /* @__PURE__ */ jsxs("div", { className: "wrapper mt-40", children: [
          /* @__PURE__ */ jsxs("div", { className: "tag-line mt-5", children: [
            "Passenger Child ",
            i + 1
          ] }),
          /* @__PURE__ */ jsxs(Row, { children: [
            /* @__PURE__ */ jsx(Col, { xs: 12, md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-3", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "name", children: [
                "Name ",
                /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
              ] }),
              /* @__PURE__ */ jsx("div", { class: "input-group", children: /* @__PURE__ */ jsx(
                "input",
                {
                  name: "name",
                  type: "text",
                  class: "form-control inputField",
                  onChange: async (e) => {
                    await handleChildChange(e, i);
                  },
                  value: (_a2 = passengersChild[i]) == null ? void 0 : _a2.name
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsx(Col, { xs: 12, md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-3", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "last_name", children: [
                "Last Name ",
                /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
              ] }),
              /* @__PURE__ */ jsx("div", { class: "input-group", children: /* @__PURE__ */ jsx(
                "input",
                {
                  name: "last_name",
                  type: "text",
                  class: "form-control inputField",
                  onChange: async (e) => {
                    await handleChildChange(e, i);
                  },
                  value: (_b2 = passengersChild[i]) == null ? void 0 : _b2.last_name
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form_group mt-3", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "email", children: [
              "Email ",
              /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
            ] }),
            /* @__PURE__ */ jsx("div", { class: "input-group", children: /* @__PURE__ */ jsx(
              "input",
              {
                name: "email",
                type: "text",
                class: "form-control inputField",
                onChange: async (e) => {
                  await handleChildChange(e, i);
                },
                value: (_c = passengersChild[i]) == null ? void 0 : _c.email
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form_group form_groupPhone mt-4", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "phone", children: [
              "Mobile Number ",
              /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              PhoneInput,
              {
                defaultCountry: "ae",
                onChange: (value) => handleChildPhoneChange(value, i),
                value: (_d = passengersChild[i]) == null ? void 0 : _d["adult_phone"]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form_group mt-3", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "weight", children: [
              "Weight (KG) ",
              /* @__PURE__ */ jsx("span", { style: { color: "red" }, children: "*" })
            ] }),
            /* @__PURE__ */ jsx("div", { class: "input-group", children: /* @__PURE__ */ jsx(
              "input",
              {
                name: "weight",
                type: "number",
                max: 120,
                class: "form-control inputField",
                onChange: async (e) => {
                  if (e.target.value > 119) {
                    toast.error(
                      "weight under 120 kg is Allowed for Children"
                    );
                    return;
                  }
                  if (e.target.value < 0) {
                    return;
                  }
                  await handleChildChange(e, i);
                },
                value: (_e = passengersChild[i]) == null ? void 0 : _e.weight
              }
            ) })
          ] })
        ] });
      }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btnNl btnNl-primary mt-4",
          onClick: handleDataSubmit,
          disabled: isLoading,
          children: isLoading ? "Submitting..." : "Submit"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Col, { md: 4, children: /* @__PURE__ */ jsx("div", { className: "CardWrapper mt-40 mb-3", children: /* @__PURE__ */ jsxs("div", { className: "flightCard", children: [
      /* @__PURE__ */ jsx("div", { className: "sec-title", children: packageval == null ? void 0 : packageval.title }),
      /* @__PURE__ */ jsxs("div", { className: "details mt-3", children: [
        /* @__PURE__ */ jsx("div", { className: "title", children: "Time" }),
        /* @__PURE__ */ jsx("p", { className: "para mt-1", children: "45 - 60 Minutes" }),
        /* @__PURE__ */ jsx("div", { className: "title", children: "Location" }),
        /* @__PURE__ */ jsx("p", { className: "para mt-1", children: "Margham Dubai, United Arab Emirates" }),
        /* @__PURE__ */ jsxs("p", { className: "para mt-1", children: [
          "Adults: ",
          (_a = BookingData == null ? void 0 : BookingData.booking) == null ? void 0 : _a.slot_adult
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "para mt-1", children: [
          "Childs: ",
          (_b = BookingData == null ? void 0 : BookingData.booking) == null ? void 0 : _b.slot_child
        ] }),
        " "
      ] })
    ] }) }) })
  ] }) }) });
}
function PassengersForm() {
  const { lang, id } = useParams();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "title", content: " Maha Hot Air Balloons in Dubai" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "" }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "canonical",
          href: `${void 0}/${lang && `${lang}/`}passengers-details/${id}`
        }
      ),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/${lang && `${lang}/`}passengers-details/${id}`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Index$1, { title: "Passenger Details Form", path: "passengers-details" }),
    /* @__PURE__ */ jsx(Index, {})
  ] });
}
export {
  PassengersForm as default
};
