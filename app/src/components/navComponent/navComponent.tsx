import styles from "./navComponent.module.css";

function NavComponent() {
  function latestClicked() {
    console.log(`We are being clicked`);
  }
  return (
    <header className={styles.navContainer}>
      <h1>BlogTastic</h1>
      <ul className={styles.navSystem}>
        <li>
          <button onClick={latestClicked}>Latest</button>
        </li>
        <li>
          <div className={styles.dropdown}>
            <button>Categories</button>
            <div className={styles.dropdownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </li>
        <li>
          <button>Other</button>
        </li>
      </ul>
    </header>
  );
}

export default NavComponent;
