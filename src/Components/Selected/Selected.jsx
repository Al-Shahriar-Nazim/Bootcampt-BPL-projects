import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Selected = ({selectedPlayers,removePlayers,setToogle}) => {
    console.log(selectedPlayers)
    const handleAdd = ()=>{
        console.log("add")
        setToogle(true)
    }
    return (
        <div className='max-w-[1200px] mx-auto'>
            {/* <h3>Selected</h3>
             */}
            
             {
                selectedPlayers.map(player => <SelectedPlayer removePlayers={removePlayers} player={player}></SelectedPlayer>)
             }
                 <button onClick={handleAdd} className="btn mt-10 bg-[#E7FE29]">Add more players</button>
        </div>
    );
};

export default Selected;