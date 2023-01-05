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
import Event from "./routes/Event";
import axios from "axios";

// img html에 넣을 경우
import { useState } from "react";

function App() {
  // 서버에 가져온 데이터라고 가정
  let [shoes, setShoes] = useState(data);

  // 나는 Hook이에요! -> 페이지 이동을 도와줍니다.
  let navigate = useNavigate();
  let [clicked, setClicked] = useState(0);

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

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>404 Error</div>} />
        {/* Nested Routes 예제 장점1. Route 작성 단순화 장점2. nested
        route접속시엔 컴포넌트 2개가 동시에 보임*/}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>쨘~~ 보이죠?!</div>} />
          <Route path="location" element={<div>요기는 어떨까요오오?!</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>메시와 함께 세계일주를! 가즈아 아르헨티나</div>}
          />
          <Route
            path="two"
            element={
              <div>FC바르셀로나 전설들과 함께 하는 바르셀로나 투어!</div>
            }
          />
        </Route>
      </Routes>
      {/* 위랑 같은 의미
      <div
        className="main-test"
        style={{ backgroundImage: "url(" + test_img + ")" }}
      ></div> */}
      <button
        onClick={() => {
          clicked++;
          console.log(clicked);
          let pageNum = 1 + clicked;
          axios
            .get("https://codingapple1.github.io/shop/data" + pageNum + ".json")
            .then((result) => {
              let copyShoes = [...shoes, ...result.data];
              setShoes(copyShoes);
              console.log(setClicked);

              console.log(result.data);
            })
            .catch(() => {
              console.log("실패");
            });
        }}
      >
        버튼
      </button>
    </div>
  );
  function About() {
    return (
      <div>
        <h4>코디각포</h4>
        <Outlet></Outlet>
      </div>
    );
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
