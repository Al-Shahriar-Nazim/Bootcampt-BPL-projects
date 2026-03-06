import React from "react";

const SelectedPlayer = ({player,removePlayers}) => {
    console.log(player)
    const{player_img,player_name,playing_role}=player;
    const handleRemove = () =>{
removePlayers(player)
    }
  return (
    <div>
      <div className="mt-4 flex justify-between items-center border border-gray-400 p-3 rounded-xl shadow-md">
        <div className="flex items-center gap-x-3">
          <img
            src={player_img}
            className="w-[50px] h-[50px] rounded-xl overflow-hidden"
            alt=""
          />
          <div>
            <h3 className="">{player_name}</h3>
            <p className="text-xs">{playing_role}</p>
          </div>
        </div>
        <button onClick={handleRemove} className="btn btn-xs">
            Remove
        </button>
      </div>
    
    </div>
  
  );
};

export default SelectedPlayer;
