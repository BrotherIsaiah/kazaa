import { useRouteError } from "react-router-dom";
import logo from "./logo.svg";
import logoWhite from "./logoW.svg";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

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
            <a href="#">A propos</a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="error-page">
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas</p>
        <a href="#">Revenir à la page d'accueil</a>
      </div>
      
      <footer>
        <img src={logoWhite} alt="" />
        <p>2020 Tous droit réservé</p>
      </footer>
    </>
  );
}
