import styled from "styled-components";
import play from "../assets/seta_play.png";
import turn from "../assets/seta_virar.png";
import Infos from "../mock";

export default function Card({ setDeck, deck }) {
  function answer(q, index) {
    setDeck(
      <CardStyleAnswer key={index}>
        <h4>{q.answer}</h4>
        <div>
          <button className="red">Não lembrei</button>
          <button className="yellow">Quase não lembrei</button>
          <button className="green">Zap!</button>
        </div>
      </CardStyleAnswer>
    );
  }

  function question(q, index) {
    setDeck(
      <CardStyleQuestion key={index}>
        <h4>{q.question}</h4>
        <img onClick={() => answer(q, index)} src={turn} alt="turn" />
      </CardStyleQuestion>
    );
  }

  return (
    <>
      {Infos.map((q, index) =>
        deck ? (
          deck
        ) : (
          <CardStyleCard key={index}>
            <h4>Pergunta {index + 1}</h4>
            <img onClick={() => question(q, index)} src={play} alt="play" />
          </CardStyleCard>
        )
      )}
    </>
  );
}
const CardStyleCard = styled.div`
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
    font-family: "Recursive";
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
const CardStyleAnswer = styled.div`
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
