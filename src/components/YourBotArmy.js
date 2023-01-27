import React from 'react';
import Bot from './Bot';

function YourBotArmy({bots, handleClick, handleDischarge}) {
 
  return (
    <div>
        <div className="row" style={{borderStyle: "solid", borderHeight: "300px", borderWidth: "300px"}}>
            {bots.map(bot => <div className='col-4' style={{borderStyle: "solid"}}><Bot key={bot.id} bot={bot} onHandleDischarge={handleDischarge} onHandleClick={handleClick} /></div>)}
        </div>
    </div>
  );
}

export default YourBotArmy