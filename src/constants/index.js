const TITLE = "HELLO, I'M NGUYEN BACH TOAN";
const CONTENT =
  "This site was built on personal targets, I just want to practice my coding skills";
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

const WEATHER_KEY = "56bed0188ffd85afaaccf05125c25438";
const WEATHER_URL_ASSET = "https://openweathermap.org/img/wn/";

const GOGGLE_KEY = "AIzaSyC9Fy6g084M-N4ike7gEMMOpKqvJ7cRMhc";

const YOUTUBE_API_PLAYLIST_ID = "PLqeSJS3N5tzhPp3SkqKJm9rdCZu69Z1_7";
const YOUTUBE_API_MAX_RESULT = 50;

const YOUTUBE_PLAYLIST_SRC =
  "https://www.youtube.com/embed/videoseries?list=PLqeSJS3N5tzhPp3SkqKJm9rdCZu69Z1_7&autoplay=1";
const CELCIUS_ICON = "&deg;";

const DATE_NAME = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const FULLPAGE_IMG_LOADING = require("../assets/images/loading.gif");

const PRIORITY = [
  {
    name: "Low",
    color: "green"
  },
  {
    name: "Medium",
    color: "orange"
  },
  {
    name: "High",
    color: "red"
  }
];

const Constants = {
  TITLE,
  CONTENT,
  BUTTON_HOME,
  BUTTON_INFORMATION_LINK,
  CONTACT,
  HOBBIES,
  WEATHER_KEY,
  CELCIUS_ICON,
  GOGGLE_KEY,
  YOUTUBE_API_PLAYLIST_ID,
  YOUTUBE_API_MAX_RESULT,
  DATE_NAME,
  FULLPAGE_IMG_LOADING,
  WEATHER_URL_ASSET,
  YOUTUBE_PLAYLIST_SRC,
  PRIORITY
};

export default Constants;
