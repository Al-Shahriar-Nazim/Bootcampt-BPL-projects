import React, { useState } from "react";
import userImg from "../../assets/user1.png";
import reportImg from "../../assets/report1.png";

const Player = ({ player, setAvailableBalences, availavleBalance }) => {
  const [selected, setSelected] = useState(false);
  // console.log(player)
  const {
    player_img,
    player_name,
    player_country,
    playing_role,
    rating,
    bating_style,
    bowling_style,
    prices,
  } = player;
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-2xl p-4">
        <figure>
          <img
            className="w-full h-[250px] overflow-hidden rounded-lg"
            src={player_img}
            alt="Shoes"
          />
        </figure>
        <div className="mt-4">
          <div className="flex items-center">
            <img src={userImg} alt="" />
            <h2 className="card-title ml-3">{player_name}</h2>
          </div>
          <div className="mt-4 flex justify-between border-b-1 border-gray-400 pb-4">
            <div className="flex items-center">
              <span>
                <img src={reportImg} alt="" />
              </span>
              <span className="ml-2">{player_country}</span>
            </div>
            <button className="btn">{playing_role}</button>
          </div>
          <div className="mt-4 flex justify-between font-bold">
            <h3>Rating</h3>
            <p>{rating}</p>
          </div>
          <div className="mt-4 flex justify-between font-bold">
            <h3>{bating_style}</h3>
            <h3 className="text-gray-500">{bowling_style}</h3>
          </div>

          <div className="card-actions mt-4 flex items-center justify-between">
            <h3 className="font-bold">Prices : ${prices}</h3>
            <button
              disabled={selected}
              onClick={() => {
                if (availavleBalance < prices) {
                  alert("not enogh coin");
                  return;
                }
                (setSelected(true),
                  setAvailableBalences(availavleBalance - prices));
              }}
              className="btn btn-primary"
            >
              {selected === true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
