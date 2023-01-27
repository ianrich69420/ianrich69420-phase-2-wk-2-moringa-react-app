import React, { useEffect, useState } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const botsAPI = 'https://cream-equatorial-sparrow.glitch.me/bots'
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(botsAPI)
    .then(res => res.json())
    .then(setBots)
  }, []);

  function enlistBot(id) {
    setBots(bots.map(bot => id === bot.id ? {...bot, isEnlisted: true} : bot));
  }
  

  function delistBot(id) {
    setBots(bots.map(bot => id === bot.id ? {...bot, isEnlisted: false} : bot));
  }
  
  function dischargeBot(id) {
    setBots(bots.filter(bot => bot.id === id ? false : true));
  }

  return (
    <div className="App">
      <YourBotArmy bots={bots.filter(bot => bot.isEnlisted)} handleDischarge={dischargeBot} handleClick={delistBot} />
      <BotCollection bots= {bots}  handleDischarge={dischargeBot} handleClick={enlistBot}/>
    </div>
  );
}

export default App;
