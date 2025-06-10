import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar />
      <div>
        <h1>{t("welcome")}</h1>
        <p>{t("welcome.description")}</p>
      </div>
    </>
  );
}

export default App;
