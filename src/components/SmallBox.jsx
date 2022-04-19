import React from "react";
import Row from "react-bootstrap/Row";
import BoxImg from "./BoxImg";
import OImg1 from "../assets/Group 1.png";
import OImg2 from "../assets/Group 2.png";
import OImg3 from "../assets/Group 3.png";
import OImg4 from "../assets/Group 4.png";
import OImg5 from "../assets/Group 5.png";
import OImg43 from "../assets/Group 43.png";

function SmallBox() {
  return (
    <Row>
      <BoxImg imgName={OImg1} Title="Home" />
      <BoxImg imgName={OImg2} Title="Resume" />
      <BoxImg imgName={OImg3} Title="Services" />
      <BoxImg imgName={OImg4} Title="Portfolio" />
      <BoxImg imgName={OImg5} Title="Blog page" />
      <BoxImg imgName={OImg43} Title="Contact Us" />
    </Row>
  );
}

export default SmallBox;
