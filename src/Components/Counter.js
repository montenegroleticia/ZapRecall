import styled from "styled-components";

export default function Counter({ made, iconFooter }) {
  return (
    <InferiorBar>
      <h3 data-test="footer">{made}/8 CONCLUÍDOS</h3>
      <div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0px;
  h3 {
    margin-top: 9px;
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
  div {
    margin-top: -17px;
    margin-bottom: 10px;
    display: flex;
  }
  img{
    margin-left: 5px;
  }
`;
