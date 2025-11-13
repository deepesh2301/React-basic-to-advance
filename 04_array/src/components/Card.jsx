import React from "react";
// import "./index.css";

const Card = (props) => {
  return (
   <div className="main">
    <div className="job-card">
      <div className="job-header">
        <img src={props.logo} alt="logo" className="logo" />
        <img 
          src="https://cdn-icons-png.flaticon.com/512/833/833300.png"
          alt="save"
          className="save"
        />
      </div>

      <div className="job-body">
        <h3>{props.user}</h3>
        <p>Started {props.days} days ago</p>
        <p>Role: {props.role}</p>

        <div className="buttons">
          <button>{props.emptype}</button>
          <button>{props.level} level</button>
        </div>
      </div>

      <div className="job-footer">
        <p>{props.payout}/ hr • {props.location}</p>
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
    </div>
  );
};


export default Card;
