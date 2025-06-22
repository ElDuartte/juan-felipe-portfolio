import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">{t("nav.title")}</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/">{t("nav.home")}</NavLink>
        </li>
        <li>
          <NavLink to="/posts">{t("nav.posts")}</NavLink>
        </li>
        <li>
          <NavLink to="/cv">{t("nav.cv")}</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">{t("nav.portfolio")}</NavLink>
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
