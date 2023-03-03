import Logo from "./Logo";
import Flashcards from "./Flashcards";
import Counter from "./Counter";
import styled from "styled-components";

export default function Home() {
  return (
    <Homepage>
      <Logo />
      <Flashcards />
      <Counter />
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
