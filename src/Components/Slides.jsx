import './Slides.css'
import locationList from "../routes/logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export default function TheSlides() {

    const coverPage = locationList[0].cover;
    const titleLocation = locationList[0].title;
    return(
        <>
        <div className="slideShow">
        <img src={coverPage} alt="" />
        <FontAwesomeIcon icon={faAngleLeft} className='arrow-left'/>
        <FontAwesomeIcon icon={faAngleRight} className='arrow-right'/>
        </div>
        <h1>
        { titleLocation }
        </h1>
      </>
    )
 
}
