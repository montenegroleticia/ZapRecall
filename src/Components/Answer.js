import styled from "styled-components";
import Infos from "../mock";

export default function Card() {
  return (
    <>
      {Infos.map((p, index) => (
        <CardStyle key={index}>
          <h4>{p.answer}</h4>
          <div>
            <button className="red">Não lembrei</button>
            <button className="yellow">Quase não lembrei</button>
            <button className="green">Zap!</button>
          </div>
        </CardStyle>
      ))}
    </>
  );
}
const CardStyle = styled.div`
  width: 300px;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    margin-left: 15px;
    margin-top: 18px;
    margin-right: 37px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    margin-top: 21px;
    margin-bottom: 10px;
  }
  button {
    width: 85px;
    height: 37px;
    border-radius: 5px;
    border: transparent;
    color: #ffffff;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  .red {
    background: #ff3030;
  }
  .yellow {
    background: #ff922e;
  }
  .green {
    background: #2fbe34;
  }
`;
