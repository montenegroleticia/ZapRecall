import styled from "styled-components";
import { CiPlay1 } from "react-icons/ci";
import Infos from "../mock";

export default function Card() {
  return (
    <>
      {Infos.map((p, index) => (
        <CardStyle key={index}>
          <h4>Pergunta {index + 1}</h4>
          <Icon>
            <CiPlay1 />
          </Icon>
        </CardStyle>
      ))}
    </>
  );
}
const CardStyle = styled.div`
  width: 300px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    margin-left: 15px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
const Icon = styled(CiPlay1)`
  margin-right: 22px;
  width: 20px;
  height: 23px;
  color: #333333;
`;
