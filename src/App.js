import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";

// img html에 넣을 경우
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
            <Nav.Link to="/" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Item</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>

      <Link to="/">홈</Link>

      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row>
                {shoes.map((a, i) => {
                  return <ItemBox shoes={shoes[i]} i={i + 1} />;
                })}
              </Row>
            </Container>
          }
        />
        <Route path="/detail" element={<div>상세페이지</div>} />
        <Route path="/about" element={<div>ABOUT TIME</div>} />
      </Routes>
      {/* 위랑 같은 의미
      <div
        className="main-test"
        style={{ backgroundImage: "url(" + test_img + ")" }}
      ></div> */}
    </div>
  );

  function ItemBox(props) {
    return (
      <Col sm>
        <img
          src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
          width="80%"
        />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </Col>
    );
  }
}

/*
        <img src={process.env.PUBLIC_URL + "/logo192.png"} /> 
        public 폴더 이미지에 넣을 때 권장하는 방식
 */

// 1. 컴포넌트화 --> Done
// 2. 상품명 데이터바인딩 --> CAN NOT
// 3. 반복 부분은 map으로 진행하기 --> CAN NOT
export default App;
