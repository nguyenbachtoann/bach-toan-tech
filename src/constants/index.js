const TITLE = "HELLO, I'M NGUYEN BACH TOAN";
const CONTENT =
  "This site was build on personal target, I just want to practice my coding skills";
const CONTACT = "Social networks";
const BUTTON_HOME = [
  {
    name: "Facebook",
    icon: "facebook"
  },
  {
    name: "Instagram",
    icon: "instagram"
  },
  {
    name: "Github",
    icon: "github"
  }
];

const BUTTON_INFORMATION_LINK = {
  facebook: "https://www.facebook.com/toan.nguyenbach",
  instagram: "https://www.instagram.com/imyourcoffee/",
  github: "https://github.com/bachtoan?tab=repositories"
};

const HOBBIES = [
  {
    content: "Programing",
    src: require("../assets/images/hobby1.jpg")
  },
  {
    content: "Music",
    src: require("../assets/images/hobby2.jpg")
  },
  {
    content: "Technology",
    src: require("../assets/images/hobby3.jpg")
  }
];

const WEATHER_API = "56bed0188ffd85afaaccf05125c25438";
const GEO_API = "AIzaSyC9Fy6g084M-N4ike7gEMMOpKqvJ7cRMhc";

const CELCIUS_ICON = "&deg;";

const DATE_NAME = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const FULLPAGE_IMG_LOADING = require("../assets/images/loading.gif");

export default {
  TITLE,
  CONTENT,
  BUTTON_HOME,
  BUTTON_INFORMATION_LINK,
  CONTACT,
  HOBBIES,
  WEATHER_API,
  CELCIUS_ICON,
  GEO_API,
  DATE_NAME,
  FULLPAGE_IMG_LOADING
};
