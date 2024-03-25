import TheHeader from "../Components/header";
import TheFooter from "../Components/footer";
import "./logements.json"
export default function LocationPage() {
  return (
    <>
      <TheHeader />
      
        <main>
<div id="slides">
    <img src={pictures[0]} alt="" />
<FontAwesomeIcon icon="fa-solid fa-angle-right" />
</div>
        </main>
      
      <footer>
        <TheFooter />
      </footer>
    </>
  );
}
