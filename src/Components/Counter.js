import styled from "styled-components";

export default function Counter({made}) {
  return (
    <InferiorBar>
      <h3>{made}/8 CONCLUÍDOS</h3>
    </InferiorBar>
  );
}

const InferiorBar = styled.div`
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0px;
  h3 {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }
`;
