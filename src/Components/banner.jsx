import "./banner.css";
export default function TheBanner({ backgroundImage }) {
  return (
    <div className="container">
      <img src={backgroundImage} alt="Bannière de Kasa" />
    </div>
  );
}
