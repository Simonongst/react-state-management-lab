// src/App.jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]); 

const handleAddFighter = (fighter) => {
  if (money < fighter.price) {
    alert("Not enough money");
    return;
  }
  setTeam([...team, fighter]);
  setMoney(money - fighter.price);

  setZombieFighters(prevFighters =>
    prevFighters.filter(availableFighter => availableFighter.id !== fighter.id)
  );
};

function ZombieFighters({ fighter }) {
  const { name, price, strength, agility, img } = fighter;

  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>
      <button onClick={() => handleAddFighter(fighter)}>Add</button>
    </div>
  );
}

function SelectedZombieFighter({ team }) {
  return (
    <div>
      <h3>Team</h3>
      {team.length === 0 ? (
        <p>Pick some team members</p>
      ) : (
        <ul>
          {team.map(member => (
            <li key={member.id}>
              <div>
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p>Price: {member.price}</p>
                <p>Strength: {member.strength}</p>
                <p>Agility: {member.agility}</p>
                <button onClick={() => handleRemoveFighter(member)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

let totalStrength = 0;
for (let i = 0; i < team.length; i++) {
  const member = team[i];
  totalStrength += member.strength;
}
let totalAgility = 0;
for (let i = 0; i < team.length; i++) {
  const member = team[i];
  totalAgility += member.agility;
}

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <SelectedZombieFighter team={team} />
      <h3>Fighters</h3>
      <ul>
          {zombieFighters.map(zombieFighter => (
            <li key={zombieFighter.id}>
              <ZombieFighters fighter={zombieFighter} />
            </li>
          ))}
      </ul>
    </>
  );

};

export default App;
