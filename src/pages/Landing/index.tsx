import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy Logo"/>

        <main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Pelotas</strong>
          <span>Rio Grande Do Sul</span>
        </div>

        <Link to="/login" className="enter-auth">
          Acesso restrito
        </Link>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, .6)" />
        </Link>
      </div>
    </div>

  );
}

export default Landing;
