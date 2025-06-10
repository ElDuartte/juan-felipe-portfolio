import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n, t } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">{t("home")}</NavLink>
        </li>
        <li>
          <NavLink to="/posts">{t("posts")}</NavLink>
        </li>
        <li>
          <NavLink to="/cv">{t("cv")}</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">{t("portfolio")}</NavLink>
        </li>

      </ul>
      <div className="lang-toggle">
        <button onClick={() => changeLang("en")}>🇬🇧</button>
        <button onClick={() => changeLang("es")}>🇪🇸</button>
      </div>
    </nav>
  );
};

export default Navbar;
