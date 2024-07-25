import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinVault</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.oof}>
        <h1 className={styles.heading}>FinVault</h1>
        <p className={styles.p}>The future of Payments</p>
      </div>
    </>
  );
}
