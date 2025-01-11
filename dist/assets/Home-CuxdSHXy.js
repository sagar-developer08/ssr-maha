import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef, createElement } from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Container } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { f as fetchSlotData, u as useSize, s as setBooking, a as fetchPackagesData, b as setPackageId, c as setPackage } from "../entry-server.js";
import { IoCloseCircleSharp } from "react-icons/io5";
import { u as useOutsideAlerter } from "./useOutsideAlerter-Kk6SgUQ9.js";
import BounceLoader from "react-spinners/BounceLoader.js";
import Calendar from "react-calendar";
/* empty css                  */
import { useSearchParams, useParams, useNavigate, Link } from "react-router-dom";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { I as Index$4 } from "./Index-uvPi-vXe.js";
import { u as useWindowDimensions } from "./useWindowSize-BmynClH8.js";
import { I as Index$5, a as Index$8 } from "./Index-8W1JpIEZ.js";
import { I as Index$6, a as Index$7 } from "./Index-D4W4vOUJ.js";
import { I as Index$9 } from "./Index-W7lIkZDg.js";
import { useInView } from "react-intersection-observer";
import { b as blogs } from "./blogs-DN9EWmDd.js";
import "react-dom/server";
import "react-bootstrap/Nav";
import "react-bootstrap/Navbar";
import "react-icons/go";
import "framer-motion";
import "@reduxjs/toolkit";
import "react-bootstrap/Accordion";
import "axios";
import "axios-cache-interceptor";
import "redux-persist/lib/storage/index.js";
import "redux-persist";
import "redux-persist/integration/react";
import "react-whatsapp";
import "react-rating-stars-component";
import "react-modal-video";
import "react-icons/io";
import "./Card-BZuaqTbV.js";
function index(props) {
  const { Range1, setOpenDatePicker, wrapperRef, setValue, value } = props;
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
          setValue(moment(x == null ? void 0 : x.date).format("YYYY-MM-DD"));
        });
      }
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchSlotsListData();
  }, []);
  const handleDateChange = (value2) => {
    const dateValue = moment(value2).format("YYYY-MM-DD");
    setValue(value2);
    const selectedSlot = slotsData == null ? void 0 : slotsData.find((slot) => (slot == null ? void 0 : slot.date) === dateValue);
    if (selectedSlot) {
      localStorage.setItem("slotId", selectedSlot.id);
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
  useEffect(() => {
    useOutsideAlerter(wrapperRef, setOpenDatePicker);
  }, [wrapperRef]);
  return /* @__PURE__ */ jsx("div", { className: "calender9dk3", children: /* @__PURE__ */ jsx(Fragment, { children: isLoading ? /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center justify-content-center my-5 py-5", children: /* @__PURE__ */ jsx(BounceLoader, { color: "#7ab342", size: 60 }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
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
    /* @__PURE__ */ jsx(
      Calendar,
      {
        value,
        onChange: handleDateChange,
        tileClassName,
        tileContent,
        tileDisabled
      }
    )
  ] }) }) });
}
const calender = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/calender.png";
const clock = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/clock.png";
const ticket = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/ticket.png";
function Index$3() {
  const [packagesSelectModal, setPackagesSelectModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useSize();
  const dispatch = useDispatch();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const wrapperRef = useRef(null);
  const [value, setValue] = useState(/* @__PURE__ */ new Date());
  const [guestsAmont, setGuestsAmont] = useState({ adult: "1", child: "0" });
  useEffect(() => {
    const fetchPackageListData = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchPackagesData();
        if (Array.isArray(data)) {
          setPackagesData(data);
        }
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPackageListData();
  }, []);
  let today = /* @__PURE__ */ new Date();
  let Range1 = today;
  let Range2 = new Date(today);
  Range2.setDate(today.getDate() + 1);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleBookingUpdate = async () => {
    const selectedPackageData = await (packagesData == null ? void 0 : packagesData.filter(
      (item) => (item == null ? void 0 : item.id) == selectedPackage
    )[0]);
    const dateValue = moment(value).format("YYYY-MM-DD");
    if (!dateValue) {
      toast.info("Please Select a Booking Date");
      return;
    }
    if (!selectedPackageData) {
      toast.info("Please Select a Valid Package");
      return;
    }
    if (!(guestsAmont == null ? void 0 : guestsAmont.adult)) {
      toast.info("Please Enter Guests");
      return;
    }
    dispatch(setPackageId(selectedPackageData == null ? void 0 : selectedPackageData.id));
    dispatch(setPackage(selectedPackageData));
    setSearchParams({
      booking_date: dateValue,
      adults: guestsAmont == null ? void 0 : guestsAmont.adult,
      child: guestsAmont == null ? void 0 : guestsAmont.child
    });
  };
  useEffect(() => {
    if (width > 580) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [width]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isSearch ? null : /* @__PURE__ */ jsxs(
      "button",
      {
        className: "serachBtn32d",
        onClick: () => {
          setIsSearch(true);
        },
        children: [
          " ",
          /* @__PURE__ */ jsx(FiSearch, { size: 16 }),
          "Search"
        ]
      }
    ),
    isSearch ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "bookingFieldk321", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "CloseIon",
          onClick: () => {
            setIsSearch(false);
          },
          children: /* @__PURE__ */ jsx(IoCloseCircleSharp, { className: "CloseIocnd", size: 30 })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "itemBox", children: [
        /* @__PURE__ */ jsx("div", { className: "Icons", children: /* @__PURE__ */ jsx("img", { src: calender, alt: "dates" }) }),
        /* @__PURE__ */ jsxs("div", { className: "details", ref: wrapperRef, children: [
          /* @__PURE__ */ jsx("div", { className: "field", children: "Date" }),
          openDatePicker ? /* @__PURE__ */ jsx("div", { className: "dateNoewdk", children: /* @__PURE__ */ jsx(
            index,
            {
              setOpenDatePicker,
              wrapperRef,
              value,
              setValue
            }
          ) }) : null,
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "value",
              onClick: () => setOpenDatePicker(!openDatePicker),
              children: moment(Range1).format("MMMM DD")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "itemBox", children: [
        /* @__PURE__ */ jsx("div", { className: "Icons", children: /* @__PURE__ */ jsx("img", { src: clock, alt: "packages" }) }),
        /* @__PURE__ */ jsxs("div", { className: "details", children: [
          /* @__PURE__ */ jsx("div", { className: "field", children: "Package Type" }),
          /* @__PURE__ */ jsx("div", { className: "value", children: /* @__PURE__ */ jsxs(
            "select",
            {
              className: "PackagesSelect",
              name: "Package",
              id: "",
              onChange: (e) => setSelectedPackage(e.target.value),
              defaultValue: selectedPackage,
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: true, selected: true, children: "Select a Package" }),
                packagesData == null ? void 0 : packagesData.map((item) => /* @__PURE__ */ jsx("option", { value: item == null ? void 0 : item.id, children: item == null ? void 0 : item.title }))
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "itemBox", children: [
        /* @__PURE__ */ jsx("div", { className: "Icons", children: /* @__PURE__ */ jsx("img", { src: ticket, alt: "dates" }) }),
        /* @__PURE__ */ jsxs("div", { className: "details", children: [
          /* @__PURE__ */ jsx("div", { className: "field", children: "Guests" }),
          /* @__PURE__ */ jsxs("div", { className: "value", children: [
            "Adult",
            " ",
            /* @__PURE__ */ jsx(
              "input",
              {
                tooltip: "Adult",
                className: "guest_amt",
                type: "number",
                name: "adult",
                value: guestsAmont == null ? void 0 : guestsAmont.adult,
                onChange: (e) => {
                  if (e.target.value < 0) {
                    return;
                  }
                  if (e.target.value > 7) {
                    return;
                  }
                  setGuestsAmont((prev) => ({
                    ...prev,
                    adult: e.target.value
                  }));
                }
              }
            ),
            " ",
            "~ Child",
            " ",
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "guest_amt",
                type: "number",
                name: "child",
                value: guestsAmont == null ? void 0 : guestsAmont.child,
                onChange: (e) => {
                  if (e.target.value < 0) {
                    return;
                  }
                  if (e.target.value > 7) {
                    return;
                  }
                  setGuestsAmont((prev) => ({
                    ...prev,
                    child: e.target.value
                  }));
                }
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "searchIcon",
          onClick: () => {
            handleBookingUpdate();
          },
          children: /* @__PURE__ */ jsx(FiSearch, { size: 24 })
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "serachBtn",
          onClick: () => {
            handleBookingUpdate();
          },
          children: [
            " ",
            /* @__PURE__ */ jsx(FiSearch, { size: 16 }),
            "Search"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Modal,
        {
          show: packagesSelectModal,
          onHide: () => setPackagesSelectModal(false),
          size: "md",
          "aria-labelledby": "contained-modal-title-vcenter",
          centered: true,
          children: /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
            /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsx("div", { className: "sec-title", children: "Select a Package" }) }),
            /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsx("div", { className: "form_group", children: /* @__PURE__ */ jsxs(
              "select",
              {
                className: "selectOption",
                name: "Package",
                id: "",
                onChange: (e) => setSelectedPackage(e.target.value),
                defaultValue: selectedPackage,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", disabled: true, selected: true, children: "Select a Packages" }),
                  /* @__PURE__ */ jsx("option", { value: "MAHA CLASSIC PACKAGE", children: "MAHA CLASSIC PACKAGE" }),
                  /* @__PURE__ */ jsx("option", { value: "MAHA MAJESTIC PACKAGE", children: "MAHA MAJESTIC PACKAGE" }),
                  /* @__PURE__ */ jsx("option", { value: "MAHA ROYAL PACKAGE", children: "MAHA ROYAL PACKAGE" }),
                  /* @__PURE__ */ jsx("option", { value: "MAHA TWILIGHT OVERNIGHT", children: "MAHA TWILIGHT OVERNIGHT" }),
                  /* @__PURE__ */ jsx("option", { value: "CELESTIAL PRIVATE ROMANCE", children: "CELESTIAL PRIVATE ROMANCE" }),
                  /* @__PURE__ */ jsx("option", { value: "GROUP BOOKING", children: "GROUP BOOKING" }),
                  /* @__PURE__ */ jsx("option", { value: "CORPORATE EVENT", children: "CORPORATE EVENT" }),
                  /* @__PURE__ */ jsx("option", { value: "CELEBRATORY OCCASIONS", children: "CELEBRATORY OCCASIONS" })
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsx(
              "button",
              {
                className: "btnNl btnNl-primary",
                onClick: () => {
                  if (!selectedPackage) {
                    toast.info(
                      "Please Select a Package to Start Booking"
                    );
                    return;
                  }
                  if (selectedPackage) {
                    dispatch(setBooking(true));
                    setPackagesSelectModal(false);
                    return;
                  }
                },
                children: "Book Now"
              }
            ) })
          ] }) })
        }
      )
    ] }) }) : null
  ] });
}
let content$1 = {
  title: {
    en: "The Best Hot Air Balloon Experience in Dubai",
    ar: ""
  },
  title_Mbl: {
    en: "Maha Hot Air Balloon Dubai",
    ar: ""
  },
  keywords: { en: "", ar: "" },
  description: {
    en: "Maha Hot Air Balloon Dubai - where adventure meets serenity in the skies. Let us take you on an exciting hot air balloon ride above the desert, to catch Dubai’s breathtaking landscape unfold in front of you. A once-in-a-lifetime experience of wonder and adventure awaits!",
    ar: ""
  },
  description_mbl: {
    en: "Are you ready for an unforgettable adventure? Soar above Dubai’s golden desert, catch the sunrise, and create lasting memories with our hot air balloon rides. The sky awaits!",
    ar: ""
  }
};
function Banner() {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ jsxs("div", { className: "homePageBanner", children: [
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx(
      "meta",
      {
        name: "keywords",
        content: "Balloon Rides, Adventures, and More in Dubai"
      }
    ) }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "bannerWrapper", children: /* @__PURE__ */ jsxs("div", { className: "content", children: [
      /* @__PURE__ */ jsx("h1", { className: "bannerTitle desktopD3", children: (_a = content$1 == null ? void 0 : content$1.title) == null ? void 0 : _a.en }),
      /* @__PURE__ */ jsx("h1", { className: "bannerTitle MObiled93", children: (_b = content$1 == null ? void 0 : content$1.title_Mbl) == null ? void 0 : _b.en }),
      /* @__PURE__ */ jsx("p", { className: "desktopD3", children: (_c = content$1 == null ? void 0 : content$1.description) == null ? void 0 : _c.en }),
      /* @__PURE__ */ jsx("p", { className: "MObiled93", children: (_d = content$1 == null ? void 0 : content$1.description_mbl) == null ? void 0 : _d.en }),
      /* @__PURE__ */ jsx(Index$3, {})
    ] }) }) })
  ] });
}
const brand1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured1.png";
const brand2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured2.png";
const brand3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured3.png";
const brand4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured4.png";
const brand5 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/FeaturedIn/featured5.png";
function Index$2() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 2e3,
    autoplaySpeed: 2e3,
    cssEase: "linear"
  };
  return /* @__PURE__ */ jsx("div", { className: "HomePageFeaturedIN pt-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs(Row, { className: "gy-3 desktop3", children: [
      /* @__PURE__ */ jsx(Col, { xs: 12, lg: 6, children: /* @__PURE__ */ jsx("div", { className: "sec-title", children: "As Featured In" }) }),
      /* @__PURE__ */ jsx(Col, { xs: 12, lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "BrandsList", children: [
        /* @__PURE__ */ jsx("img", { src: brand1, alt: "", width: "100px" }),
        /* @__PURE__ */ jsx("img", { src: brand2, alt: "", width: "100px" }),
        /* @__PURE__ */ jsx("img", { src: brand3, alt: "", width: "100px" }),
        /* @__PURE__ */ jsx("img", { src: brand4, alt: "", width: "100px" }),
        /* @__PURE__ */ jsx("img", { src: brand5, alt: "", width: "100px" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mobilet", children: /* @__PURE__ */ jsxs(Row, { className: "gy-3 ", children: [
      /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsx("div", { className: "sec-title", children: "As Featured In" }) }),
      /* @__PURE__ */ jsx(Col, { xs: 12, children: /* @__PURE__ */ jsxs(Slider, { ...settings, children: [
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand1, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand2, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand3, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand4, alt: "", width: "100px" }) }),
        /* @__PURE__ */ jsx("div", { className: "imgb", children: /* @__PURE__ */ jsx("img", { src: brand5, alt: "", width: "100px" }) })
      ] }) })
    ] }) })
  ] }) });
}
let content = {
  subtitle: { en: "Why Choose The Best Hot Air Balloon Ride Dubai ", ar: "" },
  title: { en: "Trusted Hot Air Balloon Operator in UAE", ar: "" },
  details: {
    en: "Maha Hot Air Balloons offers a smooth and memorable flight with an unforgettable experience. Every flight with us is made extraordinary by our licensed pilots and well-trained team.  From starting the hot air balloon ride until landing gently, our main priorities are to keep you safe and comfortable. Choose us for a unique journey led by the best hot air balloon company in the country.",
    ar: ""
  }
};
const part1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/tripadvisor.png";
const part2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/makemytrip_logo.png";
const part3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/bookingcom_logo.png";
const part4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/HomePage/viator_logo.png";
const whyUs = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/WhyUs.webp";
function Index$1() {
  var _a, _b, _c;
  let { lang = "en" } = useParams();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx("div", { className: "whyUs32j32 py-60", children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Row, { className: "gy-3", children: [
    /* @__PURE__ */ jsx(Col, { xs: "12", lg: "7", children: /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center h-100", children: /* @__PURE__ */ jsxs("div", { className: "whyUsDetails", children: [
      /* @__PURE__ */ jsx("h2", { className: "tag-line mb-3", children: (_a = content == null ? void 0 : content.subtitle) == null ? void 0 : _a.en }),
      /* @__PURE__ */ jsx("h3", { className: "main-title mb-3", children: (_b = content == null ? void 0 : content.title) == null ? void 0 : _b.en }),
      /* @__PURE__ */ jsx("p", { className: "para", children: (_c = content == null ? void 0 : content.details) == null ? void 0 : _c.en }),
      /* @__PURE__ */ jsxs("div", { className: "partners ", children: [
        /* @__PURE__ */ jsx("img", { src: part1, alt: "partners" }),
        /* @__PURE__ */ jsx("img", { src: part2, alt: "partners" }),
        /* @__PURE__ */ jsx("img", { src: part3, alt: "partners" }),
        /* @__PURE__ */ jsx("img", { src: part4, alt: "partners" })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btnNl-secondary ",
          onClick: () => navigate(`/${lang}/why-us`),
          children: "Learn More"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx(Col, { xs: "12", lg: "5", children: /* @__PURE__ */ jsx("div", { className: "imageWrapper", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: whyUs,
        alt: "Maha Balloon Adventures",
        title: "Maha Balloon in Dubai | Hot Air Balloon | Maha Balloon Adventures  ",
        description: "Maha Balloon offers breathtaking hot air balloon rides in Dubai, showcasing stunning desert landscapes."
      }
    ) }) })
  ] }) }) });
}
const img1 = "/assets/card1-wuQ4621f.jpg";
function Card({
  featured = true,
  package_image,
  thumb,
  title,
  price_adult,
  price_child,
  short_detail,
  itineraries,
  duration,
  location,
  bookNow,
  id,
  active,
  setActive,
  setExtraDetails,
  PrevArrow,
  NextArrow,
  packageVal
}, props) {
  const { lang = "en" } = useParams();
  const dispatch = useDispatch();
  const [DetailsList, setDetailsList] = useState([]);
  return /* @__PURE__ */ jsxs("div", { className: `pkCard32 ${lang == "ar" ? "r_dir" : "l_dir"}`, ...props, children: [
    /* @__PURE__ */ jsxs("div", { className: "ImgThumb", children: [
      featured && /* @__PURE__ */ jsx("div", { className: "featured", children: "Featured" }),
      /* @__PURE__ */ jsx("img", { src: package_image ? package_image : img1, alt: title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "detailsSec", children: [
      /* @__PURE__ */ jsx("h4", { className: "card-title mt-4", children: title }),
      /* @__PURE__ */ jsxs("div", { className: "tag-line mt-2", children: [
        price_adult ? /* @__PURE__ */ jsxs(Fragment, { children: [
          " ADULTS: AED ",
          price_adult
        ] }) : "PRICE ON REQUEST",
        " /",
        "  ",
        price_child && /* @__PURE__ */ jsxs(Fragment, { children: [
          "CHILD: AED ",
          price_child
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "para mt-2", children: short_detail }),
      /* @__PURE__ */ jsxs("div", { className: "time mt-1", children: [
        /* @__PURE__ */ jsx("p", { className: "para bds", children: "Time" }),
        /* @__PURE__ */ jsx("p", { className: "para", children: duration })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
        /* @__PURE__ */ jsx("p", { className: "para bds", children: "Location" }),
        /* @__PURE__ */ jsx("p", { className: "para", children: location }),
        /* @__PURE__ */ jsx(Link, { to: `/${lang}/compare-packages?compare1=${id}`, children: "Compare" })
      ] })
    ] }),
    active == id ? /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("ul", { children: DetailsList == null ? void 0 : DetailsList.map((item, i) => /* @__PURE__ */ jsx("li", { children: item == null ? void 0 : item.activity }, "Iters" + i)) }) }) : null,
    /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "btnNl btnNl-primary pds mrs",
          accordion: true,
          onClick: () => {
            dispatch(setBooking(true));
            dispatch(setPackageId(id));
            dispatch(setPackage(packageVal));
          },
          children: [
            " ",
            "Book Now"
          ]
        }
      ),
      (itineraries == null ? void 0 : itineraries.length) > 0 && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            if (active == id) {
              setActive(null);
              setDetailsList([]);
              return;
            }
            setActive(id);
            setDetailsList(itineraries);
          },
          className: `btnNl ${active == id ? "btnNl-primary" : "btnNl-secondary"} pds `,
          children: active == id ? "Hide Details" : "View Details"
        }
      )
    ] })
  ] });
}
function Details(props) {
  const { key, activity, details, feature_img } = props;
  return /* @__PURE__ */ jsx("div", { className: "PackCardDetails933k", ...props, children: /* @__PURE__ */ jsx("div", { className: "cardDetails", children: /* @__PURE__ */ jsx("div", { className: "details", children: /* @__PURE__ */ jsxs("div", { className: "sec-title", children: [
    /* @__PURE__ */ jsx(FaCircle, { size: 6 }),
    " ",
    activity
  ] }) }) }) });
}
function Index() {
  useParams();
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(null);
  const [ExtraDetails, setExtraDetails] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowDimensions();
  useEffect(() => {
    const fetchPackageListData = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchPackagesData();
        if (Array.isArray(data)) {
          setPackagesData(data);
        }
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPackageListData();
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
    draggable: false,
    touchMove: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    edgeEvent: (item) => {
      console.log("Edge: ", edgeEvent);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2e3,
          swipeToSlide: true,
          draggable: true,
          touchMove: true
        }
      }
    ]
  };
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };
  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };
  const PrevArrow = () => /* @__PURE__ */ jsx(
    "button",
    {
      className: "slider_custom_arrows",
      onClick: previousSlide,
      disabled: currentSlide === 0,
      children: /* @__PURE__ */ jsx(FaAngleLeft, { fontSize: "24px" })
    }
  );
  let toCut = width > 992 ? 3 : width >= 776 ? 2 : 1;
  const NextArrow = () => /* @__PURE__ */ jsx(
    "button",
    {
      className: "slider_custom_arrows ms-3",
      onClick: nextSlide,
      disabled: currentSlide >= (packagesData == null ? void 0 : packagesData.length) - toCut,
      children: /* @__PURE__ */ jsx(FaAngleRight, { fontSize: "24px" })
    }
  );
  return /* @__PURE__ */ jsx("div", { className: "OurPackagesk312 py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsxs("h2", { className: "tag-line mb-3", children: [
      "Choose From The Best Hot Air Balloon Packages in Dubai",
      " "
    ] }),
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { md: 12, lg: 10, children: /* @__PURE__ */ jsx("h3", { className: "main-title mb-3", children: "Book Luxury Hot Air Balloon Packages in UAE" }) }),
      /* @__PURE__ */ jsx(Col, { className: "sliderArrows", md: 12, lg: 2, children: /* @__PURE__ */ jsx("div", { className: "sliderArrows slider_pd-end2", children: /* @__PURE__ */ jsx(
        Index$4,
        {
          prevArrow: /* @__PURE__ */ jsx(PrevArrow, {}),
          nextArrow: /* @__PURE__ */ jsx(NextArrow, {})
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "SliderWrapper3 mt-3 mt-md-5", children: [
      /* @__PURE__ */ jsx("div", { className: "arrowslic22dernext", children: /* @__PURE__ */ jsx(NextArrow, {}) }),
      /* @__PURE__ */ jsx("div", { className: "arrowslic22derprev", children: /* @__PURE__ */ jsx(PrevArrow, {}) }),
      isLoading ? /* @__PURE__ */ jsx("p", { className: "text-center", children: "loading..." }) : /* @__PURE__ */ jsx(Slider, { ref: sliderRef, ...settings, children: packagesData == null ? void 0 : packagesData.map((item) => /* @__PURE__ */ createElement(
        Card,
        {
          ...item,
          key: item == null ? void 0 : item.id,
          active,
          setActive,
          setExtraDetails,
          PrevArrow: /* @__PURE__ */ jsx(PrevArrow, {}),
          NextArrow: /* @__PURE__ */ jsx(NextArrow, {}),
          packageVal: item
        }
      )) })
    ] }),
    /* @__PURE__ */ jsx(Row, { children: ExtraDetails ? ExtraDetails == null ? void 0 : ExtraDetails.map((item, i) => /* @__PURE__ */ jsx(Col, { md: 12, lg: 6, children: /* @__PURE__ */ createElement(Details, { ...item, key: i }) }, i)) : null })
  ] }) });
}
let HomeCOntent = {
  faqsList: [
    {
      id: 0,
      qes: {
        en: "Is a hot air balloon ride in Dubai safe?",
        ar: ""
      },
      ans: {
        en: "Yes, a hot air balloon ride in Dubai is generally safe. Operators adhere to strict safety guidelines set by the UAE’s civil aviation authorities. The balloons are piloted by licensed, experienced professionals who conduct thorough safety checks before each flight. Weather conditions are closely monitored, and rides only proceed when it’s safe to fly. Additionally, hot air balloons are designed with safety in mind, making the experience enjoyable and secure for passengers.",
        ar: ""
      }
    },
    {
      id: 1,
      qes: {
        en: "What should I wear for a hot air balloon ride?",
        ar: ""
      },
      ans: {
        en: "For a hot air balloon ride, it’s best to dress in comfortable, casual clothing. Since the temperature can be cool in the early morning (when most rides occur), it’s advisable to wear layers that you can adjust as the day warms up. Closed-toe shoes like sneakers are ideal, as you may need to walk on uneven terrain during landing. Sunglasses and a hat can also help protect against the sun as the balloon ascends.",
        ar: ""
      }
    },
    {
      id: 2,
      qes: {
        en: "Can children participate in a hot air balloon ride?",
        ar: ""
      },
      ans: {
        en: "Yes, children can participate in a hot air balloon ride, but there are usually age and height restrictions for safety reasons. Most operators in Dubai recommend that children be at least 5 or 6 years old to join the flight. It’s always best to check with the specific balloon company for their exact policy regarding child passengers.",
        ar: ""
      }
    },
    {
      id: 3,
      qes: {
        en: "What are the best times for a hot air balloon ride in Dubai?",
        ar: ""
      },
      ans: {
        en: "The best time for a hot air balloon ride in Dubai is early in the morning, just before sunrise. This is when the weather is calmest and the desert views are breathtaking. The cooler temperatures and golden light of the early morning create a magical experience as you soar above the sand dunes. It’s also the optimal time for spotting wildlife such as Arabian oryx and gazelles in their natural habitat.",
        ar: ""
      }
    }
  ]
};
function Home() {
  const [BlogsData, setBlogsData] = useState([]);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });
  const { lang = "en" } = useParams();
  useEffect(() => {
    var _a;
    let UpdatedBlog = (_a = blogs) == null ? void 0 : _a.filter((item) => (item == null ? void 0 : item.page) == "home");
    setBlogsData(UpdatedBlog);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "title",
          content: "Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!"
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: `${void 0}/` }),
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "alternate",
          hreflang: `${lang}`,
          href: `${void 0}/`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Banner, {}),
    /* @__PURE__ */ jsx(Index$2, {}),
    /* @__PURE__ */ jsx("div", { ref, style: { minHeight: "2px" } }),
    inView ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Index$1, {}),
      /* @__PURE__ */ jsx(Index, {}),
      /* @__PURE__ */ jsx(
        Index$5,
        {
          title: "Gift an Unforgettable Hot Air Balloon Adventure Today !!"
        }
      ),
      /* @__PURE__ */ jsx(Index$6, {}),
      /* @__PURE__ */ jsx(Index$7, {}),
      /* @__PURE__ */ jsx(
        Index$8,
        {
          content: HomeCOntent == null ? void 0 : HomeCOntent.faqsList,
          title: "Frequently Asked Questions about Hot Air Balloons in UAE"
        }
      ),
      /* @__PURE__ */ jsx(
        Index$9,
        {
          blogData: BlogsData,
          subTitle: "Tourist Guides on Things To Do In Dubai UAE",
          title: "Blogs about things to do in Dubai"
        }
      )
    ] }) : null
  ] });
}
export {
  Home as default
};
