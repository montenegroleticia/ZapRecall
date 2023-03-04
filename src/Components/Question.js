import styled from "styled-components";
import turn from "../assets/seta_virar.png";

export default function Question({ q, setAnswer, setQuestion }) {
  function callAnswer() {
    setAnswer(true);
    setQuestion(false);
  }

  return (
    <CardStyleQuestion data-test="flashcard" >
      <h4 data-test="flashcard-text">{q.question}</h4>
      <img
        data-test="turn-btn"
        onClick={() => callAnswer()}
        src={turn}
        alt="turn"
      />
    </CardStyleQuestion>
  );
}

const CardStyleQuestion = styled.div`
  width: 300px;
  height: 131px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    margin-left: 15px;
    margin-top: 18px;
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  img {
    margin-left: 255px;
    margin-bottom: 6px;
    width: 30px;
    height: 20px;
  }
`;
