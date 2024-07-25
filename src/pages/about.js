import styles from "../styles/About.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.heading}>About Us</h1>
      <div className={styles.mega}>
        <div className={styles.text}>
          <p className={styles.hmm}>
            FinVault is creating a new way to make payments that is both easy
            and very secure. We have designed a smart ring that connects to a
            mobile app. Users can make payments by just tapping the ring on a
            cash machine and scanning their fingerprint. This ensures the
            process is safe and fast. The ring also has a feature to help find
            it if it gets lost and can be blocked if needed. Our goal is to
            solve common financial problems like security issues and slow
            checkouts, offering customers a better and safe.
          </p>
        </div>
        <div className={styles.final}>
          <Image
            className={styles.image}
            alt=""
            src="/image.png"
            width={705}
            height={355}
          ></Image>
        </div>
      </div>

      <h1 className={styles.team}>Our Team</h1>

      <div className={styles.flex2}>
        <div className={styles.card}>
          <Image
            src="/dummy.png"
            alt=""
            className={styles.img}
            height={100}
            width={100}
            priority="true"
          />
          <h1 className={styles.name}>Moira Arora</h1>
          <p className={styles.role}>Founder</p>
        </div>
        <div className={styles.card}>
          <Image
            src="/dummy.png"
            alt=""
            className={styles.img}
            height={100}
            width={100}
            priority="true"
          />
          <h1 className={styles.name}>Jane Doe</h1>
          <p className={styles.role}>CEO</p>
        </div>
      </div>
    </>
  );
}
