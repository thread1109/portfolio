import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SAKSHI JHA </span>
            
            <br /> I am currently in my <span className="purple"> 5th </span>
            semester completing my <span className="purple"> BTECH </span> in <span className="purple"> IT </span> 
            department from NIT RAIPUR.
            <br />
            My coursework has provided me with a strong understanding of web technologies, including HTML, CSS,
             JavaScript, and frameworks such as React and Node.js.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing badminton 🏸
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing 💃
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🚆
            </li>
          </ul>

          <p style={{ color: "#7FFFD4" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sakshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
