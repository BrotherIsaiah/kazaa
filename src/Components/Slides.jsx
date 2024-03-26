
import locationList from "../routes/logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export default function TheSlides() {

    const coverPage = locationList[0].cover;
    console.log(coverPage);
    return(
        <>
        <div className="slideShow">
        <img src={coverPage} alt="" />
        <FontAwesomeIcon icon={faAngleLeft} />
        <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </>
    )
 
}