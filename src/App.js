import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "./data";

// img html에 넣을 경우
import test_img from "./img/bg.png";
import { useState } from "react";

function App() {
  // 서버에 가져온 데이터라고 가정
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hojun's Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Item</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      {/* 위랑 같은 의미
      <div
        className="main-test"
        style={{ backgroundImage: "url(" + test_img + ")" }}
      ></div> */}

      <Container>
        <Row>
          <ItemBox />
          <ItemBox />
          <ItemBox />
        </Row>
      </Container>
    </div>
  );

  function ItemBox(props) {
    return (
      <Col sm>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        {/*
        <img src={process.env.PUBLIC_URL + "/logo192.png"} /> 
        public 폴더 이미지에 넣을 때 권장하는 방식
        */}
        <h4>{shoes[props].title}</h4>
        <p>{shoes[props].content}</p>
      </Col>
    );
  }
}
// 1. 컴포넌트화
// 2. 상품명 데이터바인딩
// 3. 반복 부분은 map으로 진행하기
export default App;
