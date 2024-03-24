import logo from "./logo.svg";
import logoWhite from "./logoW.svg";
import about_background from './background.jpg'

export default function AboutPage(){
    return(
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
      <img id='banner' src={about_background} alt="" />
      <p className="center-text">Chez vous, partout et ailleurs</p>
      </div>

    <footer>
      <img src={logoWhite} alt="" />
      <p>2020 Tous droit réservé</p>
    </footer>
  </>
)

}