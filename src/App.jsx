import { Suspense, useState } from "react";
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
  const [toggle, setToogle] = useState(true);

  const playerPromised = playersFetch();
  return (
    <>
      <Navbar></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Available Players</h1>
        <div className="font-bold">
          <button onClick={()=>setToogle(true)} 
          className={`px-4 py-3 border-1 border-gray-400 border-r-0 rounded-l-2xl ${toggle===true?"bg-[#E7FE29]":""}`}>
            Available
          </button>
          <button onClick={()=>setToogle(false)}
           className={`px-4 py-3 border-1 border-gray-400 border-l-0 rounded-r-2xl ${toggle===false?"bg-[#E7FE29]":""}`}>
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner text-neutral"></span>
          }
        >
          <Availavle playerPromised={playerPromised}></Availavle>
        </Suspense>
      ) : (
        <Selected></Selected>
      )}

      {/* <Selected></Selected> */}
    </>
  );
}

export default App;
