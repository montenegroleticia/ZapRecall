import { useState } from "react";
import Front from "./Front";
import Question from "./Question";
import Answer from "./Answer";
import Result from "./Result";

export default function Card({
  q,
  number,
  setMade,
  made,
  setIconFooter,
  iconFooter,
}) {
  const [front, setFront] = useState(true);
  const [question, setQuestion] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [icon, setIcon] = useState();
  const [color, setColor] = useState();
  const [test, setTest] = useState();

  return (
    <>
      {front ? (
        <Front number={number} setFront={setFront} setQuestion={setQuestion} />
      ) : question ? (
        <Question
          q={q}
          number={number}
          setQuestion={setQuestion}
          setAnswer={setAnswer}
        />
      ) : answer ? (
        <Answer
          q={q}
          setAnswer={setAnswer}
          setMade={setMade}
          made={made}
          setIcon={setIcon}
          setColor={setColor}
          setTest={setTest}
          setIconFooter={setIconFooter}
          iconFooter={iconFooter}
        />
      ) : (
        <Result
          number={number}
          icon={icon}
          color={color}
          test={test}
        />
      )}
    </>
  );
}
