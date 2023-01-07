import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { tab } from "@testing-library/user-event/dist/tab";

// styled 컴포넌트를 이용하는게 아닌듯...
let Show = styled.div`
  display: none;
`;

let InputTop = styled.input`
  margin-top: 10px;
`;

function Detail(props) {
  let [show, setShow] = useState(true);
  let { id } = useParams();
  let item = props.shoes.find((i) => i.id == id);
  let [num, setNum] = useState(0);
  let [tab, setTab] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("Error");
    }
  }, [num]);

  return (
    <div className="container">
      {show == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
      <InputTop
        onChange={(e) => {
          setNum(e.target.value);
        }}
      ></InputTop>
      <div className="row">
        <div className="col-md-6">
          <img src={item.pictureInfo} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="link-0">
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="link-1">
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="link-2">
            Option 3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabController tab={tab} />
    </div>
  );
}

function TabController({ tab }) {
  switch (tab) {
    case 0:
      return <div>Content0</div>;
      break;
    case 1:
      return <div>Content1</div>;
      break;
    case 2:
      return <div>Content2</div>;
      break;
  }
  /*
  Same code
  [<div>Content0</div>, <div>Content0</div>, <div>Content0</div>][tab]
  */
}

export default Detail;
