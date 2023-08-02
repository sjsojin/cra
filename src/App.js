import logo from "./logo.svg";
import "./App.css";
import And from "./components/And";
import Style from "./components/Style";
import Props from "./components/Props";
import Use from "./components/Use";

function App() {
  const react = "리액트";
  return (
    <div>
      <And />
      <Style />
      <Props data={react}>리액트으으</Props>
      <Use />
      {/* {react === "리액트" ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )} */}
    </div>
  );
}

export default App;
