import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "../components/hamburger";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router'


export default function Navbar() {
  const router = useRouter()
  const { data: session, status } = useSession();

  return (
    <>
      <div className={styles.flex}>
        <Link href="/">
          <Image
            className={styles.heading}
            alt=""
            src="/logo.svg"
            priority="true"
            height={50}
            width={50}
          />
        </Link>
        <nav className={styles.navbar}>
          <ul>
            <Link href="/" className="link">
              <li>Home</li>
            </Link>
            <Link href="/about" className="link" >
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
        {status === "authenticated" ? (
          <Link href="/profile" className={styles.special}>
            <li>Epsilon</li>
          </Link>
        ) : (
          <Link
            href="/api/auth/signin"
            className={styles.special}
            onClick={() => signIn(undefined, { callbackUrl: "/profile" })}
          >
            <li>Epsilon</li>
          </Link>
        )}
        <Hamburger />
      </div>
    </>
  );
}
