import "./banner.css";
export default function TheBanner({ backgroundImage, title }) {
  return (
    <>
      
      <div className="container">
      <img src={backgroundImage} alt="Bannière de Kasa" />
      <h1>{title}</h1>
      </div>
    </>
  );
}
