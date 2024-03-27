import "./Cards.css";
import { Link } from "react-router-dom";
import locationList from "../routes/logements.json";
export default function TheCards() {
  return (
    <>
      <div className="cardContainer">
        {locationList.map((location) => (
          <Link to={`/location/${location.id}`} key={location.id}>
            <div className="firstCard">
              <p>{location.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
