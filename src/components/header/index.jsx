import { Link } from "react-router-dom";
import styles from "../header/style.module.css";

const Header = () => {
return (
<div className={styles.container}>
<nav className={styles.navbar}>
<Link to="/">Домашняя страница</Link>
<Link to="/chat">Чат</Link>
<Link to="/test">Подгрузка данных</Link>
<Link to="/smart">Умный дом</Link>
</nav>
</div>
);
};

export default Header;
