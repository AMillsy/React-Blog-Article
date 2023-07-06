import { Link } from "react-router-dom";
import styles from "./navComponent.module.css";

function NavComponent() {
  function latestClicked() {
    console.log(`We are being clicked`);
  }
  return (
    <nav>
      <header className={styles.navContainer}>
        <h1>BlogTastic</h1>
        <ul className={styles.navSystem}>
          <li>
            <Link to="/">Latest</Link>
          </li>
          <li>
            <div className={styles.dropdown}>
              <Link to="/blogs">Categories</Link>
              <div className={styles.dropdownContent}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <Link to="/contact">Other</Link>
          </li>
        </ul>
      </header>
    </nav>
  );
}

export default NavComponent;
