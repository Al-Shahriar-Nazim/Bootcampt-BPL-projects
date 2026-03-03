import React, { use } from "react";
import Player from "../Player/Player";

const Availavle = ({ playerPromised, setAvailableBalences,availavleBalance }) => {
  const playersData = use(playerPromised);
  console.log(playersData);
  return (
    <div className="max-w-[1200px] mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {playersData.map((player) => (
          <Player
          availavleBalance={availavleBalance}
            setAvailableBalences={setAvailableBalences}
            key={player.index}
            player={player}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Availavle;
