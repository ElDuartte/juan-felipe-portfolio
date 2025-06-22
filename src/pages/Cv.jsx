import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

function Cv() {
  const { t, i18n } = useTranslation();
  const cvArray = t("cv", { returnObjects: true });

  return (
    <>
      <Navbar />
      <div class="container">
        <h1>CV</h1>
        <section class="experience-list">
          {cvArray.map(item => (
          <div class="container-experience">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Cv;
