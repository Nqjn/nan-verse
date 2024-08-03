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
        url:"/p0ker",
        text:"P0KER"
      },
      card2: {
        cardName: "GitHub",
        description: gitDes,
        url:"https://github.com/Nqjn",
        text: "GitHub"
      },
    }

    return (
      <div className="container">
        <header className="header">Universe of NaN</header>
        <nav className='nav'>
          <Link to="/"> Domů </Link>
          <Link to="/p0ker">Poker</Link>
        </nav>
     
        <main className='content'>
          <Card {...cardData.card1} />
          <Card {...cardData.card2}/>
          <Card cardName={"Card 3"} description={"Description 3"}/>
        </main>
        <aside className='sidebar'>Sidebar</aside>
        <footer className="footer">Web was created by NqjN</footer>
      </div>
    );
}

export default Home;