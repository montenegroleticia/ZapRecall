import { useState } from "react";
import styled from "styled-components";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Counter({ made, iconFooter }) {
  const [message, setMessage] = useState();

  function callMessage() {
    const done = 8;
    if (made === done) {
      const filteredIcons = iconFooter.filter(
        (icon) => icon.test === "no-icon"
      );
      if (filteredIcons.length === 0) {
        setMessage({
          icon: party,
          title: "Parabéns!",
          text: `Você não esqueceu de
          nenhum flashcard!`,
        });
      } else {
        setMessage({
          icon: sad,
          title: "Puts...",
          text: `Ainda faltam alguns... 
          Mas não desanime!`,
        });
      }
    }
  }

  return (
    <InferiorBar data-test="footer">
      {message ? (
        <div className="message" data-test="finish-text">
          <div className="title">
            <img src={message.icon} alt="ícone" />
            <h2>{message.title}</h2>
          </div>
          <h3>{message.text}</h3>
        </div>
      ) : (
        callMessage()
      )}
      <h3>{made}/8 CONCLUÍDOS</h3>
      <div className="icons">
        {iconFooter.map((icon, index) => (
          <img key={index} data-test={icon.test} src={icon.icon} alt="ícone" />
        ))}
      </div>
    </InferiorBar>
  );
}

const InferiorBar = styled.div`
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  min-height: 70px;
  max-height: 171px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0px;
  h2 {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }
  h3 {
    margin-top: 9px;
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    width: 200px;
    text-align: center;
  }
  .message {
    margin-top: 15px;
    margin-bottom: -15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    display: flex;
  }
  .icons {
    margin-top: -15px;
    margin-bottom: 10px;
    display: flex;
  }
  img {
    margin-left: 5px;
    width: 23px;
    height: 23px;
  }
`;
