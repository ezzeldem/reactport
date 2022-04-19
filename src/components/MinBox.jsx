import React from "react";
import styled from "styled-components";
import Man from "../assets/corporate-man-holding-ipad-medium-shot_23-2148336825.png";
import BackImg from "../assets/Path1.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Box = styled.div`
  margin: 0 0 20px;
  background: rgb(255, 224, 13);
  background: linear-gradient(
    190deg,
    rgba(255, 224, 13, 1) 10%,
    rgba(254, 161, 39, 1) 100%
  );
  text-align: center;
  padding: 66px 0 40px;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 80%;
    background-image: url(${BackImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  .name {
    color: #222b45;
    font-size: 24px;
    font-weight: 500;
    padding: 15px 0 5px;
  }
  .jopTitle {
    color: #fc394d;
    font-size: 32px;
    font-weight: 700;
    padding: 0 0 5px;
  }
  .jopDisc {
    color: #707070;
    font-size: 16px;
    font-weight: 400;
  }
  .sochileLinks {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    li {
      padding: 10px;
      a {
        width: 40px;
        height: 40px;
        color: #fff;
        background-color: #b1b4bd;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition: 0.4s all ease-in-out;
        &:hover {
          color: #222b45;
        }
      }
    }
  }
  .boxButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const BoxLink = styled.a`
  background: linear-gradient(
    190deg,
    ${(props) => props.fristColor || "palevioletred"} 35%,
    ${(props) => props.scoundColor || "palevioletred"} 100%
  );
  font-size: 16px;
  padding: 10px 40px;
  color: #fff;
  font-weight: 400;
  margin: 0 20px 14px;
  border-radius: 40px;
  border: 1px solid transparent;
  transition: 0.4s all ease-in-out;
  box-shadow: 0 10px 24px ${(props) => props.fristColor || "palevioletred"};
  &:hover {
    color: #fff;
  }
`;

function MinBox() {
  return (
    <Box>
      <img src={Man} />
      <h1 className="name">Hi, I'm Jhon Smith</h1>
      <h2 className="jopTitle">Creative Designer</h2>
      <h3 className="jopDisc">Creative Designer</h3>
      <ul className="list-unstyled sochileLinks">
        <li>
          <a href="#">
            <FaFacebookF className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <BsTelegram className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <GiAmericanFootballHelmet className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillYoutube className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineTwitter className="icon" />
          </a>
        </li>
      </ul>
      <div className="boxButton">
        <BoxLink href="#" fristColor="#FD8590" scoundColor="#FC364A">
          Download CV
        </BoxLink>
        <BoxLink href="#" fristColor="#B281FD" scoundColor="#844CFA">
          Hire Me
        </BoxLink>
      </div>
    </Box>
  );
}

export default MinBox;
