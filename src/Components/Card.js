import styled from "styled-components";

export default function Card() {
  return (
    <CardStyle>
      <h4>Pergunta</h4>
    </CardStyle>
  );
}
const CardStyle = styled.div`
  width: 300px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  h4 {
    margin-left: 15px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
