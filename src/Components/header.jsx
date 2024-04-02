import logo from "./Assets/logo.svg";
import { Link } from "react-router-dom";
import "./header.css";
export default function TheHeader() {
  return (
    <>
      <header>
        <img src={logo} alt="Le logo de Kasa" />

        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
