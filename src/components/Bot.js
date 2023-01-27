import React from 'react';

function Bot({ bot, onHandleClick, onHandleDischarge }) {

  return (
    <div>
      <div key={bot.id} onClick={() => onHandleClick(bot.id)}>
        <div>
          <img alt={bot.name} src={bot.avatar_url} />
        </div>
        <div>
          <div>{bot.name}</div>
          <div>
            <strong>{bot.bot_class}</strong>
            <br />
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div>
          <span>
            <i />
            {bot.health}
          </span>
          <span>
            <i />
            {bot.damage}
          </span>
          <span>
            <i />
            {bot.armor}
          </span>
          <span>
            <div>
              <button onClick={(e) => {e.stopPropagation(); onHandleDischarge(bot.id)}} style={{backgroundColor: "red"}}>X</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bot;