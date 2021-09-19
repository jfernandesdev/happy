import { FiArrowRight } from 'react-icons/fi';
import '../styles/global.scss';
import '../styles/landing.scss';

import logoHappy from '../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoHappy} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Lavras</strong>
          <span>Minas Gerais</span>
        </div>

        <Link to='/app' className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}