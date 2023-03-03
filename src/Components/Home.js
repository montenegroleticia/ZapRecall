import Logo from "./Logo";
import Flashcards from "./Flashcards";
import Counter from "./Counter";
import styled from "styled-components";
import { useState } from "react";

export default function Home() {
  const [made, setMade] = useState(0);

  return (
    <Homepage>
      <Logo />
      <Flashcards setMade={setMade} made={made} />
      <Counter made={made} />
    </Homepage>
  );
}

const Homepage = styled.div`
  width: auto;
  height: auto;
  background: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
