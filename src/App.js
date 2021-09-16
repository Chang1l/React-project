import React, { Component, useState } from "react";
import logo from "./reaper.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  let share = "공유하기";
  let title = "수명테스트";
  return (
    <div className="App">
      <div className="black-nav">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>{title}</h1>
              <img src={logo} classnName="photo" />
              <p>
                수명 테스트
                <br />
                내 수명은 얼마나 남았을까?
                <br />
                아래 버튼을 눌러 시작해보세요
                <br />
              </p>
              <div className="d-grid gap-2">
                <Button
                  variant="outline-danger"
                  size="mt-3"
                  className="text-center"
                >
                  테스트 시작
                </Button>
              </div>
              <p>{share}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
