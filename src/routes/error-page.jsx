import { useRouteError } from "react-router-dom";
import TheHeader from "../Components/header";
import TheFooter from "../Components/footer";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <TheHeader />

      <div id="error-page">
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas</p>
        <Link to="/">Revenir à la page d'accueil</Link>
      </div>
      
      
        <TheFooter />
      
    </>
  );
}
