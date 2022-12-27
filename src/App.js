import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";

// img html에 넣을 경우
import { useState } from "react";

function App() {
  // 서버에 가져온 데이터라고 가정
  let [shoes] = useState(data);

  // 나는 Hook이에요! -> 페이지 이동을 도와줍니다.
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
            href="#home"
          >
            Hojun's Shop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="title-btn" to="/about">
              Home
            </Link>
            <Link className="title-btn" to="/detail">
              Item
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
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
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>404 Error</div>} />
        /* Nested Routes 예제 장점1. Route 작성 단순화 장점2. nested
        route접속시엔 컴포넌트 2개가 동시에 보임*/
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>쨘~~ 보이죠?!</div>} />
          <Route path="location" element={<div>요기는 어떨까요오오?!</div>} />
        </Route>
      </Routes>
      {/* 위랑 같은 의미
      <div
        className="main-test"
        style={{ backgroundImage: "url(" + test_img + ")" }}
      ></div> */}
    </div>
  );

  function About() {
    <div>
      tetetetsjfkldsflsdkfskldjjkljkllk // nested route에서 보여줄 수 있게 하는
      창구 // nested routes에서 보여주는 곳은 Outlet
      <Outlet></Outlet>
    </div>;
  }

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
