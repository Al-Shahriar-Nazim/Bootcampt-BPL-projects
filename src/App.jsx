import { Suspense, useState } from "react";
import "./App.css";
import Availavle from "./Components/Availavle/Availavle";
import Navbar from "./Components/Navbar/Navbar";
import Selected from "./Components/Selected/Selected";
  import { ToastContainer} from 'react-toastify';

// const playerPromised = fetch("/players.json").then((res) => res.json());
const playersFetch = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playerPromised = playersFetch();

function App() {
  const [availavleBalance, setAvailableBalences] = useState(6000000);
  const [toggle, setToogle] = useState(true);
  const [selectedPlayers,setSelectedPlayers] = useState([])
  // console.log(selectedPlayers)
  const removePlayers = (p)=>{
    // console.log(p)
    const filterData = selectedPlayers.filter(play => play.player_name !== p.player_name)
    // console.log(filterData)
    setSelectedPlayers(filterData)
    setAvailableBalences(availavleBalance+p.prices)
  }

  return (
    <>
      <Navbar availavleBalance={availavleBalance}></Navbar>

      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{toggle===true?"Available Players":`Selected Players (${selectedPlayers.length}/6)`}</h1>
        <div className="font-bold">
          <button
            onClick={() => setToogle(true)}
            className={`px-4 py-3 border-1 border-gray-400 border-r-0 rounded-l-2xl ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToogle(false)}
            className={`px-4 py-3 border-1 border-gray-400 border-l-0 rounded-r-2xl ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>({selectedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner text-neutral"></span>
          }
        >
          <Availavle
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
            availavleBalance={availavleBalance}
            setAvailableBalences={setAvailableBalences}
            playerPromised={playerPromised}
          ></Availavle>
        </Suspense>
      ) : (
        <Selected setToogle={setToogle} removePlayers={removePlayers} selectedPlayers={selectedPlayers}></Selected>
      )}

      {/* <Selected></Selected> */}
        <ToastContainer />
    </>
  );
}

export default App;
