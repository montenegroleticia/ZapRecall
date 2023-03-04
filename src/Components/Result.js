import styled from "styled-components";
import wrong from "../assets/icone_erro.png";
import allMost from "../assets/icone_quase.png";

export default function Result({ number, icon }) {
  function cor(icon) {
    if (icon === wrong) {
      return "red";
    } else if (icon === allMost) {
      return "yellow";
    } else {
      return "green";
    }
  }

  return (
    <CardStyleResult>
      <h4 className={cor()}>Pergunta {number}</h4>
      <img src={icon} alt={icon} />
    </CardStyleResult>
  );
}

const CardStyleResult = styled.div`
  width: 300px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    margin-left: 15px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: line-through;
  }
  img {
    margin-right: 22px;
    width: 23px;
    height: 23px;
  }
  .red {
    color: #ff3030;
  }
  .yellow {
    color: #ff922e;
  }
  .green {
    color: #2fbe34;
  }
`;
