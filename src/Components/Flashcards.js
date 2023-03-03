import styled from "styled-components";
import Card from "./Card";
import Question from "./Question"
import Answer from "./Answer"

export default function Flashcards() {
  return (
    <Deck>
      <Answer />
      <Question />
      <Card />
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
