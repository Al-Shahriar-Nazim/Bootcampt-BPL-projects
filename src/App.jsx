import { Suspense } from "react";
import "./App.css";
import Availavle from "./Components/Availavle/Availavle";
import Navbar from "./Components/Navbar/Navbar";
import Selected from "./Components/Selected/Selected";

// const playerPromised = fetch("/players.json").then((res) => res.json());
const playersFetch = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playerPromised = playersFetch();
  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-neutral"></span>
        }
      >
        <Availavle playerPromised={playerPromised}></Availavle>
      </Suspense>
      {/* <Selected></Selected> */}
    </>
  );
}

export default App;
