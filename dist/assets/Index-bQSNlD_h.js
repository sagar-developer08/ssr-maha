import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { f as fetchSlotData, s as setBooking, a as fetchPackagesData, b as setPackageId, c as setPackage, l as addPassengerData, m as makeBooking } from "../entry-server.js";
import { Row, Col, Container } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Calendar from "react-calendar";
/* empty css                  */
import moment from "moment";
import BounceLoader from "react-spinners/BounceLoader.js";
import { toast } from "react-toastify";
import { useSearchParams, useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import { RiErrorWarningFill } from "react-icons/ri";
import Modal from "react-bootstrap/Modal";
import "react-dom/server";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "react-icons/fa";
import "react-icons/io5";
import "framer-motion";
import "@reduxjs/toolkit";
import "react-bootstrap/Accordion";
import "axios";
import "axios-cache-interceptor";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
function Index$9(props) {
  useDispatch();
  return /* @__PURE__ */ jsxs("div", { className: (props == null ? void 0 : props.asGiftStep) == 2 ? "topBar32 bderBTM" : "topBar32", children: [
    " ",
    /* @__PURE__ */ jsxs("div", { className: "title-sec", children: [
      (props == null ? void 0 : props.asGiftStep) == 2 ? /* @__PURE__ */ jsx("div", { className: "sec-title", children: "Checkout" }) : /* @__PURE__ */ jsx("div", { className: "breadCrub", children: (props == null ? void 0 : props.currentStep) <= 2 ? /* @__PURE__ */ jsx("div", { className: "sec-title active", children: "Booking" }) : (props == null ? void 0 : props.currentStep) == 3 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "sec-title",
            onClick: () => {
              if (props == null ? void 0 : props.lastSubmit) {
                return;
              }
              props == null ? void 0 : props.setCurrentStep(1);
            },
            children: [
              "Booking",
              /* @__PURE__ */ jsx(IoIosArrowForward, { size: 16 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "sec-title active",
            onClick: () => {
              if (props == null ? void 0 : props.lastSubmit) {
                return;
              }
              props == null ? void 0 : props.setCurrentStep(3);
            },
            children: [
              "Contact Details",
              /* @__PURE__ */ jsx(IoIosArrowForward, { size: 16 })
            ]
          }
        )
      ] }) : (props == null ? void 0 : props.currentStep) == 4 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "sec-title",
            onClick: () => {
              if (props == null ? void 0 : props.lastSubmit) {
                return;
              }
              props == null ? void 0 : props.setCurrentStep(1);
            },
            children: [
              "Booking",
              /* @__PURE__ */ jsx(IoIosArrowForward, { size: 16 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "sec-title",
            onClick: () => {
              if (props == null ? void 0 : props.lastSubmit) {
                return;
              }
              props == null ? void 0 : props.setCurrentStep(3);
            },
            children: [
              "Contact Details",
              /* @__PURE__ */ jsx(IoIosArrowForward, { size: 16 })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "sec-title active", children: [
          "Pickup",
          /* @__PURE__ */ jsx(IoIosArrowForward, { size: 16 })
        ] })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-title", children: [
          "Booking",
          /* @__PURE__ */ jsx(IoIosArrowForward, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sec-title", children: [
          "Contact Details",
          /* @__PURE__ */ jsx(IoIosArrowForward, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sec-title", children: [
          "Pickup",
          /* @__PURE__ */ jsx(IoIosArrowForward, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sec-title active", children: [
          "Details",
          /* @__PURE__ */ jsx(IoIosArrowForward, { size: 16 })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "endHalf", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "closeIcon",
          onClick: () => {
            props == null ? void 0 : props.handleClose();
          },
          children: /* @__PURE__ */ jsx(IoMdClose, { size: 30 })
        }
      ) })
    ] })
  ] });
}
function Index$8(props) {
  const packageval = useSelector((state) => {
    var _a;
    return (_a = state == null ? void 0 : state.booking) == null ? void 0 : _a.package;
  });
  const [value, setValue] = useState(moment(/* @__PURE__ */ new Date()).format("YYYY-MM-DD"));
  const [slotsData, setSlotsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredSlotInfo, setHoveredSlotInfo] = useState(null);
  const [slotInfo, setSlotInfo] = useState({});
  const fetchSlotsListData = async () => {
    var _a;
    try {
      setIsLoading(true);
      const { data } = await fetchSlotData();
      setSlotsData(data == null ? void 0 : data.slots);
      {
        (_a = data == null ? void 0 : data.slots) == null ? void 0 : _a.map((x) => {
          setValue(moment(/* @__PURE__ */ new Date()).format("YYYY-MM-DD"));
        });
      }
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const booking_dateQuery = searchParams.get("booking_date");
  useEffect(() => {
    fetchSlotsListData();
  }, [booking_dateQuery]);
  const handleDateChange = (value2) => {
    const dateValue = moment(value2).format("YYYY-MM-DD");
    setValue(value2);
    let totalAdults = (props == null ? void 0 : props.adultAmount) * (packageval == null ? void 0 : packageval.price_adult);
    let totalChild = (props == null ? void 0 : props.childAmount) * (packageval == null ? void 0 : packageval.price_child);
    props == null ? void 0 : props.setInitialCheckOutAmount({
      adults: {
        guests: props == null ? void 0 : props.adultAmount,
        price_initial: packageval == null ? void 0 : packageval.price_adult
      },
      childs: {
        guests: props == null ? void 0 : props.childAmount,
        price_initial: packageval == null ? void 0 : packageval.price_child
      }
    });
    props == null ? void 0 : props.setCheckOutAmount(parseFloat(totalAdults + totalChild).toFixed(0));
    const selectedSlot = slotsData == null ? void 0 : slotsData.find((slot) => (slot == null ? void 0 : slot.date) === dateValue);
    if (selectedSlot) {
      localStorage.setItem("slotId", selectedSlot.id);
      props == null ? void 0 : props.setslotDetails(selectedSlot.id);
      const availableSlots = (selectedSlot == null ? void 0 : selectedSlot.totalSlots) - (selectedSlot == null ? void 0 : selectedSlot.bookedSlots);
      if (availableSlots === 0) {
        setTimeout(() => {
          document.querySelector(".react-calendar__tile--active").classList.add("fullSeats");
        }, 100);
      } else if (availableSlots <= 20) {
        setTimeout(() => {
          document.querySelector(".react-calendar__tile--active").classList.add("limited");
        }, 100);
      }
      setSlotInfo({
        total: selectedSlot == null ? void 0 : selectedSlot.totalSlots,
        booked: selectedSlot == null ? void 0 : selectedSlot.bookedSlots
      });
    } else {
      localStorage.removeItem("slotId");
    }
  };
  useEffect(() => {
    const newDate = new Date(booking_dateQuery);
    if (booking_dateQuery) {
      handleDateChange(newDate);
    }
  }, [booking_dateQuery]);
  const handleHover = (date) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const hoveredSlot = slotsData == null ? void 0 : slotsData.find((slot) => (slot == null ? void 0 : slot.date) === dateValue);
    if (hoveredSlot) {
      setHoveredSlotInfo({
        date: dateValue,
        totalSlots: hoveredSlot == null ? void 0 : hoveredSlot.totalSlots,
        bookedSlots: hoveredSlot == null ? void 0 : hoveredSlot.bookedSlots
      });
    } else {
      setHoveredSlotInfo(null);
    }
  };
  const tileClassName = ({ date, view }) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const slot = slotsData == null ? void 0 : slotsData.find((slot2) => (slot2 == null ? void 0 : slot2.date) === dateValue);
    if (slot) {
      const availableSlots = (slot == null ? void 0 : slot.totalSlots) - (slot == null ? void 0 : slot.bookedSlots);
      if (availableSlots === 0) {
        return "fullSeats";
      } else if (availableSlots <= 20) {
        return "limitedSeats";
      } else {
        return "availableSeats";
      }
    }
    return "";
  };
  const tileContent = ({ date, view }) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const slot = slotsData == null ? void 0 : slotsData.find((slot2) => (slot2 == null ? void 0 : slot2.date) === dateValue);
    if (slot) {
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "hover-tile",
          onMouseEnter: () => handleHover(date),
          onMouseLeave: () => setHoveredSlotInfo(null),
          children: /* @__PURE__ */ jsx("span", { className: "hover-marker", children: "i" })
        }
      );
    }
    return null;
  };
  const tileDisabled = ({ date, view }) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const isDateInSlots = slotsData.some((slot) => slot.date === dateValue);
    return !isDateInSlots;
  };
  return /* @__PURE__ */ jsxs("div", { className: "Calender9393dd mt-4", children: [
    /* @__PURE__ */ jsx("div", { className: "sec-title", children: "Select Date" }),
    /* @__PURE__ */ jsxs("div", { className: "clr-info mt-2", children: [
      /* @__PURE__ */ jsx("div", { className: "sb-title", children: "Seats are Available!" }),
      /* @__PURE__ */ jsxs("div", { className: "clr-list mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "dot_wrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "dot clr-available" }),
          /* @__PURE__ */ jsx("div", { className: "label ", children: "Available" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "dot_wrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "dot clr-limited" }),
          /* @__PURE__ */ jsx("div", { className: "label ", children: "Limited" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "dot_wrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "dot clr-full" }),
          /* @__PURE__ */ jsx("div", { className: "label ", children: "Full" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "calender_wrap mt-2", children: isLoading ? /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center justify-content-center my-5 py-5", children: /* @__PURE__ */ jsx(BounceLoader, { color: "#7ab342", size: 60 }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Calendar,
        {
          onChange: handleDateChange,
          value,
          tileClassName,
          tileContent,
          tileDisabled
        }
      ),
      hoveredSlotInfo && /* @__PURE__ */ jsxs("div", { className: "hover-info", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Total Slots:" }),
          " ",
          hoveredSlotInfo.totalSlots
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Booked Slots:" }),
          " ",
          hoveredSlotInfo.bookedSlots
        ] })
      ] })
    ] }) })
  ] });
}
function Index$7(props) {
  const { adultAmount, adultPrice, childAmount, childPrice, checkOutAmont } = props;
  useEffect(() => {
    let totalAdultsPrice = adultPrice * adultAmount;
    let totalChildPrice = childPrice * childAmount;
    props == null ? void 0 : props.setCheckOutAmount(totalAdultsPrice + totalChildPrice);
  }, [adultAmount, childAmount]);
  return /* @__PURE__ */ jsxs("div", { className: "GiftCard392", children: [
    " ",
    /* @__PURE__ */ jsx("div", { className: "sec-title mt-40", children: "Customize Your Gift Card Value" }),
    /* @__PURE__ */ jsx("p", { className: "para mt-3", children: "You’re in control! Decide the value of your gift card. Simply select the amount that suits your generosity. Need help calculating? Consider the unit prices of our offerings to tailor the perfect amount for your gift." }),
    /* @__PURE__ */ jsxs("div", { className: "guest-info mt-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "title", children: [
        props == null ? void 0 : props.adultAmount,
        " Adult"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "amont", children: [
        "Aed ",
        adultPrice * adultAmount
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "guest-info mt-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "title", children: [
        props == null ? void 0 : props.childAmount,
        " Child"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "amont", children: [
        "Aed ",
        childPrice * childAmount
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "giftamountWrapper mt-40", children: [
      /* @__PURE__ */ jsx("div", { className: "sec-title mb-3", children: "Gift Card Value" }),
      /* @__PURE__ */ jsxs("div", { class: "input-group mb-3", children: [
        /* @__PURE__ */ jsx("span", { class: "input-group-text", id: "basic-addon1", children: "AED" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            class: "form-control inputField",
            value: checkOutAmont,
            disabled: true
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "msg-info", children: "Minimum gift card value is Aed 200" })
    ] })
  ] });
}
const coin = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M39.9997%2073.3335C58.4097%2073.3335%2073.333%2058.4102%2073.333%2040.0002C73.333%2021.5902%2058.4097%206.66683%2039.9997%206.66683C21.5897%206.66683%206.66635%2021.5902%206.66635%2040.0002C6.66634%2058.4102%2021.5897%2073.3335%2039.9997%2073.3335ZM39.9997%2070.0002C39.9997%2062.0437%2043.1604%2054.413%2048.7865%2048.787C54.4126%2043.1609%2062.0432%2040.0002%2069.9997%2040.0002C62.0432%2040.0002%2054.4126%2036.8395%2048.7865%2031.2134C43.1604%2025.5873%2039.9997%2017.9567%2039.9997%2010.0002C39.9997%2017.9567%2036.839%2025.5873%2031.2129%2031.2134C25.5868%2036.8395%2017.9562%2040.0002%209.99968%2040.0002C17.9562%2040.0002%2025.5868%2043.1609%2031.2129%2048.787C36.839%2054.413%2039.9997%2062.0437%2039.9997%2070.0002Z'%20fill='white'/%3e%3c/svg%3e";
function Index$6(props) {
  return /* @__PURE__ */ jsx("div", { className: "asGiftCheckoutF32e", children: /* @__PURE__ */ jsxs(Row, { className: "ItemROw", children: [
    /* @__PURE__ */ jsx(Col, { className: "colHalf", md: 8, children: /* @__PURE__ */ jsxs("div", { className: "detail-form  mt-40", children: [
      /* @__PURE__ */ jsx("div", { className: "sec-title", children: "Contact Details" }),
      /* @__PURE__ */ jsxs(Row, { className: "g-4 mt-3", children: [
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "First Name" }),
          /* @__PURE__ */ jsx("input", { className: "inputField", name: "FName", type: "text" })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Last Name" }),
          /* @__PURE__ */ jsx("input", { className: "inputField", name: "LName", type: "text" })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Email" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "inputField",
              name: "email",
              type: "Email",
              placeholder: "abc@gamil.com"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group form_groupPhone", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Mobile Number" }),
          /* @__PURE__ */ jsx(PhoneInput, { defaultCountry: "ae" })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Country" }),
          /* @__PURE__ */ jsxs("select", { className: "selectOption", name: "country", id: "", children: [
            /* @__PURE__ */ jsx("option", { value: "", defaultChecked: true, disabled: true, children: "Select a Country" }),
            /* @__PURE__ */ jsx("option", { value: "uae", children: "UAE" }),
            /* @__PURE__ */ jsx("option", { value: "UK", children: "UK" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sec-title mt-5", children: "Gift To" }),
      /* @__PURE__ */ jsxs(Row, { className: "g-4 mt-3", children: [
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "First Name" }),
          /* @__PURE__ */ jsx("input", { className: "inputField", name: "FName", type: "text" })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Last Name" }),
          /* @__PURE__ */ jsx("input", { className: "inputField", name: "LName", type: "text" })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Email" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "inputField",
              name: "email",
              type: "Email",
              placeholder: "abc@gamil.com"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group form_groupPhone", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Mobile Number" }),
          /* @__PURE__ */ jsx(PhoneInput, { defaultCountry: "ae" })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Country" }),
          /* @__PURE__ */ jsxs("select", { className: "selectOption", name: "country", id: "", children: [
            /* @__PURE__ */ jsx("option", { value: "", defaultChecked: true, disabled: true, children: "Select a Country" }),
            /* @__PURE__ */ jsx("option", { value: "uae", children: "UAE" }),
            /* @__PURE__ */ jsx("option", { value: "UK", children: "UK" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Col, { md: 4, children: /* @__PURE__ */ jsxs("div", { className: "giftCardWrapper", children: [
      /* @__PURE__ */ jsxs("div", { className: "giftCard mt-40", children: [
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
          /* @__PURE__ */ jsx("img", { src: coin, alt: "", height: 80, width: 80 }),
          /* @__PURE__ */ jsx("div", { className: "sec-title", children: "Gift Card" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "Price", children: [
          "AED ",
          props == null ? void 0 : props.checkOutAmont
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2", children: "*This gift card is valid for 1 year only" })
    ] }) })
  ] }) });
}
function Index$5(props) {
  const {
    adultAmount,
    setAdultAmount,
    childAmount,
    setChildAmount,
    setslotDetails,
    setInitialCheckOutAmount
  } = props;
  const packageval = useSelector((state) => {
    var _a;
    return (_a = state == null ? void 0 : state.booking) == null ? void 0 : _a.package;
  });
  return /* @__PURE__ */ jsx("div", { className: "step1dk3", children: (props == null ? void 0 : props.asGiftStep) == 2 ? /* @__PURE__ */ jsx(Index$6, { checkOutAmont: props == null ? void 0 : props.checkOutAmont }) : /* @__PURE__ */ jsxs(Row, { className: "step1Size", children: [
    /* @__PURE__ */ jsx(Col, { xs: 12, className: "colHalf", md: 8, children: /* @__PURE__ */ jsxs("div", { className: "wrapper mt-4", children: [
      /* @__PURE__ */ jsx("div", { className: "sec-title", children: packageval == null ? void 0 : packageval.title }),
      /* @__PURE__ */ jsx("p", { className: "para mt-3", children: packageval == null ? void 0 : packageval.short_detail }),
      /* @__PURE__ */ jsx("div", { className: "sec-title mt-3", children: "Choose Guests" }),
      /* @__PURE__ */ jsxs("div", { className: "guest-sec mt-2", children: [
        /* @__PURE__ */ jsx("div", { className: "sec-title", children: "Adult (above 11 yrs)" }),
        /* @__PURE__ */ jsxs("div", { className: "amount", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "qty-icon",
              onClick: () => {
                if (adultAmount == 0) {
                  return;
                }
                setAdultAmount((prev) => prev - 1);
              },
              children: /* @__PURE__ */ jsx(FaMinus, { size: 16 })
            }
          ),
          adultAmount,
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "qty-icon",
              onClick: () => {
                if (adultAmount >= 10) {
                  setAdultAmount(10);
                  return;
                }
                setAdultAmount((prev) => prev + 1);
              },
              children: /* @__PURE__ */ jsx(FaPlus, { size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "info mt-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "sub-title", children: [
          "from AED ",
          packageval == null ? void 0 : packageval.price_adult
        ] }),
        /* @__PURE__ */ jsx("p", { className: "details mt-2", children: "*Passenger should be under 120kgs" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "guest-sec mt-2", children: [
        /* @__PURE__ */ jsx("div", { className: "sec-title", children: "Child (5 - 11 yrs)" }),
        /* @__PURE__ */ jsxs("div", { className: "amount", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "qty-icon",
              onClick: () => {
                if (childAmount == 0) {
                  return;
                }
                setChildAmount((prev) => prev - 1);
              },
              children: /* @__PURE__ */ jsx(FaMinus, { size: 16 })
            }
          ),
          childAmount,
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "qty-icon",
              onClick: () => {
                if (adultAmount >= 10) {
                  setChildAmount(10);
                  return;
                }
                setChildAmount((prev) => prev + 1);
              },
              children: /* @__PURE__ */ jsx(FaPlus, { size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "info mt-1", children: /* @__PURE__ */ jsxs("div", { className: "sub-title", children: [
        "from AED ",
        packageval == null ? void 0 : packageval.price_child
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Col, { "sec-title": true, md: 4, children: (props == null ? void 0 : props.asGift) ? /* @__PURE__ */ jsx(
      Index$7,
      {
        adultAmount,
        adultPrice: packageval == null ? void 0 : packageval.price_adult,
        childAmount,
        childPrice: packageval == null ? void 0 : packageval.price_child,
        setCheckOutAmount: props == null ? void 0 : props.setCheckOutAmount,
        checkOutAmont: props == null ? void 0 : props.checkOutAmont
      }
    ) : (props == null ? void 0 : props.currentStep) == 2 ? /* @__PURE__ */ jsx(
      Index$8,
      {
        adultAmount,
        childAmount,
        setCheckOutAmount: props == null ? void 0 : props.setCheckOutAmount,
        setInitialCheckOutAmount,
        setslotDetails
      }
    ) : null })
  ] }) });
}
function Index$4(props) {
  const {
    weightOption,
    setWeightOption,
    adultAmount,
    childAmount,
    passengersAdult,
    handleAdultChange,
    passengersChild,
    handleChildChange,
    handleAdultWeight,
    handleChildWeight,
    fieldsAdults,
    fieldsChilds,
    handleAdultPhoneChange,
    handleChildPhoneChange
  } = props;
  const packageval = useSelector((state) => {
    var _a;
    return (_a = state == null ? void 0 : state.booking) == null ? void 0 : _a.package;
  });
  return /* @__PURE__ */ jsxs("div", { className: "Step4DSds003j", children: [
    /* @__PURE__ */ jsx("div", { className: "sec-title mt-3", children: "Enter Passengers Details" }),
    /* @__PURE__ */ jsxs(Row, { className: "step2Size", children: [
      /* @__PURE__ */ jsxs(Col, { className: "colHalf PassengerLIStCol", md: 8, children: [
        fieldsAdults == null ? void 0 : fieldsAdults.map((item, i) => {
          var _a, _b, _c, _d, _e;
          return /* @__PURE__ */ jsxs("div", { className: "wrapper mt-40", children: [
            /* @__PURE__ */ jsxs("div", { className: "sec-title mt-5", children: [
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
                    value: (_a = passengersAdult[i]) == null ? void 0 : _a.name
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
                    value: (_b = passengersAdult[i]) == null ? void 0 : _b.last_name
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
                  value: (_c = passengersAdult[i]) == null ? void 0 : _c.email
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
                  value: (_d = passengersAdult[i]) == null ? void 0 : _d.phone
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
                      toast.error("weight is not acceptable", {
                        toastId: "weightError"
                      });
                      return;
                    }
                    if (e.target.value >= 120) {
                      toast.info(
                        "If weight is more then 120kg Price is doubled",
                        {
                          toastId: "weightDoubled"
                        }
                      );
                    }
                    if (e.target.value < 0) {
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
          var _a, _b, _c, _d, _e;
          return /* @__PURE__ */ jsxs("div", { className: "wrapper mt-40", children: [
            /* @__PURE__ */ jsxs("div", { className: "sec-title mt-5", children: [
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
                    value: (_a = passengersChild[i]) == null ? void 0 : _a.name
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
                    value: (_b = passengersChild[i]) == null ? void 0 : _b.last_name
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
                  value: (_d = passengersChild[i]) == null ? void 0 : _d.adult_phone
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
                      toast.error("weight under 120 kg is Allowed", {
                        toastId: "weightUnder"
                      });
                      return;
                    }
                    await handleChildChange(e, i);
                  },
                  value: (_e = passengersChild[i]) == null ? void 0 : _e.weight
                }
              ) })
            ] })
          ] });
        }) })
      ] }),
      /* @__PURE__ */ jsx(Col, { md: 4, children: /* @__PURE__ */ jsx("div", { className: "CardWrapper mt-40 mb-3", children: /* @__PURE__ */ jsxs("div", { className: "flightCard", children: [
        /* @__PURE__ */ jsx("div", { className: "sec-title", children: packageval == null ? void 0 : packageval.title }),
        /* @__PURE__ */ jsxs("div", { className: "details mt-3", children: [
          /* @__PURE__ */ jsx("div", { className: "title", children: "Time" }),
          /* @__PURE__ */ jsx("p", { className: "para mt-1", children: "45 - 60 Minutes" }),
          /* @__PURE__ */ jsx("div", { className: "title", children: "Location" }),
          /* @__PURE__ */ jsx("p", { className: "para mt-1", children: "Margham Dubai, United Arab Emirates" })
        ] })
      ] }) }) })
    ] })
  ] });
}
function Index$3(props) {
  var _a, _b, _c, _d, _e, _f;
  const { totalResp, checkOutAmont, pickUpData } = props;
  return /* @__PURE__ */ jsxs("div", { className: "finalInfo00dk3", children: [
    /* @__PURE__ */ jsx("div", { className: "sec-title mt-3", children: "Booking Details" }),
    /* @__PURE__ */ jsx(Row, { className: "totalInfo", children: /* @__PURE__ */ jsxs(Col, { md: 12, children: [
      /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
        /* @__PURE__ */ jsx(Col, { xs: 12, md: 4, children: /* @__PURE__ */ jsxs("div", { className: "infoD", children: [
          /* @__PURE__ */ jsx("div", { className: "title", children: "Total Passengers:" }),
          /* @__PURE__ */ jsx("p", { className: "para", children: (_a = totalResp == null ? void 0 : totalResp.passengers) == null ? void 0 : _a.length })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { xs: 12, md: 4, children: /* @__PURE__ */ jsxs("div", { className: "infoD", children: [
          /* @__PURE__ */ jsx("div", { className: "title", children: "Total Amount:" }),
          /* @__PURE__ */ jsxs("p", { className: "para", children: [
            "AED ",
            checkOutAmont,
            " "
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsx("div", { className: "infoD mt-5", children: /* @__PURE__ */ jsx("div", { className: "title", children: "Pickup Details" }) }) }) }),
      /* @__PURE__ */ jsxs(Row, { className: "g-3 mt-2", children: [
        /* @__PURE__ */ jsx(Col, { md: 4, children: /* @__PURE__ */ jsxs("div", { className: "infoD", children: [
          /* @__PURE__ */ jsx("div", { className: "title", children: "House No:" }),
          /* @__PURE__ */ jsx("p", { className: "para", children: (_b = totalResp == null ? void 0 : totalResp.pickup) == null ? void 0 : _b.house_no })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 4, children: /* @__PURE__ */ jsxs("div", { className: "infoD", children: [
          /* @__PURE__ */ jsx("div", { className: "title", children: "Area :" }),
          /* @__PURE__ */ jsx("p", { className: "para", children: (_c = totalResp == null ? void 0 : totalResp.pickup) == null ? void 0 : _c.area })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 4, children: /* @__PURE__ */ jsxs("div", { className: "infoD", children: [
          /* @__PURE__ */ jsx("div", { className: "title", children: "City :" }),
          /* @__PURE__ */ jsx("p", { className: "para", children: (_d = totalResp == null ? void 0 : totalResp.pickup) == null ? void 0 : _d.city })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 4, children: /* @__PURE__ */ jsxs("div", { className: "infoD", children: [
          /* @__PURE__ */ jsx("div", { className: "title", children: "Address :" }),
          /* @__PURE__ */ jsx("p", { className: "para", children: (_e = totalResp == null ? void 0 : totalResp.pickup) == null ? void 0 : _e.address })
        ] }) }),
        /* @__PURE__ */ jsx(Col, { md: 4, children: /* @__PURE__ */ jsxs("div", { className: "infoD", children: [
          /* @__PURE__ */ jsx("div", { className: "title", children: "Country :" }),
          /* @__PURE__ */ jsx("p", { className: "para", children: (_f = totalResp == null ? void 0 : totalResp.pickup) == null ? void 0 : _f.country })
        ] }) })
      ] })
    ] }) })
  ] });
}
function Index$2(props) {
  const [viewDetails, SetVIewDetails] = useState(false);
  const {
    currentStep,
    asGift,
    setAsGift,
    setAsGiftStep,
    asGiftStep,
    setCurrentStep,
    checkOutAmont,
    lastSubmit,
    handleCheckout,
    isCheckout,
    isPassengerValidated,
    slotDetails
  } = props;
  return /* @__PURE__ */ jsxs("div", { className: "footer393ld", children: [
    " ",
    /* @__PURE__ */ jsxs("div", { className: "FooterBTNS mt-1 mt-md-5", children: [
      asGift ? /* @__PURE__ */ jsx("div", {}) : lastSubmit ? /* @__PURE__ */ jsx("div", {}) : /* @__PURE__ */ jsxs("div", { className: "DOts", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: currentStep == 1 ? "active" : "",
            onClick: () => setCurrentStep(1)
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: currentStep == 2 ? "active" : "",
            onClick: () => setCurrentStep(2)
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: currentStep == 3 ? "active" : "",
            onClick: () => setCurrentStep(3)
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: currentStep == 4 ? "active" : "",
            onClick: () => {
              setCurrentStep(4);
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "btns", children: [
        !asGift ? /* @__PURE__ */ jsx(Fragment, {}) : /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-secondary mx-3",
            onClick: async () => {
              if (asGift) {
                setAsGiftStep(1);
                setAsGift(false);
                return;
              }
              if (currentStep == 1) {
                return;
              }
              setCurrentStep((prev) => prev - 1);
            },
            children: "Back"
          }
        ),
        currentStep == 4 && lastSubmit ? /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary mt-3",
            onClick: (e) => {
              handleCheckout(e);
            },
            children: isCheckout ? "Processing" : "Checkout"
          }
        ) : currentStep == 4 && !lastSubmit ? /* @__PURE__ */ jsx(Fragment, {}) : /* @__PURE__ */ jsx(
          "button",
          {
            className: "btnNl btnNl-primary",
            onClick: async () => {
              if (currentStep == 2 && !slotDetails) {
                toast.info("Please Select a Booking Date");
                return;
              }
              if (currentStep == 4 && !lastSubmit) {
                toast.info("Please Submit All Data First");
                return;
              }
              setCurrentStep((prev) => prev + 1);
            },
            children: checkOutAmont ? `AED ${checkOutAmont} Continue` : "Continue"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `message mt-3 ${viewDetails ? "notdisabled" : "disabledCtn"}`,
        children: [
          /* @__PURE__ */ jsx("div", { className: "info-icon", onClick: () => SetVIewDetails(!viewDetails), children: /* @__PURE__ */ jsx(RiErrorWarningFill, { size: 40 }) }),
          /* @__PURE__ */ jsx("div", { className: "para", children: "Passengers must be at least 5 years old to join the flight, While the approximate pick-up time is between 3AM & 5AM, The exact timing depends on the sunrise of the month and will be provided the evening before your experience." })
        ]
      }
    )
  ] });
}
function Index$1(props) {
  const {
    loading,
    formData,
    handleAddressFormData,
    hanldeSubmitData,
    adultAmount,
    childAmount,
    lastSubmit,
    referalCode,
    setreferalCode,
    checkOutAmont,
    isDoubledWeight
  } = props;
  const packageval = useSelector((state) => {
    var _a;
    return (_a = state == null ? void 0 : state.booking) == null ? void 0 : _a.package;
  });
  localStorage.getItem("referral_code");
  return /* @__PURE__ */ jsx("div", { className: "AddressFormr903Dkfds", children: /* @__PURE__ */ jsxs(Row, { className: "step2Size3", children: [
    /* @__PURE__ */ jsxs(Col, { className: "colHalf", md: 8, children: [
      /* @__PURE__ */ jsxs("div", { className: "wrapper mt-40", children: [
        /* @__PURE__ */ jsx("div", { className: "sec-title", children: "Pickup Details" }),
        /* @__PURE__ */ jsxs(Row, { children: [
          /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsx("div", { className: "form_group mt-4", children: /* @__PURE__ */ jsx("label", { children: "Please enter your address" }) }) }),
          /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "country", children: "Country" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "inputField",
                type: "text",
                name: "country",
                value: formData == null ? void 0 : formData.country,
                placeholder: "UAE",
                onChange: handleAddressFormData
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Col, { md: 6, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "city", children: "City" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "inputField",
                type: "text",
                name: "city",
                value: formData == null ? void 0 : formData.city,
                placeholder: "Dubai",
                onChange: handleAddressFormData
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "address", children: "Address" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                className: "inputField",
                type: "text",
                name: "address",
                value: formData == null ? void 0 : formData.address,
                onChange: handleAddressFormData,
                rows: 4
              }
            )
          ] }) })
        ] })
      ] }),
      lastSubmit ? /* @__PURE__ */ jsx("button", { className: "btnNl btnNl-primary mt-4", disabled: true, children: "Submitted" }) : /* @__PURE__ */ jsx(
        "button",
        {
          className: "btnNl btnNl-primary mt-4",
          onClick: hanldeSubmitData,
          disabled: loading,
          children: loading ? "Submitting..." : "Submit"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Col, { md: 4, children: [
      /* @__PURE__ */ jsx("div", { className: "CardWrapper mt-40", children: /* @__PURE__ */ jsxs("div", { className: "flightCard", children: [
        /* @__PURE__ */ jsx("div", { className: "sec-title", children: packageval == null ? void 0 : packageval.title }),
        /* @__PURE__ */ jsxs("div", { className: "details mt-3", children: [
          /* @__PURE__ */ jsx("div", { className: "title", children: "Time" }),
          /* @__PURE__ */ jsx("p", { className: "para mt-1", children: "45 - 60 Minutes" }),
          /* @__PURE__ */ jsx("div", { className: "title", children: "Location" }),
          /* @__PURE__ */ jsx("p", { className: "para mt-1", children: "Margham Dubai, United Arab Emirates" }),
          /* @__PURE__ */ jsxs("p", { className: "para mt-1", children: [
            "Adults: ",
            adultAmount,
            " "
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "para mt-1", children: [
            "Childs: ",
            childAmount,
            " "
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "para mt-1", children: [
            "Sub Total:",
            /* @__PURE__ */ jsxs("strong", { children: [
              " AED ",
              checkOutAmont,
              " "
            ] }),
            isDoubledWeight && `(Weight Doubled)`
          ] }),
          /* @__PURE__ */ jsxs("p", { style: { fontSize: "12px", margin: "0" }, children: [
            "Price is Doubled for Passenger over 120KG",
            " "
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "form_group mt-4", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "address", children: "Referral Code" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "inputField",
            type: "text",
            onChange: (e) => {
              setreferalCode(e.target.value);
            }
          }
        )
      ] })
    ] })
  ] }) });
}
function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isBookingModal = useSelector((state) => state.booking.isBookingModal);
  const packageId = useSelector((state) => {
    var _a;
    return (_a = state == null ? void 0 : state.booking) == null ? void 0 : _a.packageId;
  });
  const packageval = useSelector((state) => {
    var _a;
    return (_a = state == null ? void 0 : state.booking) == null ? void 0 : _a.package;
  });
  const userData = useSelector((state) => {
    var _a;
    return (_a = state == null ? void 0 : state.auth) == null ? void 0 : _a.userData;
  });
  const [asGift, setAsGift] = useState(false);
  const [asGiftStep, setAsGiftStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(2);
  useState(1);
  useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false
  });
  const [adultAmount, setAdultAmount] = useState(1);
  const [childAmount, setChildAmount] = useState(0);
  const [slotDetails, setslotDetails] = useState(null);
  const [weightOption, setWeightOption] = useState("below-60kg");
  const [checkOutAmont, setCheckOutAmount] = useState(null);
  const [initialcheckOutAmont, setInitialCheckOutAmount] = useState(null);
  const [isDoubledWeight, setIsDoubleWeight] = useState(false);
  const [passengersAdult, setPassengersAdult] = useState([{}]);
  const [passengersChild, setPassengersChild] = useState([{}]);
  const [pickUpData, setPickUpData] = useState({
    house_no: "",
    address: "",
    area: "",
    landmark: "",
    country: "",
    city: ""
  });
  useState({
    name: "",
    last_name: "",
    email: "",
    phone: ""
  });
  const [addressFormData, setAddressFormData] = useState({
    country: "UAE",
    city: "Dubai",
    address: ""
  });
  const handleAddressFormData = (e) => {
    setAddressFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const [loading, setLoading] = useState(false);
  const [fieldsAdults, setFieldsAdults] = useState([{}]);
  const [fieldsChilds, setFieldsChilds] = useState([{}]);
  const [totalResp, settotalResp] = useState();
  const [lastSubmit, setLastSubmit] = useState(false);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const userIdb2b = searchParams.get("booked_by");
  let authBooking = searchParams.get("book");
  let packageID = searchParams.get("package");
  useEffect(() => {
    const fetchPackageListData = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchPackagesData();
        if (Array.isArray(data)) {
          setPackagesData(data);
          if (authBooking == "true") {
            const packageSelected = data == null ? void 0 : data.filter(
              (item) => (item == null ? void 0 : item.id) == packageID
            )[0];
            console.log("packagesData: ", packagesData);
            console.log("packageSelected: ", packageSelected);
            dispatch(setPackageId(packageSelected == null ? void 0 : packageSelected.id));
            dispatch(setPackage(packageSelected));
            dispatch(setBooking(true));
          }
        }
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (packageID) {
      fetchPackageListData();
    }
  }, [packageID]);
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
    setFieldsAdults(AdultUpdated);
    setPassengersAdult(AdultUpdated);
  }, [adultAmount]);
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
  const handleAdultWeight = async (value, i) => {
    let CurrData = structuredClone(passengersAdult);
    CurrData[i][`weight`] = value;
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
  const handleChildWeight = async (value, i) => {
    let CurrData = structuredClone(passengersChild);
    CurrData[i][`weight`] = value;
    await setPassengersChild(structuredClone(CurrData));
  };
  useEffect(() => {
    if (currentStep == 1) {
      setCheckOutAmount(null);
    }
  }, [currentStep]);
  const handleClose = () => {
    dispatch(setBooking(false));
    navigate("/");
  };
  const isPassengerValidated = () => {
    for (const passenger of passengersAdult) {
      if (!(passenger == null ? void 0 : passenger.name) || !(passenger == null ? void 0 : passenger.last_name) || !(passenger == null ? void 0 : passenger.email) || !(passenger == null ? void 0 : passenger.phone) || !(passenger == null ? void 0 : passenger.weight)) {
        toast.error("Please fill in all fields for adult passengers!");
        return false;
      }
    }
    if (childAmount > 0) {
      for (const passenger of passengersChild) {
        if (!(passenger == null ? void 0 : passenger.name) || !(passenger == null ? void 0 : passenger.last_name) || !(passenger == null ? void 0 : passenger.email) || !(passenger == null ? void 0 : passenger.adult_phone) || !(passenger == null ? void 0 : passenger.weight)) {
          toast.error("Please fill in all fields for child passengers!");
          return false;
        }
      }
    }
    return true;
  };
  const isContactAddressValidated = (addressFormData2) => {
    if (!(addressFormData2 == null ? void 0 : addressFormData2.country) || !(addressFormData2 == null ? void 0 : addressFormData2.city) || !(addressFormData2 == null ? void 0 : addressFormData2.address)) {
      toast.error("Please fill in all fields for Address");
      return false;
    }
    return true;
  };
  const handleDatav2Submit = async (e) => {
    e.preventDefault();
    const slotId = localStorage.getItem("slotId");
    try {
      setLoading(true);
      const payload = [];
      for (const passenger of passengersAdult) {
        if (!(passenger == null ? void 0 : passenger.name) || !(passenger == null ? void 0 : passenger.last_name) || !(passenger == null ? void 0 : passenger.email) || !(passenger == null ? void 0 : passenger.phone) || !(passenger == null ? void 0 : passenger.weight)) {
          toast.error("Please fill in all fields for adult passengers!");
          return;
        }
        if (parseInt(passenger == null ? void 0 : passenger.weight) > parseInt("120")) {
          setCheckOutAmount(
            (prev) => {
              var _a;
              return parseInt(prev) + parseInt((_a = initialcheckOutAmont == null ? void 0 : initialcheckOutAmont.adults) == null ? void 0 : _a.price_initial);
            }
          );
          setIsDoubleWeight(true);
        }
        payload.push({
          name: passenger.name,
          last_name: passenger.last_name,
          email: passenger.email,
          phone: passenger.phone,
          weight: passenger.weight,
          slotId,
          type: "adult"
        });
      }
      if (childAmount > 0) {
        for (const passenger of passengersChild) {
          if (!(passenger == null ? void 0 : passenger.name) || !(passenger == null ? void 0 : passenger.last_name) || !(passenger == null ? void 0 : passenger.email) || !(passenger == null ? void 0 : passenger.adult_phone) || !(passenger == null ? void 0 : passenger.weight)) {
            toast.error("Please fill in all fields for child passengers!");
            return;
          }
          payload.push({
            name: passenger.name,
            last_name: passenger.last_name,
            email: passenger.email,
            phone: passenger.adult_phone,
            weight: passenger.weight,
            slotId,
            type: "child"
          });
        }
      }
      const UpdatedData = {
        // passengers: [{ ...detailsFormData }],
        passengers: payload,
        pickup: addressFormData
      };
      const isAddress = isContactAddressValidated(addressFormData);
      if (!isAddress) {
        return;
      }
      const response = await addPassengerData(UpdatedData);
      setLoading(false);
      if (response.status === 200 || response.status === 201) {
        settotalResp(response == null ? void 0 : response.data);
        setLastSubmit(true);
        toast.success("Data has been Submitted Successfully!");
        setPassengersAdult([]);
        setPassengersChild([]);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoading(false);
      toast.error("Something Went wrong!");
    } finally {
      setLoading(false);
    }
  };
  const [isCheckout, setIsCheckout] = useState(false);
  const [referalCode, setreferalCode] = useState("");
  const handleCheckout = async (e) => {
    var _a, _b, _c;
    setIsCheckout(true);
    const payload = {
      slotId: localStorage.getItem("slotId"),
      refernce_id: totalResp == null ? void 0 : totalResp.refernce_id,
      bookingId: 1,
      booked_by: (userData == null ? void 0 : userData.id) ? Number(userData == null ? void 0 : userData.id) : Number(userIdb2b),
      status: "pending",
      subTotal: checkOutAmont,
      tourId: packageId,
      slot_count: parseInt(adultAmount) + parseInt(childAmount),
      slot_adult: parseInt(adultAmount),
      slot_child: parseInt(childAmount),
      // referral_code: localStorage.getItem("referral_code"),
      referral_code: referalCode
    };
    if (!(payload == null ? void 0 : payload.refernce_id)) {
      toast.error("Not Enough Data, Please Fill Form again");
      setIsCheckout(false);
      return;
    }
    if (!(payload == null ? void 0 : payload.slotId)) {
      toast.error("Select Confirm the Booking Date");
      setIsCheckout(false);
      return;
    }
    try {
      const response = await makeBooking(payload);
      setIsCheckout(false);
      if (response.status === 200 || response.status === 201) {
        setCurrentStep(1);
        setAdultAmount(1);
        setChildAmount(0);
        setCheckOutAmount(null);
        setPassengersChild([{}]);
        setPassengersAdult([{}]);
        setPickUpData({
          house_no: "",
          address: "",
          area: "",
          landmark: "",
          country: "",
          city: ""
        });
        localStorage.removeItem("referral_code");
        setFieldsAdults([{}]);
        setFieldsChilds([{}]);
        settotalResp({});
        dispatch(setBooking(false));
        window.location.assign(
          `${void 0}/?token=${(_c = (_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.cart) == null ? void 0 : _b.data) == null ? void 0 : _c.cartId}`
        );
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      toast.error("Something Went wrong!");
      setIsCheckout(false);
    }
  };
  const booking_dateQuery = searchParams.get("booking_date");
  const adultsQuery = searchParams.get("adults");
  const childQuery = searchParams.get("child");
  useEffect(() => {
    if (adultsQuery) {
      setCurrentStep(2);
      setAdultAmount(parseInt(adultsQuery));
      setChildAmount(parseInt(childQuery));
      if (!(packageval == null ? void 0 : packageval.id)) {
        navigate("/");
        return;
      }
      dispatch(setBooking(true));
    }
  }, [booking_dateQuery, adultsQuery, childQuery]);
  return /* @__PURE__ */ jsx("div", { className: "BookingMain31", children: /* @__PURE__ */ jsx(
    Modal,
    {
      show: isBookingModal,
      onHide: handleClose,
      size: "lg",
      fullscreen: true,
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      children: /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsxs(Container, { children: [
        /* @__PURE__ */ jsx(
          Index$9,
          {
            asGiftStep,
            currentStep,
            setCurrentStep,
            handleClose,
            lastSubmit
          }
        ),
        /* @__PURE__ */ jsx("div", { children: currentStep <= 2 ? /* @__PURE__ */ jsx(
          Index$5,
          {
            asGift,
            asGiftStep,
            setCheckOutAmount,
            setInitialCheckOutAmount,
            checkOutAmont,
            currentStep,
            adultAmount,
            setAdultAmount,
            childAmount,
            setChildAmount,
            setslotDetails
          }
        ) : currentStep == 3 ? /* @__PURE__ */ jsx(
          Index$4,
          {
            adultAmount,
            childAmount,
            weightOption,
            setWeightOption,
            passengersAdult,
            handleAdultChange,
            passengersChild,
            fieldsAdults,
            fieldsChilds,
            handleChildChange,
            handleAdultWeight,
            handleChildWeight,
            handleAdultPhoneChange,
            handleChildPhoneChange
          }
        ) : (
          // <DetailsForm
          //   formData={detailsFormData}
          //   handleDetailsFormData={handleDetailsFormData}
          // />
          // <Step4
          //   adultAmount={adultAmount}
          //   childAmount={childAmount}
          //   weightOption={weightOption}
          //   setWeightOption={setWeightOption}
          //   passengersAdult={passengersAdult}
          //   handleAdultChange={handleAdultChange}
          //   passengersChild={passengersChild}
          //   fieldsAdults={fieldsAdults}
          //   fieldsChilds={fieldsChilds}
          //   handleChildChange={handleChildChange}
          //   handleAdultWeight={handleAdultWeight}
          //   handleChildWeight={handleChildWeight}
          //   handleAdultPhoneChange={handleAdultPhoneChange}
          //   handleChildPhoneChange={handleChildPhoneChange}
          // />
          currentStep == 4 ? (
            // <Step3
            //   handlePassengerSubmit={handlePassengerSubmit}
            //   loading={loading}
            //   setPickUpData={setPickUpData}
            //   pickUpData={pickUpData}
            // />
            /* @__PURE__ */ jsx(
              Index$1,
              {
                checkOutAmont,
                loading,
                formData: addressFormData,
                handleAddressFormData,
                hanldeSubmitData: handleDatav2Submit,
                adultAmount,
                childAmount,
                lastSubmit,
                referalCode,
                setreferalCode,
                isDoubledWeight
              }
            )
          ) : /* @__PURE__ */ jsx(
            Index$3,
            {
              totalResp,
              checkOutAmont,
              pickUpData
            }
          )
        ) }),
        /* @__PURE__ */ jsx(
          Index$2,
          {
            currentStep,
            asGift,
            setAsGift,
            setAsGiftStep,
            setCurrentStep,
            checkOutAmont,
            lastSubmit,
            handleCheckout,
            isCheckout,
            isPassengerValidated,
            slotDetails
          }
        )
      ] }) })
    }
  ) });
}
export {
  Index as default
};
