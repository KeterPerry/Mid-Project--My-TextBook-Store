import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <img
        style={{
          width: "200px",
          height: "300px",
        }}
        src="../assets/myPic.jpg"
        alt="My pic"
      ></img>
      <p style={{ fontSize: "2rem", margin: "2rem" }}>
        {" "}
        Hello Everyone! <br></br>
        I'm Keter Perry and I have masters degree in English Linguistics from
        Ben Gurion University. Over the years, I have been teaching English in
        different levels exploring and studying various methods of learning
        English. I have recently decided to share my broad knowledge by writing
        textbooks especially for kids to improve speaking skills. You can browse
        the site to checkout my textbooks.
      </p>
    </div>
  );
}
