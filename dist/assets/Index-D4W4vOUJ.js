import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, createElement, useEffect } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../entry-server.js";
import ReactWhatsapp from "react-whatsapp";
import { w as whatsappNo } from "./Index-8W1JpIEZ.js";
import { I as Index$2 } from "./Index-uvPi-vXe.js";
import { FaCircle } from "react-icons/fa6";
import { u as useWindowDimensions } from "./useWindowSize-BmynClH8.js";
import "react-rating-stars-component";
import "react-modal-video";
import { IoIosCloseCircle } from "react-icons/io";
import { u as useOutsideAlerter } from "./useOutsideAlerter-Kk6SgUQ9.js";
function Card$1(props) {
  const {
    featured = false,
    title,
    price,
    price_adult,
    price_child,
    short_detail,
    thumb,
    thumb_title,
    thumb_desc,
    id,
    itineraries,
    active,
    setActive,
    setExtraDetails
  } = props;
  const { lang = "en" } = useParams();
  useDispatch();
  const [DetailsList, setDetailsList] = useState([]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `flightoptionCard3i21j ${lang == "ar" ? "r_dir" : "l_dir"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "cardFlight", children: [
        /* @__PURE__ */ jsx("div", { className: "imageWrapper", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: thumb,
            alt: title,
            title: thumb_title,
            description: thumb_desc
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "detailsSec", children: [
          /* @__PURE__ */ jsx("h4", { className: "card-title mt-4", children: title }),
          /* @__PURE__ */ jsxs("div", { className: "tag-line mt-2", children: [
            price_adult ? /* @__PURE__ */ jsxs(Fragment, { children: [
              " ",
              "ADULTS: AED",
              price_adult
            ] }) : "PRICE ON REQUEST",
            " ",
            "/",
            "  ",
            price_child && /* @__PURE__ */ jsxs(Fragment, { children: [
              "CHILD: AED ",
              price_child
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "para mt-2", children: short_detail }),
          /* @__PURE__ */ jsxs("div", { className: "time mt-1", children: [
            /* @__PURE__ */ jsx("p", { className: "para bds", children: "Time" }),
            /* @__PURE__ */ jsx("p", { className: "para", children: "45 - 60 Minutes" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsx("p", { className: "para bds", children: "Location" }),
            /* @__PURE__ */ jsx("p", { className: "para", children: "Margham Dubai, United Arab Emirates" })
          ] })
        ] }),
        active == id ? /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx("ul", { children: DetailsList == null ? void 0 : DetailsList.map((item, i) => /* @__PURE__ */ jsx("li", { children: item == null ? void 0 : item.activity }, "Iters" + i)) }) }) : null,
        /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
          /* @__PURE__ */ jsx(
            ReactWhatsapp,
            {
              className: "Wtp",
              number: whatsappNo,
              message: ` Hi There,   I am interested in the  ${title} package. Please get in touch with me to send me a customized quote.`,
              children: /* @__PURE__ */ jsx(
                "button",
                {
                  className: "btnNl btnNl-primary pds mrs mt-3",
                  accordion: true,
                  onClick: () => {
                  },
                  children: "Get a Quote"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs(
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
              className: `btnNl  mt-3 ${active == id ? "btnNl-primary" : "btnNl-secondary"} pds`,
              children: [
                " ",
                active == id ? "Hide Details" : "View Details"
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function Details({ key, activity, details, feature_img }, props) {
  return /* @__PURE__ */ jsx("div", { className: "PackCardDetails93k", ...props, children: /* @__PURE__ */ jsx("div", { className: "cardDetails", children: /* @__PURE__ */ jsx("div", { className: "details h-100 w-100", children: /* @__PURE__ */ jsxs("div", { className: "sec-title", children: [
    /* @__PURE__ */ jsx(FaCircle, { size: 6 }),
    " ",
    activity
  ] }) }) }) });
}
const package2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Explore Our Packages2.webp";
const package22 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/package5.webp";
const package3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Explore Our Packages3.webp";
const package4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Explore Our Packages4.webp";
const flightDuration = "https://d3gelo9cifr8ed.cloudfront.net/assets/ExplorePackages/FlightDuration.webp";
const PerfectPurposal = "https://d3gelo9cifr8ed.cloudfront.net/assets/ExplorePackages/PerfectPurposal.webp";
const RomanticGateway = "https://d3gelo9cifr8ed.cloudfront.net/assets/ExplorePackages/RomanticGateway.webp";
const earlyReservation = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/Early reservation recommended.webp";
const culturalEntertainment = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/cultural enterainment.webp";
const Photograph = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/Photograph.webp";
const GroupBooking = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/Group_Booking.webp";
const PersonalizedPkg = "https://d3gelo9cifr8ed.cloudfront.net/assets/more_details/PersonalizedPkg.webp";
let ourPackages = [
  {
    id: 2,
    thumb: package3,
    thumb_title: "Private Hot Air Balloon Rides | Private transfer all over Dubai |Maha Balloon Adventures",
    thumb_desc: "Experience private hot air balloon rides with convenient pick-up and drop-off across Dubai for a seamless Arabian Desert adventure. ",
    featured: true,
    title: "CELESTIAL PRIVATE ROMANCE",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail: "Elevate your proposal to new heights with this unforgettable hot air balloon ride over the Dubai desert. Experience a magical sunrise ride, pop the question, and enjoy a delightful breakfast together.",
    itineraries: [
      {
        feature_img: PerfectPurposal,
        activity: "Perfect Proposal Setting",
        details: "The perfect setting for proposals, key milestones, and anniversaries."
      },
      {
        feature_img: RomanticGateway,
        activity: "A Romantic Getaway",
        details: "Book the entire balloon exclusively for you and your partner, with a gourmet romantic meal, bubbly, cake, and memorabilia."
      },
      {
        feature_img: earlyReservation,
        activity: "Early Reservations recommended",
        details: "Capture every moment with a professional photo and video shoot."
      }
    ]
  },
  {
    id: 3,
    thumb: package22,
    thumb_title: "Group Booking Hot Air Balloon Package | Hot Air Balloon | Maha Balloon Adventures",
    thumb_desc: "Enjoy Hot Air Balloon with exclusive group rates, tailored packages, and personalised service.",
    featured: true,
    title: "GROUP BOOKING",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail: "Enjoy exclusive group rates, tailored packages, and personalized service:We offer tailored arrangements for all group types, ensuring a unique and personalized experience. Whether for family, friends, or colleagues.",
    itineraries: [
      {
        feature_img: GroupBooking,
        activity: "Special event",
        details: "Get your group of 10 or more together for birthdays, reunions, or any special event!"
      },
      {
        feature_img: Photograph,
        activity: "Photoshoot to Capture the Memories",
        details: "Enjoy exclusive rates, customized cakes, and fun props with a professional photoshoot to capture the memories."
      },
      {
        feature_img: PersonalizedPkg,
        activity: "Personalized packages",
        details: "Personalized packages tailored to make your celebration unforgettable."
      },
      {
        feature_img: earlyReservation,
        activity: "Early Reservations recommended",
        details: ""
        // "Capture every moment with a professional photo and video shoot.",
      }
    ]
  },
  {
    id: 4,
    thumb: package4,
    thumb_title: "Corporate Event Hot Air Balloon Package | Hot Air Balloon Ride | Maha Balloon Adventures",
    thumb_desc: "CORPORATE EVENT hot air balloon ride Take your corporate event to new heights. 4000 feet above sea level to be exact!",
    featured: true,
    title: "CORPORATE EVENT",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail: "CORPORATE EVENT Take your corporate event to new heights. 4000 feet above sea level to be exact! Let your next corporate adventure be the best one yet for your friends ",
    itineraries: [
      {
        feature_img: flightDuration,
        activity: "Celebrate Baby Showers"
      },
      {
        feature_img: culturalEntertainment,
        activity: "Kitty parties"
      },
      {
        feature_img: culturalEntertainment,
        activity: "Birthday celebration anniversaries"
      }
    ]
  },
  {
    id: 5,
    thumb: package2,
    thumb_title: "CELEBRATORY OCCASIONS | hot air balloon rides | Maha Balloon Adventures",
    thumb_desc: "Celebrate your special milestones with hot air balloon rides for birthdays, anniversaries, graduations, engagements, weddings, baby showers, retirements, and Overnight New Year celebrations!",
    featured: true,
    title: "CELEBRATORY OCCASIONS",
    price_adult: "",
    price_child: "",
    bookNow: true,
    short_detail: "Celebrate your special milestones with hot air balloon rides for birthdays, anniversaries, graduations, engagements, weddings, baby showers, retirements, and Overnight New Year celebrations!",
    itineraries: [
      {
        feature_img: GroupBooking,
        activity: "Special event",
        details: "Get your group of 10 or more together for birthdays, reunions, or any special event!"
      },
      {
        feature_img: flightDuration,
        activity: "Celebrate Baby Showers"
      },
      {
        feature_img: culturalEntertainment,
        activity: "Kitty parties"
      },
      {
        feature_img: culturalEntertainment,
        activity: "Birthday celebration anniversaries"
      },
      {
        feature_img: earlyReservation,
        activity: "Early Reservations recommended",
        details: "Capture every moment with a professional photo and video shoot."
      }
    ]
  }
];
function Index$1() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
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
          swipeToSlide: true
        }
      }
    ]
  };
  useParams();
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(null);
  const [ExtraDetails, setExtraDetails] = useState([]);
  useState([]);
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
  const { width } = useWindowDimensions();
  let toCut = width > 992 ? 3 : width >= 776 ? 2 : 1;
  const NextArrow = () => /* @__PURE__ */ jsx(
    "button",
    {
      className: "slider_custom_arrows ms-3",
      onClick: nextSlide,
      disabled: currentSlide >= (ourPackages == null ? void 0 : ourPackages.length) - toCut,
      children: /* @__PURE__ */ jsx(FaAngleRight, { fontSize: "24px" })
    }
  );
  return /* @__PURE__ */ jsx("div", { className: "flightoptons32iom9 py-60", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx("h2", { className: "tag-line mb-3", children: "Customized Hot Air Balloon Packages in Dubai" }),
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Col, { md: 12, lg: 10, children: /* @__PURE__ */ jsx("h3", { className: "main-title mb-3", children: "Best Personalized Hot Air Balloon Packages" }) }),
      /* @__PURE__ */ jsx(Col, { className: "sliderArrows ", md: 12, lg: 2, children: /* @__PURE__ */ jsx("div", { className: "sliderArrows slider_pd-end2", children: /* @__PURE__ */ jsx(
        Index$2,
        {
          prevArrow: /* @__PURE__ */ jsx(PrevArrow, {}),
          nextArrow: /* @__PURE__ */ jsx(NextArrow, {})
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "SliderWrapper3 mt-3 mt-md-5", children: [
      /* @__PURE__ */ jsx("div", { className: "arrowslic22dernext", children: /* @__PURE__ */ jsx(NextArrow, {}) }),
      /* @__PURE__ */ jsx("div", { className: "arrowslic22derprev", children: /* @__PURE__ */ jsx(PrevArrow, {}) }),
      /* @__PURE__ */ jsx(Slider, { ref: sliderRef, ...settings, children: ourPackages == null ? void 0 : ourPackages.map((item) => /* @__PURE__ */ createElement(
        Card$1,
        {
          ...item,
          key: item == null ? void 0 : item.id,
          active,
          setActive,
          setExtraDetails
        }
      )) })
    ] }),
    /* @__PURE__ */ jsx(Row, { children: ExtraDetails ? ExtraDetails == null ? void 0 : ExtraDetails.map((item, i) => /* @__PURE__ */ jsx(Col, { md: 12, lg: 6, children: /* @__PURE__ */ createElement(Details, { ...item, key: i }) }, i)) : null })
  ] }) });
}
function Card(props) {
  const { lang = "en" } = useParams();
  const { handleopen } = props;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `TestimonialHOmepage23Card ${lang == "ar" ? "r_dir" : "l_dir"} ${(props == null ? void 0 : props.currentSlide) == (props == null ? void 0 : props.index) ? "" : "testLidk"}`,
      ...props,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: ` cardFlight ${(props == null ? void 0 : props.currentSlide) == (props == null ? void 0 : props.index) ? "cardActive " : ""}`,
          style: {
            backgroundImage: `url(${props == null ? void 0 : props.thumb})`,
            backgroundSize: "cover",
            backgroundPosition: "top"
          },
          children: /* @__PURE__ */ jsxs("div", { className: "players mt-1", children: [
            /* @__PURE__ */ jsx("p", { className: "para", children: props == null ? void 0 : props.author }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "PlayButton",
                onClick: () => {
                  if (!(props == null ? void 0 : props.videoUrl)) {
                    setVideoType("");
                    return;
                  }
                  handleopen(props == null ? void 0 : props.videoUrl, props == null ? void 0 : props.thumb);
                },
                children: /* @__PURE__ */ jsx(FaPlay, { size: 16 })
              }
            )
          ] })
        }
      )
    }
  );
}
const testimonial1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials1.webp";
const testimonial2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials2.webp";
const testimonial3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials3.webp";
const testimonial4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials4.webp";
const testimonial5 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials5.webp";
const testimonial6 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials6.webp";
const testimonial7 = "https://d3gelo9cifr8ed.cloudfront.net/assets/New/Homepage/Our%20Testimonials7.webp";
function Index(props) {
  const { content } = props;
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let cardData = [
    {
      id: 1,
      thumb: testimonial1,
      date: "January 31, 2024",
      title: "Amazing journey!",
      details: "I had an exciting sky journey. The pilot was respectful, experienced, and funny, making the balloon ride simple and enjoyable. I would recommend this company; you can trust them.",
      author: "Ajay",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Ajay%20Family_V1.mp4"
    },
    {
      id: 2,
      thumb: testimonial2,
      date: "December 4, 2023",
      title: "Best Experience",
      details: "This was one of my favorite experiences while in Dubai. Everyone was very nice and accommodating. They enjoyed taking pictures and videos for us to capture our memories. I would 10/10 recommend this place again! All of the staff were excellent.",
      author: "Danielle J",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha_story_04.mp4"
    },
    {
      id: 3,
      thumb: testimonial3,
      date: "December 4, 2023",
      title: "Exciting experience with Maha Balloons",
      details: "It was a wonderful experience with Maha’s hot air balloon. We got to see the sunrise by flying at the highest altitude possible of 4000 ft. Excellent and seamless customer service from Regina and great hospitality from Julie. I recommend Maha Balloons if you are interested in experiencing a hot air balloon flight.",
      author: "Suhail Ismail",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Yara Family_V1.mp4"
    },
    {
      id: 4,
      thumb: testimonial4,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: `Excellent service Nice and super friendly staff

Amazing pilots

Excellent service with a nice and super friendly staff. The pilots were amazing! Special thanks to Ms. Julie and Ms. Regina for making our trip memorable. You guys are amazing!
`,
      author: "Shweta Dubey",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Dellany_V1.mp4"
    },
    {
      id: 5,
      thumb: testimonial7,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maya_story_03.mp4"
    },
    {
      id: 6,
      thumb: testimonial6,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/Maha Story_02.mp4"
    },
    {
      id: 7,
      thumb: testimonial5,
      date: "December 3, 2023",
      title: "Must-Visit",
      details: ` `,
      author: "Parag",
      videoUrl: "https://d3gelo9cifr8ed.cloudfront.net/MB_Parag_V1.mp4"
    }
  ];
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [videoPoster, setVideoPoster] = useState("");
  const wrapperRef = useRef();
  const videoRef = useRef();
  const handleOpen = async (link, poster) => {
    await setVideoPoster(poster);
    await setVideoLink(link);
    setVideoOpen(true);
    videoRef.current.play();
  };
  const handleClose = () => {
    setVideoPoster("");
    setVideoLink("");
    setVideoOpen(false);
    videoRef.current.pause();
  };
  useEffect(() => {
    if (videoLink) {
      videoRef.current.play();
    }
  }, [videoLink]);
  useEffect(() => {
    useOutsideAlerter(wrapperRef, handleClose);
  }, [wrapperRef]);
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
  const { width } = useWindowDimensions();
  let toCut = width > 992 ? 4 : width >= 776 ? 3 : 1;
  const NextArrow = () => /* @__PURE__ */ jsx(
    "button",
    {
      className: "slider_custom_arrows ms-3",
      onClick: nextSlide,
      disabled: currentSlide >= (cardData == null ? void 0 : cardData.length) - toCut,
      children: /* @__PURE__ */ jsx(FaAngleRight, { fontSize: "24px" })
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: "TestimonialHOmepage23 py-60", children: [
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsx("h2", { className: "tag-line mb-3", children: "Customer Feedback about the best hot air balloon in Uae" }),
      /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Col, { md: 12, lg: 12, children: /* @__PURE__ */ jsx("h3", { className: "main-title mb-3", children: "Customer Testimonials" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "SliderWrapper3 mt-3 mt-md-5", children: (content == null ? void 0 : content.length) ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Slider, { ref: sliderRef, ...settings, children: content == null ? void 0 : content.map((item, i) => /* @__PURE__ */ jsx(
        Card,
        {
          ...item,
          currentSlide,
          index: i,
          handleopen: handleOpen
        }
      )) }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Slider, { ref: sliderRef, ...settings, children: cardData == null ? void 0 : cardData.map((item, i) => /* @__PURE__ */ jsx(
        Card,
        {
          ...item,
          currentSlide,
          index: i,
          handleopen: handleOpen
        }
      )) }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between justify-content-lg-end align-content-center  mt-5", children: [
        (content == null ? void 0 : content.length) ? /* @__PURE__ */ jsx("div", { className: "dots", children: content == null ? void 0 : content.map((item, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `dot ${currentSlide == i ? "active" : null}`,
            onClick: () => {
              if (sliderRef.current) {
                sliderRef.current.slickGoTo(i);
                setCurrentSlide(i);
              }
            }
          }
        )) }) : /* @__PURE__ */ jsx("div", { className: "dots", children: cardData == null ? void 0 : cardData.map((item, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `dot ${currentSlide == i ? "active" : null}`,
            onClick: () => {
              if (sliderRef.current) {
                console.log("🚀 ~ Index ~ sliderRef:", sliderRef, i);
                sliderRef.current.slickGoTo(i);
                setCurrentSlide(i);
              }
            }
          }
        )) }),
        /* @__PURE__ */ jsx("div", { className: "sliderArrows sliderMobile", children: /* @__PURE__ */ jsx(
          Index$2,
          {
            prevArrow: /* @__PURE__ */ jsx(PrevArrow, {}),
            nextArrow: /* @__PURE__ */ jsx(NextArrow, {})
          }
        ) })
      ] })
    ] }),
    videoLink ? /* @__PURE__ */ jsxs("div", { className: `${"cst_modal"}`, ref: wrapperRef, children: [
      /* @__PURE__ */ jsx("div", { className: "closeIcon_wrapper", children: /* @__PURE__ */ jsx("div", { className: "closeIcon", onClick: () => handleClose(), children: /* @__PURE__ */ jsx(IoIosCloseCircle, { className: "closeIcon", size: 35 }) }) }),
      /* @__PURE__ */ jsxs(
        "video",
        {
          autoPlay: true,
          playsInline: true,
          controls: true,
          preload: "metadata",
          ref: videoRef,
          children: [
            /* @__PURE__ */ jsx(
              "source",
              {
                poster: videoPoster,
                src: videoLink,
                type: "video/mp4"
              }
            ),
            "Your browser does not support the video tag."
          ]
        }
      )
    ] }) : null
  ] });
}
export {
  Index$1 as I,
  Index as a
};
