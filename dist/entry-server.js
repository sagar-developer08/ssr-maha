import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { createContext, useState, useEffect, lazy, useContext, Suspense } from "react";
import ReactDOMServer from "react-dom/server";
import { useLocation, useParams, useNavigate, useSearchParams, Link, Outlet, Routes, Route, Navigate, StaticRouter } from "react-router-dom";
import { Container, Dropdown, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch, Provider } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GoDot } from "react-icons/go";
import { FaRegHeart, FaRegUser, FaTiktok } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useAnimate } from "framer-motion";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import Accordion from "react-bootstrap/Accordion";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import BounceLoader from "react-spinners/BounceLoader.js";
import storage from "redux-persist/lib/storage/index.js";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const LangContext = createContext("");
const useSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };
    window.addEventListener("resize", windowSizeHandler);
    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);
  return windowSize;
};
const initialState$3 = {
  isAuth: false,
  userData: {},
  token: "",
  registerInfo: {}
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState$3,
  reducers: {
    LoginUser: (state, action) => {
      state.isAuth = true;
      state.userData = action.payload.userData;
      state.token = action.payload.token;
    },
    LogOutUser: (state, action) => {
      state.isAuth = false;
      state.userData = {};
      state.token = "";
    },
    registerInfo: (state, action) => {
      state.registerInfo = action.payload;
    },
    registerInfoRemove: (state) => {
      state.registerInfo = {};
    }
  }
});
const { LoginUser, LogOutUser, registerInfo, registerInfoRemove } = authSlice.actions;
const authReducer = authSlice.reducer;
const cart = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/cart.svg";
const heart = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/heart.svg";
const person = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/person.svg";
const avatar = "https://d3gelo9cifr8ed.cloudfront.net/avatar.png";
const navLogo = "https://d3gelo9cifr8ed.cloudfront.net/assets/mahaNav.png";
const logo$1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Logo.png";
const AuthComp = lazy(() => import("./assets/Index-UPLqWC9P.js"));
const CustomerAuthComp = lazy(
  () => import("./assets/Index-BCxzjueE.js")
);
const Booking = lazy(() => import("./assets/Index-bQSNlD_h.js"));
const MainNavbar = () => {
  const { pathname } = useLocation();
  let { lang: NavLang } = useParams();
  const cartItems = useSelector((state) => state.cart.products);
  const UserData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useSelector((state) => state.booking.isBookingModal);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useContext(LangContext);
  const [modalShow, setModalShow] = React.useState(false);
  const [CustomermodalShow, setCustomerModalShow] = React.useState(false);
  const [showDropDownDesk, setshowDropDownDesk] = React.useState(false);
  const [showDropDownDeskAvatr, setshowDropDownDeskAvatr] = React.useState(false);
  const { height, width } = useSize();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (NavLang == "en" || NavLang == "ar") {
      setLang(NavLang);
    }
  }, []);
  useEffect(() => {
    animate("span", { scale: [1, 2, 1] }, { duration: 0.5 });
  }, [cartItems == null ? void 0 : cartItems.length]);
  let [searchParams, setSearchParams] = useSearchParams();
  const userRef = searchParams.get("referral");
  useEffect(() => {
    localStorage.setItem("referral_code", userRef);
  }, [userRef]);
  const handleLogin = () => {
    setModalShow(true);
  };
  const handleCustomerLogin = () => {
    setCustomerModalShow(true);
  };
  const [hoveredItem, setHoveredItem] = useState({
    section: "experiences",
    item: null
  });
  const closeToggler = () => {
    document.getElementById("responsive-navbar-nav").className = "navbar-collapse collapse";
  };
  const getContent = (section2, item2) => {
    const content2 = {
      experiences: {
        all: {
          title: { en: "All Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: ""
          }
        },
        "standard-balloon-rides": {
          title: { en: "Standard Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: ""
          }
        },
        "luxury-balloon-rides": {
          title: { en: "Luxury Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: ""
          }
        },
        "private-balloon-rides": {
          title: { en: "Private Balloon Rides", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: ""
          }
        },
        "special-packages": {
          title: { en: "Special Packages", ar: "" },
          description: {
            en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            ar: ""
          }
        }
      }
      // merchandise: {
      //   products: {
      //     title: { en: "Products", ar: "" },
      //     description: {
      //       en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      //       ar: "",
      //     },
      //   },
      // },
    };
    return content2[section2][item2] || {
      title: { en: "", ar: "" },
      description: { en: "", ar: "" }
    };
  };
  const { section, item } = hoveredItem;
  getContent(section, item);
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Suspense, { fallback: "Loading...", children: /* @__PURE__ */ jsx(
      AuthComp,
      {
        show: modalShow,
        setShow: setModalShow,
        onHide: () => setModalShow(false)
      }
    ) }),
    CustomermodalShow ? /* @__PURE__ */ jsx(Suspense, { fallback: "Loading...", children: /* @__PURE__ */ jsx(
      CustomerAuthComp,
      {
        show: CustomermodalShow,
        onHide: () => setCustomerModalShow(false)
      }
    ) }) : null,
    /* @__PURE__ */ jsx(Suspense, { fallback: "Loading...", children: /* @__PURE__ */ jsx(Booking, {}) }),
    /* @__PURE__ */ jsx(
      Navbar,
      {
        collapseOnSelect: true,
        expand: "lg",
        className: `navbar-area ${scrolled ? "fixed-top BgScroll" : "fixed-top"} ${lang === "ar" ? "r_dir" : "l_dir"}`,
        children: /* @__PURE__ */ jsxs(Container, { fluid: width <= 1200 ? true : false, children: [
          /* @__PURE__ */ jsx(Navbar.Brand, { as: Link, to: `/${lang}`, children: /* @__PURE__ */ jsxs("div", { className: "brandWrapper", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "imageWrapper",
                src: navLogo,
                alt: "logo",
                width: "180px"
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: logo$1,
                alt: "Logo",
                className: "imageWrapper MobilNavLogo"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "d-flex gap-1", children: /* @__PURE__ */ jsx(Navbar.Toggle, { "aria-controls": "responsive-navbar-nav" }) }),
          /* @__PURE__ */ jsxs(Navbar.Collapse, { id: "responsive-navbar-nav", children: [
            /* @__PURE__ */ jsxs("div", { className: "NavBtMobl", children: [
              /* @__PURE__ */ jsxs("div", { className: "iconsWrapper IconMobile", children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "icons2",
                    onClick: () => {
                      navigate(`/${lang}/wishlist`);
                    },
                    children: [
                      /* @__PURE__ */ jsx("span", { children: "0" }),
                      /* @__PURE__ */ jsx(FaRegHeart, { size: 20 })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    ref: scope,
                    className: " icons2",
                    onClick: () => {
                      navigate(`/${lang}/cart`);
                    },
                    children: [
                      /* @__PURE__ */ jsx("span", { children: cartItems == null ? void 0 : cartItems.length }),
                      /* @__PURE__ */ jsx(IoCartOutline, { size: 25 })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "icons1",
                    onClick: (e) => {
                      if (UserData == null ? void 0 : UserData.isAuth) {
                        return;
                      }
                      handleCustomerLogin();
                    },
                    children: (UserData == null ? void 0 : UserData.isAuth) ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
                      Dropdown,
                      {
                        className: `lang_dropdown lang_dropdownMobil ${lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"}`,
                        show: showDropDownDeskAvatr,
                        children: [
                          /* @__PURE__ */ jsx(
                            Dropdown.Toggle,
                            {
                              variant: "success",
                              id: "dropdown-basic2",
                              onClick: () => {
                                setshowDropDownDeskAvatr(!showDropDownDeskAvatr);
                                setshowDropDownDesk(false);
                              },
                              children: /* @__PURE__ */ jsx(
                                "img",
                                {
                                  src: avatar,
                                  alt: "",
                                  height: 25,
                                  width: 25,
                                  className: "avatrk"
                                }
                              )
                            }
                          ),
                          showDropDownDeskAvatr ? /* @__PURE__ */ jsx(Dropdown.Menu, { className: "dropItemsList", children: /* @__PURE__ */ jsxs(
                            Dropdown.Item,
                            {
                              onClick: () => dispatch(LogOutUser()),
                              className: lang === "en" ? "langItem link_Itemsk" : "langItem link_Itemsk",
                              children: [
                                /* @__PURE__ */ jsx(GoDot, { className: "icon_lang" }),
                                "Logout"
                              ]
                            }
                          ) }) : null
                        ]
                      }
                    ) }) : /* @__PURE__ */ jsx(FaRegUser, { size: 20 })
                  }
                )
              ] }),
              (UserData == null ? void 0 : UserData.isAuth) ? "" : /* @__PURE__ */ jsx(
                "button",
                {
                  className: scrolled ? "btnNl btnNl-primary btnNl-nav logBtn borderfixed" : "btnNl btnNl-primary logBtn",
                  onClick: (e) => {
                    if (UserData == null ? void 0 : UserData.isAuth) {
                      return;
                    }
                    handleLogin();
                  },
                  children: "B2B Login"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Nav, { className: "mx-auto", children: [
              /* @__PURE__ */ jsx(
                Nav.Link,
                {
                  onClick: () => closeToggler(),
                  as: Link,
                  to: `/${lang}/why-us`,
                  className: `nav-item ${pathname === `/${lang}/why-us` && "active"}`,
                  children: lang == "ar" ? "Why Us" : "Why Us"
                }
              ),
              /* @__PURE__ */ jsx(
                Nav.Link,
                {
                  onClick: () => closeToggler(),
                  as: Link,
                  to: `/${lang}/experiences`,
                  className: `nav-item ${pathname === `/${lang}/experiences` && "active"}`,
                  children: lang == "ar" ? "Experiences" : "Experiences"
                }
              ),
              /* @__PURE__ */ jsx(
                Nav.Link,
                {
                  onClick: () => closeToggler(),
                  as: Link,
                  to: `/${lang}/things-to-do`,
                  className: `nav-item ${pathname === `/${lang}/things-to-do` && "active"}`,
                  children: lang == "ar" ? "Things To Do In Dubai" : "Things To Do In Dubai"
                }
              ),
              /* @__PURE__ */ jsx(
                Nav.Link,
                {
                  onClick: () => closeToggler(),
                  as: Link,
                  to: `/${lang}/testimonial`,
                  className: `nav-item ${pathname === `/${lang}/testimonial` && "active"}`,
                  children: lang == "ar" ? "Testimonials" : "Testimonials"
                }
              ),
              /* @__PURE__ */ jsx(
                Nav.Link,
                {
                  onClick: () => closeToggler(),
                  as: Link,
                  to: `/${lang}/blogs`,
                  className: `nav-item ${pathname === `/${lang}/blogs` && "active"}`,
                  children: lang == "ar" ? "Blogs" : "Blogs"
                }
              ),
              /* @__PURE__ */ jsx(
                Nav.Link,
                {
                  onClick: () => closeToggler(),
                  as: Link,
                  to: `/${lang}/contact-us`,
                  className: `nav-item ${pathname === `/${lang}/contact-us` && "active"}`,
                  children: lang == "ar" ? "Contact Us" : "Contact Us"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(Nav, { className: "desktop_nav_icon", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-end align-items-center w-100", children: [
              /* @__PURE__ */ jsxs("div", { className: "iconsWrapper", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "icons1",
                    onClick: () => {
                      navigate(`/${lang}/wishlist`);
                    },
                    children: /* @__PURE__ */ jsx("img", { className: "icns", src: heart, alt: "" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "icons1",
                    onClick: (e) => {
                      if (UserData == null ? void 0 : UserData.isAuth) {
                        return;
                      }
                      handleCustomerLogin();
                    },
                    children: (UserData == null ? void 0 : UserData.isAuth) ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
                      Dropdown,
                      {
                        className: `lang_dropdown lang_dropdownMobil ${lang === "ar" ? "lang_dropdownAr" : "lang_dropdownEn"}`,
                        show: showDropDownDeskAvatr,
                        children: [
                          /* @__PURE__ */ jsx(
                            Dropdown.Toggle,
                            {
                              variant: "success",
                              id: "dropdown-basicdd",
                              onClick: () => {
                                setshowDropDownDeskAvatr(!showDropDownDeskAvatr);
                                setshowDropDownDesk(false);
                              },
                              children: /* @__PURE__ */ jsx(
                                "img",
                                {
                                  src: avatar,
                                  alt: "",
                                  height: 25,
                                  width: 25,
                                  className: "avatrk"
                                }
                              )
                            }
                          ),
                          showDropDownDeskAvatr ? /* @__PURE__ */ jsx(Dropdown.Menu, { className: "dropItemsList", children: /* @__PURE__ */ jsxs(
                            Dropdown.Item,
                            {
                              onClick: () => dispatch(LogOutUser()),
                              className: lang === "en" ? "langItem link_Itemsk" : "langItem link_Itemsk",
                              children: [
                                /* @__PURE__ */ jsx(GoDot, { className: "icon_lang" }),
                                "Logout"
                              ]
                            }
                          ) }) : null
                        ]
                      }
                    ) }) : /* @__PURE__ */ jsx("img", { className: "icns", src: person, alt: "" })
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "icons2",
                    ref: scope,
                    onClick: () => {
                      navigate(`/${lang}/cart`);
                    },
                    children: [
                      /* @__PURE__ */ jsx("span", { children: cartItems == null ? void 0 : cartItems.length }),
                      /* @__PURE__ */ jsx("img", { className: "icns", src: cart, alt: "" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "btnWrapper", children: (UserData == null ? void 0 : UserData.isAuth) ? "" : /* @__PURE__ */ jsx(
                "button",
                {
                  className: scrolled ? "btnNl btnNl-primary btnNl-nav logBtn borderfixed" : "btnNl btnNl-primary logBtn",
                  onClick: (e) => {
                    if (UserData == null ? void 0 : UserData.isAuth) {
                      return;
                    }
                    handleLogin();
                  },
                  children: "B2B Login"
                }
              ) })
            ] }) })
          ] })
        ] })
      }
    )
  ] });
};
const axios = setupCache(Axios);
const Api = axios.create({
  baseURL: (
    // "http://localhost:3000/api",
    "https://o5whtqeiw2.execute-api.us-east-1.amazonaws.com/stagging/api"
  ),
  // "https://pign230wc2.execute-api.us-east-1.amazonaws.com/prod/api",
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
const fetchPackagesData = () => {
  return Api.get("/package");
};
const fetchSlotData = () => {
  return Api.get("/slot");
};
const addPassengerData = (formData) => {
  return Api.post("/passenger", formData);
};
const makeBooking = (formData) => {
  return Api.post("/booking", formData);
};
const getallusers = () => {
  return Api.get("/users");
};
const contactUs = (formData) => {
  return Api.post("/contacts", formData);
};
const ReferenceBooking = (id) => {
  return Api.get(`/bookpassanger/${id}`);
};
const CreateEntryBooking = (payload) => {
  return Api.post(`/create/entry`, payload);
};
const logo = "https://d3gelo9cifr8ed.cloudfront.net/assets/Logo.png";
function Footer(props) {
  var _a;
  const { lang = "en" } = useParams();
  const location = useLocation();
  let currenPath = (_a = location == null ? void 0 : location.pathname) == null ? void 0 : _a.split(/\/en|\//);
  const [subsEmail, setSubsEmail] = useState("");
  const [isLoading, setIsLoaidng] = useState(false);
  let contentFooter = {
    default: ` <strong> Hot Air Balloon Ride: A Unique Aerial Adventure</strong>
                    <p>
                      As soon as your balloon rises gently into the air, you can
                      see just how exciting a hot air balloon ride is, being
                      sent off high above savannahs, metropolis vistas, and the
                      heralding of blues and pinks that are sunrises. How to
                      experience a hot air balloon ride is unmatched by any
                      other adventure, so you can soar high above Dubai’s
                      stunning landscapes. On this hot air balloon flight over
                      Dubai, enjoy the distinct view of the famous landmarks
                      from above without any hindrance.
                    </p>
                    <p>
                      A hot air balloon ride offers peace of mind in the morning
                      or the unforgettable adventure you always dreamed of. A
                      hot air balloon ride above Dubai’s earth gently glides to
                      allow travellers a serene way of seeing Dubai without the
                      buzz and remove you from the hustle and bustle. All hot
                      air balloon rides are taught by trained pilots who put
                      safety first and know that it is a safe activity, so
                      families, couples, and individuals alike can fly in every
                      hot air balloon ride.
                    </p>
                    <p>
                      The planning of the entire hot air balloon ride experience
                      is highly organized from the takeoff site to the landing
                      so that guests have the experience to remember everywhere.
                      A hot air balloon ride in Dubai lets Dubai’s vast desert
                      landscape be an enchanting sight from some truly amazing
                      heights at 360 degrees. Nothing compares to jumping into a
                      hot air balloon for the sheer thrill of clicking it, so a
                      hot air balloon ride in Dubai is a must on your bucket
                      list.
                    </p>
                    <strong>Hot Air Balloon Dubai: A Must-Do Adventure </strong>
                    <p>
                    If you’re looking for an unforgettable experience, a hot air balloon Dubai journey is the perfect choice. Take a hot air balloon Dubai adventure and soar over the desert, watching dunes meet the sun in the morning. A hot air balloon Dubai experience is a treat for the eyes, giving guests a bird's-eye view of Dubai that is a minimalist experience you simply will not find elsewhere.</p>
                    <p>
                    Most often a hot air balloon Dubai experience is at its best via sunrise, with the chance to capture the city’s particular charm as it welcomes sunny days. A hot air balloon Dubai trip is a great place to get away from the city and the noise, floating over a peaceful environment with just the occasional noise of the burner to keep you company. From your hot air balloon Dubai ride, however, as you rise above the vast sands, you can take in the landscapes from yet another angle, providing a much more refreshing diversion from your usual city activity.

                    </p>

                    <p>
                    Whether you’re a first-timer to Dubai or a regular visitor, it’s a unique opportunity to explore Dubai with its natural and architectural marvels from above in a hot air balloon Dubai experience. A hot air balloon Dubai adventure is ideal for all because it provides well-trained pilots and focuses on safety.
                    </p>

                    <strong>
                    Fly in a Hot Air Balloon: A Thrilling Way to See Dubai
                    </strong>

                    <p>
                    One thing that’s very different to experience is flying in a hot air balloon over Dubai and watching as you glide through the sky, gazing over some sights you simply won’t get to see any other way. Sitting in a hot air balloon in Dubai provides a unique take on a life away from here, where the massive desert and the horizon merge perfectly together. Exploring Dubai from the hot air balloon is exhilarating, though—a unique and memorable vantage point, of course.
                    </p>

                    <p>
                    Unless you’re super-equerry, booking a chance to fly in a hot air balloon usually involves catching the sunrise, and that provides plenty of views for awe. Travellers can relish in a once in a lifetime opportunity to escape the city below and be free to fly in a hot air balloon across the vast desert. So if you are up for it, the opportunity to fly in a hot air balloon is both a safe and exciting way to see Dubai from the sky with expert pilots responsible for each journey.
                    </p>

                    <p>
                    There’s a peace you only feel as you fly in a hot air balloon. It is a magical feeling of weightlessness, enormous views, and gentle ascent. If you are planning to visit Dubai, then hot air ballooning should be a great memorable activity you will not miss.
                    </p>

                    <strong>
                    The Dubai Balloon: Dubai's Premier Ballooning Experience</strong>

                    <p>
                    The Dubai Balloon takes you on a truly iconic journey high above the city and its skyline. The Dubai Balloon experience is a mix of getting excited and at peace as you fly above landmarks and sandy dunes in a thrilling controlled environment. Into the Dubai Balloon for an adventure from above and closer to the beauty of Dubai is one for anyone willing to do so, enticed.

                    </p>
                    <p>
                    The Dubai balloon offers a very carefully curated experience in terms of safety and satisfaction with professional pilots. It rises with the sun from Dubai, as passengers can see a glimpse of the Dubai few get to see, providing an experience for photographers, families, and adventurers of a lifetime. When it comes to a unique experience of the natural beauty of the UAE, the Dubai Balloon is often chosen by tourists and residents.</p>
                    <p>
                    If you choose the Dubai Balloon for your aerial adventure, you can rest assured you will have an enjoyable, safe trip from liftoff to landing. The Dubai Balloon journey starts with crafting every detail for the comfort and thrill of offering the guest an unparalleled view of Dubai from a new perspective.</p>

                    <strong>
                    Hot Air Balloon Ride Dubai: An Iconic Way to See the City
                    </strong>

                    <p>
                    One of the most iconic experiences you can have visiting any world-famous destination is embarking on a hot-air balloon ride Dubai. Take a hot air balloon ride Dubai adventure, and from a height you never thought you'd climb, there's a fantastic view of the desert, cityscapes... A hot air balloon ride in Dubai shows you the stunning sunrise, together with the beautiful contrasts between dunes and the city skyline.
Choosing a hot air balloon ride in Dubai is ideal for those looking for something different. Even though hot air balloon Dubai is quite costly, it depends on who you are with and the experience you want. Either way, the calm ascent, with experienced pilots in the pilot's seat, ensures a safe and comfortable experience, making a hot air balloon ride Dubai possible for everyone, from thrill seekers to those who are interested in going out and watching the sights with a calm mind. Thanks to strict safety protocols and trained pilots on duty with every hot air balloon ride Dubai, you’re assured of safety.
A hot air balloon ride Dubai is an excellent way to make unique memories and take fantastic pictures, whether this is your first time in Dubai or you are a regular here. Dubai’s natural and urban beauty can be experienced all at once from the sky in a must-try hot air balloon ride, which is something very few people get to see from the ground level.

                    </p>

                    <strong>Adventure Activities in Dubai: Adding Thrill to Your Trip</strong>

                    <p>The Dubai adventure activities are for those who look for excitement and adventure activities in the city and natural beauty. Dubai offers you adventure activities from thrilling skydiving over Palm Jumeirah to spine-chilling desert safaris, to name a few. All for the adventure lovers and adrenaline junkies. If you want a thrilling experience, a hot air balloon ride in Dubai is an adventure activity that is very, very popular but peaceful at the same time because you get to see the city from an aerial level.
Other adventure activities in Dubai besides hot air ballooning are sandboarding over golden dunes, dune bashing in the desert, and water sports at some of the best beaches in the world. Finally, ziplining over the city or indoor skydiving adventure activities in Dubai are for all levels and interests and can be for anyone visiting Dubai for a memorable day trip. However, these experiences allow a relatively novel mode of connection and exploring both Dubai’s modern landscape and desert terrain.
If you’re after a full-day itinerary of awesome adventure activities in Dubai or you’re only looking for a little bit of thrill to your trip, you’re spoilt for choice. These adventure activities in Dubai take each adventure with an emphasis on excitement and safety and enable locals and tourists alike to have a memorable experience.
</p>
                    
                  `,
    [`why-us`]: ` <strong>Your Trusted Partner for Balloon Adventures</strong>
    <p>Why us for your next hot air balloon experience? Why Us, however, is one of the places that stands out in the adventure scene in Dubai: offering premium, safe, and expertly guided hot air balloon rides revealing Dubai’s beauty. It’s why we are the trusted choice for aerial adventures, with our commitment to top-quality service, so passengers arrive at our doorstep for a smooth and enjoyable experience.
Why we stand out as a leader in hot air balloon rides is because we put safety, customer satisfaction, and most importantly, that ultimate viewing experience. All the detail is looked after by our team of certified, experienced pilots who take care of your departure to arrival. Choosing us means you also get to pay less for well-maintained equipment, meticulous planning, and a memorable adventure that showcases just how stunning Dubai’s scenery is.
Best Hot Air Ballooning in Dubai’s competitive ballooning city, why do we consistently rate and be the provider of choice for its service excellence? Our customers at any time pick us because they know they are with the best, and we are proud of the good service we provide. The answer to why we are here is clear: We combine experience, quality, and dedication to making memories that you won't soon forget.
</p>

<strong>Best Hot Air Balloon in Dubai: Top Choice for Aerial Adventures</strong>
<p>
Our hot air balloon rides are one of the best in Dubai. The best hot air balloon in Dubai is known to provide an unparalleled experience and allow you to see the desert from the sky, as it will be an unforgettable experience. We treat guests to breathtaking views and have some of the best, most experienced pilots to fly you in the hot air balloon safely.
Enjoying the ride of the best hot air balloon in Dubai is not just about views; it’s about experiencing a curated journey with the best professionals guiding, the best memories starting with the best Dubai hot air balloon. The best hot air balloon ride Dubai will have guests ride in a truly comfortable basket at sunrise, so they can experience iconic sights as the scenery spreads out like a mantle before them, miles above the sands. The best hot air balloon experience in Dubai eases you to enjoy both relaxation and excitement from the moment the balloon gets off the ground to its gentle landing.
If you’re looking for the best hot air balloon in Dubai, you won’t find a better option than a hot air balloon in Dubai if you want to have drama with scenery. Choosing to fly with us means you’ll be working with a hot air balloon company that'll strive for excellence and safety and create experiences you’ll remember forever.

</p>

<strong>Why Choose Us for Balloon Rides: Making Memories in the Sky</strong>
<p>If you’re wondering why choose us for balloon rides, our commitment to excellence and creating the most memorable and safe experiences is upfront. There is no other reason to choose us for a balloon ride except our dedication to customer satisfaction with our skilled pilots. From takeoff to landing, we don't compromise safety, and every journey is effortless and enjoyable; this gives peace of mind to those who choose us for their balloon ride.
Why do we make a good choice for balloon rides? We recognise that this won’t just be a floating experience above the desert but rather a bonding with Dubai’s most iconic landscapes for life. The views from each flight are breathtaking views of Dubai’s desert expanse, and our dedication towards these views and our premium services makes you wonder why we should choose balloon rides.
</p>

<strong>Why choose us for balloon rides? </strong>

<p>Our priority is to make you feel safe, comfortable, and inspired. We take care of everything, so all you have to do is have fun. The answer to why you chose us for balloon rides is clear: your hot air balloon ride will be the highlight of your trip, so we provide the experience, safety, and expertise you need.</p>
    <strong>Safe Hot Air Balloon Rides Dubai: Prioritizing Safety and Comfort</strong>
    <p>If you are in for safe hot air balloon rides Dubai, then there is a lot to consider here. At our company, we provide our customers with the cheapest hot air balloon rides Dubai by making sure all equipped planes are checked for quality and any pilot is an expert in rendering excellent service to them. Safe hot air balloon rides Dubai provide passengers an opportunity to fully immerse in the experience, knowing that all the safety measures have been taken to ensure safe hot air balloon rides Dubai.
Safe hot air balloon rides Dubai will offer you peace of mind and let you enjoy magnificent views without a worry in the world, whether you are a first-time rider or an adventuring expert. It is painstakingly designed at every step of the process, from pre-flight briefing to the gentle landing, to make boarding and landing smooth and secure. Not only do safe hot air balloon rides Dubai guarantee an enjoyable journey, but they are a completely safe ride.
But if you are searching for the exhilarating feeling of floating above the Dubai desert without having much to fear, safe hot air balloon rides Dubai offer the ultimate experience. Alongside excitement, we as a team consider safety at the top of our ladder, making sure to give everyone a ride they will enjoy while also not being a worry.
</p>
<strong>
Experienced Air Balloon Pilots: Masters of the Sky
</strong>

<p>
When you fly with us, a process that takes place in our hot air balloon pilot team ensures that we always have a smooth and safe journey, each flight taking you with the expertise of our hot air balloon pilots over Dubai’s beautiful landscapes. Passengers can open their windows to the views, safe in the knowledge that they’re expert hot air balloon pilots at the wheel who know the art of navigating a hot air balloon. We understand that no matter how well our pilots are trained, they still come under the category of working with the unpredictable nature of the weather and the risks that go with it. All of our pilots are trained in hot air balloon handling, and safety is our number one priority.
By riding with experienced hot air balloon pilots, you get to see the city from a different perspective, and experts take care of a steady, smooth flight. But these pilots are also a combination of years and years of training, an incredible knowledge of Dubai’s desert and the cityscape, and an invaluable guide as you travel. Passengers are free to relax and enjoy the view of a landscape as experienced hot air balloon pilots assure you that they know what they’re doing.
By choosing us, you are choosing to fly with some of the most experienced hot-air balloon pilots within the industry. Every single part of the flight—takeoff to landing—is professionally reliable and unforgettable because they are people who know their professional skills and their knowledge.

</p>

<strong>
Safety Measures for Balloon Rides: Ensuring a Secure Experience
</strong>

<p>
One of the things that we are implementing for those balloon rides is that we have safety measures in place so everyone can be safe and enjoy. Our safety measures for balloon rides were checking parts of the equipment, considering proper weather, and doing a pre-flight briefing for passengers. Just before you take part in a balloon experience, we naturally make sure that we are taking all necessary safety precautions, the safety of our passengers in particular being our utmost priority.
Known for our safety measures for balloon rides way above industry standards, our company uses licensed pilots and quality equipment for every flight. On this journey, well-trained professionals guide you through every stage, following safety measures for balloon rides to the tooth at every stage. They include checking the wind, giving any safety tips to the passengers, and using certified, well-maintained balloons.
With our extensive safety precautions involved with balloon rides, passengers can rest assured that their ride will be safe, too. The detail you’d expect from a secure and magical adventure.
</p>

<strong>Premium Balloon Ride Services: The Ultimate Luxury Experience</strong>
<p>Our premium balloon ride services provide you with something to remember when it comes to both luxury and adventure. With our premium balloon ride services, we offer every journey, ensuring that every trip is the most comfortable, enjoyable service, and memorable few seconds that you can have! Passengers will arrive at premium balloon ride services that have everything from high-quality amenities to personalised service.
With transportation, refreshments, and access to some of the best pilots in the industry, we have premium balloon ride services that account for every detail. Our objective is to redefine the landscaping of the hot air balloon experience to make our premium balloon ride services the first choice of individuals who are seeking a taste of luxury while on the trip. Whether it’s the moment you book or the balloon landing, everything is service designed to be as comfortable and enjoyable as possible.
We are in the business of offering premium balloon rides to admire hot air balloon rides with guarantees of each passenger feeling valued and taken care of.
</p>
<strong>Top Balloon Adventures UAE: Unparalleled Experiences in the Sky</strong>

<p>If you are in search of the top balloon adventures in UAE, our rides have the best views of the desert’s sweeping landscapes as well as the features of cityscapes. A Top Balloon Adventure UAE experience means a flight and more than a flight, with the combination of stunning scenery and experienced pilot guidance. Choose Top Balloon Adventures UAE, and you’ll enjoy front-row seats on Dubai’s most breathtaking views, all from the cool calm of a hot air balloon.
On top of the thrill of soaring above the desert with Top Balloon Adventures UAE, you’re getting a premium experience from trained experts who know how to craft every second. Top Balloon Adventures UAE packages are available according to your preferences, for example, if you’re looking for a private, romantic ride or if you’re in a family. What we offer on our Top Balloon Adventures UAE is a great chance to see Dubai‘s incredible scales in a manner not many do.
When you choose to go with Top Balloon Adventures UAE, you know it’s a team you can trust to deliver the best of safety, quality, and memorable experience every time you fly.
</p>
    `,
    [`things-to-do`]: `<strong>Explore Dubai’s Unique Activities</strong>
    <p>There are so many things to do in Dubai, but very few things can beat a hot air balloon over a spectacular Dubai desert landscape. Dubai has a tonne of things to do, from luxury shopping and world-class dining to entertaining adventure activities, but a hot air balloon ride is meditative and exciting all in the same act. Undoubtedly one of the best things to do, it is a sunrise balloon ride over the vast dunes that makes a list of things to do, and the sunrise over the dunes, in such a breathtaking way, offers a peaceful beginning to the day and is something unbeatable.
Dubai has so much to do. You can visit the city’s stunning skyline or its soaring culture. A hot air balloon ride over Dubai's desert is one of the coolest things to do, as it affords travellers to escape the bustle of a city and witness the peaceful side of the UAE. Among the things to do in Dubai, this is a must-do activity and a favourite bucket list activity, bringing a new view of the natural and architectural wonders of Dubai.
Getting a hot air balloon ride is an adventure you will never forget and a good thing to put at the top of your things-to-do list. A perfect blend of thrill and tranquillity, it is one of the better options to choose from Dubai’s activities.
</p>

<strong>Dubai Activities: Unmatched Adventures Await</strong>

<p>Dubai activities are all about combining the wonderful and exciting with the luxurious. From sightseeing in Dubai’s bustling neighbourhoods to discovering the wild landscape surrounding the desert, there's so much Dubai activity to do, it’s endless. For many, the hot air balloon rides are the most sought-after Dubai activities, offering passengers a bird's-eye view of the Arabian Desert and Dubai’s famous skyline.
Dubai activities range from the things you can do with your kids to being an adrenaline junkie to even simply enjoying long walks or picnics outdoors. Dubai activities like dune bashing are available for adventurers to partake in, whereas those looking for a rest can enjoy a leisure experience floating over the desert at dawn. If you choose hot air ballooning as you get among Dubai activities, it is phenomenal, simply because it offers you an extraordinary chance to encounter the quiet desert from another angle.
Your Dubai activities will give you memories you won’t forget, even if you are a thrill-seeker or a sight-seeer. A flight over the dunes in a hot air balloon is the best of both worlds and a favourite Dubai activity for both those living here and those coming to visit.
</p>
    <strong>Fun Things to Do in Dubai: Embrace Adventure and Serenity</strong>

    <p>If you’re wondering what fun things to do in Dubai, I am also looking. If there is one thing you should try, it’s hot air ballooning for the time you get to swim in complete serenity in the desert. Dubai is full of fun things to do, and perhaps none more so than drifting high overhead over a desert landscape while watching the sun rise over the dunes. A balloon ride is a must if you want to have an unforgettable morning; this is the list of things to do in Dubai.
Although the city provides a lot of things to do in Dubai, from thrilling theme parks to cultural tours, a hot air balloon ride is the best way to tend to it away from the busy city. The thrill of exploring the desert from above is one of the fun things to do in Dubai. A hot air balloon adventure to Dubai allows the opportunity to see the city uniquely and beautifully, whether it’s with family, friends, or by yourself.
Hopping on a hot air balloon ride in Dubai is one of the most fun things to do in Dubai if you’re looking for both excitement and relaxation. Whether you are spectating such an event, combining breathtaking views with a tranquil experience, it is for anybody looking to make memories to last the ages.
</p>

<strong>Best Things to Do in Dubai: Create Lasting Memories</strong>
<p>A hot air balloon ride over the desert has truly got to be one of the best things to do in Dubai. The first thing you imagine is waking up to a horizon of dunes, all from the cosy comfort of your hot air balloon. This peaceful yet exhilarating adventure should be on the top list of things to do when you think of the best things to do in Dubai. Surrounded by so much beauty that is the desert, the ride allows you to see the city from above.
The best things to do in Dubai usually involve a bit of modern luxury and a lot of natural beauty. With both—an unparalleled view of the UAE’s incredible landscapes—there is no better way to experience the UAE’s hot air balloon ride. This adventure is one of the best things to do in Dubai, and it encompasses breathtaking views, expert guidance, and a fantastic way of beginning any day.
For that reason, it shouldn’t be excluded from a list of the best things to do in Dubai. Visitors can get a different point of view of one of the most dynamic cities in the world without giving up anything when they opt for it.
</p>

<strong>Desert Safari Dubai: Thrills Across the Sands</strong>
<p>However, travellers visiting the UAE want a Desert Safari Dubai to experience the UAE’s rugged beauty up close. Desert Safari Dubai is a must-do combination of dune bashing, camel riding, and cultural entertainment, which makes it one of the most popular ways to visit the vast Arabian Desert. Most guests take advantage of the fact that a desert safari in Dubai can easily be combined with a sunrise balloon ride, so they start the day with these breathtaking aerial views before experiencing anything that the day offers.
A desert safari in Dubai also involves the thrill of dune exploration and cultural immersion with traditional music, dance, and cuisine. Desert Safari Dubai is perfect for those looking to experience the natural beauty and traditional traditions of the UAE. This is when you combine one with a hot air balloon ride to create a day of adventure and talk to emerge out of the desert.
For travellers who want adventure and an understanding of Emirati culture, Desert Safari Dubai and a hot air balloon ride work in tandem to provide guests with an immersive desert experience from every angle.
</p>

<strong>Ferrari World: A High-Speed Adventure for All Ages</strong>
<p>Ferrari World is one of the most thrilling experiences in the UAE with its high-speed adventure and family-friendly fun. Ferrari World is an adrenaline-pumping rollercoaster that is located in Abu Dhabi, on Yas Island and is best known as the place to go for Formula Rossa, the fastest rollercoaster in the world. If you are looking for unforgettable adventure activities that combine the thrill of motorsports with the kind of amusement park experience no one has done before, then a must-visit is Ferrari World.
Faster than the speed, Ferrari World not only boasts of its speed but is home to an exciting series of Ferrari exhibitions, live shows, and simulators that anybody of any age can enjoy. Ferrari World has it all, from kid-friendly rides like the kid Ferrari F1 adventures to racing simulators that encompass the feeling of being a Formula 1 driver. In each attraction, Ferrari World has treated each attraction with care and excitement that only reflects Ferrari’s exclusive and exciting standard, ensuring that anyone with a passion for the brand receives the most authentic that it has to offer.
Ferrari World is an exciting destination for kids and fun for adults if you are exploring Abu Dhabi and want something more interesting than a city tour. Enjoy the speed of a groundbreaker and some serenity at the same time with a hot air balloon ride paired with this.
</p>

<strong>Abu Dhabi Mosque: A Stunning Architectural Marvel</strong>
<p>A landmark and a must-see for those visiting the UAE is the Abu Dhabi Mosque; another name for it is the Sheikh Zayed Grand Mosque. The Abu Dhabi Mosque, all its length with its vast white marble domes, crystal clear reflecting pools, and intricate carvings, is a masterpiece of Islamic architecture. The Abu Dhabi Mosque attracts visitors from around the world as they marvel at its beauty and take a few minutes to brush up from the tumult of life in its quiet halls.
The architectural marvel can be seen in every corner of the Abu Dhabi Mosque, with its grand, enormous chandeliers crammed with Swarovski crystals and the world’s largest handwoven carpet. Abu Dhabi Mosque is a sprawling courtyard, and tranquil reflecting pools are the tanks of tranquillity and reverence for the two, that is, worshippers and tourists. Visiting the Abu Dhabi Mosque at its first sunset is something magical, where the warm light reflects off its domes and the resulting ethereal glow.
The Abu Dhabi Mosque is a culturally rich and religious destination for travellers who want to dive deep into exploring the heritage of the UAE. The offering of its welcoming atmosphere makes it a must-visit destination in the UAE, and it is accessible to visitors from all backgrounds.
</p>

<strong>Why Us: Your Top Choice for Balloon Adventures</strong>
<p>Why Us becomes self-explanatory the very moment one takes off in terms of superlative hot air balloon experiences. Chancing upon us for the adventure of a lifetime will mean placing your trust in the unchallenged expertise of a team skilled in the business of proffering the best hot air balloon in Dubai. We do not compromise on an unforgettable experience, or the ultimate safety of your ride so that your ride is as comfortable as it is thrilling. Why Us? Our team is passionate about the delivery of a once-in-a-lifetime experience, from seamless bookings to breathtaking flights led by our experienced hot air balloon pilots.
The question of Why Us is best depicted by the range of unique services on offer: from early sunrise flights over the desert to exclusive private tours, we have designed premium balloon ride services for every type of traveller. We go above and beyond to offer personalized touches, making us the best hot air balloon in Dubai for those seeking a memorable adventure. By having safety-certified rides, experienced pilots, and topmost services, the question of why us is quite blunt: we draw the skies closer to you in the safest and most pleasurable way.
</p>

<strong>Best Hot Air Balloon in Dubai: An Unforgettable Sky Adventure</strong>
<p>If you want to have the best experience in a hot air balloon in Dubai, then this is for you. Our rides result in the most excellent aerial experiences where breathtaking panoramic views of Dubai's great desert combine with a luxurious, safe, and comfortable flight. We always strive, as the best hot air balloon experience in Dubai, to make all journeys over the desert a lifetime experience for any person who gets to witness the sun rising from an unmatched vantage point. Every flight is fully planned in detail, right from takeoff to landing, so that each instant is rendered magical.
Ensuring top hot air balloon flights in Dubai means that our team of highly experienced hot air balloon pilots, along with our dedicated staff, strives day after day for premium quality and safety. We are trying to provide premium services by making all passengers feel special, and most importantly, our hot air balloon flights will give you a perfect combination of fun and relaxation. Whether it is your first flight or you are a ballooning enthusiast, we present the best hot air balloon in Dubai with unmatched safety measures and breathtaking the memory of which will last forever.
</p>

<strong>Why Choose Us for Balloon Rides: Quality and Safety Combined</strong>

<p>Why are we your ideal choice for rides on a balloon? Our commitment to safety, professionalism, and consumer satisfaction sets us apart from everyone. At Silense, we have an established track record of excellence in providing the finest experiences, and this makes us the 'best hot air balloon in Dubai' which so many travellers consider when researching and making their choice of a Dubai hot air ballooning adventure. When you come aboard with us, you throw yourself into the capable hands of persons who will make sure your comfort, enjoyment, and safety come first and foremost. If your question is why choose us for balloon rides, the answer is very simple: our commitment to quality and attention to detail make every flight unforgettable.
What can you expect from us other than stunning views on our balloon rides? We have thoughtfully designed experiences that will fit every taste, from sunrise flights to private adventures. Our team consists only of highly experienced hot air balloon pilots who ensure that every ride is smooth, safe, and scenic. With safety as our cornerstone and luxury as our standard, why people choose us for balloon rides can easily be answered: we create memories in the sky that are to be cherished always.
</p>

<strong>Safe Hot Air Balloon Rides Dubai: Peace of Mind in the Sky</strong>

<p>We are a trusted service that Dubai can rely on for safe hot air balloon rides. Each of the flights is devised in a way to be able to make safety a key constituent so that your enjoyment is devoid of anxiety. Our safe hot air balloon rides in Dubai are led by expert pilots with very strict safety measures implemented in each flight. Choosing our safe hot air balloon rides Dubai simply means you get a thrill and reassuring adventure.
We strive to ensure that nothing is overlooked in the planning of safe hot air balloon rides Dubai, from equipment to the skill of the pilot. Because we also follow periodic maintenance checks and aviation standards, you're assured of an entertaining experience that's safe at the same time. For a memorable and yet safe hot air balloon ride, one has much to seek in Dubai. You'll find our commitment to safety is second to none, taking you over the desert with your mind at rest.
</p>

<strong>Experienced Hot Air Balloon Pilots: Trustworthy Experts in the Sky</strong>

<p>Skilled and experienced hot air balloon pilots form the backbone of any journey we offer, bringing expertise, knowledge, and professionalism to every flight. Our experienced hot air balloon pilots have become apt from years of experience in handling the skies for the safety and smooth adventure of every passenger. With highly experienced hot air balloon pilots at the helm, you can trust the professionalism that allows you to focus on the spectacular views while enjoying the thrill of ballooning.
Our hot air balloon pilots are well-experienced and go through a very challenging training and certification process, which maintains our rigid safety standards. Their experience allows them to manage various conditions in the air, making sure that every passenger has a stable and scenic ride. Our experienced hot air balloon pilots make sure that your safety and satisfaction are guaranteed, relaxing on every ride as you enjoy the joyous journey through Dubai's skies.
</p>

<strong>Safety Measures for Balloon Rides: Prioritizing Every Passenger’s Well-being</strong>
<p>Safety measures concerning balloon flights are put in place to ensure that the flight experience is enjoyed from preparation to take-off and through to landing. We observe all-inclusive safety measures for balloon flights starting from the preparation of the balloon for flight to its flight operations. This way, each passenger gets on board, knowing our safety measures regarding balloon flights and observing the strict standards set by the concerned industries, thereby guaranteeing a comfortable and safe flight.
These include routine maintenance of the equipment, the training of pilots, and adherence to weather protocols for the best conditions to fly. Additionally, our team is trained to handle any situation, making our rides among the safest in the region. With these safety measures for a balloon ride, one can now have memories of an adventure with peace of mind, being assured that value for their money is taken to the skies of Dubai.
</p>

<strong>Premium Balloon Ride Services: Luxury in the Skies</strong>

<p>Savour an unforgettable adventure with the elite services of a balloon ride. We have bespoke experiences tailor-made for your desires that guarantee every flight to be great. From sumptuous refreshments to personalized itineraries, high-end services of balloon rides are designed to please even the most demanding customer who demands an unforgettable adventure. Experience breathtaking views of Dubai's desert with unmatched facilities. Our premium services of balloon flights promise an unparalleled journey in comfort and style, warranting your journey to be remembered. Come to us for a flight that couples scenic beauty with luxury, making your hot air balloon adventure nothing less than extraordinary.
</p>

<strong>Top Balloon Adventures UAE: Unparalleled Experiences Await</strong>

<p>At the forefront of hot air balloon adventures UAE has to offer, look no further than our expertly curated flights. We pride ourselves on delivering those unforgettable experiences showcasing nothing but breathtaking desert beauty. Each one of our top balloon adventures UAE is designed to leave indelible marks in one's memory, be it for a first-time flyer or an experienced adventurer. Join us either in sunrise or sunset flights and capture those magical moments that define the region. We have a committed quest for excellence in ensuring you get only the ultimate hot air balloon adventures UAE can offer. That makes your journey through the skies truly unforgettable.</p>

<strong>Safety-Certified Balloon Rides Dubai: Assurance in the Skies</strong>

<p>When planning hot air balloon flights, ensure that you choose safety-certified balloon rides Dubai. Indeed, we value your safety and ensure the most stern rules and regulations are followed. Our safety-certified balloon rides Dubai have well-maintained equipment and qualified experienced pilots and crew members. Take a moment to enjoy the breathtaking view while you fly as safety is of utmost importance. It's just a commitment to safety-certified balloon rides that enable Dubai to let you enjoy the breathtaking views and real thrill of the adventure. Leave your trust in us for a safe and enjoyable experience, making our safety-certified balloon rides the best option for soaring above this stunning landscape.</p>

    `,
    [`experiences`]: `<strong>The Joy of Ballooning</strong>
    <p>Our hot air balloon experiences will take you on an unforgettable adventure. All our experiences guarantee breathtaking views of the desert landscape, which completes your Dubai experience. Just imagine floating high above the ground, feeling the light breeze-so delicate and nothing like it. Our dedicated team at Top Wing Airport Service makes sure that your time is spent in pure delight, filling every moment with adventure and quietness. Come and feel this amazing adventure that takes you to see Dubai's beauty from up above, framing memories that will stay in your heart forever. </p>
    <strong>Hot Air Balloon: A Unique Adventure Awaits</strong>
    <p>A hot air balloon ride will give you a special view of the fabulous landscapes of Dubai. From the very beginning of your flight, one can't but become charmed by the panorama opening before his sight across the dunes. This magical flight of a hot air balloon is not only about flying; it's about serenity and aesthetic surroundings. You will be able to snap stunning pictures that bring out the beauty of the UAE as you drift through the air in your hot air balloon. Do not be left behind in experiencing this wonderful hot air balloon adventure where every moment is a marvel.</p>
    <strong>Hot Air Balloon Ride: Unforgettable Memories in the Sky</strong>
    <p>A hot air balloon ride in Dubai is one of the most thrilling ways to enjoy a look at the sun rising over the great expanse of the desert after being lifted into the skies. The unforgettable hot air balloon ride will uniquely combine adventure and serenity to appreciate the surroundings. Our expert pilots will provide a safe and smooth ride, offering you myriad tidbits about the landscape below during your hot air balloon ride. Feel the excitement, the serenity of a hot air balloon ride-a memory to cherish always.</p>
    <strong>Hot Air Balloon Dubai: Discover the Beauty from Above</strong>
    <p>Hot Air Balloon Dubai promises magic in every view. Floating above the wild-spread icons, you are speechless but for the beauty of the desert and the silent surroundings. Our hot air balloon experiences in Dubai offer a unique method of exploring the area and having the feeling of flying in the air. Be rest assured that with professional pilots and the best equipment, your hot air balloon Dubai adventure will be safe and enjoyable. Ensure to make the most of this great opportunity to see Dubai in a different dimension; book for your hot air balloon Dubai experience today and leave with indelible memories.</p>
    <strong>Hot Air Balloon Ride Dubai: An Adventure of a Lifetime</strong>
    <p>This is a balloon ride Dubai for the ultimate adventure, leaving you with lifetime memories. It soars into the skies, unveiling breathtaking landscapes of the desert below. A hot air balloon ride in Dubai offers an unrivalled combination of adventure and panorama; hence, this should be an undertaking when in Dubai. With skilled pilots at the wheel of your hot air balloon ride in Dubai, it's going to be safe and enjoyable, letting you enjoy the overall scenery of the experience. Don't let such a great opportunity slip by and make sure to capture Dubai as never before!</p>
    
    `
  };
  const handleSubmit = async () => {
    setIsLoaidng(true);
    if (!subsEmail) {
      toast.info("Please fill your email");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(subsEmail)) {
      toast.info("Please enter a valid email");
      return;
    }
    setIsLoaidng(true);
    const UpdatadData = {
      name: "",
      phone: "",
      email: subsEmail,
      message: ""
    };
    try {
      const response = await contactUs(UpdatadData);
      toast.success("Successfully Subscribed to Newsletter!");
      setSubsEmail("");
    } catch (err) {
      console.log("Fomr Error: ", err);
    } finally {
      setIsLoaidng(false);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: `footer py-60 ${lang === "ar" ? "r_dir" : "l_dir"}`, children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { xs: 12, md: 4, lg: 2, children: /* @__PURE__ */ jsx("div", { className: "logoWrapper", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "maha-logo" }) }) }),
      /* @__PURE__ */ jsx(Col, { xs: 12, md: 6, lg: 4, children: /* @__PURE__ */ jsxs("div", { className: "footerLinks", children: [
        /* @__PURE__ */ jsxs("div", { className: "linksWrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "footerTitle mb-4", children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx(Link, { to: `/${lang}/why-us`, children: /* @__PURE__ */ jsx("li", { children: "About Us" }) }),
            /* @__PURE__ */ jsx(Link, { to: `/${lang}/experiences`, children: /* @__PURE__ */ jsx("li", { children: "Experiences" }) }),
            /* @__PURE__ */ jsx(Link, { to: `/${lang}/things-to-do`, children: /* @__PURE__ */ jsx("li", { children: "Things To Do" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "linksWrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "footerTitle  mb-4", children: "Company" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx(Link, { to: `/${lang}/contact-us`, children: /* @__PURE__ */ jsx("li", { children: "Contact Us" }) }),
            /* @__PURE__ */ jsx(Link, { to: `/${lang}/blogs`, children: /* @__PURE__ */ jsx("li", { children: "Blogs" }) }),
            /* @__PURE__ */ jsx(Link, { to: `/${lang}/faqs`, children: /* @__PURE__ */ jsx("li", { children: "Faqs" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "linksWrapper", children: [
          /* @__PURE__ */ jsx("div", { className: "footerTitle  mb-4", children: "Support" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "info",
                href: "https://wa.me/971502600101",
                target: "__blank",
                children: "+971502600101"
              }
            ) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "info",
                href: "mailto:info@mahaballoonadventures.com",
                target: "__blank",
                children: /* @__PURE__ */ jsx("li", { children: "info@mahaballoonadventures.com" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "info",
                href: "https://maps.app.goo.gl/j21TQhVPtsQsmN768",
                target: "__blank",
                children: /* @__PURE__ */ jsx("li", { children: "Margham Dubai, UAE" })
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Col, { xs: 12, md: 8, lg: 6, children: /* @__PURE__ */ jsxs("div", { className: "subscribeForm", children: [
        /* @__PURE__ */ jsx("div", { className: "footerTitle mb-2 mb-md-4", children: "Subscribe" }),
        /* @__PURE__ */ jsx("p", { className: "footerDetails pdb", children: "Join our newsletter to stay up to date on features and releases." }),
        /* @__PURE__ */ jsxs("div", { className: "form", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              placeholder: "Enter your email",
              value: subsEmail,
              onChange: (e) => setSubsEmail(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              disabled: isLoading,
              type: "submit",
              onClick: () => handleSubmit(),
              children: isLoading ? "Subscribing " : "Subscribe"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "details", children: [
          "By subscribing you agree to with our",
          " ",
          /* @__PURE__ */ jsx(Link, { children: "Privacy Policy" }),
          " and provide consent to receive updates from our company."
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: lang == "ar" ? "moreInfo arB" : "moreInfo", children: /* @__PURE__ */ jsx(Accordion, { children: /* @__PURE__ */ jsxs(Accordion.Item, { eventKey: "0", children: [
      /* @__PURE__ */ jsx(Accordion.Header, { as: "p", children: "More Information" }),
      /* @__PURE__ */ jsx(Accordion.Body, { children: contentFooter[`${currenPath == null ? void 0 : currenPath[(currenPath == null ? void 0 : currenPath.length) - 1]}`] ? /* @__PURE__ */ jsx(
        "div",
        {
          dangerouslySetInnerHTML: {
            __html: contentFooter[`${currenPath == null ? void 0 : currenPath[(currenPath == null ? void 0 : currenPath.length) - 1]}`]
          }
        }
      ) : /* @__PURE__ */ jsx(
        "div",
        {
          dangerouslySetInnerHTML: {
            __html: contentFooter == null ? void 0 : contentFooter["default"]
          }
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "copyRight desktop", children: [
      /* @__PURE__ */ jsxs("div", { className: "details", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "© 2024 Designed with 💕in UAE by Prism Digital:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://www.prism-me.com/", target: "__blank", children: "Digital Marketing Agency Dubai" }),
          "."
        ] }),
        /* @__PURE__ */ jsx(Link, { to: `/${lang}/privacy-policy`, children: "Privacy Policy" }),
        /* @__PURE__ */ jsx(Link, { to: `/${lang}/terms`, children: "Terms of Service" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "social", children: [
        /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/mahaballoonadventures/", children: /* @__PURE__ */ jsx(FaFacebook, { className: "icon", size: 20 }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/mahaballoonadventures/", children: /* @__PURE__ */ jsx(FaInstagram, { className: "icon", size: 20 }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@mahaballoon_adventures", children: /* @__PURE__ */ jsx(FaTiktok, { className: "icon", size: 20 }) }),
        /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx(FaLinkedin, { className: "icon", size: 20 }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@mahahotairballoons", children: /* @__PURE__ */ jsx(FaYoutube, { className: "icon", size: 20 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "copyRight mobile", children: [
      /* @__PURE__ */ jsxs("div", { className: "social", children: [
        /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/mahaballoonadventures/", children: /* @__PURE__ */ jsx(FaFacebook, { className: "icon", size: 20 }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/mahaballoonadventures/", children: /* @__PURE__ */ jsx(FaInstagram, { className: "icon", size: 20 }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@mahaballoon_adventures", children: /* @__PURE__ */ jsx(FaTiktok, { className: "icon", size: 20 }) }),
        /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx(FaLinkedin, { className: "icon", size: 20 }) }),
        /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com/@mahahotairballoons", children: /* @__PURE__ */ jsx(FaYoutube, { className: "icon", size: 20 }) })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: `/${lang}/privacy-policy`, children: "Privacy Policy" }),
      /* @__PURE__ */ jsx(Link, { to: `/${lang}/terms`, children: "Terms of Service" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "© 2024 Designed with 💕in UAE by Prism Digital:",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://www.prism-me.com/", target: "__blank", children: "Digital Marketing Agency Dubai" }),
        "."
      ] })
    ] })
  ] }) }) });
}
function Layout() {
  const { lang = "en" } = useParams();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(MainNavbar, {}),
    /* @__PURE__ */ jsx("main", { className: lang == "ar" ? "r_dir" : "l_dir", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const Home = lazy(() => import("./assets/Home-CuxdSHXy.js"));
const About = lazy(() => import("./assets/About-lrtN8uQc.js"));
const Experiences = lazy(() => import("./assets/Experiences-Bc4zY0ik.js"));
lazy(() => import("./assets/Shop-B53nmrtl.js"));
lazy(() => import("./assets/ProductDetails-BekvQgnz.js"));
const Blogs = lazy(() => import("./assets/Blogs-C9SUmdxm.js"));
const BlogInner = lazy(() => import("./assets/BlogInner-DoIKUqPD.js"));
const ThingsToDo = lazy(() => import("./assets/ThingsToDo-wPRgxbw3.js"));
const Testimonials = lazy(() => import("./assets/Testimonial-DMxTKWis.js"));
const Contact = lazy(() => import("./assets/Contact-BHzWSqGs.js"));
const Privary = lazy(() => import("./assets/Privacy-C-7ju0a2.js"));
const Terms = lazy(() => import("./assets/Terms-Cr6fKjZ5.js"));
const Faqs = lazy(() => import("./assets/Faqs-DftDMnMT.js"));
const Cart = lazy(() => import("./assets/Cart-Bjoy77Hp.js"));
const Wishlist = lazy(() => import("./assets/Wishlist-eWV7GCM0.js"));
const ComparePackages = lazy(() => import("./assets/ComparePackages-COLThnHi.js"));
const PassengersForm = lazy(() => import("./assets/PassengersForm-C93zBS1O.js"));
const B2b = lazy(() => import("./assets/B2b-C7N7m6hB.js"));
const B2C = lazy(() => import("./assets/B2C-BqUlgr8Y.js"));
const NotFound = lazy(() => import("./assets/NotFound-CuNZBGv5.js"));
function NavRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    var _a;
    if (location.pathname !== "/" && location.pathname.endsWith("/")) {
      navigate(location.pathname.slice(0, ((_a = location.pathname) == null ? void 0 : _a.length) - 1));
    }
  }, [navigate]);
  useEffect(() => {
    var _a, _b;
    let routesCheck = (_a = location.pathname) == null ? void 0 : _a.split("/").slice(0, 2);
    if (!((_b = ["", "en", "ar"]) == null ? void 0 : _b.includes(routesCheck[1]))) {
      navigate("/404");
    }
  }, [navigate]);
  useEffect(() => {
    let routesCheck = window.location.href;
    if (routesCheck.includes("www")) {
      let newRoute = routesCheck == null ? void 0 : routesCheck.replace("www.", "");
      window.location.replace(newRoute);
    }
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/en", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) }),
    /* @__PURE__ */ jsx(Route, { path: "/ar", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) }),
    /* @__PURE__ */ jsxs(Route, { path: "/:lang?/", element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { exact: true, index: true, element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "why-us", element: /* @__PURE__ */ jsx(About, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "experiences", element: /* @__PURE__ */ jsx(Experiences, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "things-to-do", element: /* @__PURE__ */ jsx(ThingsToDo, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "testimonial", element: /* @__PURE__ */ jsx(Testimonials, {}) }),
      /* @__PURE__ */ jsx(
        Route,
        {
          path: "merchandise",
          element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true })
        }
      ),
      /* @__PURE__ */ jsx(
        Route,
        {
          path: "merchandise/:id",
          element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true })
        }
      ),
      /* @__PURE__ */ jsx(Route, { path: "blogs", element: /* @__PURE__ */ jsx(Blogs, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "blog/:id", element: /* @__PURE__ */ jsx(BlogInner, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "contact-us", element: /* @__PURE__ */ jsx(Contact, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "privacy-policy", element: /* @__PURE__ */ jsx(Privary, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "terms", element: /* @__PURE__ */ jsx(Terms, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "faqs", element: /* @__PURE__ */ jsx(Faqs, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "cart", element: /* @__PURE__ */ jsx(Cart, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "compare-packages", element: /* @__PURE__ */ jsx(ComparePackages, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "passengers-details/:id", element: /* @__PURE__ */ jsx(PassengersForm, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "wishlist", element: /* @__PURE__ */ jsx(Wishlist, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "404", element: /* @__PURE__ */ jsx(NotFound, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/404", replace: true }) })
    ] }),
    /* @__PURE__ */ jsxs(
      Route,
      {
        path: "/:lang?/",
        children: [
          /* @__PURE__ */ jsx(Route, { path: "b2b", element: /* @__PURE__ */ jsx(B2b, {}) }),
          /* @__PURE__ */ jsx(Route, { path: "b2c", element: /* @__PURE__ */ jsx(B2C, {}) }),
          /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/404", replace: true }) })
        ]
      }
    )
  ] }) });
}
const Loader = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `d-flex align-items-center justify-content-center`,
      style: {
        position: "absolute",
        zIndex: 99999,
        height: "100%",
        width: "100%",
        background: "rgba(255, 255, 255, 1)"
      },
      children: /* @__PURE__ */ jsx(BounceLoader, { color: "#7ab342", size: 60 })
    }
  ) });
};
function ScrollToTop() {
  const { pathname } = useLocation();
  pathname.split("/");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const initialState$2 = {
  products: []
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState$2,
  reducers: {
    addtoCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    updateItem: (state, action) => {
      state.products = action.payload;
    },
    clearCart: (state, action) => {
      state.products = [];
    }
  }
});
const { addtoCart, updateItem, clearCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
const initialState$1 = {
  products: []
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState$1,
  reducers: {
    addtowishlist: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    clearWishlist: (state, action) => {
      state.products = [];
    }
  }
});
wishlistSlice.actions;
const wishlistReducer = wishlistSlice.reducer;
const initialState = {
  isBookingModal: false,
  packageId: "",
  package: {}
};
const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.isBookingModal = action.payload;
    },
    setPackageId: (state, action) => {
      state.packageId = action.payload;
    },
    setPackage: (state, action) => {
      state.package = action.payload;
    }
  }
});
const { setBooking, setPackageId, setPackage } = bookingSlice.actions;
const bookingReducer = bookingSlice.reducer;
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["booking"]
};
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  booking: bookingReducer,
  auth: authReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  devTools: true
});
const persistor = persistStore(store);
function App() {
  const [lang, setLang] = React.useState("en");
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Loader, {}), children: /* @__PURE__ */ jsx(LangContext.Provider, { value: { lang, setLang }, children: /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsxs(PersistGate, { loading: null, persistor, children: [
    /* @__PURE__ */ jsx(
      ToastContainer,
      {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: false,
        draggable: true,
        pauseOnHover: false,
        theme: "light"
      }
    ),
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(NavRoutes, {})
  ] }) }) }) });
}
const context = {};
const appHtml = ReactDOMServer.renderToString(
  /* @__PURE__ */ jsx(StaticRouter, { location: url, context, children: /* @__PURE__ */ jsx(App, {}) })
);
export {
  Api as A,
  CreateEntryBooking as C,
  Loader as L,
  ReferenceBooking as R,
  fetchPackagesData as a,
  setPackageId as b,
  setPackage as c,
  contactUs as d,
  appHtml as default,
  addtoCart as e,
  fetchSlotData as f,
  updateItem as g,
  clearCart as h,
  getallusers as i,
  LoginUser as j,
  axios as k,
  addPassengerData as l,
  makeBooking as m,
  setBooking as s,
  useSize as u
};
