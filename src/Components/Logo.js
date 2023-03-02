import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <SuperiorBar>
      <img src={logo} alt="Raio amarelo" />
      <h2>ZapRecall</h2>
    </SuperiorBar>
  );
}

const SuperiorBar = styled.div`
  margin-top: 54px;
  display: flex;
  align-items: center;
  img {
    width: 52px;
    height: 60px;
  }
  h2 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #ffffff;
  }
`;
