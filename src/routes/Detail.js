import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// styled 컴포넌트를 이용하는게 아닌듯...
let Show = styled.div`
  display: none;
`;

function Detail(props) {
  let [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  let { id } = useParams();
  let item = props.shoes.find((i) => i.id == id);
  return (
    <div className="container">
      {show == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
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
    </div>
  );
}

export default Detail;
