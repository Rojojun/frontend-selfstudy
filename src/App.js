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
  let [input, setInput] = useState("");
  const date = new Date();

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
                onClick={(e) => {
                  let copy = [...likeCnt];
                  copy[i] = copy[i] + 1;
                  // event bubbling 방지
                  e.stopPropagation();
                  setLikeCnt(copy);
                  alert("add like");
                }}
              >
                {" "}
                ❤️{" "}
              </span>{" "}
              {likeCnt[i]}
            </h4>
            <p>
              {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
            </p>
            <button
              onClick={() => {
                console.log("삭제" + i);
                let copy = [...postTitle];
                copy.pop(i);
                // splice()와 pop()의 차이
                // postTitle.pop(i);
                setPostTitle(copy);
              }}
            >
              삭제
            </button>
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
      <div style={{ margin: 20 }}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
            console.log(input);
          }}
        ></input>
        <button
          onClick={() => {
            let copy = [...postTitle];
            input == ""
              ? alert("빈 값은 들어 올 수 없습니다.")
              : copy.push(input);
            // unshift()
            setPostTitle(copy);
            console.log(input);
            //postTitle.push(input);
            console.log(postTitle);

            let copyLike = [...likeCnt];
            copyLike[copyLike.length] = 0;
            setLikeCnt(copyLike);
          }}
        >
          upload
        </button>
      </div>
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
