import TheHeader from "../Components/header";
import TheCollapse from "../Components/Collapse";
import TheFooter from "../Components/footer";
import TheBanner from "../Components/banner";
import about_background from "../Components/Assets/about_background.jpg";
export default function AboutPage() {
  return (
    <>
      <TheHeader />
      <div className="container">
        <TheBanner backgroundImage={about_background} />
      </div>

      <div className="articles-container">
        <TheCollapse
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <TheCollapse
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        <TheCollapse
          title="Service"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        <TheCollapse
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>

      <footer>
        <TheFooter />
      </footer>
    </>
  );
}
