import React from "react";
// import "./Card.css";

const Card = (props) => {
  return (
    <article className="card" aria-label="Profile card">
      <img src={props.img} alt="Profile image" />
      <div className="content">
        <div className="meta">
          <div className="name">{props.user}</div>
          <div className="age">Age: {props.age}</div>
        </div>
        <p className="desc">
          {props.p}
        </p>
        <div className="actions">
          <button className="btn" onClick={() => alert("Button clicked!")}>
            Click me
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
