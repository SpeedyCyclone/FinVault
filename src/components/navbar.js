import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Hamburger from "../components/hamburger";

export default function Navbar() {
  return (
    <>
      <div className={styles.flex}>
        <Link href="/">
          <h1 className={styles.heading}>NutriBoom</h1>
        </Link>
        <nav className={styles.navbar}>
          <ul>
            <Link href="/" className="link">
              <li>Home</li>
            </Link>
            <Link href="/about" className="link">
              <li>About</li>
            </Link>
            <Link href="/products" className="link">
              <li>Products</li>
            </Link>
            <Link href="/contact" className="link">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <Link href="/login" className={styles.special}>
          <li>Epsilon</li>
        </Link>
        <Hamburger />
      </div>
    </>
  );
}
