
import locationList from "../routes/logements.json"


export default function TheSlides() {

    const coverPage = locationList[0].cover;
    console.log(coverPage);
    return(
        <>
        <h1>Test</h1>
        <img src={coverPage} alt="" />
        
      </>
    )
 
}
