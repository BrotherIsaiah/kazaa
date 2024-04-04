import TheHeader from "../Components/header";
import TheBanner from "../Components/banner";
import TheFooter from "../Components/footer";
import TheCards from "../Components/Cards";
import mainBackground from "../Components/Assets/background.jpg";
export default function Root() {
  return (
    <>
      <TheHeader />

      <TheBanner
        backgroundImage={mainBackground}
        title="Chez vous, partout et ailleurs"
      />

      <TheCards />

      <TheFooter />
    </>
  );
}
