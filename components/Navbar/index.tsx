import Link from "next/link";
import style from "./index.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <img className={style.logo} src="./next.svg" alt="next" />
      </Link>
      <Link className={style.btn} href="/add-card">
        add card
      </Link>
    </nav>
  );
};

export default Navbar;
