import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hello! 👋 I am <span className="purple">Muzamil Dars</span> from <span className="purple">Hyderabad, Pakistan</span>, a passionate and driven Web Developer currently pursuing a Software Engineering degree at Mehran University of Engineering and Technology (MUET). 
    <br />
    With a strong focus on the MERN stack, I specialize in developing dynamic, responsive, and high-performance web applications that solve real-world problems.
    <br />
    My enthusiasm for technology extends to Artificial Intelligence, where I continue to explore new possibilities and innovations.
    <br />
    <br />
    Apart from coding, some other activities that I love to do:
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Games
    </li>
    <li className="about-activity">
      <ImPointRight /> Writing Tech Blogs
    </li>
    <li className="about-activity">
      <ImPointRight /> Travelling
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build things that make a difference!"{" "}
  </p>
  <footer className="blockquote-footer">Muzamil</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
