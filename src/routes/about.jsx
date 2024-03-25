
import TheHeader from "../Components/header";
import TheCollapse from "../Components/Collapse";
import TheFooter from "../Components/footer";
export default function AboutPage() {
  return (
    <>
      <TheHeader />

      <div className="container">
        <TheCollapse />
      </div>

      <footer>
        <TheFooter />
      </footer>
    </>
  );
}
