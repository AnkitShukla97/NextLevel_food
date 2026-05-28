import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <MainHeaderBackground />
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="NextLevel Food Logo" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
