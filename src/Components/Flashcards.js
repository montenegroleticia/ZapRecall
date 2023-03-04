import styled from "styled-components";
import Card from "./Card";
import Infos from "../mock";

export default function Flashcards({ setMade, made }) {
  return (
    <Deck data-test="flashcard" >
      {Infos.map((q) => (
        <Card
          q={q}
          number={Infos.indexOf(q) + 1}
          key={Infos.indexOf(q)}
          setMade={setMade}
          made={made}
        />
      ))}
    </Deck>
  );
}

const Deck = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 51px;
  margin-bottom: 78px;
`;
