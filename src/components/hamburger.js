import React, { useState } from "react";
import styles from "../styles/Hamburger.module.css";
import Link from "next/link";

const Hamburger = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        className={styles.hamburger}
        aria-label="hamburger"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setToggle(!toggle)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </button>

      {toggle && (
        <center>
          <div className="navbar mobile-nav">
            <div className="mobile-items">
              <div className="links link-items">
                <Link
                  href="/"
                  className="link link-item"
                  onClick={() => setToggle(!toggle)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="link link-item"
                  onClick={() => setToggle(!toggle)}
                >
                  About
                </Link>
                <Link
                  href="/products"
                  className="link link-item"
                  onClick={() => setToggle(!toggle)}
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  className="link link-item"
                  onClick={() => setToggle(!toggle)}
                >
                  Contact
                </Link>
                <Link
                  href="/api/auth/signin"
                  className="link link-item"
                  onClick={() => setToggle(!toggle)}
                >
                  Epsilon
                </Link>
              </div>
            </div>
          </div>
        </center>
      )}
    </>
  );
};
export default Hamburger;
