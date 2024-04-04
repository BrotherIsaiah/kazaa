import logoWhite from "./Assets/logoW.svg";
import "./footer.css";
export default function TheFooter() {
  return (
    <>
      <footer>
        <img src={logoWhite} alt="Logo Kasa blanc" />
        <p>2020 Tous droit réservé</p>
      </footer>
    </>
  );
}
