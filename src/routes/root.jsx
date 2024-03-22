import logo from "./logo.svg";
import logoWhite from "./logoW.svg";
import background from './background.jpg'
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
    
      <header>
        <img src={logo} alt="Le logo de Kasa" />

        <nav>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">À propos</a>
            </li>
          </ul>
        </nav>
      </header>
      
        <div className="container">
        <img id='banner' src={background} alt="" />
        <p className="center-text">Chez vous, partout et ailleurs</p>
        </div>
        
        <Outlet />
        
        
      
      <footer>
        <img src={logoWhite} alt="" />
        <p>2020 Tous droit réservé</p>
      </footer>
    </>
  );
}
