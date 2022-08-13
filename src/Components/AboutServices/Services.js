import React from "react";
import NonStop from "../../Assets/24-hours.png";
import Doctors from "../../Assets/medical-team.png";
import Schedule from "../../Assets/timetable.png";
import "./Services.css";
const Services = () => {
  return (
    <div className="servicesContainer">
      <ul className="listContainer">
        <h2 className="servicesTitle">
          With MeRing program, here is an exmaple of the services We provide
          with our MeRing Application
        </h2>
        <li id="listItem">
          <img src={NonStop}></img>
          <h1>24/7 Monitoring</h1>
          <p>
            Whether you're awake or asleep. When you're at your doctor's office
            or clinic, at Work or anywhere around the globe, We got you covered.
          </p>
        </li>
        <li id="listItem">
          <img src={Doctors}></img>
          <h1>Doctor's Recommendation</h1>
          <p>
            As you are being monitored for your own health status, a doctor can
            advice for a recommended health check fitted for you.
          </p>
        </li>
        <li id="listItem">
          <img src={Schedule}></img>
          <h1>Scheduling You & For You</h1>
          <p>
            You can create & check appointments for any doctor at your clinic,
            or a doctor can appoint it for you and stay updated.
          </p>
        </li>
      </ul>
    </div>
  );
};
export default Services;
