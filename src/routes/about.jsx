import logo from "./logo.svg";
import logoWhite from "./logoW.svg";
import about_background from './about_background.jpg'
import { Outlet, Link } from "react-router-dom";
export default function AboutPage(){
    return(
<>
    <header>
      <img src={logo} alt="Le logo de Kasa" />

      <nav>
        <ul>
          <li>
          <Link to="/">Accueil</Link>
          </li>
          <li>
            <a href="#">À propos</a>
          </li>
        </ul>
      </nav>
    </header>
    
      <div className="container">
      <img id='banner' src={about_background} alt="" />
      </div>

      <Outlet />

    <footer>
      <img src={logoWhite} alt="" />
      <p>2020 Tous droit réservé</p>
    </footer>
  </>
)

}