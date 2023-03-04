import styled from "styled-components";
import logo from "../assets/logo.png";

export default function LandingPage({ setClick }) {
  return (
    <Land>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
      <button data-test="start-btn" onClick={() => setClick("ok")}>
        Iniciar Recall
      </button>
    </Land>
  );
}
const Land = styled.div`
  width: auto;
  height: 667px;
  background: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 148px;
    width: 136px;
    height: 161px;
  }
  h1 {
    margin-top: 13px;
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #ffffff;
  }
  button {
    margin-top: 30px;
    width: 246px;
    height: 54px;
    color: #d70900;
    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;
