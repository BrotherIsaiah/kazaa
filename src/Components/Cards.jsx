import "./Cards.css";
import { Link } from "react-router-dom";
import "../routes/logements.json"
export default function TheCards() {
  return (
    <>
      <div className="cardContainer">
        <Link to="/location">
          <div className="firstCard">
            <p>Titre loc</p>
          </div>
        </Link>
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
