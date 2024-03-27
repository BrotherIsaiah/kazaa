import TheHeader from "../Components/header";
import TheFooter from "../Components/footer";
import locationList from '../routes/logements.json'
import { useParams } from "react-router-dom";
//import TheSlides from "../Components/Slides";
export default function LocationPage() {
  const { id } = useParams();

  const location = locationList.find((loc) => loc.id === id);
  return (
    <>
      <TheHeader />
      
        <main>
        <h1>{location.title}</h1>
        </main>
      
      <footer>
        <TheFooter />
      </footer>
    </>
  );
}
