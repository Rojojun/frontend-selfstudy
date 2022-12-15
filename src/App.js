import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let [postTitle, setPostTitle] = useState([
    "남자 코트 추천",
    "우와아아아 되나?",
    "살 빼자 ㅠㅠㅠ",
  ]);
  let [likeCnt, setLikeCnt] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      {postTitle.map(function (content, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                modal == true ? setModal(false) : setModal(true);
              }}
            >
              {postTitle[i]}
              <span
                onClick={() => {
                  setLikeCnt(likeCnt + 1);
                  alert("add like");
                }}
              >
                {" "}
                ❤️{" "}
              </span>{" "}
              {likeCnt}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal == true ? <Modal /> : null}

      <button
        onClick={() => {
          let copyPostTitle = [...postTitle];
          copyPostTitle[0] = "여자 코트 추천";
          setPostTitle(copyPostTitle);
        }}
      >
        여자코트를 원해요?
      </button>
      <button
        onClick={() => {
          let sortPostTitle = [...postTitle];
          sortPostTitle.sort();
          setPostTitle(sortPostTitle.sort());
        }}
      >
        가나다라마바사
      </button>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
