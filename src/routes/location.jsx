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


const renderRatingStars = (rating) => {
  const maxRating = 5;
  const filledStars = parseInt(rating);
  const emptyStars = maxRating - filledStars;

  const stars = [];

  // Ajouter les étoiles pleines
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FF6060" }} />
    );
  }
  // Ajouter les étoiles vides
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FontAwesomeIcon key={filledStars + i} icon={faStar} style={{ color: "#C4C4C4" }} />
    );
  }

  return stars;
};

function EquipmentList({ equipments }) {
  return (
    <ul>
      {equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  );
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
            <div className="host-info">
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
            {renderRatingStars(location.rating)}
            </div>
          </div>
          <div className="description-equipments">
            <TheCollapse title="Description" text={location.description}  />
            <TheCollapse title="Equipements"  text={<EquipmentList equipments={location.equipments} />}/>
          </div>
        </div>
      </main>

      
        <TheFooter />
      
    </>
  );
}
