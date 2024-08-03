import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import "../index.css";

function Home(){

    const pokerDes = "P0KER TRAINER is one of my first projects in programming language C++. It's a program where you can learn strategy, counting and much more in popular Texas Poker."
    const gitDes = "Url to my GitHub!"
    const cardData = {
      card1: {
        cardName: "P0KER TRAINER",
        description: pokerDes,
        url:"https://nqjn.github.io/p0ker",
        text:"P0KER"
      },
      card2: {
        cardName: "GitHub",
        description: gitDes,
        url:"https://github.com/Nqjn",
        text: "GitHub"
      },
      card2: {
        cardName: "Prijimacky",
        description: "training page for Cermat admission",
        url:"https://github.com/prijimacky",
        text: "Prjimacky"
      }
    }

    return (
      <div className="container">
        <header className="header">Universe of NaN</header>
        <nav className='nav'>
          <Link to="/nan-verse/"> Domů </Link>
          <Link to="/p0ker">Poker</Link>
          <Link to="/prijimacky">Prijimacky</Link>
        </nav>
     
        <main className='content'>
          <Card {...cardData.card1} />
          <Card {...cardData.card2}/>
          <Card {...cardData.card3}/>
        </main>
        <aside className='sidebar'>Sidebar</aside>
        <footer className="footer">Web was created by NqjN</footer>
      </div>
    );
}

export default Home;