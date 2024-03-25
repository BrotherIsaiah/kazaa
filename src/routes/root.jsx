import { Outlet } from "react-router-dom";
import TheHeader from "../Components/header";
import TheBanner from "../Components/banner";
import TheFooter from "../Components/footer";
export default function Root() {
  return (
    <>
    
    <TheHeader />
    
      
      <div className="container">
        <TheBanner />
      </div>
      
        <Outlet />
      
      <footer>
      <TheFooter />
      </footer>
    </>
  );
}
