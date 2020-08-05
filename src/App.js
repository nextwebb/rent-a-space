import React from 'react'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {


  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <strong>Hello world</strong>
        </Col>
        <Col className="d-flex justify-content-center">
          <strong>Hello world</strong>
        </Col>
        <Col className="d-flex justify-content-center">
          <strong>Hello world</strong>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
