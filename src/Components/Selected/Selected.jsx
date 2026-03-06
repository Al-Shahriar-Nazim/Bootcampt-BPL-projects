import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Selected = ({selectedPlayers,removePlayers}) => {
    console.log(selectedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {/* <h3>Selected</h3>
             */}
            
             {
                selectedPlayers.map(player => <SelectedPlayer removePlayers={removePlayers} player={player}></SelectedPlayer>)
             }
        </div>
    );
};

export default Selected;