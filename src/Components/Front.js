import styled from "styled-components";
import play from "../assets/seta_play.png";

export default function Front({ number, setFront, setQuestion }) {
  function callQuestion() {
    setQuestion(true);
    setFront(false);
  }

  return (
    <CardStyle>
      <h4>Pergunta {number}</h4>
      <img onClick={() => callQuestion()} src={play} alt="play" />
    </CardStyle>
  );
}

const CardStyle = styled.div`
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
    color: #333333;
  }
  img {
    margin-right: 22px;
    width: 20px;
    height: 23px;
  }
`;
