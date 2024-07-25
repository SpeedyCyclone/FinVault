import styles from "../styles/Purchase.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Products() {
  return (
    <>
      <Head>
        <title>Purchase</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.heading}>Our Product</h1>
      <div className={styles.megabyte}>
        <div>
          <Image
            src="/product.png"
            alt=""
            width={485}
            height={515}
            className={styles.image}
          ></Image>
        </div>
        <div>
          <p className={styles.text}>
            FinVault is creating a new way to make payments that is both easy
            and very secure. We have designed a smart ring that connects to a
            mobile app. Users can make payments by just tapping the ring on a
            cash machine and scanning their fingerprint. This ensures the
            process is safe and fast. The ring also has a feature to help find
            it if it gets lost and can be blocked if needed. Our goal is to
            solve common financial problems like security issues and slow
            checkouts, offering customers a better and safe send message.
            Checking who can access file
          </p>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.buy}>Buy Now</button>
      </div>
    </>
  );
}
