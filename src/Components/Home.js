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
  width: 375px;
  height: 667px;
  background: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
