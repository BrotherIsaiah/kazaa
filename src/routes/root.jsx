import { Outlet } from "react-router-dom";
import TheHeader from "../Components/header";
import TheBanner from "../Components/banner";
import TheFooter from "../Components/footer";
import mainBackground from "../Components/Assets/background.jpg"
export default function Root() {
  return (
    <>
    
    <TheHeader />
    
      
      <div className="container">
        <TheBanner backgroundImage={mainBackground} />
        <h1>Chez vous partout et ailleurs</h1>
      </div>
      
        <Outlet />
      
      <footer>
      <TheFooter />
      </footer>
    </>
  );
}
