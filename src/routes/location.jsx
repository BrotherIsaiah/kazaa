import TheHeader from "../Components/header";
import TheFooter from "../Components/footer";
import locationList from "../routes/logements.json";
import { useParams } from "react-router-dom";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
//import TheSlides from "../Components/Slides";
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
        <h1>{location.title}</h1>
        <p>{location.location}</p>
        <div>
          {location.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <div>
          <p>{location.host.name}</p>
          <img src={location.host.picture} alt={location.host.name} />
        </div>
      </main>

      <footer>
        <TheFooter />
      </footer>
    </>
  );
}
