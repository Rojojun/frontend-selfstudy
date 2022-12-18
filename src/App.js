import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let [postTitle, setPostTitle] = useState([
    "남자 코트 추천",
    "우와아아아 되나?",
    "살 빼자 ㅠㅠㅠ",
  ]);
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

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
                setTitle(i);
              }}
            >
              {postTitle[i]}
              <span
                onClick={() => {
                  let copy = [...likeCnt];
                  copy[i] = copy[i] + 1;
                  setLikeCnt(copy);
                  alert("add like");
                }}
              >
                {" "}
                ❤️{" "}
              </span>{" "}
              {likeCnt[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal == true ? (
        <Modal
          title={title}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          color="skyblue"
        />
      ) : null}
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

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.postTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copyArr = [...props.postTitle];
          copyArr[0] = "HUNNy";
          props.setPostTitle(copyArr);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

export default App;
