import styled from "styled-components";
import play from "../assets/seta_play.png"
import Infos from "../mock";
import Question from "./Question"

export default function Card({setDeck}) {
  return (
    <>
      {Infos.map((p, index) => (
        <CardStyle key={index}>
          <h4>Pergunta {index + 1}</h4>
          <img onClick={() => (setDeck(<Question setDeck={setDeck} />))} src={play} alt="play" />
        </CardStyle>
      ))}
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
