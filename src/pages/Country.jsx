import React, { useState } from "react";
import "./country.css";

export const Country = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="Playerbar">
      <div className="PlayerbarProfile">
        <div className="PlayerbarItem">
          <span className="PlayerbarTitle">MATCHES</span>

          <div className="dropdown">
            <span>PREVIOUS YEARS MATCHES :</span>
            <select
              className="options"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="option1">2019</option>
              <option value="option2">2020</option>
              <option value="option3">2021</option>
            </select>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <img src="/images/12.jpg" alt="" className="countryImg" />
              <span className="Title">INDIA</span>
            </div>
            <div className="grid-item">
              <img src="/images/11.jpg" alt="" className="countryImg" />
              <span className="Title">SRI LANKA</span>
            </div>
            <div className="grid-item">
              <img src="/images/13.jpg" alt="" className="countryImg" />
              <span className="Title">AUSTRALIA</span>
            </div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
