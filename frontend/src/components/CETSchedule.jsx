import React from "react";
import '../assets/styles/CETSchedule.css'
import { FaArrowRight } from "react-icons/fa"; // FontAwesome arrow icon

const schedule = [
  {
    title: "Start Date",
    description: "01st Jan 2026",
    bgColor: "#1F2652",
    link: "https://forms.easebuzz.in/signup/PERA/PERA/?inst_name=PERA&form_name=PERA&jsonData=1",
    buttonText: "Apply Now"
  },
  {
    title: "Last Date",
    description: "25th May 2026",
    bgColor: "#333B62",
    link: "https://forms.easebuzz.in/signup/PERA/PERA/?inst_name=PERA&form_name=PERA&jsonData=1",
    buttonText: "Apply Now"
  },
  {
    title: "Examination Dates",
    description: "30th, 31st May & 1st June 2026",
    bgColor: "#1F2652",
    link: "https://forms.easebuzz.in/signup/PERA/PERA/?inst_name=PERA&form_name=PERA&jsonData=1",
    buttonText: "Apply Now"
  },
  {
    title: "Result Date",
    description: "9th June 2026",
    bgColor: "#333B62",
    link: "http://localhost:5173/result",
    buttonText: "View Result"
  },
];
const CETSchedule = () => {
  return (
    <div className="cet-row">
      {schedule.map((item, index) => (
        <div
          className="cet-column"
          key={index}
          style={{ backgroundColor: item.bgColor }}
        >
          <div className="cet-tag" />
          <h3 className="cet-title">{item.title}</h3>
          <h4 className="cet-subtitle">PERA CET 2026</h4>
          <h5 className="cet-date">{item.description}</h5>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cet-button"
          >
            {item.title === "Result Date" ? "View Result" : "Apply Now"}
            <FaArrowRight style={{ marginLeft: "8px" }} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default CETSchedule;
