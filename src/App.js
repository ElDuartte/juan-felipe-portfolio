import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Navbar />
      <div class="container">
        <h1>{t("welcome")}</h1>
        <p>{t("welcome.description")}</p>
      </div>
    </div>
  );
}

export default App;
