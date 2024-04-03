import "./Cards.css";
import { Link } from "react-router-dom";
import locationList from "../routes/logements.json";
export default function TheCards() {
  return (
    <>
      <div className="cardContainer">
        {locationList.map((location) => (
          
            <div className="firstCard">
              <Link to={`/location/${location.id}`} key={location.id}>
                <img src={location.cover} alt="" />
              <p>{location.title}</p>
              </Link>
            </div>
          
        ))}
      </div>
    </>
  );
}
