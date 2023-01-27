import React from 'react';
import Bot from './Bot';

function BotCollection({bots, handleClick, handleDischarge}) {

  return ( 
    <div className='container' style={{padding: "15px"}}>
      <div className='row'>
        {bots.map(bot => <div className='col-4' style={{borderStyle: "solid"}}><Bot key={bot.id} bot={bot} onHandleDischarge={handleDischarge} onHandleClick={handleClick} /></div>)}
      </div>
    </div>
  );
}

export default BotCollection