import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let [postTitle, setPostTitle] = useState([
    "남자 코트 추천",
    "ㅇㅇㅇ",
    "살 빼자 ㅠㅠㅠ",
  ]);
  let [likeCnt, setLikeCnt] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <div className="list">
        <h4>
          {postTitle[0]}
          <span
            onClick={() => {
              setLikeCnt(likeCnt++);
              alert("좋아요를 합니다.");
            }}
          >
            {" "}
            ❤️{" "}
          </span>{" "}
          {likeCnt}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{postTitle[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{postTitle[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button
        onClick={() => {
          let copyPostTitle = [...postTitle];
          copyPostTitle[0] = "여자 코트 추천";
          setPostTitle(copyPostTitle);
        }}
      >
        여자코트를 원해요?
      </button>
    </div>
  );
}

export default App;
