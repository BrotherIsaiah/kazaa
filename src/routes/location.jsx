import TheHeader from "../Components/header";
import TheFooter from "../Components/footer";
import locationList from "../routes/logements.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TheCollapse from "../Components/Collapse";
export default function LocationPage() {
  const { id } = useParams();
  const location = locationList.find((loc) => loc.id === id);
  const [imageIndex, setImageIndex] = useState(0);
  const nextSlide = () => {
    setImageIndex((prevIndex) =>
      prevIndex === location.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  function prevSlide() {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? location.pictures.length - 1 : prevIndex - 1
    );
  }
const collapseLocation = {
  width: "45%",
  height: "17vh"
}
  return (
    <>
      <TheHeader />

      <main>
        <div className="slideShow">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="arrow-left"
            onClick={prevSlide}
          />
          <img src={location.pictures[imageIndex]} alt="Carrousel" />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="arrow-right"
            onClick={nextSlide}
          />
        </div>

        <div className="info-wrapper">
          <div className="title-location">
            <div>
              <h1>{location.title}</h1>
              <p>{location.location}</p>
            </div>
            <div>
              <img src={location.host.picture} alt={location.host.name} />
              <p>{location.host.name}</p>
            </div>
          </div>
          <div className="tags-rating">
            <div className="tags-name">
              {location.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>

            <div className="rateStar">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="description-equipments">
            <TheCollapse title="Description" style={collapseLocation} />
            <TheCollapse title="Equipements" style={collapseLocation} />
          </div>
        </div>
      </main>

      <footer>
        <TheFooter />
      </footer>
    </>
  );
}
