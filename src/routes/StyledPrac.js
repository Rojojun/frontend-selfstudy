import styled from "styled-components";

let TestButton = styled.button`
    background = ${(props) => props.bg};
`;

let Exported = styled.button`
    background = ${(props) => props.bg};
    color = ${(props) => (props.bg == "blue" ? "white" : "black")}
`;

function StyledPrac() {
  return (
    <div>
      <TestButton bg="blue">dddddd</TestButton>
      <Exported bg="blue">1111111111</Exported>
    </div>
  );
}

export default StyledPrac;
