import { useState } from "react";
import Home from "./Components/Home";
import LandingPage from "./Components/LandingPage";

export default function App() {
  const [click, setClick] = useState();

  return (
    <>
    {click ? <Home /> : <LandingPage setClick={setClick} />}
    </>
  );
}
