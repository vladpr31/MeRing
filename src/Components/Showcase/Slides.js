import login from "../../Assets/MockUps/login.png";
import mainscreen from "../../Assets/MockUps/mainscreen.png";
import stats from "../../Assets/MockUps/statistics.png";
import DrDetails from "../../Assets/MockUps/doctorDetails.png";
export const Slides = [
  {
    image: login,
    title: "Login Screen",
    caption: "Login with credentials if the medical center given the service.",
  },
  {
    image: mainscreen,
    title: "Application Main Screen",
    caption:
      "The main screen of the application, allows the user to track his own vitals as well as" +
      "see Medical Appointments on the calendar.",
  },
  {
    image: stats,
    title: "User Vitals",
    caption:
      "User able to track his own vitals at any given time, Providing full statistics about current health status.",
  },
  {
    image: DrDetails,
    title: "Medical Staff Information",
    caption:
      "Get details and information about your chosen doctor, such as Location,Services,Rating and more!",
  },
];
