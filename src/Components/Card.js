import styled from "styled-components";
import play from "../assets/seta_play.png";
import turn from "../assets/seta_virar.png";
import wrong from "../assets/icone_erro.png";
import allMost from "../assets/icone_quase.png";
import right from "../assets/icone_certo.png";

export default function Card({ q, index, setDeck, deck, setMade, made}) {
  function cor(note){
    if (note === wrong){
      return 'red';
    } else if ( note === allMost){
      return 'yellow';
    } else{
      return 'green';
    }
  }

  function result(q, index, note){
    setDeck(
      <CardStyleResult>
        <h4 className={cor(note)} >Pergunta {index + 1}</h4>
        <img onClick={() => question(q, index)} src={note} alt="play" />
      </CardStyleResult>
    );

    const done = made +1
    setMade(done);
  }

  function answer(q, index) {
    setDeck(
      <CardStyleAnswer>
        <h4>{q.answer}</h4>
        <div>
          <button onClick={() => result(q, index, wrong)} className="red">Não lembrei</button>
          <button onClick={() => result(q, index, allMost)} className="yellow">Quase não lembrei</button>
          <button onClick={() => result(q, index, right)} className="green">Zap!</button>
        </div>
      </CardStyleAnswer>
    );
  }

  function question(q, index) {
    setDeck(
      <CardStyleQuestion>
        <h4>{q.question}</h4>
        <img onClick={() => answer(q, index)} src={turn} alt="turn" />
      </CardStyleQuestion>
    );
  }

  return (
    <>
      {deck ? deck : (
          <CardStyle>
            <h4>Pergunta {index + 1}</h4>
            <img onClick={() => question(q, index)} src={play} alt="play" />
          </CardStyle>
        )
      }
    </>
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