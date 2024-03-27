import './Slides.css'
import locationList from "../routes/logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export default function TheSlides() {

    
    return(
        <>
        <div className="slideShow">
          {locationList.map((location) => (
            <>
            <img src={location[0].id} alt="" />
            <FontAwesomeIcon icon={faAngleLeft} className='arrow-left' />
            <FontAwesomeIcon icon={faAngleRight} className='arrow-right' />
            </>

          ))}
        
        </div>
        <h1>
        
        </h1>
      </>
    )
 
}
