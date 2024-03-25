import "../routes/logements.json";

const firstPicture = pictures[0];
export default function TheSlides() {
  <>
    <img src={firstPicture} alt="" />
    <FontAwesomeIcon icon="fa-regular fa-angle-right" />
  </>;
}
