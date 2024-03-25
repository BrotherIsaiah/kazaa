import "./Cards.css";
import { Link } from "react-router-dom";
export default function TheCards() {
  return (
    <>
      <div className="cardContainer">
        <a href="">
          <div className="firstCard">
            <p>Titre loc</p>
          </div>
        </a>
        <div className="firstCard">
          <p>Titre loc</p>
        </div>
        <div className="firstCard">
          <p>Titre loc</p>
        </div>
        <div className="firstCard">
          <p>Titre loc</p>
        </div>
        <div className="firstCard">
          <p>Titre loc</p>
        </div>
        <div className="firstCard">
          <p>Titre loc</p>
        </div>
      </div>
    </>
  );
}
