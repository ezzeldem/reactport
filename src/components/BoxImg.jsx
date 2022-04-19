import React from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";

const Box = styled.div`
  text-align: center;
  padding: 28px 60px;
  margin: 0 0 10px;
  box-shadow: 0 10px 24px #079cf02e;
  cursor: default;
  transition: 0.4s all ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  h4 {
    color: #222b45;
    font-weight: 300;
    font-size: 20px;
  }
`;
function BoxImg({ imgName, Title }) {
  return (
    <Col lg={6} md={6} sm={12}>
      <Box>
        <img src={imgName} className="img-fluid" alt={Title} />
        <h4>{Title}</h4>
      </Box>
    </Col>
  );
}

export default BoxImg;
