import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MinBox from "./components/MinBox";
import SmallBox from "./components/SmallBox";
function App() {

  return (
    <div className="MinProject">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10}>
            <Row>
              <Col lg={6} md={12}>
                <MinBox />
              </Col>
              <Col lg={6} md={12}>
                <SmallBox />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
