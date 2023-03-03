import styled from "styled-components";
import Card from "./Card";

export default function Flashcards() {
  return (
    <Deck>
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
