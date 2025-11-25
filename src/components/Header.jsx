import style from "./Header.module.scss";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <img src={logo} />
          <h1 className={style.logoJobored}>Jobored</h1>
        </div>
        <nav className={style.nav}>
          <h3>Поиск Вакансий</h3>
          <h3>Избранное</h3>
        </nav>
      </header>
    </>
  );
}
export default Header;
