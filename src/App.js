import React, { useState } from "react";
import logo from "./test.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonToolbar } from "react-bootstrap";

function App() {
  let title = "수명 테스트";
  let share = "공유하기";

  return (
    <div className="App">
      <div className="black-nav">
        <div>{title}</div>
        <div class="container">
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

          <ButtonToolbar>
            <Button variant="outline-danger" size="lg">
              테스트 시작
            </Button>
          </ButtonToolbar>

          <p>{share}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
