import React from 'react';

import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import img from './home.png'
function Home() {
  return (
    <section className="about-us">
      <div className="about">
        <img src={img} className="pic"/>
        <div className="text">
          <h2>Welcome to our Website</h2>
          <h5>Front-end Developer &amp; <span>Designer</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
          <div className="data">
            <a href="#" className="hire">Explore</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
