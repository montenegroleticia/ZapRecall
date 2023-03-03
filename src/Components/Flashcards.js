import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";
import Infos from "../mock";

export default function Flashcards({setMade, made}) {
  const [deck, setDeck] = useState();

  return (
    <Deck>
      {Infos.map((q, index) => (<Card q={q} index={index} key={index} setDeck={setDeck} deck={deck} setmade={setMade} made={made} />))}
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
