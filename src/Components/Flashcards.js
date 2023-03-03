import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";

export default function Flashcards() {
  const [deck, setDeck] = useState();

  return (
    <Deck>
      <Card setDeck={setDeck} deck={deck} />
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
