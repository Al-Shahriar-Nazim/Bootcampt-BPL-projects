import React, { use } from "react";

const Availavle = ({ playerPromised }) => {
  const playersData = use(playerPromised);
  console.log(playersData);
  return (
    <div>
      <h3>Availavle</h3>
    </div>
  );
};

export default Availavle;
